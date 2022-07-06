import type { AppProps } from 'next/app';
import Auth from '../src/Auth';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Auth {...pageProps}>
            <Component />
        </Auth>
    );
}

export default MyApp;
