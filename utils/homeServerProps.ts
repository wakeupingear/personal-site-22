import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { internal_apiGet } from './network';

export type HomepageProps = InferGetServerSidePropsType<
    typeof getServerSideProps
>;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const response = await internal_apiGet('/api/pageData');
    return {
        props: {
            PAGE_DATA: response.data.pageData || null,
            CONTENT_MAP: response.data.componentMap || null,
        },
    };
};
