import { useEffect, useRef } from "react";
import type { GalleryItem } from "./gallery_card";

interface Props {
  item: GalleryItem;
  liked: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onToggleLike: (id: number) => void;
}

export default function GalleryModal({ item, liked, onClose, onNext, onPrev, onToggleLike }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { overflow, position } = document.body.style;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.position = position;
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onNext?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onNext, onPrev, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6" onClick={onClose}>
      <div
        className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)] flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Media */}
        <div className="md:w-1/2 w-full bg-black flex items-center justify-center border-b md:border-b-0 md:border-r border-[#262626] h-72 md:h-auto">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col bg-black min-w-0">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#262626]">
            <img src={item.avatar} alt={item.user} className="w-10 h-10 rounded-full border border-white/20" />
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-semibold truncate">{item.user}</div>
              <div className="text-white/60 text-xs truncate">{item.location}</div>
            </div>
            <button className="text-white/70 hover:text-white text-2xl" onClick={onClose} aria-label="Close">
              ×
            </button>
          </div>

          {/* Body */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 overscroll-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="text-white text-lg font-semibold">{item.title}</div>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <span className="px-2 py-1 rounded-full border border-white/15 text-xs uppercase tracking-[0.18em]">
                {item.category}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {item.title} • Captured by {item.user} in {item.location}. Save for your next trip and share with friends.
            </p>
          </div>

          {/* Action bar (Instagram-like) */}
          <div className="border-t border-[#262626]">
            <div className="flex items-center px-4 py-2.5 gap-4">
              <button
                onClick={() => onToggleLike(item.id)}
                aria-label="Like"
                className={`text-2xl leading-none ${liked ? "text-[#ed4956]" : "text-white"}`}
              >
                {liked ? "❤️" : "🤍"}
              </button>
              {item.likes} likes
            
            </div>
            
          </div>

          {/* Mobile nav */}
          {(onPrev || onNext) && (
            <div className="md:hidden border-t border-[#262626] px-4 py-3 flex justify-between text-sm text-white/80">
              <button
                className="px-3 py-2 rounded-full border border-white/20 disabled:opacity-30"
                onClick={onPrev}
                disabled={!onPrev}
              >
                Prev
              </button>
              <button
                className="px-3 py-2 rounded-full border border-white/20 disabled:opacity-30"
                onClick={onNext}
                disabled={!onNext}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* Desktop nav */}
        {onPrev && (
          <button
            aria-label="Previous photo"
            className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 border border-white/10 text-white w-11 h-11 rounded-full items-center justify-center backdrop-blur"
            onClick={onPrev}
          >
            ‹
          </button>
        )}
        {onNext && (
          <button
            aria-label="Next photo"
            className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 border border-white/10 text-white w-11 h-11 rounded-full items-center justify-center backdrop-blur"
            onClick={onNext}
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}
