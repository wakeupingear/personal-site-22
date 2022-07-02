import React, { useEffect } from 'react';
import { FULL_NAME } from '../../utils/constants';
import { useAuth } from '../Auth';
import Theme from '../Theme';
import Footer from './Footer';
import styles from './home.module.css';
import HomePreviews from './HomePreviews';

export default function Home({ children }: { children: React.ReactNode }) {
    const { loggedIn } = useAuth();
    const [onSide, setOnSide] = React.useState(!Boolean(children) !== loggedIn);

    useEffect(() => {
        setOnSide(Boolean(children));
    }, [children]);

    return (
        <div className={styles.home}>
            <Theme />
            <div className={styles.header}>
                <div className={styles.myName}>{FULL_NAME}</div>
            </div>
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
