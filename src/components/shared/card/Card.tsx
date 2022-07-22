import { ReactNode } from 'react';
import Image from 'next/image';
import styles from './card.module.css';

interface Props {
    children: ReactNode;
    className?: string;
    image?: string;
    imageAlt?: string;
    imageClassName?: string;
    link?: string;
    minHeight?: string;
    title?: string;
    titleLink?: string;
    width?: string;
}

export default function Card({
    children,
    className = '',
    image,
    imageAlt,
    imageClassName = '',
    link,
    minHeight = '20rem',
    title,
    titleLink,
    width = '20rem',
}: Props) {
    let titleElement: ReactNode = null;
    if (title) {
        if (!link && titleLink)
            titleElement = (
                <h2>
                    <a href={titleLink} target="_blank" rel="noreferrer">
                        {title}
                    </a>
                </h2>
            );
        else titleElement = <h2>{title}</h2>;
    }

    const content = (
        <div
            style={{
                minHeight,
                width,
            }}
            className={`${styles.holder} ${className}`}
        >
            {image && (
                <div className={`${styles.image} ${imageClassName}`}>
                    <Image
                        src={image}
                        layout={'fill'}
                        objectFit={'contain'}
                        alt={imageAlt}
                    />
                </div>
            )}
            {titleElement}
            {children}
        </div>
    );

    if (link)
        return (
            <a
                className={styles.cardLink}
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                {content}
            </a>
        );

    return content;
}
