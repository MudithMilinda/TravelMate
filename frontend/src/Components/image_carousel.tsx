import { useState, useEffect } from "react";

interface ImageCarouselProps {
    images: string[];
    duration?: number;
}

export default function ImageCarousel({
    images,
    duration = 7000,
}: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, duration);

        return () => clearInterval(interval);
    }, [images.length, duration]);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url(${image})`,
                        opacity: index === currentIndex ? 1 : 0,
                    }}
                />
            ))}
        </div>
    );
}
