import React from 'react';
import { useAuth } from './Auth';

interface Props {
    children: React.ReactNode[];
}

export default function Cube(props: Props) {
    const { screen, screenAnimating } = useAuth();

    const classes =
        `cube cube-${screen}` +
        (screenAnimating ? ` cube-${screen}-animating` : '');

    if (!screenAnimating) return <>{props.children[screen]}</>;

    return (
        <div className="cubeHolder">
            <div className={classes}>
                {props.children.map((child, index) => (
                    <div className={`screen screen-${index}`} key={index}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}
