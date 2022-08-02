import Gallery from '@components/shared/gallery/Gallery';
import SpecialButton from '@components/shared/specialButton/SpecialButton';
import pageStyles from '@page-component/pages.module.css';

const IMAGES = [
    '/thk/disco.png',
    '/thk/pip.png',
    '/thk/gondola.png',
    '/thk/intro.png',
];
const CHARACTERS = [
    '/thk/animals.png',
    '/thk/custom.png',
    '/thk/gems.png',
    '/thk/greenhouse.png',
];

export default function THK() {
    return (
        <>
            <h1>Tiny Headed Game</h1>
            <section>
                <div>
                    <Gallery images={IMAGES} />
                </div>
                <div>
                    <p>
                        In 2020 I built a <u>web MMO</u> for{' '}
                        <a
                            href="https://tinyheadedkingdom.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Tiny Headed Kingdom
                        </a>
                    </p>
                    <p className={pageStyles.newLine}>
                        Players picked their favorite THK animal and explored a
                        top-down 2D world, together
                    </p>
                    <p>
                        They could also talk to the animals and solve riddles
                        and puzzles across the land
                    </p>
                </div>
            </section>
            <section className={pageStyles.flipColumn}>
                <div>
                    <p>I build the entire game in about 6 months</p>
                    <p>All art, code, and design by me</p>
                    <p className={pageStyles.newLine}>
                        Programmed in Gamemaker
                    </p>
                    <p>Custom multiplayer in Node.js</p>
                    <p>Deployed to over 800 player with AWS</p>
                </div>
                <div>
                    <Gallery className="max-w-[30rem]" images={CHARACTERS} />
                </div>
            </section>
            <p>The game brought players around the world together for a year</p>
            <p>It remains playable today in offline mode</p>
            <SpecialButton url="http://thkgame.com">Play Now!</SpecialButton>
        </>
    );
}
