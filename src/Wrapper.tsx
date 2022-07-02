import Head from 'next/head';
import React from 'react';
import Home from './homepage/Home';
import { FULL_NAME } from '../utils/constants';
import Cube from './Cube';
import Terminal from './Terminal';

import type { InferGetServerSidePropsType } from 'next';
import { createContext, ReactNode, useContext } from 'react';
import { ContentMap, PageData } from '../utils/types';
import { getServerSideProps } from '../utils/homeServerProps';

interface Props {
    children?: ReactNode;
}

export const PageDataContext = createContext({} as PageDataContextProps);

interface PageDataContextProps {
    PAGE_DATA: PageData;
    CONTENT_MAP: ContentMap;
}

export default function Wrapper({
    children = null,
    PAGE_DATA = null,
    CONTENT_MAP = null,
}: Props & InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <PageDataContext.Provider value={{ PAGE_DATA, CONTENT_MAP }}>
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
