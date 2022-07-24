import Link from 'next/link';

export interface Game {
    name: string;
    bold?: boolean;
    link?: string;
    className?: string;
}

interface Props {
    content: Game[];
    className?: string;
}

export default function LinkList({ content, className = 'mob:p-0' }: Props) {
    return (
        <ul className={className}>
            {content.map(
                ({
                    name,
                    bold = false,
                    className,
                    link = '/' + name.toLowerCase(),
                }) => {
                    const classes = `!m-0 ${className ? className : ''} ${
                        bold ? '!font-bold' : ''
                    }`;

                    return (
                        <li key={name}>
                            {link.charAt(0) === '/' ? (
                                <Link href={link} scroll={false}>
                                    <a className={classes} key={name}>
                                        {name}
                                    </a>
                                </Link>
                            ) : (
                                <a className={classes} href={link}>
                                    {name}
                                </a>
                            )}
                        </li>
                    );
                }
            )}
        </ul>
    );
}
