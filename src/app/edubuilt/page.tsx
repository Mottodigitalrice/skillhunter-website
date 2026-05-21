"use client";

import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "How It Works", labelJa: "学習の仕組み", href: "/eduprocess" },
  { label: "Courses", labelJa: "コースサンプル", href: "/eduportfolio" },
];

const departments = [
  {
    id: "front-desk",
    title: "Front Desk",
    titleJa: "フロントデスク",
    color: "from-[#1a2a4a] to-[#16213e]",
    scenes: [
      "Check-in & check-out — in any situation",
      "Room upgrade offers that feel natural",
      "Reservation changes & special requests",
      "Emergency situations & guest complaints",
    ],
    scenesJa: [
      "チェックイン・チェックアウト対応",
      "自然な流れでのルームアップグレード提案",
      "予約変更・特別リクエストへの対応",
      "緊急事態・クレーム対応",
    ],
  },
  {
    id: "fb",
    title: "F&B",
    titleJa: "レストラン・食飲",
    color: "from-[#2a1a1a] to-[#16213e]",
    scenes: [
      "Acknowledging the guest before placing the tray",
      "Presenting the meal — not just delivering it",
      "Describing dishes in a way that adds to the experience",
      "Closing the interaction with warmth, not a rushed exit",
    ],
    scenesJa: [
      "料理を置く前にゲストへの声かけ",
      "「運ぶ」ではなく「提供する」ための立ち居振る舞い",
      "料理の説明で体験をさらに豊かにする",
      "慌てて退室せず、温かく締める",
    ],
  },
  {
    id: "concierge",
    title: "Concierge",
    titleJa: "コンシェルジュ",
    color: "from-[#1a2a1a] to-[#16213e]",
    scenes: [
      "VIP guest handling — calm and confident",
      "Restaurant bookings & recommendations",
      "Tour & transportation arrangements",
      "Cultural guidance for international guests",
    ],
    scenesJa: [
      "VIPゲストへの落ち着いた対応",
      "レストラン予約・レコメンデーション",
      "ツアー・交通手配",
      "外国人ゲストへの文化的サポート",
    ],
  },
  {
    id: "email",
    title: "Email",
    titleJa: "英文メール",
    color: "from-[#1a1a2a] to-[#16213e]",
    scenes: [
      "Booking confirmations — professional tone",
      "VIP pre-arrival correspondence",
      "Handling complaints in writing",
      "Special request follow-ups",
    ],
    scenesJa: [
      "プロの英文で書く予約確認メール",
      "VIPゲストへのアライバル前メール",
      "クレームへの書面での対応",
      "特別リクエストのフォローアップ",
    ],
  },
  {
    id: "phone",
    title: "Phone",
    titleJa: "電話対応",
    color: "from-[#2a1a2a] to-[#16213e]",
    scenes: [
      "Reservation calls — taking & confirming",
      "Transferring calls without awkward pauses",
      "Handling complaints over the phone",
      "Taking accurate messages",
    ],
    scenesJa: [
      "予約電話の受付・確認",
      "スムーズな転送対応",
      "電話でのクレーム対応",
      "正確なメモの取り方・伝言",
    ],
  },
  {
    id: "a1",
    title: "A1 Foundation",
    titleJa: "基礎コース",
    color: "from-[#1a2a2a] to-[#16213e]",
    scenes: [
      "Core greetings in a hotel context",
      "Numbers, times & directions",
      "Basic guest needs — understood fast",
      "Building the confidence to try",
    ],
    scenesJa: [
      "ホテルで使う基本の挨拶・受け答え",
      "数字・時間・道案内",
      "ゲストの基本的なニーズを素早く把握",
      "話しかける勇気を育てる",
    ],
  },
];

