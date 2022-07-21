import React, {
    createContext,
    ReactElement,
    useContext,
    useEffect,
    useState,
} from 'react';
import { isMobile } from 'react-device-detect';
import { IS_SERVER } from '../utils/pages/constants';
import {
    internal_apiGet,
    internal_apiPost,
    APIResponse,
} from '@utils/pages/network';
import Wrapper from './Wrapper';

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
    initialLoading: boolean;
    loggedIn: boolean;
    pageHasContent: boolean;
    screen: number;
    screenAnimating: boolean;
    setRenderedChildren: (children: ReactElement | null | undefined) => void;
    switchScreen: (screen: number) => void;
    toggleTheme: (isDark?: boolean) => void;
}

export enum Screens {
    Home,
    Terminal,
}

type Props = {
    PAGE_DATA?: null;
    CONTENT_MAP?: null;
    children: React.ReactNode | null;
};

export default function Auth(props: Props) {
    const [renderedChildren, setRenderedChildren] = useState<
        ReactElement | null | undefined
    >(undefined);
    const pageHasContent = Boolean(renderedChildren);

    const [token, setToken] = useState<string>(
        (!IS_SERVER && localStorage.getItem('chadminSession')) || ''
    );

    const [screen, setScreen] = useState<number>(Screens.Home);
    const [intro, setIntro] = useState<boolean>(true);
    const switchScreen = (screen: number) => {
        setScreen(screen);
        setScreenAnimating(true);
        localStorage.screen = screen;
        setTimeout(() => setScreenAnimating(false), 1200);
    };
    const [screenAnimating, setScreenAnimating] = useState(false);

    const [isDark, setIsDark] = useState(false);
    const toggleTheme = (dark?: boolean) => {
        const newIsDark = dark !== undefined ? dark : !isDark;
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

    const [initialLoading, setInitialLoading] = useState<boolean>(true);
    useEffect(() => {
        if (!IS_SERVER) {
            let initialScreen = Screens.Home;
            if (localStorage.screen)
                initialScreen = Number(localStorage.screen);
            else if (!isMobile) initialScreen = Screens.Terminal;
            setScreen(initialScreen);

            toggleTheme(localStorage.theme === 'dark');
        }
        setInitialLoading(false);
        setIntro(!Boolean(localStorage.finishedIntro));
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
                initialLoading,
                loggedIn,
                pageHasContent,
                screen,
                screenAnimating,
                setRenderedChildren,
                switchScreen,
                toggleTheme,
            }}
        >
            <div className={`shade${!initialLoading ? ' shadeHidden' : ''}`} />
            {renderedChildren !== undefined ? (
                <>
                    {props.children}
                    <Wrapper>{renderedChildren}</Wrapper>
                </>
            ) : (
                props.children
            )}
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
