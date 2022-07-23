import { useEffect, useState } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

interface Props {
    images: ReactImageGalleryItem[];
    className?: string;
}

export default function Gallery({ images: defaultImages, className }: Props) {
    const [images, setImages] = useState(defaultImages);

    useEffect(() => {
        setImages(defaultImages);
    }, [defaultImages]);

    return (
        <div
            className={`rounded-2xl overflow-hidden shadow-lg ${
                className || ''
            }`}
        >
            <ImageGallery items={images} />;
        </div>
    );
}
