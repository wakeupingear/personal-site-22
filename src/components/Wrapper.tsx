import Head from 'next/head';
import React from 'react';
import Home from './homepage/Home';
import { FULL_NAME } from '../utils/pages/constants';
import Cube from './Cube';
import Terminal from './Terminal';

import { createContext, ReactNode, useContext } from 'react';
import { PageData } from '@utils/types';
import { PAGE_DATA } from '@utils/pages/pageData';

interface Props {
    children?: ReactNode;
}

export const PageDataContext = createContext({} as PageDataContextProps);

interface PageDataContextProps {
    PAGE_DATA?: PageData;
}

export default function Wrapper({ children = null }: Props) {
    return (
        <PageDataContext.Provider value={{ PAGE_DATA }}>
            <Head>
                <title>{FULL_NAME}</title>
                <meta name="description" content="Personal site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Cube>
                <Home>{children}</Home>
                <Terminal />
            </Cube>
        </PageDataContext.Provider>
    );
}

export const usePageData = () => {
    const context = useContext(PageDataContext);
    if (context === undefined) {
        throw new Error(
            'usePageData must be used within a PageDataContextProvider'
        );
    }
    return context;
};
