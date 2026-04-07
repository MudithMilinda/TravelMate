import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import SearchBar from "../Components/search";
import LoadMoreButton from "../Components/load_more";
import GalleryCard, { type GalleryItem } from "../Components/gallery_card";
import GalleryModal from "../Components/gallery_modal";

const galleryItems = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
        location: "Switzerland",
        title: "First Light on the Alps",
        user: "@annatravel",
        avatar: "https://i.pravatar.cc/48?img=12",
        likes: "2.1k",
        category: "Mountains",
        featured: true,
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=600&auto=format&fit=crop",
        location: "Santorini, Greece",
        title: "Golden Hour",
        user: "@lucasm",
        avatar: "https://i.pravatar.cc/48?img=5",
        likes: "1.8k",
        category: "Cities",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop",
        location: "Pacific Northwest",
        title: "Into the Mist",
        user: "@zara_explores",
        avatar: "https://i.pravatar.cc/48?img=8",
        likes: "943",
        category: "Forests",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop",
        location: "Maldives",
        title: "Crystal Waters",
        user: "@mia.world",
        avatar: "https://i.pravatar.cc/48?img=15",
        likes: "3.4k",
        category: "Beaches",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop",
        location: "Kyoto, Japan",
        title: "Bamboo Path",
        user: "@kenji_wanders",
        avatar: "https://i.pravatar.cc/48?img=20",
        likes: "2.7k",
        category: "Forests",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
        location: "Bali, Indonesia",
        title: "Paradise Found",
        user: "@sunsetlover",
        avatar: "https://i.pravatar.cc/48?img=25",
        likes: "1.2k",
        category: "Beaches",
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop",
        location: "Paris, France",
        title: "La Ville Lumière",
        user: "@sophie.r",
        avatar: "https://i.pravatar.cc/48?img=30",
        likes: "4.1k",
        category: "Cities",
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=600&auto=format&fit=crop",
        location: "Sahara, Morocco",
        title: "Dunes at Dusk",
        user: "@nomad_kai",
        avatar: "https://i.pravatar.cc/48?img=33",
        likes: "876",
        category: "Deserts",
    },
    {
        id: 9,
        image: "https://images.unsplash.com/photo-1527004013197-933b0a3b9398?q=80&w=600&auto=format&fit=crop",
        location: "Iceland",
        title: "Aurora Borealis",
        user: "@nordic_lens",
        avatar: "https://i.pravatar.cc/48?img=40",
        likes: "5.6k",
        category: "Mountains",
    },
    {
        id: 10,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
        location: "Patagonia",
        title: "Edge of the World",
        user: "@valeria_hikes",
        avatar: "https://i.pravatar.cc/48?img=44",
        likes: "1.9k",
        category: "Mountains",
    },
    {
        id: 11,
        image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=600&auto=format&fit=crop",
        location: "Venice, Italy",
        title: "Morning Canals",
        user: "@marco.v",
        avatar: "https://i.pravatar.cc/48?img=50",
        likes: "2.3k",
        category: "Cities",
    },
    {
        id: 12,
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=600&auto=format&fit=crop",
        location: "Azores, Portugal",
        title: "Volcanic Coast",
        user: "@island.life",
        avatar: "https://i.pravatar.cc/48?img=55",
        likes: "1.1k",
        category: "Islands",
    },
];

const filters = ["All", "Mountains", "Beaches", "Cities", "Forests", "Deserts", "Islands", "Architecture"];
export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [active, setActive] = useState<GalleryItem | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [likedIds, setLikedIds] = useState<Set<number>>(new Set());

    const handleSearch = () => {
        console.log("Searching:", search);
    };

    const filtered = galleryItems.filter((item) => {
        const matchFilter =
            activeFilter === "All" || item.category === activeFilter;

        const matchSearch =
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.location.toLowerCase().includes(search.toLowerCase()) ||
            item.user.toLowerCase().includes(search.toLowerCase());

        return matchFilter && matchSearch;
    });


    return (
        <div className="bg-[#0d1b2a] text-[#e4e7ec] min-h-screen" >

            {/* NAVBAR */}
            <Navbar />

            {/* EXPLORE HEADER */}
            <div className="max-w-5xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-10 space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#f0d083" }}>
                    <span className="inline-block w-8 h-px bg-[#f0d083]" />
                    <span>Explore the World</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.05 }}
                    viewport={{ once: true }}
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,5vw,52px)", color: "#fff", fontWeight: 400, lineHeight: 1.15 }}>
                    Moments Worth<br /><em>Remembering</em>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", fontWeight: 300, maxWidth: "520px" }}>
                    Real photos from real travellers. Discover places through the eyes of those who've been there.
                </motion.p>
                {/* SEARCH */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    viewport={{ once: true }}
                >
                    <SearchBar
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onSearch={handleSearch}
                    />
                </motion.div>


            </div>





            {/* FILTER TABS */}
            <motion.div
                className="max-w-5xl mx-auto px-6 md:px-10 mb-10 flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
            >
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition border ${activeFilter === f
                                ? "bg-[#f0d083] text-[#0a1726] border-[#f0d083]"
                                : "border-white/20 text-white/60 hover:bg-white/10"
                            }`}
                        style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                        {f}
                    </button>
                ))}
            </motion.div>




            {/* MASONRY GALLERY */}
            <motion.div
                className="max-w-5xl mx-auto px-6 md:px-10 pb-20 columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            >
                {filtered.length > 0 ? (
                    filtered.map((item, idx) => (
                        <GalleryCard
                            key={item.id}
                            item={item as GalleryItem}
                            onClick={() => {
                                setActive(item as GalleryItem);
                                setActiveIndex(idx);
                            }}
                        />
                    ))
                ) : (
                    <div className="col-span-3 text-center py-20" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Playfair Display', serif", fontSize: "22px" }}>
                        No results found
                    </div>
                )}
            </motion.div>

            {/* LOAD MORE */}
            <LoadMoreButton
                onClick={() => console.log("Load more clicked")}
            />

            {/* FOOTER */}
            <Footer />

            {active && activeIndex !== null && (
                <GalleryModal
                    item={active}
                    liked={likedIds.has(active.id)}
                    onClose={() => {
                        setActive(null);
                        setActiveIndex(null);
                    }}
                    onNext={
                        filtered.length > 1 && activeIndex !== null
                            ? () => {
                                const next = (activeIndex + 1) % filtered.length;
                                setActive(filtered[next] as GalleryItem);
                                setActiveIndex(next);
                            }
                            : undefined
                    }
                    onPrev={
                        filtered.length > 1 && activeIndex !== null
                            ? () => {
                                const prev = (activeIndex - 1 + filtered.length) % filtered.length;
                                setActive(filtered[prev] as GalleryItem);
                                setActiveIndex(prev);
                            }
                            : undefined
                    }
                    onToggleLike={(id) =>
                        setLikedIds((prev) => {
                            const next = new Set(prev);
                            if (next.has(id)) {
                                next.delete(id);
                            } else {
                                next.add(id);
                            }
                            return next;
                        })
                    }
                />
            )}

        </div>
    );
}
