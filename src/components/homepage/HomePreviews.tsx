import { isMobile } from 'react-device-detect';
import Sticky from 'react-stickynode';
import { usePageData } from '../Wrapper';
import styles from './homePreviews.module.css';
import Preview from './Preview';

interface Props {
    onSide: boolean;
}

export default function HomePreviews({ onSide }: Props) {
    const { PAGE_DATA } = usePageData();
    return (
        <Sticky
            enabled={!isMobile && onSide}
            className={styles.container}
            top={190}
        >
            <div className={styles.container}>
                {PAGE_DATA &&
                    PAGE_DATA.components.map((column, index) => (
                        <div
                            key={index + '-' + column.components.length}
                            className={`${styles.column} ${
                                onSide
                                    ? column.sideClassName ||
                                      'h-[4rem] sm:h-[8rem]'
                                    : column.className ||
                                      'h-[9rem] h-[sm:18rem]'
                            }`}
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
        </Sticky>
    );
}
