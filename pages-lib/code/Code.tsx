import Head from 'next/head';
import pageStyles from '@page-component/pages.module.css';
import { INITIALS } from '@utils/pages/constants';

const LANGUAGES = [
    ['typescript', 'react', 'nextjs', 'tailwindcss', 'redux'],
    ['nodejs', 'graphql', 'jest', 'firebase', 'amazonwebservices'],
    ['java', 'cplusplus', 'docker', 'kubernetes'],
    ['python', 'opencv', 'bash'],
    ['csharp', 'unity'],
] as const;

const colorMap: {
    [key: string]: string;
} = {
    typescript: 'hover-child:text-blue-600',
    react: 'hover-child:text-[#61dafb]',
    nextjs: 'hover-child:text-[#1a365d] dark:hover-child:text-[#5263b3]',
    tailwindcss: 'hover-child:text-[#00e1b2]',
    redux: 'hover-child:text-[#764abc]',
    nodejs: 'hover-child:text-green-300',
    graphql: 'hover-child:text-pink-500',
    jest: 'hover-child:text-[#ffa812]',
    firebase: 'hover-child:text-yellow-300',
    amazonwebservices: 'hover-child:text-[#f5a623]',
    python: 'hover-child:text-[#3572A5]',
    opencv: 'hover-child:text-[#3572A5]',
    bash: 'hover-child:hover-child:text-green-300',
    linux: 'hover-child:text-yellow-100',
    java: 'hover-child:text-[#b07219]',
    cplusplus: 'hover-child:text-black dark:hover-child:text-[#dea12c]',
    docker: 'hover-child:text-blue-600',
    kubernetes: 'hover-child:text-blue-600',
    csharp: 'hover-child:text-[#5263b3]',
    unity: 'hover-child:text-[#5263b3]',
};

const nicknameMap: {
    [key: string]: string;
} = {
    typescript: 'TypeScript',
    nextjs: 'Next.js',
    tailwindcss: 'TailwindCSS',
    nodejs: 'Node.js',
    graphql: 'GraphQL',
    amazonwebservices: 'AWS',
    opencv: 'OpenCV',
    cplusplus: 'C++',
    csharp: 'C#',
};

export default function Code() {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
                />
                <title>{INITIALS} - Code</title>
            </Head>
            <h1>I've written some code</h1>
            <p>In quite a few ways</p>
            {LANGUAGES.map((group) => (
                <div className="flex flex-wrap justify-center" key={group[0]}>
                    {group.map((language) => (
                        <div
                            className={`m-2 flex flex-col hover-first-child:rotate-[10deg] hover-first-child:scale-110 ${colorMap[language]}`}
                        >
                            <i
                                className={`devicon-${language}-plain devicon-${language}-original text-7xl text-white transition-all`}
                                key={language}
                            />
                            <p className="text-white !text-xl !my-0 !mt-1 text-center capitalize transition-all">
                                {nicknameMap[language] || language}
                            </p>
                        </div>
                    ))}
                </div>
            ))}
            <p className={pageStyles.newLine}>I also daily drive</p>
            <h1 className="!mt-0">Kubuntu Linux</h1>
            <p>Do with that what you will 🚩</p>
        </>
    );
}
