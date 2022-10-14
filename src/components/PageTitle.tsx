import { INITIALS } from '@utils/pages/constants';
import Head from 'next/head';

export default function PageTitle({
    title,
    hideInitials = false,
}: {
    title: string;
    hideInitials?: boolean;
}) {
    return (
        <Head>
            <title>{!hideInitials ? `${INITIALS} - ${title}` : title}</title>
        </Head>
    );
}
