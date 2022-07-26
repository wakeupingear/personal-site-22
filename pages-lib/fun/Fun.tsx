import Footer from '@components/homepage/Footer';
import HomeBG from '@components/shared/backgrounds/HomeBG';
import HeaderText from '@components/shared/headerText/HeaderText';
import ThemeToggle from '@components/shared/themeToggle/ThemeToggle';
import {
    AutoAwesome,
    DirectionsBike,
    Hiking,
    LocalPizza,
} from '@mui/icons-material';
import pageStyles from '@page-component/pages.module.css';
import homeStyles from '@components/homepage/homePreviews.module.css';
import { INITIALS } from '@utils/pages/constants';
import Head from 'next/head';
import { ReactNode, useMemo } from 'react';
import { FAVORITES } from './favorites';
import { Masonry } from '@mui/lab';
import { useWindowSize } from 'src/hooks/useWindowSize';

interface FactoidProps {
    content: string | ReactNode;
    key: string;
    contentClassName?: string;
    eyebrow?: string;
    eyebrowClassName?: string;
}

function Factoid({
    content,
    contentClassName = '',
    eyebrow,
    eyebrowClassName = '',
}: FactoidProps) {
    return (
        <div className="m-4 text-white font-bold">
            {eyebrow && (
                <div
                    className={`text-orange-200 sm:text-3xl ${eyebrowClassName}`}
                >
                    {eyebrow}
                </div>
            )}
            <div
                className={`text-6xl child:text-6xl sm:text-[9rem] sm:child:text-[9rem] drop-shadow-md ${contentClassName}`}
            >
                {content}
            </div>
        </div>
    );
}

const FACTOIDS: FactoidProps[] = [
    {
        key: 'age',
        eyebrow: "I'm in my",
        content: '20s',
    },
    {
        key: 'location',
        eyebrow: "I'm based in",
        content: 'LA',
        contentClassName: 'italic',
    },
    {
        key: 'biking',
        eyebrow: 'I like to',
        content: <DirectionsBike />,
    },
    {
        key: 'hiking',
        eyebrow: 'I sometimes',
        content: <Hiking />,
    },
    {
        key: 'cook',
        eyebrow: 'And I cook',
        content: <LocalPizza />,
    },
];

const COLUMNS = 6;

export default function Fun() {
    const { width } = useWindowSize();

    const numColumns = useMemo(() => {
        if (!width) return COLUMNS;
        if (width < 640) return 3;
        if (width < 1024) return 4;
        if (width < 1400) return 5;
        return COLUMNS;
    }, [width]);

    return (
        <>
            <Head>
                <title>{INITIALS} - Fun Facts!</title>
            </Head>
            <HomeBG disableParallax />
            <ThemeToggle />
            <HeaderText text="Fun Facts" />
            <span className={pageStyles.newLine}>
                <AutoAwesome /> <u>Secret page</u> unlocked!
            </span>
            <p>Here's a bit more about me</p>
            <div
                className={`flex flex-wrap mx-4 justify-center ${pageStyles.newLine}`}
            >
                {FACTOIDS.map((factoid) => (
                    <Factoid {...factoid} />
                ))}
            </div>
            <div className="mob:mx-8 child:!my-4">
                <p className={pageStyles.newLine}>
                    Here's some of my favorite pieces of art
                </p>
                <p>They're all sources of inspiration and motivation for me</p>
                <p>Please check them out</p>
            </div>
            <div className={`flex flex-nowrap w-full ${pageStyles.newLine}`}>
                <Masonry columns={numColumns} spacing={0}>
                    {FAVORITES.map(({ image, name, link }, index) => (
                        <img
                            src={image}
                            alt={name}
                            className={`transition-all shadow-xl ${homeStyles.clickable}`}
                            onClick={() => window.open(link)}
                        />
                    ))}
                </Masonry>
            </div>
            <Footer />
        </>
    );
}
