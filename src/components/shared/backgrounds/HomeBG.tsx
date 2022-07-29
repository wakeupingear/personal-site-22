import { Sphere, Names } from './Parallax';
import parallaxStyles from './parallax.module.css';
import styles from './homeBG.module.css';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export default function HomeBG({
    disableParallax,
}: {
    disableParallax?: boolean;
}) {
    const [parallaxEnabled, setParallaxEnabled] = useState(!disableParallax);

    useEffect(() => {
        if (isMobile) {
            setParallaxEnabled(false);
        }
    }, [isMobile]);

    return (
        <>
            <div className={styles.bg} />
            {parallaxEnabled && (
                <div className={parallaxStyles.container}>
                    <Sphere
                        x="80vw"
                        y="65vh"
                        speed={-100}
                        size="w-[10rem] h-[10rem] sm:w-[20rem] sm:h-[20rem]"
                        angle={23}
                    />
                    {false && <Names x="90vw" speed={-90} y={'-80vh'} />}
                    <Sphere
                        x="20vw"
                        y="200vh"
                        size="w-[6rem] h-[6rem] sm:w-[12rem] sm:h-[12rem]"
                        speed={-80}
                        angle={297}
                    />
                    <Sphere
                        x="-10vw"
                        y="20%"
                        speed={-40}
                        size="w-[12rem] h-[12rem] sm:w-[24rem] sm:h-[24rem]"
                        angle={240}
                    />
                    <Sphere x="50vw" y="120vh" speed={-20} angle={180} />
                </div>
            )}
        </>
    );
}
