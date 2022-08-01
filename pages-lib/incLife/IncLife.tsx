import PageTitle from '@components/PageTitle';
import Gallery from '@components/shared/gallery/Gallery';
import SpecialButton from '@components/shared/specialButton/SpecialButton';
import pageStyles from '@page-component/pages.module.css';

export default function IncLife() {
    return (
        <>
            <PageTitle title="Inc Life" />
            <h1>Inc Life</h1>
            <p>
                In 2020, Covid-19 forced{' '}
                <a
                    href="https://www.inc.hwcom/"
                    target="_blank"
                    rel="noreferrer"
                >
                    HW Inc
                </a>{' '}
                online
            </p>
            <p className={pageStyles.newLine}>
                The program is an <u>entrepreneurship summer camp</u> for high
                schoolers
            </p>
            <p>Think Shark Tank but with more water balloons and gongs</p>
            <p>
                As one of the leaders at the time, doing all that on Zoom
                sounded miserable
            </p>
            <p className={pageStyles.newLine}>Here's what I came up with:</p>
            <section>
                <Gallery
                    images={[
                        '/incLife/incLifeLobby.png',
                        '/incLife/incLifeCharacterCustomization.png',
                    ]}
                />
                <div>
                    <p>
                        A <u>2D massively-multiplayer game</u> connecting
                        students and their alumni mentors
                    </p>
                    <p>
                        It housed resources and Zoom rooms inside a recreation
                        of the school library
                    </p>
                    <p>Plus a chat, customizable avatars, and emotes</p>
                    <p className={pageStyles.newLine}>
                        Maybe some <u>other things</u>, too...
                    </p>
                </div>
            </section>
            <section>
                <div
                    className={`${pageStyles.smallText} ${pageStyles.textBlock}`}
                >
                    <p>Developed in Gamemaker</p>
                    <p>
                        Deployed to a <u>chunky</u> AWS EC2 instance
                    </p>
                    <p>All art, programming, and design by me</p>
                    <p>
                        The tech support for this took years off my life, but it
                        was very worth it
                    </p>
                </div>
                <Gallery
                    images={['/incLife/incCrowd.png', '/incLife/incPeople.png']}
                />
            </section>
            <p>In the end, this was one of my favorite projects to work on</p>
            <p>Participants had fun</p>
            <p>The team had fun</p>
            <p>
                The <u>camp</u> was brought back to HW Inc
            </p>
            <SpecialButton url="https://gamejolt.com/games/inclife/501764">
                Play Now!
            </SpecialButton>
        </>
    );
}
