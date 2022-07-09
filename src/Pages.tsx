import { ReactElement, useEffect } from 'react';
import { useAuth } from './Auth';
import styles from './pages.module.css';

interface Props {
    children?: ReactElement;
    defaultContainer?: boolean;
    defaultStyles?: boolean;
}

function Container({
    children,
    defaultContainer = true,
    defaultStyles = true,
}: Props) {
    const content = children || null;
    if (!defaultContainer) return content;
    return (
        <div
            className={`${styles.page} ${
                defaultStyles ? styles.defaultStyles : ''
            }`}
        >
            {content}
        </div>
    );
}

export function HomePage(props: Props) {
    const { setRenderedChildren } = useAuth();
    useEffect(() => {
        setRenderedChildren(props.children ? <Container {...props} /> : null);
    }, []);
    return null;
}

export function Page(props: Props) {
    const { setRenderedChildren } = useAuth();
    useEffect(() => {
        setRenderedChildren(undefined);
    }, []);
    return <Container {...props} />;
}
