import type { PhotoGridItem } from "./blogs_grid";

interface Props {
  item: PhotoGridItem;
  liked: boolean;
  onClose: () => void;
  onToggleLike: (id: number) => void;
}

const fallbackComments = [
  { id: "c1", author: "Ana", text: "Saving this trek for next spring!" },
  { id: "c2", author: "Leo", text: "The wind in Patagonia is unreal." },
  { id: "c3", author: "Mira", text: "Any tips for lightweight rain gear?" },
];

export default function BlogModal({ item, liked, onClose, onToggleLike }: Props) {
  const likes = (item.likes ?? 120) + (liked ? 1 : 0);
  const comments = item.comments ?? fallbackComments;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
      {/* Clickable backdrop */}
      <button
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 w-full h-full cursor-pointer"
      />

      <div className="relative bg-[#101820] border border-white/10 rounded-xl shadow-2xl w-full max-w-6xl h-screen md:h-[80vh] flex flex-col md:flex-row overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/70 hover:text-white text-xl"
          aria-label="Close"
        >
          ×
        </button>

        {/* Media pane */}
        <div className="flex-1 bg-black flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title || item.location}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Right rail */}
        <div className="w-full md:w-[360px] lg:w-[420px] bg-[#111b29] border-l border-white/10 flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
            {item.avatar && (
              <img
                src={item.avatar}
                alt={item.author}
                className="h-10 w-10 rounded-full border border-white/20"
              />
            )}
            <div className="flex-1">
              <div className="text-white text-sm font-semibold">
                {item.author || "TravelMate"}
              </div>
              <div className="text-white/50 text-xs">{item.date || "Just now"}</div>
            </div>
            <span className="text-white/50 text-xs uppercase tracking-[0.2em]">
              {item.category || "Story"}
            </span>
          </div>

          {/* Caption */}
          <div className="px-4 py-3 text-white text-sm border-b border-white/10 space-y-2">
            <p className="font-semibold">{item.title || item.location}</p>
            {item.excerpt && <p className="text-white/70">{item.excerpt}</p>}
          </div>

          {/* Comments scroll */}
          <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto">
            {comments.map((c) => (
              <div key={c.id} className="text-white/85 text-sm leading-relaxed">
                <span className="font-semibold text-white">{c.author}</span>{" "}
                <span className="text-white/80">{c.text}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="px-4 py-3 border-t border-white/10">
            <div className="flex items-center gap-4 text-white text-lg">
              <button
                onClick={() => onToggleLike(item.id)}
                className={`transition ${liked ? "text-[#f0d083]" : "text-white"}`}
                aria-label="Like"
              >
                ❤️
              </button>
              <span className="text-sm text-white/80">{likes} likes</span>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input
                className="flex-1 bg-transparent border-b border-white/20 text-white text-sm placeholder-white/50 focus:outline-none focus:border-[#f0d083] pb-1"
                placeholder="Add a comment..."
              />
              <button className="text-[#f0d083] text-sm font-semibold">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
