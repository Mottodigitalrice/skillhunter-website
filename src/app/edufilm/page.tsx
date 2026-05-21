"use client";

import { Play, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "How It Works", labelJa: "学習の仕組み", href: "/eduprocess" },
  { label: "Hospitality", labelJa: "ホテル特化", href: "/edubuilt" },
  { label: "Courses", labelJa: "コースサンプル", href: "/eduportfolio" },
];

export default function EduFilmPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* ── NAV ── */}
      <nav className="absolute top-0 left-0 right-0 z-30 px-6 py-5">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <a href="/edufilm">
            <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-7" />
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-baseline gap-2 text-white/60 hover:text-[#c9a03c] transition-colors"
              >
                <span className="text-2xl font-bold italic tracking-wide leading-none">
                  {link.label}
                </span>
                {link.labelJa && (
                  <span className="text-[10px] tracking-[0.1em] text-white/25 font-normal">
                    {link.labelJa}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden text-white/60 hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-sm text-white/70 hover:text-[#c9a03c] transition-colors py-1"
              >
                <span>{link.label}</span>
                {link.labelJa && (
                  <span className="text-xs text-white/30">{link.labelJa}</span>
                )}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Gold top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a03c] z-20" />

        {/* Background image */}
        <img
          src="/images/point_01.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#c9a03c] mb-6">
            Skill Hunter Training
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-[80px] font-bold leading-[1.05] tracking-tight">
            English Your Staff
            <br />
            <span className="text-[#c9a03c]">Will Actually Use.</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-white/50 max-w-xl mx-auto leading-relaxed">
            Story-based hotel English training — built for front desk, F&B, concierge, and beyond.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/eduportfolio"
              className="group inline-flex items-center gap-3 bg-[#c9a03c] text-[#0a0a0a] hover:bg-[#d4af50] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-200"
            >
              <Play className="size-3.5 fill-[#0a0a0a]" />
              View Course Samples
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
          <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <section className="border-t border-white/10 py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px grid-cols-1 sm:grid-cols-3 bg-white/10 rounded-2xl overflow-hidden">
            {[
              {
                label: "Story-based Lessons",
                sub: "ストーリー形式のレッスン",
                desc: "Every lesson follows a real hotel scenario — guests, problems, solutions — so staff learn in context, not from a textbook.",
              },
              {
                label: "Hotel-Specific Content",
                sub: "ホテル特化のコンテンツ",
                desc: "Front desk, F&B, concierge, email, phone — six dedicated courses built for the exact situations your staff face every day.",
              },
              {
                label: "Live Group Sessions",
                sub: "ライブグループレッスン",
                desc: "Monthly live English lectures for Hilton properties across Japan — so your staff learn together and stay accountable.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#0a0a0a] px-8 py-10 hover:bg-[#111] transition-colors"
              >
                <div className="h-px w-8 bg-[#c9a03c] mb-5" />
                <h3 className="text-base font-bold text-white">{item.label}</h3>
                <p className="text-xs text-[#c9a03c] mt-0.5 tracking-wide">{item.sub}</p>
                <p className="mt-4 text-sm text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILT FOR HOSPITALITY CTA ── */}
      <section className="pb-0 pt-0 px-6">
        <div className="mx-auto max-w-6xl">
          <a
            href="/edubuilt"
            className="group relative block rounded-2xl overflow-hidden bg-[#16213e] border border-white/10 hover:border-[#c9a03c]/40 transition-all duration-300 mb-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#c9a03c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative px-8 py-8 sm:px-12 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-2">
                  Built for Real Hospitality
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  教科書の英語じゃ、現場では使えない。
                </h2>
                <p className="mt-1 text-sm text-white/40">
                  6 courses. Every department. Built from real hotel scenarios.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#c9a03c] font-bold text-sm uppercase tracking-[0.15em] shrink-0">
                Learn More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ── HOW IT WORKS CTA ── */}
      <section className="pb-0 pt-0 px-6">
        <div className="mx-auto max-w-6xl">
          <a
            href="/eduprocess"
            className="group relative block rounded-2xl overflow-hidden bg-[#0f3460] border border-white/10 hover:border-[#c9a03c]/40 transition-all duration-300 mb-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#c9a03c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative px-8 py-8 sm:px-12 sm:py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-2">
                  How It Works
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  勉強しない。見るだけでいい。
                </h2>
                <p className="mt-1 text-sm text-white/40">
                  The Netflix approach to hotel English — watch, absorb, use.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#c9a03c] font-bold text-sm uppercase tracking-[0.15em] shrink-0">
                Learn More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ── COURSE SAMPLES CTA ── */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl">
          <a
            href="/eduportfolio"
            className="group relative block rounded-2xl overflow-hidden bg-[#16213e] border border-white/10 hover:border-[#c9a03c]/40 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#c9a03c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative px-8 py-10 sm:px-12 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-3">
                  Training Video Portfolio
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  実際のコース動画と
                  <br className="sm:hidden" />
                  受講生の声を見る
                </h2>
                <p className="mt-2 text-sm text-white/45">
                  Course samples · Student testimonials · In-course comments
                </p>
              </div>
              <div className="flex items-center gap-3 text-[#c9a03c] font-bold text-sm uppercase tracking-[0.15em] shrink-0">
                View Courses
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-8 px-6 mt-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-5 opacity-40" />
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Skill Hunter
          </p>
        </div>
      </footer>
    </main>
  );
}
