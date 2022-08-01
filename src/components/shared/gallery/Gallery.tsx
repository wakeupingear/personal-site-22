import { useEffect, useState } from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

export type ImageData = (ReactImageGalleryItem | string)[];

interface Props {
    images: ImageData;
    className?: string;
}

const galleryImages = (images: ImageData) => {
    return images.map((src) => {
        if (typeof src !== 'string') return src;
        return {
            original: src,
            thumbnail: src,
        };
    });
};

export default function Gallery({ images: defaultImages, className }: Props) {
    const [images, setImages] = useState<ReactImageGalleryItem[]>([]);

    useEffect(() => {
        setImages(galleryImages(defaultImages));
    }, [defaultImages]);

    return (
        <div
            className={`rounded-3xl overflow-hidden shadow-lg ${
                className || ''
            }`}
        >
            <ImageGallery showThumbnails={false} items={images} />
        </div>
    );
}
