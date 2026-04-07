export default function LoadMoreButton({ onClick, text = "Load More Stories" }) {
    return (
        <div className="text-center pb-16">
            <button
                onClick={onClick}
                className="px-9 py-3 rounded-full border border-white/20 text-[#e4e7ec] bg-transparent cursor-pointer transition hover:border-white/40"
                style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                }}
            >
                {text}
            </button>
        </div>
    );
}