import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Page } from '@components/pages/Pages';
import styles from './404.module.css';

export default function index() {
    return (
        <Page defaultContainer={false}>
            <div className={styles.container}>
                <Head>
                    <title>Uh oh...</title>
                </Head>
                <div className={styles.header}>
                    That's a 404 error, buckaroo
                </div>
                <div className={styles.image}>
                    <Image
                        src="/thanus.gif"
                        layout="fill"
                        objectFit="contain"
                        alt="thanus"
                    />
                    <Link href="/">
                        <a className={styles.link}>
                            Click here to return to the meme zone!
                        </a>
                    </Link>
                </div>
                <div className={styles.text}>
                    " 'If you're seeing this, it means you're on the right
                    website but you're on the wrong page.'
                </div>
                <div className={styles.text}>-Bernie Sanders"</div>
                <div className={styles.text}>-Michael Scott</div>
            </div>
        </Page>
    );
}
