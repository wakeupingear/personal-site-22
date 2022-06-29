import React from 'react';
import { FULL_NAME } from '../utils/constants';
import Theme from './Theme';
import styles from '../styles/home.module.css';

interface Props {
    children: React.ReactNode;
}

export default function Home({ children }: Props) {
    return (
        <div className={styles.home}>
            <Theme />
            <div>
                <div className={styles.myName}>{FULL_NAME}</div>
            </div>
            {children}
        </div>
    );
}
