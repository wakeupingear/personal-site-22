import React, { useEffect } from 'react';
import { FULL_NAME } from '../../utils/constants';
import { useAuth } from '../Auth';
import LinkBar from '../shared/LinkBar';
import Theme from '../Theme';
import Footer from './Footer';
import styles from './home.module.css';
import HomePreviews from './HomePreviews';

export default function Home({ children }: { children: React.ReactNode }) {
    const { initialLoading } = useAuth();
    const [onSide, setOnSide] = React.useState(
        !initialLoading && initialLoading === Boolean(children)
    );

    useEffect(() => {
        setOnSide(Boolean(children));
    }, [children]);

    return (
        <div className={styles.home}>
            <Theme />
            <div className={styles.header}>
                <div className={styles.myName}>{FULL_NAME}</div>
            </div>
            <LinkBar shouldStick />
            <div className={styles.body}>
                <div className={styles.content}>{children}</div>
                <div
                    className={`${styles.previews} ${
                        onSide && styles.previewSide
                    }`}
                >
                    <HomePreviews />
                </div>
            </div>
            <Footer />
        </div>
    );
}
