import styles from './headerText.module.css';

export default function HeaderText({
    className = '',
    inContainer,
    text,
}: {
    className?: string;
    inContainer?: boolean;
    text: string | string[];
}) {
    const textArray = Array.isArray(text) ? text : text.split(' ');

    return (
        <div
            className={`${styles.myName} ${className} ${
                inContainer ? styles.inContainer : ''
            }`}
        >
            {textArray.map((word) => (
                <div key={word} className={styles.word}>
                    {word}
                </div>
            ))}
        </div>
    );
}
