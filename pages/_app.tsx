import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Auth from '../src/Auth';
import Cube from '../src/Cube';
import Terminal from '../src/Terminal';
import Head from 'next/head';
import { FULL_NAME } from '../utils/constants';
import Home from '../src/homepage/Home';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps}>
            <Auth>
                <Head>
                    <title>{FULL_NAME}</title>
                    <meta name="description" content="Personal site" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Cube>
                    <Home />
                    <Terminal />
                </Cube>
            </Auth>
        </Component>
    );
}

export default MyApp;
