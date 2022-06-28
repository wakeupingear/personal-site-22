import type { NextPage } from 'next';
import Head from 'next/head';
import { FULL_NAME } from '../utils/constants';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>{FULL_NAME}</title>
                <meta name="description" content="Personal site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
};

export default Home;
