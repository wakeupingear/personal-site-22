import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Auth from '../components/Auth';
import Cube from '../components/Cube';
import Terminal from '../components/Terminal';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Auth>
            <Cube>
                <div className="bg-green-400">
                    <Component {...pageProps} />
                </div>
                <Terminal />
            </Cube>
        </Auth>
    );
}

export default MyApp;
