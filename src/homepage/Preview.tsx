import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { IS_SERVER } from '../../utils/constants';
import { toCamelcase } from '../../utils/helpers';
import { ContentComponent } from '../../utils/types';
import styles from './homePreviews.module.css';

const THRESHOLD = 5;

interface Props {
    component: ContentComponent;
}

export default function Preview({ component }: Props) {
    const url = '/' + toCamelcase(component.name);
    const selected = !IS_SERVER && window.location.pathname === url;

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
            className={`${styles.imageHolder} ${!selected && styles.clickable}`}
            key={component.name}
            style={
                component.width && !selected
                    ? {
                          width: component.width + '%',
                      }
                    : {}
            }
        >
            <>
                <Image
                    src={component.image}
                    className={styles.backImage}
                    layout="fill"
                    objectFit="cover"
                />
                <div className={styles.frontImageHolder}>
                    <Image
                        src={component.image}
                        className={styles.frontImage}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </>
        </div>
    );
}
