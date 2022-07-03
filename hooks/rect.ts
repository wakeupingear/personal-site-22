import { MutableRefObject, useEffect, useRef, useState } from 'react';

const useEffectInEvent = (
    event: 'resize' | 'scroll',
    set: () => void,
    useCapture?: boolean
) => {
    useEffect(() => {
        set();
        window.addEventListener(event, set, useCapture);
        return () => window.removeEventListener(event, set, useCapture);
    }, []);
};

export const useRect = <T extends Element>(): [
    DOMRect | undefined,
    MutableRefObject<T | null>
] => {
    const ref = useRef<T>(null);
    const [rect, setRect] = useState<DOMRect>();

    const set = () => setRect(ref.current?.getBoundingClientRect());

    useEffectInEvent('resize', set);
    useEffectInEvent('scroll', set, true);

    return [rect, ref];
};
