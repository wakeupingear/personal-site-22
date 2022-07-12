import { FULL_NAME } from '../../utils/constants';

export function About() {
    return (
        <>
            <h1>Hey there, I'm {FULL_NAME.split(' ')[0]}</h1>
            <p>Game Designer</p>
            <p>Software Engineer</p>
            <p>Aspiring Artist</p>
            <p>
                Student at{' '}
                <a
                    href="https://usc.edu"
                    target="_blank"
                    className="!text-red-600 after:!bg-yellow-300 after:content-['']"
                >
                    USC
                </a>
            </p>
            <p className="!mt-16">I like making things</p>
            <p>Sometimes even good things</p>
            <p>Feel free to check those things out</p>
            <p className="!mt-16">(And yes, I do commissions)</p>
        </>
    );
}
