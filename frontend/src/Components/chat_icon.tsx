

export default function FloatingChatButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-[#f0d083] hover:bg-[#ffd88f] text-[#0a1726] w-16 h-16 rounded-full shadow-2xl shadow-[#f0d083]/50 flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-40"
      title="Open Chat"
    >
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
      </svg>
    </button>
  );
}