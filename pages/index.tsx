import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { createContext, ReactNode, useContext } from 'react';
import { internal_apiGet } from '../utils/network';
import { PageData } from '../utils/types';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const response = await internal_apiGet('/api/pageData');
    return {
        props: {
            pageData: response.status === 200 ? response.data : null,
        },
    };
};

interface Props {
    children: ReactNode;
}

export const PageDataContext = createContext({} as PageDataContextProps);

interface PageDataContextProps {
    pageData: PageData;
}

export default function Home({
    children,
    pageData,
}: Props & InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <PageDataContext.Provider value={{ pageData }}>
            {children}
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
