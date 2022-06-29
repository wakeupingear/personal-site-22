import React, { createContext, useContext, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { IS_SERVER } from '../utils/constants';
import {
    internal_apiGet,
    internal_apiPost,
    APIResponse,
} from '../utils/network';

const setTheme = (isDark?: boolean) => {
    if (IS_SERVER) return;

    if (isDark !== undefined) {
        localStorage.theme = isDark ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', isDark);
    } else if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
    } else {
        localStorage.theme = 'light';
        document.documentElement.classList.remove('dark');
    }
};
setTheme();

export const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProps {
    apiGet: (url: string) => Promise<APIResponse>;
    apiPost: (url: string, data: any) => Promise<APIResponse>;
    intro: boolean;
    isDark: boolean;
    loggedIn: boolean;
    screen: number;
    screenAnimating: boolean;
    switchScreen: (screen: number) => void;
    toggleTheme: (isDark?: boolean) => void;
}

export enum Screens {
    Home,
    Terminal,
}

interface Props {
    children: React.ReactNode;
}

export default function Auth(props: Props) {
    const [token, setToken] = useState<string>(
        (!IS_SERVER && localStorage.getItem('chadminSession')) || ''
    );

    const [screen, setScreen] = useState<number>(Screens.Home);
    const [intro, setIntro] = useState(screen === Screens.Home);
    const switchScreen = (screen: number) => {
        setScreen(screen);
        setScreenAnimating(true);
    };
    const [screenAnimating, setScreenAnimating] = useState(false);

    const [isDark, setIsDark] = useState(false);
    const toggleTheme = (isDark?: boolean) => {
        const newIsDark = isDark !== undefined ? isDark : !isDark;
        setIsDark(newIsDark);
        setTheme(newIsDark);
    };

    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const logIn = async () => {
        if (loggedIn) return;
        const response = await apiGet('/api/auth/login');
        if (response.status === 200) {
            setLoggedIn(true);
        }
    };

    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        if (!IS_SERVER) {
            let initialScreen = Screens.Home;
            if (localStorage.screen)
                initialScreen = Number(localStorage.screen);
            else if (!isMobile) initialScreen = Screens.Terminal;
            setScreen(initialScreen);

            toggleTheme(localStorage.theme === 'dark');
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        if (token) logIn();
    }, [token]);

    const apiGet = async (path: string, options = {}) => {
        const response = await internal_apiGet(path, token, options);
        return response;
    };

    const apiPost = async (path: string, data: any, options = {}) => {
        const response = await internal_apiPost(path, data, token, options);
        return response;
    };

    return (
        <AuthContext.Provider
            value={{
                apiGet,
                apiPost,
                intro,
                isDark,
                loggedIn,
                screen,
                screenAnimating,
                switchScreen,
                toggleTheme,
            }}
        >
            <div className={`shade${!loading ? ' shadeHidden' : ''}`} />
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};
