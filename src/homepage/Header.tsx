import styles from './header.module.css';
import { FULL_NAME } from '../../utils/constants';
import { GitHub, Instagram, LinkedIn, YouTube } from '../shared/Icons';
import Link from 'next/link';
import { useAuth } from '../Auth';

const NAMES = Array(30)
    .fill(0)
    .map((_, i) => <div key={i}>{FULL_NAME}</div>);

function NameBG() {
    const { pageHasContent } = useAuth();
    return (
        <div className={`${styles.nameBgHolder} ${pageHasContent?styles.namesHidden:""}`}>
            <div className={styles.nameBg}>{NAMES}</div>
        </div>
    );
}

export default function Header() {
    const name = FULL_NAME.split(' ');
    return (
        <div className={styles.container}>
            <div className={styles.holder}>
                <div className={styles.iconHolder}>
                    <YouTube />
                    <Instagram />
                </div>
            </div>
            <div className={styles.myName}>
                <div className={styles.firstName}>{name[0]}</div>
                <div className={styles.lastName}>{name[1]}</div>
            </div>
            <div className={styles.holder}>
                <Link href="/about" scroll={false}>
                    <a className={styles.text}>About</a>
                </Link>
                <div className={styles.iconHolder}>
                    <GitHub />
                    <LinkedIn />
                </div>
                <Link href="/resume" scroll={false}>
                    <a className={styles.text}>Resume</a>
                </Link>
                <NameBG />
            </div>
        </div>
    );
}
