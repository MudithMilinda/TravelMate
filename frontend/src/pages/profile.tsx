import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import BlogModal from "../Components/blog_modal";
import PhotoGrid from "../Components/blogs_grid";
import type { PhotoGridItem } from "../Components/blogs_grid";

const posts: PhotoGridItem[] = [
  {
    id: 101,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    location: "Black Forest, Germany",
    title: "Spruce shadows",
    author: "ritro_x_wanderlust",
    avatar: "https://i.pravatar.cc/80?img=68",
    likes: 412,
    tags: ["forest", "mist", "calm"],
    date: "Mar 3, 2025",
  },
  {
    id: 102,
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    location: "Tropical Bay",
    title: "Teal tides",
    author: "ritro_x_wanderlust",
    avatar: "https://i.pravatar.cc/80?img=68",
    likes: 955,
    tags: ["islands", "azure"],
    date: "Feb 22, 2025",
  },
  {
    id: 103,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    location: "Ridge Line",
    title: "Orange dusk",
    author: "ritro_x_wanderlust",
    avatar: "https://i.pravatar.cc/80?img=68",
    likes: 788,
    tags: ["sunset", "hike"],
    date: "Jan 18, 2025",
  },
  {
    id: 104,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    location: "Patagonia",
    title: "Edge of the world",
    author: "ritro_x_wanderlust",
    avatar: "https://i.pravatar.cc/80?img=68",
    likes: 1320,
    tags: ["patagonia", "wind"],
    date: "Dec 5, 2024",
  },
  {
    id: 105,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop",
    location: "Azores",
    title: "Lava coast",
    author: "ritro_x_wanderlust",
    avatar: "https://i.pravatar.cc/80?img=68",
    likes: 603,
    tags: ["coast", "volcano"],
    date: "Nov 12, 2024",
  },
  {
    id: 106,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    location: "Bali",
    title: "Lagoon glass",
    author: "ritro_x_wanderlust",
    avatar: "https://i.pravatar.cc/80?img=68",
    likes: 830,
    tags: ["bali", "sunset"],
    date: "Oct 8, 2024",
  },
];

const blogPosts: Partial<PhotoGridItem>[] = [
  {
    id: 201,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    location: "Patagonia",
    category: "Adventure",
    title: "Trekking Patagonia: Wind, Rain, and Wonder",
    excerpt: "The wind will push you back, the rain will soak you through — yet you’ll never want to leave.",
    author: "ritro_x_wanderlust",
    avatar: "https://i.pravatar.cc/80?img=68",
    date: "December 5, 2024",
    likes: 128,
  },
  {
    id: 202,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    location: "Black Forest",
    category: "Nature",
    title: "Fog Mornings and Pine Resin",
    excerpt: "How to slow-walk a dawn hike and actually hear the forest breathe.",
    author: "ritro_x_wanderlust",
    avatar: "https://i.pravatar.cc/80?img=68",
    date: "March 3, 2025",
    likes: 214,
  },
  {
    id: 203,
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    location: "Ridge Line",
    category: "Sunsets",
    title: "Chasing Orange Horizons",
    excerpt: "Why I always pack a headlamp and a thermos for dusk summits.",
    author: "ritro_x_wanderlust",
    avatar: "https://i.pravatar.cc/80?img=68",
    date: "January 18, 2025",
    likes: 305,
  },
];

const reels = [
  {
    id: "r1",
    cover:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    video:
      "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4",
    duration: "0:18",
    views: "24.1k",
    title: "Lagoon glass",
  },
  {
    id: "r2",
    cover:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
    video:
      "https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4",
    duration: "0:22",
    views: "18.7k",
    title: "Spruce shadows",
  },
  {
    id: "r3",
    cover:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    video:
      "https://storage.googleapis.com/coverr-main/mp4/Tropical.mp4",
    duration: "0:15",
    views: "31.5k",
    title: "Teal tides",
  },
];

