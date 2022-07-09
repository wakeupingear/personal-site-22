import styles from './linkBar.module.css';
import Sticky from 'react-stickynode';
import Link from 'next/link';
import { GitHub, YouTube, Instagram, LinkedIn } from './Icons';
import ThemeToggle from './ThemeToggle';
import ClickableText from './ClickableText';

export default function LinkBar() {
    return (
        <Sticky
            enabled={true}
            top={0}
            className={styles.stickyBar}
            innerActiveClass={styles.sticking}
        >
            <div className={styles.container}>
                <div className={styles.holder}>
                    <div className={styles.start}>
                        <YouTube />
                        <Instagram />
                        <GitHub />
                        <LinkedIn />
                        <ClickableText>Resume</ClickableText>
                    </div>
                    <ThemeToggle inBar />
                </div>
            </div>
        </Sticky>
    );
}
