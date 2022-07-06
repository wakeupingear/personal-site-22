import { usePageData } from '../Wrapper';
import styles from './homePreviews.module.css';
import Preview from './Preview';

export default function HomePreviews() {
    const { PAGE_DATA } = usePageData();
    return (
        <div className={styles.container}>
            {PAGE_DATA &&
                PAGE_DATA.components.map((column, index) => (
                    <div
                        key={index + '-' + column.components.length}
                        className={styles.column}
                        style={{
                            height: column.height || '24rem',
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
