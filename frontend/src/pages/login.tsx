import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 -top-24 w-72 h-72 bg-[#f0d083]/10 blur-3xl" />
        <div className="absolute right-0 top-40 w-64 h-64 bg-[#4cb5f9]/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative px-6 md:px-10 pt-28 md:pt-32 pb-16">
        <motion.div
          className="max-w-lg mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.4)] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="px-6 md:px-8 py-10 bg-[#0f1b2c]/90 backdrop-blur">
            <p className="text-[#f0d083] tracking-[0.3em] text-[11px] uppercase mb-3">Sign In</p>
            <h1 className="text-3xl font-semibold mb-2">Welcome back</h1>
            <p className="text-white/60 text-sm mb-6">Log in to continue your journey.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm text-white/70" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#f0d083]"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm text-white/70" htmlFor="password">Password</label>
                    <a className="text-xs text-[#4cb5f9]" href="#">Forgot?</a>
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#f0d083]"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between text-sm text-white/70">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="accent-[#f0d083]"
                    />
                    Remember me
                  </label>
                  <span className="text-white/40">Secure login</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#f0d083] to-[#ffd88f] text-[#0a1726] font-semibold text-sm tracking-wide hover:scale-[1.01] transition-transform shadow-[0_12px_40px_rgba(240,208,131,0.35)]"
                >
                  Log In
                </button>
              </form>

            <div className="mt-6 text-sm text-white/70">
              New to TravelMate?{" "}
              <a className="text-[#f0d083] font-semibold" href="/signup">
                Create account
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
