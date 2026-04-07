import { useState } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import LoadMoreButton from "../Components/load_more";
import PhotoGrid from "../Components/blogs_grid";

const filters = [
    "All",
    "Mountains",
    "Beaches",
    "Cities",
    "Culture",
    "Adventure",
    "Deserts",
    "Islands",
];

// ✅ Clean & consistent data
const postsData = [
    {
        id: 1,
        title: "Exploring the Alps",
        category: "Mountains",
        excerpt:
            "Snow-covered peaks, fresh alpine air, and endless hiking trails make the Alps a dream destination.",
        author: "John Doe",
        avatar: "https://i.pravatar.cc/48?img=12",
        date: "February 10, 2025",
        image:
            "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Beach Life in Bali",
        category: "Beaches",
        excerpt:
            "Golden sands, turquoise waters, and unforgettable sunsets — Bali is the perfect tropical escape.",
        author: "Jane Smith",
        avatar: "https://i.pravatar.cc/48?img=32",
        date: "January 12, 2025",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Trekking Patagonia",
        category: "Adventure",
        excerpt:
            "Wild winds, rugged landscapes, and raw beauty — Patagonia challenges and rewards every traveler.",
        author: "Valeria Hikes",
        avatar: "https://i.pravatar.cc/48?img=44",
        date: "December 5, 2024",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    },

];

export default function BlogsPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [search, setSearch] = useState("");

    const filtered = postsData.filter((post) => {
        const matchFilter =
            activeFilter === "All" || post.category === activeFilter;

        const matchSearch =
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.category.toLowerCase().includes(search.toLowerCase()) ||
            post.author.toLowerCase().includes(search.toLowerCase());

        return matchFilter && matchSearch;
    });

    return (
        <div className="bg-[#0d1b2a] text-[#e4e7ec] min-h-screen">
            <Navbar />

            {/* HEADER */}
            <div className="max-w-5xl mx-auto px-10 pt-32 pb-10"> <div className="flex items-center gap-4 mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#f0d083", }} > <span className="inline-block w-8 h-px bg-[#f0d083]" /> <span>Travel Stories</span> </div> <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,5vw,52px)", color: "#fff", fontWeight: 400, lineHeight: 1.15, marginBottom: "12px", }} > Words From<br /> <em>The Road</em> </h1> <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: "480px" }}> Real stories from real travellers. Tips, reflections, and the moments that made the journey worth it. </p> </div>

            {/* FILTERS */}
            <div className="max-w-5xl mx-auto px-10 mb-12 flex flex-wrap gap-2 items-center">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-4 py-2 rounded-full text-xs uppercase transition ${activeFilter === f
                                ? "bg-[#f0d083] text-black"
                                : "border border-white/20 text-white/60 hover:bg-white/10"
                            }`}
                    >
                        {f}
                    </button>
                ))}
                
            </div>

            {/* POSTS GRID */}
            <div className="max-w-5xl mx-auto px-10 pb-20">
                {filtered.length > 0 ? (
                    <PhotoGrid posts={filtered} />
                ) : (
                    <p className="text-white/50">No posts found.</p>
                )}
            </div>

            {/* LOAD MORE */}
            <LoadMoreButton onClick={() => console.log("Load more")} />

            <Footer />
        </div>
    );
}
