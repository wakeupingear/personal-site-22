import Card from '../../src/shared/Card';
import { LinkedIn } from '../../src/shared/Icons';

const JOB_LIST: {
    color?: string;
    company: string;
    position: string;
    date: string;
    dateColor?: string;
    link?: string;
    logo?: string;
}[] = [
    {
        company: 'Bloomberg',
        link: 'https://www.bloomberg.com/company/careers/working-here/engineering/',
        position: 'SWE Intern',
        color: 'before:bg-white dark:before:opacity-75',
        date: 'Summer 2022',
        logo: '/logos/bloomberg.png',
    },
    {
        company: 'BodyAI',
        color: 'before:bg-blue-300 dark:before:bg-blue-400',
        position: 'Software Engineer',
        date: '2022',
    },
    {
        company: 'USC QED Lab',
        link: 'https://qed.usc.edu/',
        color: 'before:bg-red-400',
        position: 'SWE Extern',
        date: 'Spring 2021',
    },
    {
        company: 'Tiny Headed Kingdom',
        color: 'before:bg-yellow-200',
        position: 'Freelance Game Designer',
        date: '2020',
        logo: '/logos/thk.jpg',
    },
];
const JOBS = JOB_LIST.map((job) => {
    return (
        <Card
            key={job.company}
            title={!job.logo ? job.company : ''}
            link={job.link}
            className={`${job.color || 'before:bg-white'} ${
                job.logo ? '!justify-end' : ''
            }`}
            image={job.logo}
            imageAlt={job.company}
            imageClassName="rounded-full overflow-hidden shadow-xl flex w-1/2 h-1/2 absolute left-1/4 top-[20%]"
        >
            <div
                className={`absolute right-0 top-0 p-3 ${
                    job.dateColor || 'bg-gray-700'
                } rounded-bl-3xl text-xl`}
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
