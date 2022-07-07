import { ReactElement } from 'react';
import { ContentCategories } from '../../utils/types';
import { usePageData } from '../Wrapper';
import styles from './homePreviews.module.css';
import Preview from './Preview';

interface Props {
    onSide: boolean;
}

export default function HomePreviews({ onSide }: Props) {
    const { PAGE_DATA } = usePageData();
    console.log(onSide);
    return (
        <div className={styles.container}>
            {PAGE_DATA &&
                PAGE_DATA.components.map((column, index) => (
                    <div
                        key={index + '-' + column.components.length}
                        className={styles.column}
                        style={{
                            height: onSide
                                ? column.sideHeight || '8rem'
                                : column.height || '18rem',
                        }}
                    >
                        {column.components.map((component) => {
                            return (
                                <Preview
                                    component={component}
                                    key={component.name}
                                />
                            );
                        })}
                    </div>
                ))}
        </div>
    );
}
