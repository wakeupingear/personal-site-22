import dynamic from 'next/dynamic';
import { HomePage } from '../Pages';
export { getServerSideProps } from '../../utils/homeServerProps';

const PDFViewer = dynamic(() => import('../../src/shared/PDFViewer'), {
    ssr: false,
});

export default function index() {
    return (
        <HomePage>
            <div className="flex w-full h-full justify-center">
                <PDFViewer
                    download
                    file="https://raw.githubusercontent.com/willf668/resume/main/WillFarhatResume.pdf"
                />
            </div>
        </HomePage>
    );
}
