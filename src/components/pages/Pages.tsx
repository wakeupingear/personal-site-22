import { ReactNode, useEffect } from 'react';
import { useAuth } from '@components/Auth';
import styles from './pages.module.css';

interface Props {
    children?: ReactNode;
    defaultContainer?: boolean;
    defaultStyles?: boolean;
}

function Container({
    children,
    defaultContainer = true,
    defaultStyles = true,
}: Props) {
    const content = children || null;
    if (!defaultContainer) return <>{content}</>;
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

export function homeScroll(id: string) {
    const home = document.getElementById('home');
    const target = document.getElementById(id);
    if (home && target) {
        window.scrollTo({
            top: target.offsetTop - 64,
            behavior: 'smooth',
        });
    }
}

export function HomePage(props: Props) {
    const { setRenderedChildren } = useAuth();
    const { children } = props;
    useEffect(() => {
        setRenderedChildren(children ? <Container {...props} /> : null);

        if (children) {
            homeScroll('homeBody');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [children]);
    return null;
}

export function Page(props: Props) {
    const { setRenderedChildren } = useAuth();
    useEffect(() => {
        setRenderedChildren(undefined);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <Container {...props} />;
}
