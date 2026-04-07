import { useState } from "react";
import BlogModal from "./blog_modal";

export interface PhotoGridItem {
    id: number;
    image: string;
    location: string;
    category?: string;
    title?: string;
    excerpt?: string;
    author?: string;
    avatar?: string;
    date?: string;
    likes?: number;
    comments?: { id: string; author: string; text: string }[];
}

interface PhotoGridProps {
    posts?: Partial<PhotoGridItem>[];
}

const defaultItems: PhotoGridItem[] = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        location: "Patagonia",
        category: "Adventure",
        title: "Trekking Patagonia: Wind, Rain, and Wonder",
        excerpt:
            "Patagonia is not for the faint-hearted. The wind will push you back, the rain will soak you through — and yet, you'll never want to leave.",
        author: "Valeria Hikes",
        avatar: "https://i.pravatar.cc/48?img=44",
        date: "December 5, 2024",
        likes: 128,
        comments: [
            { id: "c1", author: "Ana", text: "Saving this trek for next spring!" },
            { id: "c2", author: "Leo", text: "The wind in Patagonia is unreal." },
            { id: "c3", author: "Mira", text: "Any tips for lightweight rain gear?" },
        ],
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
        location: "Desert Dunes",
        category: "Deserts",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        location: "Azure Coast",
        category: "Beaches",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        location: "Mountain Pass",
        category: "Mountains",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        location: "Ridge Line",
        category: "Adventure",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        location: "Forest Roots",
        category: "Nature",
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
        location: "Tropical Bay",
        category: "Islands",
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
        location: "Kingfisher Watch",
        category: "Wildlife",
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        location: "Sunset Crest",
        category: "Adventure",
    },
];

function GridCard({ item, onClick }: { item: PhotoGridItem; onClick: (i: PhotoGridItem) => void }) {
    return (
        <div
            className="relative w-full h-full overflow-hidden rounded-xl group cursor-pointer"
            onClick={() => onClick(item)}
        >

            {/* IMAGE */}
            <img
                src={item.image}
                alt={item.location}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* DEFAULT VIEW */}
            <div className="absolute inset-0 flex flex-col justify-end p-4
        bg-gradient-to-t from-[#0a1726]/95 via-[#0a1726]/60 to-transparent">

                {item.category && (
                    <p className="text-[10px] tracking-widest uppercase text-[#f0d083] mb-1">
                        {item.category}
                    </p>
                )}

                <p className="text-white text-sm leading-tight line-clamp-2">
                    {item.title || item.location}
                </p>

                {item.excerpt && (
                    <p className="text-white/70 text-xs mt-1 line-clamp-2">
                        {item.excerpt}
                    </p>
                )}

                {(item.author || item.date) && (
                    <div className="flex items-center gap-2 mt-2">
                        {item.avatar && (
                            <img
                                src={item.avatar}
                                alt={item.author}
                                className="w-6 h-6 rounded-full border border-white/30"
                            />
                        )}
                        <div className="text-[10px] text-white/70 leading-tight">
                            {item.author && <div>{item.author}</div>}
                            {item.date && (
                                <div className="text-white/50">{item.date}</div>
                            )}
                        </div>
                    </div>
                )}

                <span className="text-[10px] uppercase text-[#f0d083] mt-2">
                    See More →
                </span>
            </div>

            {/* HOVER FULL VIEW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-300 bg-[#0a1726]/95 p-4 flex flex-col justify-end">

                {item.category && (
                    <p className="text-[10px] uppercase text-[#f0d083] mb-1">
                        {item.category}
                    </p>
                )}

                <p className="text-white text-sm mb-2">
                    {item.title}
                </p>

                {item.excerpt && (
                    <p className="text-white/70 text-xs mb-3">
                        {item.excerpt}
                    </p>
                )}

                {(item.author || item.date) && (
                    <div className="flex items-center gap-2 mb-2">
                        {item.avatar && (
                            <img
                                src={item.avatar}
                                alt={item.author}
                                className="w-7 h-7 rounded-full border border-white/30"
                            />
                        )}
                        <div className="text-[11px] text-white/80">
                            {item.author && <div>{item.author}</div>}
                            {item.date && (
                                <div className="text-white/50 text-[10px]">
                                    {item.date}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <span className="text-xs text-[#f0d083]">
                    Read Full Story →
                </span>
            </div>
        </div>
    );
}

export default function PhotoGrid({ posts = [] }: PhotoGridProps) {
    const [active, setActive] = useState<PhotoGridItem | null>(null);
    const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

    const mapped: PhotoGridItem[] = posts.length
        ? posts.map((p, i) => ({
            id: p.id ?? i,
            image: p.image || defaultItems[i % defaultItems.length].image,
            location: p.location ?? p.title ?? "Unknown",
            category: p.category,
            title: p.title,
            excerpt: p.excerpt,
            author: p.author,
            avatar: p.avatar,
            date: p.date,
            likes: p.likes,
            comments: p.comments,
        }))
        : defaultItems;

    const pattern = [
        { col: "span 2", row: "span 2" },
        { col: "span 1", row: "span 1" },
        { col: "span 1", row: "span 1" },
        { col: "span 2", row: "span 1" },
        { col: "span 1", row: "span 2" },
        { col: "span 1", row: "span 1" },
        { col: "span 2", row: "span 1" },
        { col: "span 1", row: "span 1" },
    ];

    return (
        <>
            <div
                className="grid w-full"
                style={{
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridAutoRows: "160px",
                    gap: "12px",
                    gridAutoFlow: "dense",
                }}
            >
                {mapped.slice(0, 12).map((item, i) => {
                    const span = pattern[i % pattern.length];

                    return (
                        <div
                            key={item.id}
                            style={{
                                gridColumn: span.col,
                                gridRow: span.row,
                            }}
                        >
                            <GridCard item={item} onClick={setActive} />
                        </div>
                    );
                })}
            </div>

            {active && (
                <BlogModal
                    item={active}
                    liked={likedIds.has(active.id)}
                    onClose={() => setActive(null)}
                    onToggleLike={(id) =>
                        setLikedIds((prev) => {
                            const next = new Set(prev);
                            if (next.has(id)) next.delete(id);
                            else next.add(id);
                            return next;
                        })
                    }
                />
            )}
        </>
    );
}
