import styles from './parallax.module.css';
import { Parallax } from 'react-scroll-parallax';
import { NameBG } from './Header';

function Sphere({
    angle = 0,
    className,
    size = '16rem',
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
            <div
                className={`${styles.sphere} ${className || ''}`}
                style={{
                    height: size,
                    width: size,
                }}
            />
            <div
                className={styles.mask}
                style={{
                    rotate: -angle + 'deg',
                }}
            />
        </Parallax>
    );
}

function Names({
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

export default function ParallaxBG() {
    return (
        <div className={styles.container}>
            <Sphere x="80vw" y="65vh" speed={-100} size="12rem" angle={23} />
            <Names x="90vw" speed={-90} y={'-80vh'} />
            <Sphere x="20vw" y="200vh" size="20rem" speed={-80} angle={297} />
            <Sphere x="-10vw" y="20%" speed={-40} size="24rem" angle={240} />
            <Sphere x="50vw" y="120vh" speed={-20} angle={180} />
        </div>
    );
}
