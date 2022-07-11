import LinkList, { Game } from '../../src/shared/LinkList';
import { FULL_NAME } from '../../utils/constants';

const siteName = `${FULL_NAME.replaceAll(' ', '').toLowerCase()}.com`;

const SITES: Game[] = [
    { name: 'Bloomberg Businessweek', bold: true },
    { name: 'Dapuma' },
    { name: 'Are NFTs Good' },
    { name: siteName, bold: true, link: siteName },
];

export default function Web() {
    return (
        <>
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
        </>
    );
}
