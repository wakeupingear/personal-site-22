import { MouseEvent } from 'react';
import styles from './shared.module.css';

interface Props {
    children: React.ReactNode | string;
    className?: string;
    onclick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function ClickableText({ onclick, className, children }: Props) {
    return (
        <div
            onClick={onclick}
            className={`clickableText ${styles.clickableText} ${
                className || ''
            }`}
        >
            {children}
        </div>
    );
}
