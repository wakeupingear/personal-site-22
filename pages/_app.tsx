import type { AppProps } from 'next/app';
import Auth from '@components/Auth';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ParallaxProvider>
            <Auth {...pageProps}>
                <Component />
            </Auth>
        </ParallaxProvider>
    );
}

export default MyApp;
