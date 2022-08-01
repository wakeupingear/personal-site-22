import { INITIALS } from '@utils/pages/constants';
import Head from 'next/head';

export default function PageTitle({ title }: { title: string }) {
    return (
        <Head>
            <title>
                {INITIALS} - {title}
            </title>
        </Head>
    );
}
