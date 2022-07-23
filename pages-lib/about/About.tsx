import { CATEGORY_ICONS } from '@components/homepage/Preview';
import { ContentCategories } from '@utils/types';
import Link from 'next/link';
import { FULL_NAME } from '../../src/utils/pages/constants';

function Icon({ name }: { name: ContentCategories }) {
    const icon = CATEGORY_ICONS[name];
    if (!icon) return null;
    return (
        <Link aria-label={name} href={`/${name}`} scroll={false}>
            <a className="text-orange-100 after:content-none transition-colors hover:text-white hover:cursor-pointer">
                {icon}
            </a>
        </Link>
    );
}

export function About() {
    return (
        <>
            <h1>Hey there, I'm {FULL_NAME.split(' ')[0]}</h1>
            <p>
                <Icon name="games" />
                Game Designer
            </p>
            <p>
                <Icon name="web" />
                <Icon name="code" />
                Software Engineer
            </p>
            <p>
                <Icon name="art" />
                <Icon name="film" />
                Aspiring Artist
            </p>
            <p>
                <Icon name="professional" />
                Student at
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
