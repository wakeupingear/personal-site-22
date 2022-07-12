import { ReactElement } from 'react';

type Tech =
    | 'typescript'
    | 'javascript'
    | 'python'
    | 'c++'
    | 'csharp'
    | 'node'
    | 'gml';

const PROJECTS: {
    [key: string]: {
        tech: Tech[];
        sourceCode?: string;
        github?: string;
        demo?: string;
        images?: ReactElement[];
    };
} = {
    
};

export default function Code() {
    return (
        <>
            <h1>I've written some code</h1>
            <p>In quite a few langauges</p>
            <p>Take a look</p>
        </>
    );
}
