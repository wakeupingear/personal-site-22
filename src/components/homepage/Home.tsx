import React, { useEffect, useState } from 'react';
import LinkBar from '@shared/linkBar/LinkBar';
import Footer from './Footer';
import styles from './home.module.css';
import pageStyles from '@page-component/pages.module.css';
import previewStyles from './homePreviews.module.css';
import HomePreviews from './HomePreviews';
import Header from './Header';
import ThemeToggle from '@shared/themeToggle/ThemeToggle';
import SideToggle from './SideToggle';
import HomeBG from '@shared/backgrounds/HomeBG';
import { NextRouter, useRouter } from 'next/router';

const sideClosedByDefault = (router: NextRouter) => {
    const { pathname } = router;
    return pathname === '/chadmin';
};

export default function Home({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const closedByDefault = sideClosedByDefault(router);

    const [onSide, setOnSide] = useState(Boolean(children));
    const [sideOpen, setSideOpen] = useState(!closedByDefault);

    useEffect(() => {
        setOnSide(Boolean(children));
        if (closedByDefault) setSideOpen(false);
        else setSideOpen(true);
    }, [children, closedByDefault]);

    return (
        <div className={styles.home} id="home">
            <HomeBG />
            <ThemeToggle />
            <Header />
            <LinkBar />
            <div
                className={`${styles.body} ${pageStyles.pageEnd} ${
                    onSide ? styles.bodyFull : ''
                }`}
                id="homeBody"
            >
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
            <Footer isHome />
        </div>
    );
}
