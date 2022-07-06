import { ReactElement, useEffect } from 'react';
import { useAuth } from './Auth';

interface Props {
    children?: ReactElement;
}

export function HomePage({ children }: Props) {
    const { setRenderedChildren } = useAuth();
    useEffect(() => {
        setRenderedChildren(children || null);
    }, []);
    return null;
}

export function Page({ children }: Props) {
    const { setRenderedChildren } = useAuth();
    useEffect(() => {
        setRenderedChildren(undefined);
    }, []);
    return children || null;
}
