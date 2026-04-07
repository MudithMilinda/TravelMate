import React from "react";

type SearchBarProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  placeholder?: string;
  classNameOverride?: string;
};

export default function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "Search destinations...",
  classNameOverride = "",
}: SearchBarProps) {
  return (
    <div className={`mt-10 w-full max-w-full sm:max-w-xl lg:max-w-3xl ${classNameOverride}`}>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-5 sm:px-6 py-3 sm:py-4 pr-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#f0d083] transition-colors"
        />

        <button
          type="button"
          onClick={onSearch}
          className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 bg-[#f0d083] hover:bg-[#ffd88f] text-[#0a1726] w-10 h-10 sm:w-11 sm:h-11 rounded-full transition-colors flex items-center justify-center"
        >
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
  );
}
