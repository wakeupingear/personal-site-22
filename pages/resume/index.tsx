import dynamic from 'next/dynamic';
import React from 'react';
import Wrapper from '../../src/Wrapper';
import { HomepageProps } from '../../utils/homeServerProps';
export { getServerSideProps } from '../../utils/homeServerProps';

const PDFViewer = dynamic(() => import('../../src/shared/PDFViewer'), {
    ssr: false,
});

export default function index(props: HomepageProps) {
    return (
        <Wrapper {...props}>
            <div className="flex w-full h-full justify-center">
                <PDFViewer
                    download
                    file="https://raw.githubusercontent.com/willf668/resume/main/WillFarhatResume.pdf"
                />
            </div>
        </Wrapper>
    );
}
