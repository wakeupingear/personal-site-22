import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ReactNode } from 'react';
import styles from './icons.module.css';

function IconWrapper(props: { children: ReactNode; url: string; alt: string }) {
    return (
        <a
            href={props.url}
            key={props.alt}
            target="_blank"
            className={styles.icon}
        >
            {props.children}
        </a>
    );
}

export function GitHub() {
    return (
        <IconWrapper url="https://github.com/willf668" alt="Github">
            <GitHubIcon fontSize="inherit" />
        </IconWrapper>
    );
}

export function YouTube() {
    return (
        <IconWrapper
            url="https://www.youtube.com/channel/UCImSybcXB8pCtulA-_T0WCw"
            alt="YouTube"
        >
            <YouTubeIcon fontSize="inherit" />
        </IconWrapper>
    );
}

export function Instagram() {
    return (
        <IconWrapper
            url="https://www.instagram.com/will_farhat/"
            alt="Instagram"
        >
            <InstagramIcon fontSize="inherit" />
        </IconWrapper>
    );
}

export function LinkedIn() {
    return (
        <IconWrapper
            url="https://www.linkedin.com/in/will-farhat/"
            alt="Linkedin"
        >
            <LinkedInIcon fontSize="inherit" />
        </IconWrapper>
    );
}
