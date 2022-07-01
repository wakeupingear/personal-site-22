import React from 'react';
import { FULL_NAME } from '../../utils/constants';
import Theme from '../Theme';
import Footer from './Footer';
import styles from './home.module.css';
import HomePreviews from './HomePreviews';

export default function Home() {
    return (
        <div className={styles.home}>
            <Theme />
            <div className={styles.header}>
                <div className={styles.myName}>{FULL_NAME}</div>
            </div>
            <div className={styles.content}></div>
            <div className={styles.previews}>
                <HomePreviews />
            </div>
            <Footer />
        </div>
    );
}
