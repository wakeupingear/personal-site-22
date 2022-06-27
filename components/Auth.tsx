import React, { createContext, useContext, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import {
    internal_apiGet,
    internal_apiPost,
    APIResponse,
} from '../utils/network';

export const AuthContext = createContext({} as AuthContextProps);

interface AuthContextProps {
    apiGet: (url: string) => Promise<APIResponse>;
    apiPost: (url: string, data: any) => Promise<APIResponse>;
    loggedIn: boolean;
    screen: number;
    setScreen: (screen: number) => void;
}

interface Props {
    children: React.ReactNode;
}

export default function Auth(props: Props) {
    const [token, setToken] = React.useState<string>(
        (typeof window !== 'undefined' &&
            localStorage.getItem('chadminSession')) ||
            ''
    );
    const [screen, setScreen] = React.useState<number>(
        (typeof window !== 'undefined' &&
            Number(localStorage.getItem('screen'))) ||
            (isMobile ? 0 : 1)
    );

    const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
    const logIn = async () => {
        if (loggedIn) return;
        const response = await apiGet('/api/auth/login');
        console.log(response);
        if (response.status === 200) {
            setLoggedIn(true);
        }
    };

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
                loggedIn,
                screen,
                setScreen,
            }}
        >
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
