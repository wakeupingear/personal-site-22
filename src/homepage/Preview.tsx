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
import { MouseEvent, ReactElement } from 'react';
import { IS_SERVER } from '../../utils/constants';
import { toCamelcase } from '../../utils/helpers';
import { ContentCategories, ContentComponent } from '../../utils/types';
import styles from './homePreviews.module.css';

const CATEGORY_ICONS: { [key in ContentCategories]: ReactElement } = {
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
    const { backgroundColors, icon, image, name, width } = component;
    const url = '/' + toCamelcase(name);
    const selected = false && !IS_SERVER && window.location.pathname === url;

    const router = useRouter();
    const openPreview = (e: MouseEvent) => {
        if (selected) return;
        router.push(url, undefined, {
            scroll: false,
        });
    };

    return (
        <div
            onClick={openPreview}
            data-name={name}
            className={`${styles.holder} ${!selected ? styles.clickable : ''} ${
                icon ? styles.iconHolder : ''
            }`}
            key={name}
            style={
                width && !selected
                    ? {
                          width: width + '%',
                          backgroundImage: `linear-gradient(to right, ${
                              backgroundColors || 'blue, black'
                          })`,
                          color: component.color || 'white',
                      }
                    : {}
            }
        >
            {image && (
                <>
                    <Image
                        src={image}
                        className={styles.backImage}
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={styles.frontImageHolder}>
                        <Image
                            src={image}
                            className={styles.frontImage}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </>
            )}
            {icon && CATEGORY_ICONS[icon]}
        </div>
    );
}
