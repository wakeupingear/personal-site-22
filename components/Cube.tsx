import React from 'react';
import { useAuth } from './Auth';

interface Props {
    children: React.ReactNode[];
}

export default function Cube(props: Props) {
    const { screen, setScreen } = useAuth();

    return (
        <div className="cubeHolder">
            <div className={`cube cube-${screen}`}>
                {props.children.map((child, index) => (
                    <div className={`screen screen-${index}`} key={index}>
                        {child}
                    </div>
                ))}
            </div>
            <button
                className="bg-blue-400 m-5 rounded-lg p-3 shadow-sm"
                onClick={() => setScreen((screen + 1) % 2)}
            >
                Switch screen
            </button>
        </div>
    );
}
