import { ReactElement } from 'react';
import styles from './card.module.css';

interface Props {
    children: ReactElement | ReactElement[];
    className?: string;
    icon?: ReactElement;
    minHeight?: string;
    title?: string;
    titleLink?: string;
    width?: string;
}

export default function Card({
    children,
    className = '',
    icon,
    minHeight = '20rem',
    title,
    titleLink,
    width = '20rem',
}: Props) {
    let titleElement: ReactElement | null = null;
    if (title) {
        if (titleLink)
            titleElement = (
                <h2>
                    <a href={titleLink} target="_blank">
                        {title}
                    </a>
                </h2>
            );
        else titleElement = <h2>{title}</h2>;
    }

    return (
        <div
            style={{
                minHeight,
                width,
            }}
            className={`${styles.holder} ${className}`}
        >
            {icon && <div className={styles.icon}>{icon}</div>}
            {titleElement}
            {children}
        </div>
    );
}
