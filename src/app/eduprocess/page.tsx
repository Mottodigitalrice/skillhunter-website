"use client";

import { Menu, X, Play, BookOpen, CheckCircle, Zap, Users } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "How It Works", labelJa: "学習の仕組み", href: "/eduprocess" },
  { label: "Courses", labelJa: "コースサンプル", href: "/eduportfolio" },
];

const steps = [
  {
    number: "01",
    icon: Play,
    title: "Watch",
    titleJa: "ドラマを見る感覚で視聴",
    body: "まず「うまくいかないシーン」を見る。スタッフがどう失敗するかを見ているうちに、何が問題かが自然にわかってくる。次に改善版を見る。同じシーン、同じゲスト — でも英語が変わると、雰囲気が全く変わる。",
    bodyEn: "Each lesson starts with a scene that goes wrong — a real hotel moment where the English is technically correct but the feeling is cold. You watch it, notice it, and then see the refined version of the same scene. The difference is immediate.",
    tags: ["Wrong scene first", "Then the refined version", "Same scenario — different English", "You hear the difference"],
    highlight: false,
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Phrases Stick",
    titleJa: "フレーズが自然に染み込む",
    body: "ストーリーで見たフレーズを、もう一度文脈の中で確認。暗記ではなく、「あ、あのシーンで使ってたやつだ」という感覚で自然に頭に入ってくる。",
    bodyEn: "Key phrases from the story are revisited — but because you've already seen them in context, they don't need memorizing. They just stick. That's the difference between studying and absorbing.",
    tags: ["Context-first", "No memorization", "Phrase review", "Natural absorption"],
    highlight: true,
  },
  {
    number: "03",
    icon: Users,
    title: "Role Play",
    titleJa: "実際のシーンを演じてみる",
    body: "学んだフレーズを使って、実際のホテルシーンをロールプレイ。ゲスト役とスタッフ役に分かれて会話することで、「知っている」から「使える」へと変わる。",
    bodyEn: "Take the phrases you've absorbed and act them out. Play the guest, play the staff — run the scenario. This is where language moves from your head to your mouth, and it stays there.",
    tags: ["Guest & staff roles", "Real scenarios", "Speaking practice", "Confidence building"],
    highlight: false,
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Quick Check",
    titleJa: "クイズで軽く確認",
    body: "テストではなく、確認。「わかってたか」を短いクイズでチェックする。負担は最小限 — ポイントは次のレッスンに進みたくなること。",
    bodyEn: "A short quiz cements what you already absorbed. It's not an exam — it's a quick check that reinforces the lesson. The goal is to make you want to hit play on the next one.",
    tags: ["Short quiz", "Reinforcement", "Low pressure", "Progress check"],
    highlight: false,
  },
  {
    number: "05",
    icon: Zap,
    title: "It Just Comes Out",
    titleJa: "気づいたら話せてる",
    body: "次にゲストが来た時、フレーズがすっと出てくる。「勉強した」という感覚ではなく、「なんか知ってた」という感覚。それがSkill Hunterの学習体験。",
    bodyEn: "The next time a guest walks up, the phrase just comes out. Not because you drilled it — because you saw it happen, in context, in a story. That's the Skill Hunter moment.",
    tags: ["Real-world application", "Confidence", "Immediate use"],
    highlight: false,
  },
];

