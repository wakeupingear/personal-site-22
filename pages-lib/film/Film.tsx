import YouTubePlayer from '@components/shared/YouTubePlayer';
import pageStyles from '@page-component/pages.module.css';
import PageTitle from '@components/PageTitle';

export default function Film() {
    return (
        <>
            <PageTitle title="Film" />
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
            <div className={pageStyles.newLine}>
                <YouTubePlayer
                    videoId="kjnvO49QhC0"
                    location="homeContentSection"
                >
                    <p>
                        Video editing in <u>Kdenlive</u>
                    </p>
                </YouTubePlayer>
            </div>
        </>
    );
}
