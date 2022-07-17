import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ReactNode } from 'react';
import styles from './icons.module.css';

function IconWrapper(props: {
    children: ReactNode;
    url: string;
    alt: string;
    className?: string;
}) {
    return (
        <a
            href={props.url}
            key={props.alt}
            target="_blank"
            className={`${styles.icon} ${props.className || ''}`}
        >
            {props.children}
        </a>
    );
}

interface Props {
    className?: string;
}

export function GitHub(props: Props) {
    return (
        <IconWrapper
            url={process.env.NEXT_PUBLIC_GITHUB || ''}
            alt="Github"
            {...props}
        >
            <GitHubIcon fontSize="inherit" />
        </IconWrapper>
    );
}

export function YouTube(props: Props) {
    return (
        <IconWrapper
            url={process.env.NEXT_PUBLIC_YOUTUBE || ''}
            alt="YouTube"
            {...props}
        >
            <YouTubeIcon fontSize="inherit" />
        </IconWrapper>
    );
}

export function Instagram(props: Props) {
    return (
        <IconWrapper
            url={process.env.NEXT_PUBLIC_INSTAGRAM || ''}
            alt="Instagram"
            {...props}
        >
            <InstagramIcon fontSize="inherit" />
        </IconWrapper>
    );
}

export function LinkedIn(props: Props) {
    return (
        <IconWrapper
            url={process.env.NEXT_PUBLIC_LINKEDIN || ''}
            alt="Linkedin"
            {...props}
        >
            <LinkedInIcon fontSize="inherit" />
        </IconWrapper>
    );
}
