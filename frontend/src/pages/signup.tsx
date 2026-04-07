import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    newsletter: true,
  });

  const handleChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-[#0d1b2a] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 -top-24 w-72 h-72 bg-[#f0d083]/10 blur-3xl" />
        <div className="absolute right-0 top-40 w-64 h-64 bg-[#4cb5f9]/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-16">
        <motion.div
          className="max-w-lg mx-auto bg-white/5 border border-white/10 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.4)] overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="px-6 md:px-8 py-10 bg-[#0f1b2c]/90 backdrop-blur">
            <p className="text-[#f0d083] tracking-[0.3em] text-[11px] uppercase mb-3">Create Account</p>
            <h1 className="text-3xl font-semibold mb-2">Join TravelMate</h1>
            <p className="text-white/60 text-sm mb-6">Sync your trips, save spots, and chat with our concierge.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#f0d083]"
                  placeholder="Alex Traveller"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#f0d083]"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  required
                  value={form.password}
                  onChange={handleChange("password")}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#f0d083]"
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70" htmlFor="confirm">Confirm Password</label>
                <input
                  id="confirm"
                  type="password"
                  required
                  value={form.confirm}
                  onChange={handleChange("confirm")}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#f0d083]"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between text-sm text-white/70">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={form.newsletter}
                    onChange={handleChange("newsletter")}
                    className="accent-[#f0d083]"
                  />
                  Send me travel tips & deals
                </label>
                <span className="text-white/40">2FA ready</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#f0d083] to-[#ffd88f] text-[#0a1726] font-semibold text-sm tracking-wide hover:scale-[1.01] transition-transform shadow-[0_12px_40px_rgba(240,208,131,0.35)]"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-sm text-white/70">
              Already have an account?{" "}
              <a className="text-[#f0d083] font-semibold" href="/login">
                Log in
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
