import { INITIALS } from '@utils/pages/constants';
import Head from 'next/head';
import YouTube from 'react-youtube';

export default function Film() {
    return (
        <>
            <Head>
                <title>{INITIALS} - Film</title>
            </Head>
            <h1>I've filmed some vids</h1>
            <p>
                Mostly for{' '}
                <a
                    href="https://www.youtube.com/channel/UCImSybcXB8pCtulA-_T0WCw"
                    target="_blank"
                >
                    my YouTube
                </a>
            </p>
            <YouTube
                videoId="kjnvO49QhC0"
                className="rounded-2xl overflow-hidden"
            />
            <p>
                Video editing in <u>Kdenlive</u>
            </p>
        </>
    );
}
