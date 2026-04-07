import { useState } from "react";

interface GalleryItem {
    id: number;
    image: string;
    location: string;
    title: string;
    user: string;
    avatar: string;
    likes: string;
    category: string;
    featured?: boolean;
}

export default function GalleryCard({ item }: { item: GalleryItem }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative overflow-hidden rounded-xl cursor-pointer mb-3 break-inside-avoid"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img
                src={item.image}
                alt={item.title}
                className={`w-full block transition-transform duration-500 ${hovered ? "scale-105" : "scale-100"
                    }`}
                style={{ borderRadius: "12px" }}
            />

            {/* Overlay */}
            <div
                className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300"
                style={{
                    background:
                        "linear-gradient(to top, rgba(10,23,38,0.88) 0%, transparent 55%)",
                    borderRadius: "12px",
                    opacity: hovered ? 1 : 0,
                }}
            >
                <p className="mb-1 uppercase tracking-widest text-[#f0d083] text-[9px]">
                    {item.location}
                </p>

                <p className="mb-2 text-white text-[15px] font-semibold">
                    {item.title}
                </p>

                <div className="flex items-center gap-3">
                    <img
                        src={item.avatar}
                        alt={item.user}
                        className="w-6 h-6 rounded-full object-cover border border-white/50"
                    />

                    <span className="text-[9px] text-white/70">
                        {item.user}
                    </span>

                    <div className="ml-auto flex items-center gap-1 text-[10px] text-white/70">
                        <span className="text-[#f0d083]">♥</span>
                        {item.likes}
                    </div>
                </div>
            </div>
        </div>
    );
}