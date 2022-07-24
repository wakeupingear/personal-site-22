import styles from './parallax.module.css';
import { Parallax } from 'react-scroll-parallax';
import { NameBG } from '../../homepage/Header';

export function Sphere({
    angle = 0,
    className,
    size = 'w-[8rem] h-[8rem] sm:w-[16rem] sm:h-[16rem]',
    speed = -50,
    x = 'auto',
    y = 'auto',
}: {
    angle?: number;
    className?: string;
    size?: string;
    speed?: number;
    x?: string;
    y?: string;
}) {
    return (
        <Parallax
            className={styles.parallax}
            style={{
                left: x,
                top: y,
            }}
            speed={speed}
        >
            <div className={`${styles.sphere} ${className || ''} ${size}`} />
            <div
                className={styles.mask}
                style={{
                    rotate: -angle + 'deg',
                }}
            />
        </Parallax>
    );
}

export function Names({
    className,
    speed = -50,
    x = 'auto',
    y = 'auto',
}: {
    className?: string;
    speed?: number;
    x?: string;
    y?: string;
}) {
    return (
        <Parallax
            className={`${styles.parallax} ${className || ''}`}
            style={{
                left: x,
                top: y,
            }}
            speed={speed}
        >
            <NameBG className="h-0 scale-75" />
        </Parallax>
    );
}
