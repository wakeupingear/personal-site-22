import React from 'react';

import styles from '../styles/theme.module.css';
import { useAuth } from './Auth';

export default function Theme() {
    const { isDark, toggleTheme } = useAuth();

    let lightClass = styles.light;
    let darkClass = styles.dark;
    if (!isDark) {
        lightClass += ' ' + styles.hidden;
    } else {
        darkClass += ' ' + styles.hidden;
    }

    return (
        <div className="flex flex-row absolute right-0">
            <div className={lightClass} onClick={() => toggleTheme(false)} />
            <div className={darkClass} onClick={() => toggleTheme(true)} />
        </div>
    );
}
