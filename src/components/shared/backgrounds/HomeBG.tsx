import { Sphere, Names } from './Parallax';
import parallaxStyles from './parallax.module.css';
import styles from './homeBG.module.css';

export default function HomeBG() {
    return (
        <>
            <div className={styles.bg} />
            <div className={parallaxStyles.container}>
                <Sphere
                    x="80vw"
                    y="65vh"
                    speed={-100}
                    size="12rem"
                    angle={23}
                />
                <Names x="90vw" speed={-90} y={'-80vh'} />
                <Sphere
                    x="20vw"
                    y="200vh"
                    size="20rem"
                    speed={-80}
                    angle={297}
                />
                <Sphere
                    x="-10vw"
                    y="20%"
                    speed={-40}
                    size="24rem"
                    angle={240}
                />
                <Sphere x="50vw" y="120vh" speed={-20} angle={180} />
            </div>
        </>
    );
}
