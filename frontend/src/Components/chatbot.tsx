import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Message = { role: "user" | "assistant"; text: string; time?: string };

interface Props {
  open: boolean;
  onClose: () => void;
}

const initialMessages: Message[] = [
  { role: "assistant", text: "Hi! Where are you heading next?", time: "now" },
  { role: "user", text: "Thinking Bali in June. Need 4‑day plan under $800.", time: "now" },
  { role: "assistant", text: "Got it! Beach + waterfalls? I can bundle Ubud + Canggu with transfers.", time: "now" },
];

export default function Chatbot({ open, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const el = listRef.current;
      if (el) el.scrollTop = el.scrollHeight;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const send = () => {
    if (!input.trim()) return;
    const next: Message = { role: "user", text: input.trim(), time: "now" };
    setMessages((m) => [...m, next, { role: "assistant", text: "I’ll craft a plan and share links.", time: "now" }]);
    setInput("");
    queueMicrotask(() => {
      const el = listRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/70 backdrop-blur-sm px-3 sm:px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-[#0f1b2c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f0d083] to-[#d3a84f] flex items-center justify-center text-[#0a1726] font-semibold">
                TM
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold text-sm">TravelMate Concierge</div>
                <div className="text-white/60 text-xs">Online · replies in seconds</div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close chat"
                className="text-white/70 hover:text-white text-xl px-2"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <motion.div
              ref={listRef}
              className="max-h-[65vh] min-h-[45vh] overflow-y-auto px-4 py-4 space-y-3 bg-gradient-to-b from-white/[0.02] to-transparent"
              style={{ WebkitOverflowScrolling: "touch" }}
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {messages.map((m, idx) => (
                <motion.div
                  key={idx}
                  className={`flex ${m.role === "assistant" ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.02 * idx }}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "assistant"
                        ? "bg-white/8 border border-white/10 text-white"
                        : "bg-[#f0d083] text-[#0a1726]"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Input */}
            <div className="border-t border-white/10 bg-[#0f1b2c] px-3 py-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send();
                    }
                  }}
                  placeholder="Ask me anything — e.g. 5 day Sri Lanka itinerary"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#f0d083]"
                />
                <motion.button
                  onClick={send}
                  whileTap={{ scale: 0.97 }}
                  className="px-4 py-3 rounded-full bg-[#f0d083] text-[#0a1726] font-semibold text-sm hover:bg-[#ffd88f] transition-colors"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
