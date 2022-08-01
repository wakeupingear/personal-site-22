import LinkList, { Game } from '@shared/linkList/LinkList';
import pageStyles from '@page-component/pages.module.css';
import PageTitle from '@components/PageTitle';

const GAMES: Game[] = [
    { name: 'Outset', bold: true },
    { name: 'Companion', link: 'https://willf668.itch.io/com' },
    { name: 'Inc Life' },
    {
        name: 'Damn It!',
        link: 'https://globalgamejam.org/2022/games/damn-it-5',
    },
    {
        name: 'The Meatball in the Machine',
        link: 'https://williammccullen.itch.io/the-meatball-in-the-machine',
    },
    { name: 'Do or Die!', link: 'https://fajpaj.itch.io/do-or-die' },
    { name: 'Writus' },
    { name: 'Tiny Headed Game', bold: true },
];

export default function Games() {
    return (
        <>
            <PageTitle title="Games" />
            <h1>I've designed some games</h1>
            <p>
                Mostly in <u>Gamemaker</u> and <u>Unity</u>
            </p>
            <p className={pageStyles.newLine}>Here's the full list</p>
            <LinkList content={GAMES} />
            <p className={pageStyles.newLine}>I also co-founded</p>
            <h1 className="!mt-0">Skronkle Studios</h1>
            <p>A gamedev studio based in LA</p>
        </>
    );
}
