import dynamic from 'next/dynamic';
import { HomePage } from '@components/Pages';

const PDFViewer = dynamic(() => import('@components/shared/PDFViewer'), {
    ssr: false,
});

export default function index() {
    return (
        <HomePage>
            <div className="flex w-full h-full justify-center items-start">
                <PDFViewer
                    download
                    file="https://raw.githubusercontent.com/willf668/resume/main/WillFarhatResume.pdf"
                />
            </div>
        </HomePage>
    );
}
