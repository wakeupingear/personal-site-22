import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
import pageStyles from '@page-component/pages.module.css';
import clsx from 'clsx';
import YouTubePlayer from '@components/shared/YouTubePlayer';

const IMAGES = ['/outset/outsetSplash.png'].map((src) => ({
    original: src,
    thumbnail: src,
}));

export default function Outset() {
    return (
        <div className="pixel-perfect">
            <div className="flex h-[12rem] lg:h-[16rem] w-full relative">
                <Image
                    src="/outset/title.png"
                    layout="fill"
                    objectFit="contain"
                    sizes="40vw"
                    alt="Outset"
                    className="drop-shadow-xl"
                />
            </div>
            <section>
                <div>
                    <ImageGallery items={IMAGES} showThumbnails={false} />
                </div>
                <div className={pageStyles.textBlock}>
                    <p>An incomplete 2D platformer-RPG</p>
                    <p>
                        With a <u>Grappling Hook</u>
                    </p>
                    <p>Nonlinear exploration</p>
                    <p>And a story about technology and independence</p>
                </div>
            </section>
            <section>
                <div
                    className={clsx(pageStyles.textBlock, pageStyles.smallText)}
                >
                    <p>
                        I started working on Outset <u>freshman year</u> of high
                        school. I had never made a game before outside of demos
                        and Scratch flash games.
                    </p>
                    <p>
                        I did almost everything. Art, programming, animation,
                        writing, design. Hard stuff; I had to learn a lot,
                        eventually scrapping years of content to maintain some
                        sense of consistency.
                    </p>
                    <span>
                        I also had some help from{' '}
                        <a className="!font-bold !my-0">Darren Shekailo</a>
                    </span>
                    <p>
                        Darren reached out to me in <u>2019</u>. Over the next
                        several years, he composed music and sounds for Outset.
                        He was a better collaborator than I deserved;{' '}
                        <u>please check him out.</u>
                    </p>
                </div>
                <div>
                    <ImageGallery items={IMAGES} showThumbnails={false} />
                </div>
            </section>
            <p>
                I tried to make my 'dream game'. All things considered, I got
                suprisingly far.
            </p>
            <section className="!flex-col-reverse mob:!mt-0 lg:!flex-row">
                <div className={pageStyles.smallText}>
                    <YouTubePlayer
                        videoId="gfKm_Wfhamk"
                        location="homeContentSection"
                    >
                        <p>The original trailer - 2020</p>
                        <span>
                            Music by{' '}
                            <a
                                href="https://www.youtube.com/c/NoteBlock"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Noteblock
                            </a>
                        </span>
                    </YouTubePlayer>
                </div>
                <div
                    className={clsx(pageStyles.textBlock, pageStyles.smallText)}
                >
                    <p>
                        In <u>April 2022</u>, I decided to stop work on Outset.
                        Almost <u>5 years</u> after I started.
                    </p>
                    <p>
                        I had changed so much in those 5 years. I wanted to tell
                        different stories, and after years of rehashing the same
                        ideas, I found myself unable to come up with new content
                        for the game.
                    </p>
                    <p>
                        At a certain point, I had to acknowledge that I was{' '}
                        <u>artistically unable</u> to finish Outset.
                    </p>
                </div>
            </section>
            <p>
                I do regret not being able to show the world how Outset was
                supposed to end.
            </p>
            <p>
                I had a very specific <u>ending</u> in mind.
            </p>
            <p className={pageStyles.newLine}>
                Luckily, I found a more direct way of telling <u>that story.</u>
            </p>
        </div>
    );
}
