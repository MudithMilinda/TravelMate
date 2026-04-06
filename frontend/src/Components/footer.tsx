export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-14 px-6 lg:px-0 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div>
                    <div className="text-2xl tracking-[0.2em] font-semibold font-['Playfair_Display']">
                        TRAVELMATE
                    </div>
                    <p className="mt-4 text-white/60 text-sm max-w-md">
                        Discover Places. Share Your Journey....
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-10 text-sm uppercase tracking-[0.2em]">
                    <div className="space-y-3">
                        <p className="text-[#f0d083]">More on The Blog</p>
                        <a className="block text-white/70 hover:text-white" href="#">
                            Home
                        </a>
                        <a className="block text-white/70 hover:text-white" href="#">
                            Gallery
                        </a>
                        <a className="block text-white/70 hover:text-white" href="#">
                            Blogs
                        </a>
                    </div>
                    <div className="space-y-3">
                        <p className="text-[#f0d083]">More on TRAVELMATE</p>
                        <a className="block text-white/70 hover:text-white" href="#">
                            Contact Us
                        </a>
                        <a className="block text-white/70 hover:text-white" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
            <p className="mt-10 text-white/40 text-xs tracking-[0.2em] uppercase">
                Copyright 2026 TRAVELMATE. Terms & Privacy
            </p>
        </footer>
    );
}