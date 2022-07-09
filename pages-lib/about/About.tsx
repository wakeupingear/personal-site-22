import { FULL_NAME } from '../../utils/constants';

export function About() {
    return (
        <>
            <h1>
                Hey there, I'm{' '}
                <span className="text-orange-200">
                    {FULL_NAME.split(' ')[0]}
                </span>
            </h1>
            <h2>Game Designer</h2>
            <h2>Software Engineer</h2>
            <h2>Aspiring Artist</h2>
            <h2>
                Student at{' '}
                <a href="https://usc.edu" target="_blank">
                    USC
                </a>
            </h2>
            <h2 className="!mt-16">I like making things</h2>
            <h2>Sometimes even good things</h2>
            <h2>Feel free to check those things out</h2>
            <h2 className="!mt-16">(And yes, I do commissions)</h2>
        </>
    );
}
