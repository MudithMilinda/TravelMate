import { useEffect, useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-30 px-4 sm:px-6 lg:px-16 py-5 flex items-center justify-between transition-colors duration-300 ${
                isScrolled ? "bg-[#0a1726]/90 backdrop-blur-md" : "bg-transparent"
            }`}
        >
            <div className="text-xl sm:text-2xl tracking-[0.2em] font-semibold font-['Playfair_Display']">
                TRAVELMATE
            </div>
            <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em]">
                <a className="hover:text-white transition-colors" href="/">
                    Home
                </a>
                <a className="hover:text-white transition-colors" href="/gallery">
                    gallery
                </a>
                <a className="hover:text-white transition-colors" href="/blogs">
                    Blogs
                </a>
                <a className="hover:text-white transition-colors" href="/profile">
                    Profile
                </a>
            </div>
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em]">
                <a
                    className="hidden sm:flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full hover:border-white/60 transition-colors"
                    href="/login"
                >
                    <span>Login</span>
                </a>
                {/* Mobile menu toggle */}
                <button
                    className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:border-white/60 transition-colors"
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <div className="space-y-1.5">
                        <span
                            className={`block h-0.5 w-4 bg-white transition-transform ${
                                isOpen ? "translate-y-2 rotate-45" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-4 bg-white transition-opacity ${
                                isOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-4 bg-white transition-transform ${
                                isOpen ? "-translate-y-2 -rotate-45" : ""
                            }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile drawer */}
            <div
                className={`md:hidden absolute left-0 right-0 top-full origin-top transform transition-all duration-200 ${
                    isOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
                <div className="mx-4 sm:mx-6 mt-3 rounded-2xl bg-[#0a1726]/95 backdrop-blur-md border border-white/10 shadow-xl">
                    <div className="flex flex-col divide-y divide-white/10">
                        {[
                            { label: "Home", href: "/" },
                            { label: "Gallery", href: "/gallery" },
                            { label: "Blogs", href: "/blogs" },
                            { label: "Profile", href: "/profile" },
                        ].map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-5 py-4 text-sm uppercase tracking-[0.18em] text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="grid grid-cols-2 gap-2 m-4">
                            <a
                                className="px-3 py-3 rounded-full border border-white/20 hover:border-white/60 text-xs uppercase tracking-[0.2em] transition-colors text-center"
                                href="/login"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </a>
                            <a
                                className="px-3 py-3 rounded-full border border-white/20 hover:border-white/60 text-xs uppercase tracking-[0.2em] transition-colors text-center"
                                href="/signup"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
