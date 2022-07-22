import { useRef, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { PuffLoader } from 'react-spinners';
import ClickableText from '@shared/clickableText/ClickableText';

interface Props {
    file: string;
    download?: boolean;
}

export default function PDFViewer({ download, file }: Props) {
    const [pageNumber, setPageNumber] = useState(1);
    const doc = useRef<Document>(null);

    return (
        <div className="flex justify-center items-center flex-col w-3/4">
            <Document
                file={file}
                ref={doc}
                className="flex flex-col justify-center items-center w-full h-full"
                loading={<PuffLoader />}
            >
                <Page pageNumber={pageNumber} className="shadow-md" />

                {download && (
                    <ClickableText onclick={() => window.open(file, '_blank')}>
                        Download
                    </ClickableText>
                )}
            </Document>
        </div>
    );
}
