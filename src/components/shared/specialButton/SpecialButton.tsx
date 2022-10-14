import styles from './specialButton.module.css';

const COLORS = {
    orange: 'bg-orange-400 after:bg-purple-800',
};

interface Props {
    children: React.ReactNode;
    className?: string;
    color?: keyof typeof COLORS;
    sameTab?: boolean;
    onClick?: () => void;
    url?: string;
}

export default function SpecialButton({
    className = '',
    children,
    color = 'orange',
    onClick,
    url,
    sameTab,
}: Props) {
    const aProps: { [key: string]: string } = {};
    if (url) {
        aProps.href = url;
        if (!sameTab) {
            aProps.target = '_blank';
            aProps.rel = 'noopener noreferrer';
        }
    }

    return (
        <a
            className={`${styles.button} ${COLORS[color]} ${className}`}
            {...aProps}
            onClick={onClick}
        >
            {children}
        </a>
    );
}
