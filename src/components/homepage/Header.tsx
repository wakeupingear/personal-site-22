import styles from './header.module.css';
import { FULL_NAME } from '@utils/pages/constants';
import { GitHub, Instagram, LinkedIn, YouTube } from '@shared/icons/Icons';
import Link from 'next/link';
import { useAuth } from '@components/Auth';
import HeaderText from '@components/shared/headerText/HeaderText';

const NAMES = Array(60)
    .fill(0)
    .map((_, i) => <div key={i}>{FULL_NAME}</div>);

export function NameBG({ className }: { className?: string }) {
    const { pageHasContent } = useAuth();
    return (
        <div
            className={`${styles.nameBgHolder} ${
                pageHasContent ? styles.namesHidden : ''
            } ${className || ''}`}
        >
            <div className={styles.nameBg}>{NAMES}</div>
        </div>
    );
}

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.holder}>
                <div className={styles.iconHolder}>
                    <YouTube />
                    <Instagram />
                </div>
            </div>
            <HeaderText
                text={FULL_NAME.split(' ')}
                className={styles.myName}
                inContainer
            />
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
