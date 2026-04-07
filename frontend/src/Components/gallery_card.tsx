export interface GalleryItem {
    id: number;
    image: string;
    location: string;
    title: string;
    user: string;
    avatar: string;
    likes: string;
    category: string;
    featured?: boolean;
}

interface Props {
    item: GalleryItem;
    onClick?: (item: GalleryItem) => void;
}

export default function GalleryCard({ item, onClick }: Props) {
    return (
        <button
            type="button"
            onClick={() => onClick?.(item)}
            className="group relative overflow-hidden rounded-xl cursor-pointer mb-3 break-inside-avoid w-full text-left"
        >
            <img
                src={item.image}
                alt={item.title}
                className="w-full block rounded-xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div
                className="absolute inset-0 flex flex-col justify-end p-4 rounded-xl transition-opacity duration-300 bg-gradient-to-t from-[#0a1726]/90 via-[#0a1726]/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
                <p className="mb-1 uppercase tracking-widest text-[#f0d083] text-[9px]">
                    {item.location}
                </p>

                <p className="mb-2 text-white text-[15px] font-semibold">
                    {item.title}
                </p>

                <div className="flex items-center gap-3">
                    <img
                        src={item.avatar}
                        alt={item.user}
                        className="w-6 h-6 rounded-full object-cover border border-white/50"
                    />

                    <span className="text-[9px] text-white/70">
                        {item.user}
                    </span>

                    <div className="ml-auto flex items-center gap-1 text-[10px] text-white/70">
                        <span className="text-[#f0d083]">♥</span>
                        {item.likes}
                    </div>
                </div>
            </div>
        </button>
    );
}
