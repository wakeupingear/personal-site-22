import { ReactElement } from 'react';
import Head from 'next/head';
import { Language } from '@mui/icons-material';

const LANGUAGES = [
    ['typescript', 'react', 'nextjs', 'tailwindcss', 'redux'],
    ['nodejs', 'graphql', 'jest', 'firebase', 'amazonwebservices'],
    ['java', 'cplusplus', 'docker', 'kubernetes'],
    ['python', 'opencv', 'bash'],
    ['csharp', 'unity'],
] as const;

type Language = typeof LANGUAGES[number][number];

const colorMap: {
    [key: string]: string;
} = {
    typescript: 'hover:text-blue-600',
    react: 'hover:text-[#61dafb]',
    nextjs: 'hover:text-[#1a365d] dark:hover:text-[#5263b3]',
    tailwindcss: 'hover:text-[#00e1b2]',
    redux: 'hover:text-[#764abc]',
    nodejs: 'hover:text-green-300',
    graphql: 'hover:text-pink-500',
    jest: 'hover:text-[#ffa812]',
    firebase: 'hover:text-yellow-300',
    amazonwebservices: 'hover:text-[#f5a623]',
    python: 'hover:text-[#3572A5]',
    opencv: 'hover:text-[#3572A5]',
    bash: 'hover:hover:text-green-300',
    linux: 'hover:text-yellow-100',
    java: 'hover:text-[#b07219]',
    cplusplus: 'hover:text-black dark:hover:text-[#dea12c]',
    docker: 'hover:text-blue-600',
    kubernetes: 'hover:text-blue-600',
    csharp: 'hover:text-[#5263b3]',
    unity: 'hover:text-[#5263b3]',
};

const PROJECTS: {
    [key: string]: {
        tech: Language;
        sourceCode?: string;
        github?: string;
        demo?: string;
        images?: ReactElement[];
    };
} = {};

export default function Code() {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
                />
            </Head>
            <h1>I've written some code</h1>
            <p>In quite a few ways</p>
            {LANGUAGES.map((group) => (
                <div className="flex flex-wrap justify-center" key={group[0]}>
                    {group.map((language) => (
                        <div className="m-2 flex flex-col">
                            <i
                                className={`devicon-${language}-plain devicon-${language}-original text-7xl text-white transition-all hover:rotate-12 hover:scale-110   ${colorMap[language]}`}
                                key={language}
                            />
                            <p className="text-white text-center capitalize w-0 h-0 overflow-hidden">
                                {language}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
            <p className="!mt-16">I also daily drive</p>
            <h1 className="!mt-0">Kubuntu Linux</h1>
            <p>Do with that what you will 🚩</p>
        </>
    );
}
