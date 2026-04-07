

interface Props {
    onOpenChat?: () => void;
}

export default function ChatCard({ onOpenChat }: Props) {



    return (
        <section className="grid mt-8 lg:grid-cols-2 gap-12 items-center">
            {/* Chat Display */}
            <div className="relative bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent border border-white/10 rounded-2xl p-8 min-h-[420px] shadow-2xl shadow-black/40 overflow-hidden">

                <div className="flex flex-col gap-6 mt-16 max-w-xl">
                    <div className="bg-white/5 border border-white/10 rounded-md px-6 py-4 text-sm text-white/70 w-[70%]">
                        How can I help plan your trip?
                    </div>
                    <div className="bg-gradient-to-r from-[#d3a84f]/30 to-[#d3a84f]/10 border border-[#d3a84f]/60 rounded-md px-6 py-5 text-sm text-white/90 w-[78%] ml-auto shadow-[0_0_40px_-10px_rgba(211,168,79,0.6)]">
                        I'm looking for beach resorts in Asia
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-md px-6 py-4 text-sm text-white/70 w-[76%]">
                        I found 12 perfect matches for you — shall I share?
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
                <div className="flex items-center gap-4 text-[#d3a84f] tracking-[0.32em] text-[11px] uppercase">
                    <span className="inline-block w-10 h-px bg-[#d3a84f]" />
                    <span>AI Concierge</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] leading-tight text-white">
                    Your personal travel <span className="text-[#d3a84f] italic">assistant</span>
                </h2>
                <p className="text-white/65 text-base leading-relaxed max-w-xl">
                    Our AI-powered concierge is available around the clock to assist with bookings, room selection,
                    and bespoke travel recommendations. Simply tell us your budget and preferences!
                </p>

                <div className="space-y-5">
                    <div className="flex items-start gap-4">
                        <div className="h-12 w-12 border border-[#d3a84f] text-[#d3a84f] flex items-center justify-center rounded-sm text-xl flex-shrink-0">
                            💰
                        </div>
                        <div>
                            <p className="text-white font-semibold text-lg">Budget Planning</p>
                            <p className="text-white/60 text-sm">
                                Tell us your budget and get personalized destination recommendations
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="h-12 w-12 border border-[#d3a84f] text-[#d3a84f] flex items-center justify-center rounded-sm text-xl flex-shrink-0">
                            🎯
                        </div>
                        <div>
                            <p className="text-white font-semibold text-lg">Smart Suggestions</p>
                            <p className="text-white/60 text-sm">
                                Get curated recommendations based on your preferences and budget
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    className="mt-6 inline-flex items-center justify-center rounded-full border border-[#d3a84f] text-[#d3a84f] px-7 py-3 tracking-[0.24em] uppercase text-xs hover:bg-[#d3a84f]/10 transition-colors"
                    onClick={onOpenChat}
                >
                    Start Chatting..
                </button>
            </div>
        </section>
    );
}
