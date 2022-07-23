import LinkList, { Game } from '@shared/linkList/LinkList';
import { uppercaseFirstLetter } from '@utils/helpers';
import Head from 'next/head';
import { FULL_NAME, INITIALS } from '../../src/utils/pages/constants';

const siteName = uppercaseFirstLetter(
    `${FULL_NAME.replaceAll(' ', '').toLowerCase()}.com`
);

const SITES: Game[] = [
    { name: 'Bloomberg Businessweek', bold: true },
    { name: 'Dapuma' },
    { name: 'Are NFTs Good' },
    { name: siteName, bold: true, link: siteName },
];

export default function Web() {
    return (
        <>
            <Head>
                <title>{INITIALS} - Web</title>
            </Head>
            <h1>I've made some websites</h1>
            <p>
                Mostly in <u>React</u> and <u>NextJS</u>
            </p>
            <p>
                Oh, and some <u>React Native</u>
            </p>
            <p>
                Plus <u>Redux</u>, <u>TailwindCSS</u> and <u>Framer Motion</u>
            </p>
            <p>
                Backed by <u>NodeJS</u>, <u>Firebase</u>, <u>AWS</u>, and/or{' '}
                <u>Heroku</u>
            </p>
            <p>
                Right, and <u>GraphQL</u> where needed
            </p>
            <p className="!mt-16">Here's some past work</p>
            <LinkList content={SITES} />
            <p className="!mt-16">While we're at it, let's talk about</p>
            <h1 className="!mt-0 capitalize">{siteName}</h1>
            <p>
                <u>NextJS</u>, <u>TailwindCSS</u>, and <u>Typescript</u>
            </p>
            <p>
                CI/CD pipeline with <u>Github Actions</u>
            </p>
            <p>
                Self-hosted on a <u>Raspberry Pi</u>
            </p>
        </>
    );
}
