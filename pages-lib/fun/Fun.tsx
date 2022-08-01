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
import { ReactNode, useMemo } from 'react';
import { FAVORITES } from './favorites';
import { Masonry } from '@mui/lab';
import { useWindowSize } from 'src/hooks/useWindowSize';
import PageTitle from '@components/PageTitle';

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
        content: <div className="text-blue-100">20s</div>,
    },
    {
        key: 'location',
        eyebrow: "I'm based in",
        content: <div className="text-pink-100">LA</div>,
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
        content: <Hiking className="text-pink-100" />,
    },
    {
        key: 'cook',
        eyebrow: 'And I cook',
        content: <LocalPizza className="!text-blue-100" />,
    },
];

const COLUMNS = 6;

const BLURB_CLASSES = `after:content-[attr(data-blurb)] after:absolute after:border-[1rem] after:border-solid after:border-transparent after:flex after:w-[calc(100%-2rem)] after:h-[calc(100%-2rem)] after:justify-center after:items-center after:text-lg after:text-white after:font-bold after:top-0 after:pointer-events-none after:z-[20] after:opacity-0 hover:after:opacity-100 after:bg-black/30 hover:after:scale-105 after:transition-all sm:hover:after:rounded-[2rem]`;

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
            <PageTitle title="Fun Facts!" />
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
                    {FAVORITES.map(({ image, name, link, blurb }) => (
                        <div
                            className={`relative hover:z-10
                                ${blurb ? BLURB_CLASSES : ''}
                            }`}
                            data-blurb={blurb}
                        >
                            <img
                                src={image}
                                alt={name}
                                className={`transition-all shadow-xl relative flex w-full ${homeStyles.clickable}`}
                                onClick={() => window.open(link)}
                            />
                        </div>
                    ))}
                </Masonry>
            </div>
            <Footer />
        </>
    );
}
