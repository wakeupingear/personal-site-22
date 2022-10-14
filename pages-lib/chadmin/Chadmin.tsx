import React, { useEffect } from 'react';
import pageStyles from '@page-component/pages.module.css';
import PageTitle from '@components/PageTitle';
import { useAuth } from '@components/Auth';

function ChadminContent() {
    return (
        <>
            <PageTitle title="CHADMIN" hideInitials />
            <div className={pageStyles.titleHolder}>
                <h1 className={pageStyles.title}>The Chadmin Page</h1>
            </div>
        </>
    );
}

function UnauthorizedContent() {
    return (
        <>
            <PageTitle title="Uh oh..." hideInitials />
            <div className={pageStyles.titleHolder}>
                <h1 className={pageStyles.title}>You shouldn't be here!</h1>
            </div>
            <p className={pageStyles.text}>
                No offense. But this is a secret page, see.
            </p>
        </>
    );
}

export default function Chadmin() {
    const { loggedIn } = useAuth();

    return <>{loggedIn ? <ChadminContent /> : <UnauthorizedContent />}</>;
}