export default function EduProcessPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#1a1a2e] text-white">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#1a1a2e]/95 backdrop-blur-sm px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <a href="/edufilm">
            <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-7" />
          </a>
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="flex items-baseline gap-2 text-white/50 hover:text-[#c9a03c] transition-colors">
                <span className="text-2xl font-bold italic tracking-wide leading-none">{link.label}</span>
                {link.labelJa && (
                  <span className="text-[10px] tracking-[0.1em] text-white/25 font-normal">{link.labelJa}</span>
                )}
              </a>
            ))}
            <a href="/edufilm" className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 hover:text-[#c9a03c] transition-colors">
              ← Home
            </a>
          </div>
          <button className="sm:hidden text-white/60 hover:text-white p-1" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-[#1a1a2e]/95 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-sm text-white/70 hover:text-[#c9a03c] transition-colors py-1">
                <span>{link.label}</span>
                {link.labelJa && <span className="text-xs text-white/30">{link.labelJa}</span>}
              </a>
            ))}
            <div className="h-px bg-white/10" />
            <a href="/edufilm" onClick={() => setMenuOpen(false)} className="text-xs text-white/40 hover:text-[#c9a03c] transition-colors uppercase tracking-[0.15em]">← Home</a>
          </div>
        )}
      </nav>

      {/* ── PAGE HEADER ── */}
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-4">How It Works</p>
          <h1 className="text-4xl font-bold sm:text-6xl tracking-tight leading-tight">
            勉強しない。<br />
            <span className="text-[#c9a03c]">見るだけでいい。</span>
          </h1>
          <p className="mt-5 text-base text-white/50 max-w-xl leading-relaxed">
            Skill Hunter works the same way Netflix does — you watch, you enjoy, and the language finds its way in. No grinding. No grammar charts. Just stories you actually want to see.
          </p>
          <p className="mt-2 text-sm text-white/30 max-w-xl leading-relaxed">
            Netflixのように楽しんで見ているうちに、気づいたら英語が出てくる。それがSkill Hunterの学習体験です。
          </p>
        </div>
      </section>

      {/* ── NETFLIX CALLOUT ── */}
      <div className="mx-auto max-w-6xl px-6 mb-12">
        <div className="rounded-2xl border border-[#c9a03c]/20 bg-[#c9a03c]/5 px-6 py-5 flex items-start gap-4">
          <div className="text-2xl shrink-0">🎬</div>
          <div>
            <p className="text-sm font-semibold text-[#c9a03c]">
              The Netflix Principle
            </p>
            <p className="mt-1 text-sm text-white/60 leading-relaxed">
              You didn&apos;t study English to understand your favourite TV show. You watched it enough times and it clicked.
              Skill Hunter applies that same principle to hotel English — real scenarios, real language, zero pressure.
            </p>
            <p className="mt-1 text-xs text-white/30 leading-relaxed">
              好きなドラマを繰り返し見るうちに英語が聞けるようになった経験、ありませんか？Skill Hunterはその仕組みをホテル英語に応用しています。
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── STEPS ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative">

            {/* Vertical connecting line */}
            <div className="absolute left-[27px] sm:left-[35px] top-8 bottom-8 w-px bg-gradient-to-b from-[#c9a03c]/40 via-[#c9a03c]/20 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative flex gap-6 sm:gap-10">

                    {/* Step indicator */}
                    <div className="relative flex flex-col items-center shrink-0">
                      <div className={`relative z-10 flex size-14 sm:size-[72px] items-center justify-center rounded-full border-2 ${
                        step.highlight
                          ? "border-[#c9a03c] bg-[#c9a03c]/15"
                          : "border-white/20 bg-[#16213e]"
                      }`}>
                        <Icon className={`size-5 sm:size-6 ${step.highlight ? "text-[#c9a03c]" : "text-white/50"}`} />
                      </div>
                    </div>

                    {/* Card */}
                    <div className={`flex-1 mb-2 rounded-2xl border p-6 sm:p-8 ${
                      step.highlight
                        ? "border-[#c9a03c]/30 bg-[#16213e]"
                        : "border-white/10 bg-[#16213e]/60"
                    }`}>
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-[0.25em] mb-2 ${
                          step.highlight ? "text-[#c9a03c]" : "text-white/30"
                        }`}>
                          STEP {step.number}
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">{step.title}</h2>
                        <p className="text-sm text-white/40 mt-1">{step.titleJa}</p>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <p className="text-sm text-white/65 leading-relaxed">{step.bodyEn}</p>
                        <p className="text-sm text-white/35 leading-relaxed border-l border-white/10 pl-5">{step.body}</p>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span key={tag} className={`text-xs px-3 py-1 rounded-full border ${
                            step.highlight
                              ? "border-[#c9a03c]/30 bg-[#c9a03c]/10 text-[#c9a03c]"
                              : "border-white/15 bg-white/5 text-white/50"
                          }`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── LIVE SESSIONS NOTE ── */}
      <div className="mx-auto max-w-6xl px-6 mb-16">
        <div className="rounded-2xl border border-white/10 bg-[#16213e]/60 px-6 py-5 flex items-start gap-4">
          <div className="text-xl shrink-0 mt-0.5">🎤</div>
          <div>
            <p className="text-sm font-semibold text-white/80">
              Live Group Sessions — optional, but powerful
            </p>
            <p className="mt-1 text-sm text-white/45 leading-relaxed">
              For Hilton properties across Japan, we also run live group English sessions — multiple hotels together, online. It&apos;s not required, but staff who join consistently show the fastest progress.
            </p>
            <p className="mt-1 text-xs text-white/25 leading-relaxed">
              日本全国のヒルトングループ向けに、複数ホテル合同のライブグループレッスンも実施しています（任意参加）。
            </p>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#c9a03c]/20 bg-[#0f3460] p-8 sm:p-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-4">
              See it in action
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
              実際のコース動画と受講生の声を見る
            </h2>
            <p className="mt-2 text-sm text-white/50">
              Watch 45-second samples from each course — and hear what hotel staff say after using it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/eduportfolio"
                className="inline-flex items-center gap-2 bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors rounded-sm">
                View Course Samples →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-5 opacity-40" />
          <p className="text-xs text-white/20">&copy; {new Date().getFullYear()} Skill Hunter</p>
        </div>
      </footer>
    </main>
  );
}
