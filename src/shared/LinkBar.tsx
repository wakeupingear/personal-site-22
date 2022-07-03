import styles from './linkBar.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const LINKS = [
    {
        alt: 'Github',
        Component: GitHubIcon,
        url: 'https://github.com/willf668',
    },
    {
        alt: 'Youtube',
        Component: YouTubeIcon,
        url: 'https://www.youtube.com/channel/UCImSybcXB8pCtulA-_T0WCw',
    },
    {
        alt: 'Instagram',
        Component: InstagramIcon,
        url: 'https://www.instagram.com/will_farhat/',
    },
];

interface Props {
    shouldStick?: boolean;
}

export default function LinkBar({ shouldStick }: Props) {
    return (
        <div
            className={`${styles.container} ${
                shouldStick ? styles.stickyBar : ''
            }`}
        >
            {LINKS.map(({ alt, Component, url }) => (
                <a href={url} key={alt} target="_blank">
                    <Component fontSize="inherit" />
                </a>
            ))}
            <a className={styles.text}>Resume</a>
        </div>
    );
}
