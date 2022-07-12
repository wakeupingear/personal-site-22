import Card from '../../src/shared/Card';
import { LinkedIn } from '../../src/shared/Icons';

const JOB_LIST: {
    color?: string;
    company: string;
    position: string;
    date: string;
    dateColor?: string;
    link?: string;
}[] = [
    {
        company: 'Bloomberg',
        link: 'https://www.bloomberg.com/',
        position: 'SWE Intern',
        date: 'Summer 2022',
    },
    {
        company: 'BodyAI',
        color: 'before:bg-blue-300',
        position: 'Software Engineer',
        date: '2022',
    },
    {
        company: 'USC QED Lab',
        color: 'before:bg-red-400',
        position: 'SWE Extern',
        date: 'Spring 2021',
    },
    {
        company: 'Tiny Headed Kingdom',
        color: 'before:bg-yellow-200',
        position: 'Freelance Game Designer',
        date: '2020',
    },
];
const JOBS = JOB_LIST.map((job) => {
    return (
        <Card
            key={job.company}
            title={job.company}
            titleLink={job.link}
            className={`${job.color || 'before:bg-white'} !justify-end`}
        >
            <div
                className={`absolute right-0 top-0 p-3 ${
                    job.dateColor || 'bg-gray-700'
                } rounded-bl-3xl`}
            >
                {job.date}
            </div>
            <h3>{job.position}</h3>
        </Card>
    );
});

export default function Professional() {
    return (
        <>
            <p>Oh right, almost forgot</p>
            <h1 className="!mt-0">I've got work experience</h1>
            <div className="flex flex-wrap justify-center">{JOBS}</div>
            <p className="flex">
                More info on <LinkedIn className="ml-2" />
            </p>
            <p className="!mt-16">And how about some</p>
            <h1 className="!mt-0">Education</h1>
        </>
    );
}
