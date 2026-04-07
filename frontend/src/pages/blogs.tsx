import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import LoadMoreButton from "../Components/load_more";
import PhotoGrid from "../Components/blogs_grid";
import SearchBar from "../Components/search";

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
            <div className="max-w-5xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-10 space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                    style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "10px",
                        letterSpacing: "0.35em",
                        textTransform: "uppercase",
                        color: "#f0d083",
                    }}
                >
                    <span className="inline-block w-8 h-px bg-[#f0d083]" />
                    <span>Travel Stories</span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.05 }}
                    viewport={{ once: true }}
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "clamp(32px,5vw,52px)",
                        color: "#fff",
                        fontWeight: 400,
                        lineHeight: 1.15,
                        marginBottom: "4px",
                    }}
                >
                    Words From
                    <br />
                    <em>The Road</em>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: "16px",
                        color: "rgba(255,255,255,0.6)",
                        fontWeight: 300,
                        maxWidth: "520px",
                    }}
                >
                    Real stories from real travellers. Tips, reflections, and the moments that made the journey worth it.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    viewport={{ once: true }}
                >
                    <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} onSearch={() => { }} placeholder="Search stories or authors..." />
                </motion.div>
            </div>

            {/* FILTERS */}
            <motion.div
                className="max-w-5xl mx-auto px-6 md:px-10 mb-12 flex flex-wrap gap-2 items-center"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
            >
                {filters.map((f, i) => (
                    <motion.button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-4 py-2 rounded-full text-xs uppercase transition ${activeFilter === f
                                ? "bg-[#f0d083] text-black"
                                : "border border-white/20 text-white/60 hover:bg-white/10"
                            }`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.02 * i, duration: 0.3 }}
                    >
                        {f}
                    </motion.button>
                ))}

            </motion.div>

            {/* POSTS GRID */}
            <motion.div
                className="max-w-5xl mx-auto px-6 md:px-10 pb-20"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            >
                {filtered.length > 0 ? (
                    <PhotoGrid posts={filtered} />
                ) : (
                    <p className="text-white/50">No posts found.</p>
                )}
            </motion.div>

            {/* LOAD MORE */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <LoadMoreButton onClick={() => console.log("Load more")} />
            </motion.div>

            <Footer />
        </div>
    );
}
