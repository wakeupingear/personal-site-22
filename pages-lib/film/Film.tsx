import YouTube from 'react-youtube';

export default function Film() {
    return (
        <>
            <h1>I've made some vids</h1>
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
