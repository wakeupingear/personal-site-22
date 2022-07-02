import React from 'react';
import { FULL_NAME } from '../../utils/constants';
import styles from './footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <h2 className={styles.copyright}>
                {FULL_NAME} - {new Date().getFullYear()}
            </h2>
            <div className={styles.clap}>Clap</div>
        </div>
    );
}
