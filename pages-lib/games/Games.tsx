import Link from 'next/link';
import Head from 'next/head';
import { INITIALS } from '../../utils/constants';
import LinkList, { Game } from '../../src/shared/LinkList';

const GAMES: Game[] = [
    { name: 'Outset', bold: true },
    { name: 'Companion' },
    { name: 'Inc Life' },
    { name: 'Damn It!' },
    { name: 'The Meatball in the Machine' },
    { name: 'Writus' },
    { name: 'Tiny Headed Game', bold: true },
];

export default function Games() {
    return (
        <>
            <Head>
                <title>{INITIALS} - Games</title>
            </Head>
            <h1>I've designed some games</h1>
            <p>
                Mostly in <u>Gamemaker</u> and <u>Unity</u>
            </p>
            <p className="!mt-16">Here's the full list</p>
            <LinkList content={GAMES} />
            <p className="!mt-16">I also co-founded</p>
            <h1 className="!mt-0">Skronkle Studios</h1>
            <p>A gamedev studio based in LA</p>
        </>
    );
}
