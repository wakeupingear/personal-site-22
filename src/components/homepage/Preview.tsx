import {
    Code,
    ComputerOutlined,
    Movie,
    Palette,
    School,
    SportsEsports,
} from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import { IS_SERVER } from '../../utils/pages/constants';
import { toCamelcase } from '@utils/helpers';
import { ContentCategories, ContentComponent } from '@utils/types';
import styles from './homePreviews.module.css';

export const CATEGORY_ICONS: { [key in ContentCategories]: ReactElement } = {
    web: <ComputerOutlined />,
    professional: <School />,
    games: <SportsEsports />,
    art: <Palette />,
    film: <Movie />,
    code: <Code />,
};

interface Props {
    component: ContentComponent;
}

export default function Preview({ component }: Props) {
    const {
        backgroundColor,
        endDate,
        icon,
        image,
        link,
        name,
        startDate,
        width,
    } = component;
    const url = link || '/' + toCamelcase(name);
    const selected = false && !IS_SERVER && window.location.pathname === url;

    const router = useRouter();
    const openPreview = () => {
        if (selected) return;
        router.push(url, undefined, {
            scroll: false,
        });
    };

    let date = '';
    if (endDate || startDate) {
        if (!endDate) date = startDate;
        else if (!startDate) date = endDate;
        else date = `${startDate} - ${endDate}`;
    }

    return (
        <div
            onClick={openPreview}
            data-name={name}
            data-date={date}
            className={`${styles.holder} ${!selected ? styles.clickable : ''} ${
                icon ? styles.iconHolder : ''
            }`}
            key={name}
            style={
                width && !selected
                    ? {
                          width: width + '%',
                          color: component.color || 'white',
                          backgroundColor: backgroundColor,
                      }
                    : {}
            }
        >
            {image && (
                <Image
                    src={image}
                    className={styles.backImage}
                    layout="fill"
                    objectFit="cover"
                    alt={name}
                />
            )}
            {icon && CATEGORY_ICONS[icon]}
        </div>
    );
}
