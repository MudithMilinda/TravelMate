import { useState } from "react";
import { motion } from "motion/react";

import ChatCard from "../Components/chat_card";
import StatsSection from "../Components/countdown";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import FloatingChatButton from "../Components/chat_icon";
import Chatbot from "../Components/chatbot";
import SearchBar from "../Components/search";

const featureCards = [
  {
    id: "01",
    tag: "HIKING ESSENTIALS",
    title: "What level of hiker are you?",
    body: "Find your pace, know your limits, and begin your journey with confidence...",
    image:
      "https://plus.unsplash.com/premium_photo-1700590389658-67398e9a03f2?q=80&w=1740&auto=format&fit=crop",
  },
  {
    id: "02",
    tag: "WHERE YOU GO IS THE KEY",
    title: "Understand Your Map & Timing",
    body: "Plan smart, navigate with confidence, and respect the journey...",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1548&auto=format&fit=crop",
  },
];

export default function App() {
  const [search, setSearch] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  const handleSearch = () => {
    console.log("Searching:", search);
  };

  return (
    <div className="bg-[#0d1b2a] text-[#e4e7ec] min-h-screen">
      <header className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1748&auto=format&fit=crop)",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b to-[#0a1726]/80" />

        <Navbar />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-0 pt-28 pb-24 lg:pt-40 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 text-[#f0d083] tracking-[0.35em] text-xs uppercase"
          >
            <span className="inline-block w-8 h-px bg-[#f0d083]" />
            <span>Welcome to TRAVELMATE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-[56px] leading-tight font-['Playfair_Display'] text-white"
          >
            Discover Places.
            <div>Share Your Journey...</div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm text-white/80"
          >
            Explore real travel experiences from people around the world
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} onSearch={handleSearch} />
          </motion.div>
        </div>
      </header>

      <main className="relative z-20 max-w-6xl mx-auto px-6 lg:px-0 space-y-24 lg:space-y-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.65 }}
        >
          <ChatCard onOpenChat={() => setChatOpen(true)} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <StatsSection />
        </motion.div>

        {featureCards.map((card, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <motion.section
              key={card.id}
              className="grid lg:grid-cols-2 gap-10 items-center relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.65, delay: 0.05 * idx }}
            >
              <div className={isEven ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 text-[#f0d083] tracking-[0.3em] text-[11px] uppercase">
                  <span className="inline-block w-10 h-px bg-[#f0d083]" />
                  <span>{card.tag}</span>
                </div>

                <h2 className="mt-4 text-3xl md:text-4xl font-['Playfair_Display'] text-white">
                  {card.title}
                </h2>

                <p className="mt-4 text-base text-white/70 leading-relaxed">
                  {card.body}
                </p>
              </div>

              <div className={isEven ? "lg:order-1" : ""}>
                <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40 border border-white/5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[360px] md:h-[420px] object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </motion.section>
          );
        })}
      </main>

      <Footer />

      <FloatingChatButton onClick={() => setChatOpen(true)} />
      <Chatbot open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
