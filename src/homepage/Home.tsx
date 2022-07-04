import React, { useEffect } from 'react';
import { useAuth } from '../Auth';
import LinkBar from '../shared/LinkBar';
import Footer from './Footer';
import styles from './home.module.css';
import previewStyles from './homePreviews.module.css';
import HomePreviews from './HomePreviews';
import Header from './Header';
import ThemeToggle from '../shared/ThemeToggle';

export default function Home({ children }: { children: React.ReactNode }) {
    const { animateTransition, isDark } = useAuth();
    const [onSide, setOnSide] = React.useState(
        animateTransition !== Boolean(children)
    );

    useEffect(() => {
        setOnSide(Boolean(children));
    }, [children]);

    return (
        <div className={styles.home}>
            <ThemeToggle />
            <Header />
            <LinkBar />
            <div className={styles.body}>
                <div className={styles.content}>{children}</div>
                <div
                    className={`${previewStyles.previews} ${
                        onSide && previewStyles.previewSide
                    } ${animateTransition && previewStyles.previewTransition}`}
                >
                    <HomePreviews />
                </div>
            </div>
            <Footer />
        </div>
    );
}
