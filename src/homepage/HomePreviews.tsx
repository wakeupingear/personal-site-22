import Image from 'next/image';
import { usePageData } from '../../pages';
import styles from './homePreviews.module.css';

export default function HomePreviews() {
    const { pageData } = usePageData();
    return (
        <>
            {pageData.components.map((column, index) => (
                <div
                    key={index + '-' + column.components.length}
                    className={styles.column}
                    style={{
                        height: column.height || '24rem',
                    }}
                >
                    {column.components.map((component) => {
                        return (
                            <div
                                className={styles.imageHolder}
                                key={component.name}
                                style={
                                    component.width
                                        ? {
                                              width: component.width + '%',
                                          }
                                        : {
                                              flexGrow: 1,
                                          }
                                }
                            >
                                <Image
                                    src={component.image}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        );
                    })}
                </div>
            ))}
        </>
    );
}
