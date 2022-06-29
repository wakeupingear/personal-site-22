import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Auth from '../components/Auth';
import Cube from '../components/Cube';
import Terminal from '../components/Terminal';
import Head from 'next/head';
import { FULL_NAME } from '../utils/constants';
import Home from '../components/Home';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Auth>
            <Head>
                <title>{FULL_NAME}</title>
                <meta name="description" content="Personal site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Cube>
                <Home>
                    <Component {...pageProps} />
                </Home>
                <Terminal />
            </Cube>
        </Auth>
    );
}

export default MyApp;
