import { MouseEvent } from 'react';
import styles from './shared.module.css';

interface Props {
    children: React.ReactNode | string;
    className?: string;
    onclick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function Button(props: Props) {
    return (
        <div onClick={props.onclick} className={`${styles.button} ${props.className}`}>
            {props.children}
        </div>
    );
}