const realScenes = [
  {
    scene: "A guest arrives at the front desk. The staff member says one word — \"Check-in?\" — then types in silence for six seconds. No greeting, no eye contact, no welcome.",
    sceneJa: "ゲストがフロントへ。スタッフが一言「チェックイン？」と言い、6秒間無言でタイピング。目も合わさない。",
    lesson: "Lesson 2 — Check-in: The Language of Elegance",
    phrase: "\"Good evening, Mr. Liew. It's lovely to have you with us. Could I take a look at your passport, please?\"",
  },
  {
    scene: "A guest says \"Thank you\" as he checks out and makes eye contact. The staff member, still arranging papers at the side table, replies with one word: \"Bye.\" No pause. No acknowledgement of his stay.",
    sceneJa: "チェックアウト時、ゲストが目を合わせて「ありがとう」。スタッフは作業をしながら「Bye.」の一言。滞在への言及なし。",
    lesson: "Lesson 3 — The Elegant Farewell",
    phrase: "\"It was truly a pleasure having you with us, Mr. Brown. We hope to welcome you back very soon.\"",
  },
  {
    scene: "A guest complains he's been waiting a long time for his food. The staff member replies: \"Sorry about that. We're so busy right now.\" Then walks away — no update, no timeline, no offer to help.",
    sceneJa: "料理が来ないゲストが不満を伝える。スタッフ「忙しいので申し訳ありません」と言い、何も解決せずその場を離れる。",
    lesson: "Lesson 6 — Complaint Handling & Apology",
    phrase: "\"I sincerely apologise for the wait, Mr. Garcia. That's not the experience we want for you. Let me check on this right now and get back to you in two minutes.\"",
  },
  {
    scene: "A guest politely asks for a 4 PM late checkout. The staff member says: \"Sorry, that's not possible. We are fully booked.\" End of conversation.",
    sceneJa: "ゲストが丁寧にレイトチェックアウトを依頼。スタッフ「申し訳ありませんが無理です。満室ですので。」で会話終了。",
    lesson: "Lesson 9 — Saying No with Grace",
    phrase: "\"I completely understand, Mr. Richardson. We're fully booked tonight, so 4 PM isn't available — but let me see if I can arrange noon for you as a compromise, and we'll have your luggage stored.\"",
  },
];

export default function EduBuiltPage() {
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
      <section className="relative overflow-hidden px-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
        <img
          src="/images/point_01.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/40 to-[#1a1a2e]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-4">
            Built for Real Hospitality
          </p>
          <h1 className="text-4xl font-bold sm:text-6xl tracking-tight leading-tight max-w-3xl">
            教科書の英語じゃ<br />
            <span className="text-[#c9a03c]">現場では使えない。</span>
          </h1>
          <p className="mt-6 text-base text-white/55 max-w-2xl leading-relaxed">
            Skill Hunter doesn&apos;t teach general English. Every lesson, every phrase, every scenario
            was built from a real situation that happens on a hotel floor — because that&apos;s the
            only English your staff actually needs.
          </p>
          <p className="mt-2 text-sm text-white/30 max-w-2xl leading-relaxed">
            Skill Hunterが教えるのは「ホテルの現場で起きること」だけ。教科書には載っていないが、毎日の仕事には必要な英語。
          </p>
        </div>
      </section>

      {/* ── DEPARTMENT GRID ── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a03c] mb-2">
              6 Courses. Every Department.
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl">
              どの部署のスタッフにも、<span className="text-[#c9a03c]">自分のコース</span>がある。
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className={`rounded-2xl border border-white/10 bg-gradient-to-br ${dept.color} p-6 hover:border-[#c9a03c]/30 transition-colors duration-300`}
              >
                <div className="h-px w-8 bg-[#c9a03c] mb-4" />
                <h3 className="text-xl font-bold text-white">{dept.title}</h3>
                <p className="text-xs text-[#c9a03c] mt-0.5 tracking-wide">{dept.titleJa}</p>

                <ul className="mt-5 space-y-2.5">
                  {dept.scenes.map((scene, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#c9a03c] text-xs mt-0.5 shrink-0">→</span>
                      <div>
                        <p className="text-sm text-white/75 leading-snug">{scene}</p>
                        <p className="text-xs text-white/30 leading-snug mt-0.5">{dept.scenesJa[i]}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ── REAL SCENE → LESSON ── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a03c] mb-2">
              Real Scene → Real Lesson
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl">
              現場で起きたことが、<span className="text-[#c9a03c]">そのままレッスンになる。</span>
            </h2>
            <p className="mt-3 text-sm text-white/40 max-w-xl leading-relaxed">
              Each lesson is built backwards from a real hotel situation — we start with the scene, then build the language around it.
            </p>
          </div>

          <div className="space-y-4">
            {realScenes.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-[#16213e]/60 overflow-hidden"
              >
                <div className="grid sm:grid-cols-2">
                  {/* Left: The real scene */}
                  <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">
                      The situation
                    </p>
                    <p className="text-sm text-white/80 leading-relaxed">{item.scene}</p>
                    <p className="text-xs text-white/35 mt-2 leading-relaxed italic">{item.sceneJa}</p>
                  </div>

                  {/* Right: The lesson */}
                  <div className="p-6 sm:p-8 bg-[#c9a03c]/5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a03c] mb-3">
                      {item.lesson}
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed italic">
                      {item.phrase}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#c9a03c]/20 bg-[#0f3460] p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#c9a03c] mb-3">
                See it in action
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
                実際のコース動画を見てみる
              </h2>
              <p className="mt-2 text-sm text-white/50">
                45-second samples from each course — watch how real hotel scenarios become lessons.
              </p>
            </div>
            <a href="/eduportfolio"
              className="group inline-flex items-center gap-3 bg-[#c9a03c] text-[#1a1a2e] hover:bg-[#d4af50] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 transition-colors rounded-sm shrink-0">
              View Courses
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
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
