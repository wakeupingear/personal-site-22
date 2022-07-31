import { INITIALS } from '@utils/pages/constants';
import Head from 'next/head';
import React, { useEffect } from 'react';
import styles from './art.module.css';
import pageStyles from '@page-component/pages.module.css';

export default function Art() {
    const artRef = React.useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!artRef.current) return;
        (function (d, s, id) {
            let js;
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.setAttribute('id', id);
            js.setAttribute('src', 'https://embedsocial.com/cdn/ht.js');
            d.getElementsByTagName('head')[0].appendChild(js);
        })(document, 'script', 'EmbedSocialHashtagScript');

        return () => {
            if (!artRef.current) return;
            const script = document.getElementById('EmbedSocialHashtagScript');
            if (script) script.remove();
        };
    }, [artRef]);

    return (
        <>
            <Head>
                <title>{INITIALS} - Art</title>
            </Head>
            <h1>I've created some art</h1>
            <p>
                Some with<u>pixels</u>
            </p>
            <p>
                And some with<u>pencils</u>
            </p>
            <p className={pageStyles.newLine}>From time to time, I also do</p>
            <h1 className="!my-0">Daily art</h1>
            <div
                className={`embedsocial-hashtag ${styles.social} w-[95%] flex justify-center`}
                data-ref="fcb6e5f4296d3a0992e3698c816d5db3472ca0fc"
                ref={artRef}
            ></div>
        </>
    );
}
