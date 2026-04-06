import ChatCard from "./Components/chat_card";
import StatsSection from "./Components/countdown";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import FloatingChatButton from "./Components/chat_icon";

const featureCards = [
  {
    id: "01",
    tag: "HIKING ESSENTIALS",
    title: "What level of hiker are you?",
    body: "Find your pace, know your limits, and begin your journey with confidence. Every meaningful travel experience starts with understanding yourself. Take time to explore what excites you, embrace new cultures, and move at a rhythm that feels right for you. As you step beyond your comfort zone and discover new places, each journey shapes your perspective and becomes a story worth telling.",
    image:
      "https://plus.unsplash.com/premium_photo-1700590389658-67398e9a03f2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "02",
    tag: "WHERE YOU GO IS THE KEY",
    title: "Understand Your Map & Timing",
    body: "Plan smart, navigate with confidence, and respect the journey. The right timing and direction can turn a good hike into an unforgettable one. Study your route, understand the terrain, and always be prepared for changing conditions along the way. With the right mindset and preparation, every step you take becomes part of a story worth remembering.",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function App() {
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
          <div className="flex items-center gap-4 text-[#f0d083] tracking-[0.35em] text-xs uppercase">
            <span className="inline-block w-8 h-px bg-[#f0d083]" />
            <span>Welcome to TRAVELMATE</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-[56px] leading-tight font-['Playfair_Display'] text-white">
            Discover Places.
            <div>Share Your Journey...</div>
          </h1>

          <p className="mt-4 text-sm text-white/80">
            Explore real travel experiences from people around the world
          </p>

          {/* Search Bar */}
          <div className="mt-12 w-full max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#f0d083] transition-colors"
              />

              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f0d083] hover:bg-[#ffd88f] text-[#0a1726] p-3 rounded-full transition-colors flex items-center justify-center"
              >
                {/* Search Icon */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.2-5.2m2.2-5.3a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-20 max-w-6xl mx-auto px-6 lg:px-0 space-y-24 lg:space-y-32 pb-24">
        {/* Chat card */}
        <ChatCard />

        {/* Stats */}
        <StatsSection />

        {/* Feature Cards */}
        {featureCards.map((card, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <section
              key={card.id}
              className="grid lg:grid-cols-2 gap-10 items-center relative"
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
            </section>
          );
        })}
      </main>

      <Footer />

      {/* Floating Chat Button */}
      <FloatingChatButton onClick={undefined} />
    </div>
  );
}