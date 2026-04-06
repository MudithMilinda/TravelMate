import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-30 px-6 lg:px-16 py-6 flex items-center justify-between transition-colors duration-300 ${isScrolled ? "bg-[#0a1726]/90 backdrop-blur-md" : "bg-transparent"
                }`}
        >
            <div className="text-2xl tracking-[0.2em] font-semibold font-['Playfair_Display']">
                TRAVELMATE
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em]">
                <a className="hover:text-white transition-colors" href="#">
                    Home
                </a>
                <a className="hover:text-white transition-colors" href="#">
                    gallery
                </a>
                <a className="hover:text-white transition-colors" href="#">
                    Blogs
                </a>
            </div>
            <div className="flex items-center gap-4 text-sm uppercase tracking-[0.2em]">
                <button
                    className="hidden sm:flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full hover:border-white/60 transition-colors"
                    type="button"
                >
                    <span>Login</span>
                </button>
            </div>
        </nav>
    );
}