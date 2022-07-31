import { INITIALS } from '@utils/pages/constants';
import Head from 'next/head';
import YouTubePlayer from '@components/shared/YouTubePlayer';
import pageStyles from '@page-component/pages.module.css';

export default function Film() {
    return (
        <>
            <Head>
                <title>{INITIALS} - Film</title>
            </Head>
            <h1>I've filmed some vids</h1>
            <span>
                Mostly for
                <a
                    href="https://www.youtube.com/channel/UCImSybcXB8pCtulA-_T0WCw"
                    target="_blank"
                >
                    my YouTube
                </a>
            </span>
            <YouTubePlayer
                videoId="kjnvO49QhC0"
                location="homeContentSection"
                className={pageStyles.newLine}
            >
                <p>
                    Video editing in <u>Kdenlive</u>
                </p>
            </YouTubePlayer>
        </>
    );
}
