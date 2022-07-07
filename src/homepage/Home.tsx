import React, { useEffect, useState } from 'react';
import LinkBar from '../shared/LinkBar';
import Footer from './Footer';
import styles from './home.module.css';
import previewStyles from './homePreviews.module.css';
import HomePreviews from './HomePreviews';
import Header from './Header';
import ThemeToggle from '../shared/ThemeToggle';
import SideToggle from './SideToggle';

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
            <div className={`${styles.body} ${onSide ? styles.bodyFull : ''}`}>
                <div className={styles.content}>
                    {children}
                    <SideToggle sideOpen={sideOpen} setSideOpen={setSideOpen} />
                </div>
                <div
                    className={`${previewStyles.previews} ${
                        onSide ? previewStyles.previewSide : ''
                    } ${!sideOpen ? previewStyles.previewSideHidden : ''} ${
                        true && previewStyles.previewTransition
                    }`}
                >
                    <HomePreviews onSide={onSide} />
                </div>
            </div>
            <Footer />
        </div>
    );
}
