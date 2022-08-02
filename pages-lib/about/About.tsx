import { CATEGORY_ICONS } from '@components/homepage/Preview';
import Link from 'next/link';
import { FULL_NAME } from '../../src/utils/pages/constants';
import pageStyles from '@page-component/pages.module.css';
import { ContentCategories } from '@utils/types';

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
            <div className={pageStyles.titleHolder}>
                <h1 className="mr-3">Hey there, I'm </h1>
                <h1 className="!bg-none bg-orange-100 dark:!text-white">
                    {FULL_NAME.split(' ')[0]}
                </h1>
            </div>
            <span>
                <Icon name="games" />
                Game Designer
            </span>
            <span>
                <Icon name="web" />
                <Icon name="code" />
                Software Engineer
            </span>
            <span>
                <Icon name="art" />
                <Icon name="film" />
                Aspiring Artist
            </span>
            <span>
                <Icon name="professional" />
                Student at
                <a
                    href="https://usc.edu"
                    target="_blank"
                    className="flex h-min !text-red-600 after:!bg-yellow-300 after:content-[''] drop-shadow-lg"
                >
                    USC
                </a>
            </span>
            <p className={pageStyles.newLine}>I like making things</p>
            <p>Sometimes even good things</p>
            <p>Feel free to check those things out</p>
            <p className={pageStyles.newLine}>(And yes, I do commissions)</p>
        </>
    );
}
