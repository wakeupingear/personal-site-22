import { useAuth } from '@components/Auth';
import styles from './themeToggle.module.css';

interface Props {
    inBar?: boolean;
}

export default function ThemeToggle(props: Props) {
    const { isDark, toggleTheme } = useAuth();
    return (
        <div
            className={`${styles.container} ${
                props.inBar ? styles.inBar : ''
            } ${!isDark ? styles.sun : styles.moon}`}
            onClick={() => toggleTheme()}
        />
    );
}
