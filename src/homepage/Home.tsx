import React, { useEffect, useState } from 'react';
import { useAuth } from '../Auth';
import LinkBar from '../shared/LinkBar';
import Footer from './Footer';
import styles from './home.module.css';
import previewStyles from './homePreviews.module.css';
import HomePreviews from './HomePreviews';
import Header from './Header';
import ThemeToggle from '../shared/ThemeToggle';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Home({ children }: { children: React.ReactNode }) {
    const [onSide, setOnSide] = useState(Boolean(children));
    const [sideOpen, setSideOpen] = useState(true);

    useEffect(() => {
        setOnSide(Boolean(children));
        setSideOpen(true);
    }, [children]);

    return (
        <div className={styles.home}>
            <ThemeToggle />
            <Header />
            <LinkBar />
            <div className={styles.body}>
                <div className={styles.content}>
                    {children}
                    <div className={styles.buttonHolder}>
                        <div className={styles.buttons}>
                            <ArrowBackIosNewIcon
                                onClick={() => setSideOpen(!sideOpen)}
                                className={`${styles.sideToggle} ${
                                    sideOpen ? styles.sideOpen : ''
                                }`}
                            />
                            <Link href="/" scroll={false}>
                                <CloseIcon />
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={`${previewStyles.previews} ${
                        onSide ? previewStyles.previewSide : ''
                    } ${!sideOpen ? previewStyles.previewSideHidden : ''} ${
                        true && previewStyles.previewTransition
                    }`}
                >
                    <HomePreviews />
                </div>
            </div>
            <Footer />
        </div>
    );
}
