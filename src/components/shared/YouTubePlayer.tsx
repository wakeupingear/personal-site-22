import { Children, ReactNode } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import pageStyles from '@page-component/pages.module.css';

type Location = 'page' | 'homeContent' | 'homeContentSection';

interface Dimensions {
    width: string;
    height: string;
}

const LOCATION_DIMENSIONS: Partial<Record<Location, Dimensions>> = {
    homeContentSection: {
        width: 'w-[20rem] sm:w-[32rem] md:w-[24rem] lg:w-[27rem] xl:w-[40vw]',
        height: 'h-[11.25rem] sm:h-[18rem] md:h-[13.5rem] lg:h-[15.1875rem]  xl:h-[22.5vw]',
    },
};

type Props = YouTubeProps & {
    location: Location;
    children?: ReactNode;
};

export default function YouTubePlayer({
    location,
    className,
    opts,
    children,
    ...rest
}: Props) {
    const dimensions: Dimensions = LOCATION_DIMENSIONS[location] || {
        width: '',
        height: '',
    };

    const playerClasses = `flex ${dimensions.width} ${dimensions.height} ${className}`;

    const playerOpts = {
        width: '100%',
        height: '100%',
        ...opts,
    };

    return (
        <div
            className={`flex max-w-full flex-col items-center ${dimensions.width}`}
        >
            <div
                className={`shadow-md rounded-xl sm:rounded-3xl overflow-hidden flex max-w-full ${dimensions.height}`}
            >
                <YouTube
                    opts={playerOpts}
                    className={playerClasses}
                    {...rest}
                />
            </div>
            <div
                className={`flex flex-wrap items-center w-full flex-col xl:flex-row ${
                    Children.count(children) > 1
                        ? 'justify-between'
                        : 'justify-evenly'
                } ${pageStyles.smallText}`}
            >
                {children}
            </div>
        </div>
    );
}
