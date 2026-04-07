import { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import SearchBar from "../Components/search";

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

function GalleryCard({ item }: { item: GalleryItem }) {
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
                className={`w-full block transition-transform duration-500 ${hovered ? "scale-105" : "scale-100"}`}
                style={{ borderRadius: "12px" }}
            />

            {/* Overlay */}
            <div
                className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300"
                style={{
                    background: "linear-gradient(to top, rgba(10,23,38,0.88) 0%, transparent 55%)",
                    borderRadius: "12px",
                    opacity: hovered ? 1 : 0,
                }}
            >
                <p
                    className="mb-1 uppercase tracking-widest"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "#f0d083", letterSpacing: "0.2em" }}
                >
                    {item.location}
                </p>
                <p
                    className="mb-2 text-white"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px" }}
                >
                    {item.title}
                </p>
                <div className="flex items-center gap-3">
                    <img
                        src={item.avatar}
                        alt={item.user}
                        className="w-6 h-6 rounded-full object-cover"
                        style={{ border: "1.5px solid rgba(255,255,255,0.5)" }}
                    />
                    <span
                        style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em" }}
                    >
                        {item.user}
                    </span>
                    <div
                        className="ml-auto flex items-center gap-1"
                        style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: "rgba(255,255,255,0.7)" }}
                    >
                        <span style={{ color: "#f0d083", fontSize: "11px" }}>♥</span>
                        {item.likes}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function GalleryPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [search, setSearch] = useState("");

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
            <div className="max-w-5xl mx-auto px-10 pt-32 pb-10">
                <div className="flex items-center gap-4 mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#f0d083" }}>
                    <span className="inline-block w-8 h-px bg-[#f0d083]" />
                    <span>Explore the World</span>
                </div>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,5vw,52px)", color: "#fff", fontWeight: 400, lineHeight: 1.15, marginBottom: "12px" }}>
                    Moments Worth<br /><em>Remembering</em>
                </h1>
                <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: "480px" }}>
                    Real photos from real travellers. Discover places through the eyes of those who've been there.
                </p>
 {/* SEARCH */}
<SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onSearch={handleSearch}
            />


            </div>

           

            

            {/* FILTER TABS */}
            <div className="max-w-5xl mx-auto px-10 mb-10 flex flex-wrap gap-2">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "10px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            padding: "8px 18px",
                            borderRadius: "100px",
                            border: activeFilter === f ? "none" : "0.5px solid rgba(255,255,255,0.18)",
                            background: activeFilter === f ? "#f0d083" : "transparent",
                            color: activeFilter === f ? "#0a1726" : "rgba(255,255,255,0.55)",
                            cursor: "pointer",
                            transition: "all 0.2s",
                        }}
                    >
                        {f}
                    </button>
                ))}
            </div>




            {/* MASONRY GALLERY */}
            <div
                className="max-w-5xl mx-auto px-10 pb-20"
                style={{ columns: "3", columnGap: "12px" }}
            >
                {filtered.length > 0 ? (
                    filtered.map((item) => <GalleryCard key={item.id} item={item} />)
                ) : (
                    <div className="col-span-3 text-center py-20" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Playfair Display', serif", fontSize: "22px" }}>
                        No results found
                    </div>
                )}
            </div>

            {/* LOAD MORE */}
            <div className="text-center pb-16">
                <button
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", border: "0.5px solid rgba(255,255,255,0.2)", padding: "14px 36px", borderRadius: "100px", color: "#e4e7ec", background: "transparent", cursor: "pointer" }}
                >
                    Load More Photos
                </button>
            </div>

            {/* FOOTER */}
            <Footer />

        </div>
    );
}