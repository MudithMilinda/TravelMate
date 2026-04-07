import { useEffect, useRef, useState } from "react";
import type { PhotoGridItem } from "./blogs_grid";

interface Comment {
  id: string;
  author: string;
  text: string;
  avatar?: string;
  time?: string;
  likes?: number;
  replies?: { id: string; author: string; text: string }[];
}

interface Props {
  item: PhotoGridItem;
  liked: boolean;
  onClose: () => void;
  onToggleLike: (id: number) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const fallbackComments: Comment[] = [
  {
    id: "c1",
    author: "black__shadow__46",
    text: "Beautiful ❤️",
    time: "5w",
    likes: 1,
    replies: [{ id: "r1", author: "ritro_x_wanderlust", text: "Thank you 🙏" }],
  },
  {
    id: "c2",
    author: "sachinkumar.hardik",
    text: "Wow😍❤️",
    time: "5w",
    likes: 1,
    replies: [{ id: "r2", author: "ritro_x_wanderlust", text: "🙌" }],
  },
  {
    id: "c3",
    author: "ana.travels",
    text: "Saving this for next spring!",
    time: "4w",
    likes: 3,
    replies: [],
  },
  {
    id: "c4",
    author: "leo_adventures",
    text: "The vibes here are unreal 🌿",
    time: "3w",
    likes: 2,
    replies: [],
  },
];

export default function BlogModal({ item, liked, onClose, onToggleLike, onNext, onPrev }: Props) {
  const likes = (item.likes ?? 120) + (liked ? 1 : 0);
  const comments = (item.comments as Comment[]) ?? fallbackComments;

  const hashtags = item.tags ?? ["explore", "peace", "love", "bikeride", "instagood"];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [wheelLock, setWheelLock] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        onNext?.();
      } else if (e.key === "ArrowLeft") {
        onPrev?.();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onNext, onPrev, onClose]);

  // Lock body scroll while modal is open
  useEffect(() => {
    const { overflow, position } = document.body.style;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.position = position;
    };
  }, []);

  // Scroll-to-advance: if user scrolls beyond edges of the comments pane
  const handleWheelCapture = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!onNext && !onPrev) return;
    if (wheelLock) return;
    const el = scrollRef.current;
    if (!el) return;
    const atTop = el.scrollTop <= 0;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;

    if (e.deltaY > 30 && atBottom) {
      setWheelLock(true);
      onNext?.();
      setTimeout(() => setWheelLock(false), 450);
    } else if (e.deltaY < -30 && atTop) {
      setWheelLock(true);
      onPrev?.();
      setTimeout(() => setWheelLock(false), 450);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6 overscroll-none"
      onWheelCapture={handleWheelCapture}
    >
      {/* Backdrop */}
      <button
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 w-full h-full cursor-default"
      />

      {/* Modal container */}
      <div
        className="relative w-full max-w-5xl bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)] flex flex-col md:flex-row max-h-[90vh] h-[85vh] md:h-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={item.title || item.location || "Blog details"}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 text-white/80 hover:text-white text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {/* ── LEFT: Media pane ── */}
        <div
          className="md:w-[52%] w-full bg-black flex items-center justify-center border-b border-[#262626] md:border-b-0 md:border-r h-64 md:h-auto"
        >
          <img
            src={item.image}
            alt={item.title || item.location}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Next/Prev controls (desktop & touch) */}
        {(onPrev || onNext) && (
          <>
            {onPrev && (
              <button
                aria-label="Previous post"
                className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 border border-white/10 text-white w-11 h-11 rounded-full items-center justify-center backdrop-blur"
                onClick={onPrev}
              >
                ‹
              </button>
            )}
            {onNext && (
              <button
                aria-label="Next post"
                className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 border border-white/10 text-white w-11 h-11 rounded-full items-center justify-center backdrop-blur"
                onClick={onNext}
              >
                ›
              </button>
            )}
          </>
        )}

        {/* ── RIGHT: Info pane ── */}
        <div
          className="flex-1 flex flex-col bg-black min-w-0"
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b border-[#262626]"
          >
            {item.avatar ? (
              <img
                src={item.avatar}
                alt={item.author}
                className="w-[38px] h-[38px] rounded-full border-2 border-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(#000,#000), linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              />
            ) : (
              <div
                className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#f09433] to-[#bc1888] flex items-center justify-center text-white font-bold text-sm"
              >
                {(item.author || "T")[0].toUpperCase()}
              </div>
            )}

            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-semibold truncate">{item.author || "TravelMate"}</div>
              {item.location && <div className="text-[#a8a8a8] text-xs truncate">{item.location}</div>}
            </div>

            {/* Three-dot menu */}
            <button
              className="text-white text-xl tracking-[2px]"
              aria-label="More options"
            >
              ···
            </button>
          </div>

          {/* Comments + Caption scroll area */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-3 space-y-4 overscroll-contain scroll-smooth touch-pan-y"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {/* Caption block */}
            <div className="flex gap-3">
              {item.avatar ? (
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-8 h-8 rounded-full flex-shrink-0 object-cover"
                />
              ) : (
                <div
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f09433] to-[#bc1888] flex-shrink-0"
                />
              )}
              <div className="text-sm text-white leading-relaxed">
                <span className="font-semibold">{item.author || "TravelMate"} </span>
                {item.excerpt || item.title}
                {hashtags.length > 0 && (
                  <span className="space-x-1">
                    {hashtags.map((tag) => (
                      <span key={tag} className="text-[#4cb5f9]">#{tag}</span>
                    ))}
                  </span>
                )}
                <div className="text-[#a8a8a8] text-xs mt-1">{item.date || "6w"}</div>
              </div>
            </div>

            {/* Comments */}
            {comments.map((c) => (
              <div key={c.id} className="space-y-2">
                <div className="flex gap-3 items-start">
                  {/* Avatar */}
                  <div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {c.author[0].toUpperCase()}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white leading-snug">
                      <span className="font-semibold">{c.author} </span>
                      <span className="text-[#e0e0e0] break-words">{c.text}</span>
                    </div>
                    <div className="flex gap-4 mt-1 text-[#a8a8a8] text-xs">
                      <span>{c.time || "now"}</span>
                      {(c.likes ?? 0) > 0 && <span>{c.likes} like{c.likes !== 1 ? "s" : ""}</span>}
                      <button className="text-[#a8a8a8] font-semibold" aria-label="Reply">
                        Reply
                      </button>
                    </div>

                    {/* Replies */}
                    {c.replies && c.replies.length > 0 && (
                      <div className="mt-2">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="h-px w-6 bg-[#a8a8a8]" />
                          <span className="text-[#a8a8a8] text-xs font-semibold">
                            View replies ({c.replies.length})
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Heart on comment */}
                  <button
                    className="text-[#a8a8a8] text-xs flex-shrink-0 pt-0.5"
                    aria-label="Like comment"
                  >
                    ♡
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ── Action bar ── */}
          <div className="border-t border-[#262626]">
            {/* Icon row */}
            <div className="flex items-center px-4 py-2.5">
              {/* Left icons */}
              <div className="flex gap-4 flex-1">
                <button
                  onClick={() => onToggleLike(item.id)}
                  className={`text-2xl leading-none ${liked ? "text-[#ed4956]" : "text-white"}`}
                  aria-label="Like"
                >
                  {liked ? "❤️" : "🤍"}
                </button>

                <button
                  className="text-white text-xl"
                  aria-label="Comment"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </button>

                <button
                  className="text-white"
                  aria-label="Share"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>

              {/* Bookmark */}
              <button className="text-white" aria-label="Save">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </button>
            </div>

            {/* Likes count */}
            <div className="px-4 pb-1 text-sm font-semibold text-white">{likes.toLocaleString()} likes</div>

            {/* Date */}
            <div className="px-4 pb-2 text-[10px] text-[#a8a8a8] uppercase tracking-wide">{item.date || "February 20"}</div>
          </div>

          {/* ── Comment input ── */}
          <div className="border-t border-[#262626] flex items-center gap-3 px-4 py-2.5">
            <span className="text-2xl">🙂</span>
            <input
              className="flex-1 bg-transparent border-none text-white text-sm outline-none placeholder:text-white/50"
              placeholder="Add a comment..."
            />
            <button
              className="text-[#4cb5f9] text-sm font-semibold opacity-60"
            >
              Post
            </button>
          </div>

          {(onPrev || onNext) && (
            <div className="md:hidden border-t border-[#262626] px-4 py-3 flex justify-between text-sm text-white/80">
              <button
                className="px-3 py-2 rounded-full border border-white/20"
                disabled={!onPrev}
                onClick={onPrev}
              >
                Prev
              </button>
              <button
                className="px-3 py-2 rounded-full border border-white/20"
                disabled={!onNext}
                onClick={onNext}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
