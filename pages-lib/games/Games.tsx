import Link from 'next/link';
import Head from 'next/head';
import { INITIALS } from '../../utils/constants';

interface Game {
    name: string;
    bold?: boolean;
    link?: string;
    className?: string;
}

const GAMES: Game[] = [
    { name: 'Outset', bold: true },
    { name: 'Companion' },
    { name: 'Inc Life' },
    { name: 'Damn It!' },
    { name: 'The Meatball in the Machine' },
    { name: 'Writus' },
    { name: 'Tiny Headed Game', bold: true },
];

const GAMES_RENDERED = GAMES.map(
    ({ name, bold = false, className, link = name.toLowerCase() }, index) => {
        const classes = `${className ? className : ''} ${
            bold ? '!font-bold' : ''
        }`;

        if (link.charAt(0) === '/')
            return (
                <Link href={link} scroll={false}>
                    <a className={classes} key={name}>
                        {name}
                    </a>
                </Link>
            );

        return (
            <a className={classes} key={name} href={link}>
                {name}
            </a>
        );
    }
);

export default function Games() {
    return (
        <>
            <Head>
                <title>{INITIALS} - Games</title>
            </Head>
            <h1>I've made some games</h1>
            <p>
                Mostly in <u>Gamemaker</u> and <u>Unity</u>
            </p>
            <p className="!mt-16">Here's the full list</p>
            <div className="mt-16 flex flex-wrap max-w-[min(calc(100%-4rem),1000px)] gap-5 justify-center items-center">
                {GAMES_RENDERED}
            </div>
            <p className="!mt-16">I also co-founded</p>
            <h1>Skronkle Studios</h1>
            <p>A gamedev studio based in LA</p>
        </>
    );
}