export default function ProfilePage() {
  const [tab, setTab] = useState<"posts" | "blogs" | "reels">("posts");
  const [active, setActive] = useState<PhotoGridItem | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set());
  const [activeReel, setActiveReel] = useState<typeof reels[number] | null>(null);

  const items = tab === "posts" ? posts : (tab === "blogs" ? (blogPosts as PhotoGridItem[]) : []);

  const openAt = (idx: number) => {
    setActive(items[idx]);
    setActiveIndex(idx);
  };

  return (
    <div className="bg-[#0d1b2a] text-[#e4e7ec] min-h-screen">
      <Navbar />

        <div className="max-w-5xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-10">
        {/* Profile header */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://i.pravatar.cc/200?img=68"
            alt="Profile avatar"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/10"
          />

          <div className="flex-1 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-white">
              <span className="text-2xl font-semibold tracking-wide">ritro_x_wanderlust</span>
              <div className="flex gap-2 text-xs uppercase tracking-[0.2em] text-white/70">
                <button className="px-4 py-2 rounded-full border border-white/20 hover:border-white/60 transition">
                  Follow
                </button>
                <button className="px-4 py-2 rounded-full border border-white/20 hover:border-white/60 transition">
                  Message
                </button>
              </div>
            </div>

            <div className="flex gap-6 text-sm">
              <span><strong>126</strong> posts</span>
              <span><strong>18.4k</strong> followers</span>
              <span><strong>742</strong> following</span>
            </div>

            <div className="space-y-1 text-sm leading-relaxed">
              <div className="font-semibold text-white">Rithu Fernando</div>
              <div className="text-white/80">Travel photographer & trail runner.</div>
              <div className="text-white/70">Finding light in windy places.</div>
              <a className="text-[#f0d083]" href="https://travelmate.example/profile">
                travelmate.link/ritro
              </a>
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["Patagonia", "Forests", "Islands", "Gear"].map((h) => (
                <div key={h} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 flex items-center justify-center text-white/80 text-sm">
                    {h[0]}
                  </div>
                  <span className="text-xs text-white/70">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="mt-8 border-t border-b border-white/10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-8 sm:gap-10 text-xs sm:text-sm uppercase tracking-[0.2em]">
            {(["posts", "blogs", "reels"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`py-4 flex items-center gap-2 ${tab === t ? "text-white" : "text-white/50"}`}
              >
                <span className="text-lg">
                  {t === "posts" ? "▢" : t === "blogs" ? "✎" : "▶"}
                </span>
                {t}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        {tab === "posts" ? (
          <motion.div
            className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 mt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            {posts.map((p, idx) => (
              <button
                key={p.id}
                className="relative group aspect-square overflow-hidden"
                onClick={() => openAt(idx)}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-1">♥ {p.likes ?? 0}</span>
                  <span className="flex items-center gap-1">✎ {p.tags?.length ?? 0}</span>
                </div>
              </button>
            ))}
          </motion.div>
        ) : tab === "blogs" ? (
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <PhotoGrid posts={blogPosts} />
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            {reels.map((r) => (
              <button
                key={r.id}
                className="relative overflow-hidden rounded-xl aspect-[9/16] group"
                onClick={() => setActiveReel(r)}
              >
                <img
                  src={r.cover}
                  alt={r.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 w-full p-3 text-left text-white space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 backdrop-blur group-hover:bg-white/25 transition">
                      ▶
                    </span>
                    <span className="text-white/80">{r.views} views</span>
                    <span className="text-white/60 ml-auto">{r.duration}</span>
                  </div>
                  <div className="text-sm font-semibold line-clamp-1">{r.title}</div>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* LOAD MORE (optional) */}

      <Footer />

      {active && activeIndex !== null && (
        <BlogModal
          item={active}
          liked={likedIds.has(active.id)}
          onClose={() => {
            setActive(null);
            setActiveIndex(null);
          }}
          onNext={
            items.length > 1 && activeIndex !== null
              ? () => {
                  const next = (activeIndex + 1) % items.length;
                  setActive(items[next]);
                  setActiveIndex(next);
                }
              : undefined
          }
          onPrev={
            items.length > 1 && activeIndex !== null
              ? () => {
                  const prev = (activeIndex - 1 + items.length) % items.length;
                  setActive(items[prev]);
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

      {activeReel && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveReel(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 text-white/80 hover:text-white text-2xl"
              onClick={() => setActiveReel(null)}
              aria-label="Close"
            >
              ×
            </button>
            <video
              key={activeReel.id}
              src={activeReel.video}
              poster={activeReel.cover}
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              playsInline
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <div className="text-sm font-semibold">{activeReel.title}</div>
              <div className="text-xs text-white/70">{activeReel.views} views • {activeReel.duration}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
