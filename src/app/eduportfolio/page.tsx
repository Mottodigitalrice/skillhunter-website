"use client";

import { Lock, Play, Quote, MessageSquare, Star, X, Heart, Menu } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

const navLinks = [
  { label: "How It Works", labelJa: "学習の仕組み", href: "/eduprocess" },
  { label: "Courses", labelJa: "コースサンプル", href: "/eduportfolio" },
];

// ─── DATA ────────────────────────────────────────────────────────────────────

const courseSamples = [
  {
    id: "lesson-1",
    title: "The First Impression",
    titleJa: "Lesson 1 — 第一印象",
    label: "Professional",
    youtubeId: "PLACEHOLDER_EDU_L1",
    description: "In hospitality, the first words you speak shape the entire experience.",
  },
  {
    id: "lesson-2",
    title: "Check-in: The Language of Elegance",
    titleJa: "Lesson 2 — エレガントなチェックイン",
    label: "Professional",
    youtubeId: "PLACEHOLDER_EDU_L2",
    description: "When we rush through check-in steps, guests feel processed — not welcomed.",
  },
  {
    id: "lesson-3",
    title: "The Elegant Farewell",
    titleJa: "Lesson 3 — エレガントなお見送り",
    label: "Professional",
    youtubeId: "PLACEHOLDER_EDU_L3",
    description: "Final impressions stay with people — make the last moment count.",
  },
  {
    id: "lesson-4",
    title: "Handling Questions & Requests",
    titleJa: "Lesson 4 — 質問・リクエスト対応",
    label: "Professional",
    youtubeId: "PLACEHOLDER_EDU_L4",
    description: "What matters is not whether you know the answer — it's how you respond when you don't.",
  },
  {
    id: "lesson-5",
    title: "Elegant Small Talk",
    titleJa: "Lesson 5 — エレガントな会話",
    label: "Professional",
    youtubeId: "PLACEHOLDER_EDU_L5",
    description: "Small talk is not small — it's how guests feel seen as people, not room numbers.",
  },
  {
    id: "lesson-6",
    title: "Complaint Handling & Apology",
    titleJa: "Lesson 6 — クレーム対応と謝罪",
    label: "Professional",
    youtubeId: "PLACEHOLDER_EDU_L6",
    description: "A complaint is a guest telling you they still believe you can make it right.",
  },
  {
    id: "lesson-7",
    title: "Food & Beverage Service Excellence",
    titleJa: "Lesson 7 — F&Bサービスの極意",
    label: "Professional",
    youtubeId: "PLACEHOLDER_EDU_L7",
    description: "How you present a meal says as much as how it was prepared.",
  },
  {
    id: "lesson-8",
    title: "Personalised Guest Service",
    titleJa: "Lesson 8 — パーソナライズされたサービス",
    label: "Professional",
    youtubeId: "PLACEHOLDER_EDU_L8",
    description: "The details you remember about a guest are what turn a good stay into an unforgettable one.",
  },
  {
    id: "lesson-9",
    title: "Saying No with Grace",
    titleJa: "Lesson 9 — 上品な断り方",
    label: "Professional",
    youtubeId: "PLACEHOLDER_EDU_L9",
    description: "The guest is not asking you to break the rules — they're asking if you care enough to help.",
  },
];

const courseSpotlights = [
  {
    id: "front-desk-full",
    title: "Front Desk Course",
    titleJa: "フロントデスクコース",
    label: "中級",
    youtubeId: "PLACEHOLDER_FULL_FRONTDESK",
    description: "チェックイン・チェックアウトから緊急対応まで、フロントのあらゆる英語シーンに対応。",
    descriptionEn: "From check-in and check-out to emergency situations — every English scenario a front desk agent faces.",
    testimonials: [
      {
        quote: "チェックインの対応がスムーズにできるようになりました。以前は英語のゲストに声をかけられると緊張していましたが、今は自信を持って対応できます。",
        quoteEn: "I can now handle check-ins smoothly. Before, I used to freeze when English-speaking guests approached — now I respond with confidence.",
        role: "フロントスタッフ",
        roleEn: "Front Desk",
        property: "Hilton Group property",
        stars: 5,
      },
      {
        quote: "よく使う英語のフレーズを、目と耳と声で身体に染み込ませることができました。ゲストからの質問に素早く反応できています。",
        quoteEn: "I absorbed common phrases through eyes, ears, and voice. Now I respond to guest questions in English almost instantly.",
        role: "フロントスタッフ",
        roleEn: "Front Desk",
        property: "Hilton Group property",
        stars: 5,
      },
    ],
  },
  {
    id: "fb-full",
    title: "F&B Course",
    titleJa: "F&Bコース",
    label: "中級",
    youtubeId: "PLACEHOLDER_FULL_FB",
    description: "注文対応・メニュー説明・アレルギー確認・ワインのペアリング提案まで、レストランの英語を総合的に習得。",
    descriptionEn: "Order taking, menu explanation, allergen queries, wine pairing — complete restaurant English in one course.",
    testimonials: [
      {
        quote: "接客での言い回しなど専門的な英語を学べたこと。焼き加減をスムーズに聞けるようになった時は嬉しかったです。",
        quoteEn: "I learned industry-specific phrases for hospitality. The first time I smoothly asked a guest how they wanted their steak cooked — that was a real moment.",
        role: "レストランスタッフ",
        roleEn: "Restaurant Staff",
        property: "Hilton Group property",
        stars: 5,
      },
      {
        quote: "アレルギーの説明やメニューの詳細を英語で伝えられるようになり、ゲストへの対応がより丁寧になりました。",
        quoteEn: "I can now explain allergens and menu details in English — my guest interactions have become noticeably more professional.",
        role: "レストランスタッフ",
        roleEn: "F&B Associate",
        property: "Hilton Group property",
        stars: 5,
      },
    ],
  },
  {
    id: "concierge-full",
    title: "Concierge Course",
    titleJa: "コンシェルジュコース",
    label: "上級",
    youtubeId: "PLACEHOLDER_FULL_CONCIERGE",
    description: "VIPゲストへの対応・観光案内・レストラン予約・ツアー手配 — コンシェルジュに必要な上級英語を習得。",
    descriptionEn: "VIP handling, sightseeing guidance, restaurant bookings, tour arrangements — advanced English for concierges.",
    testimonials: [
      {
        quote: "VIPゲストへの対応が怖くなくなりました。丁寧で自然な英語が身についたと感じています。",
        quoteEn: "VIP interactions no longer feel daunting. I feel like I've genuinely acquired polite, natural English.",
        role: "コンシェルジュ",
        roleEn: "Concierge",
        property: "Hilton Group property",
        stars: 5,
      },
      {
        quote: "レストランの予約やツアーの手配を英語で流暢にできるようになり、ゲストからお礼を言われることが増えました。",
        quoteEn: "I can now make restaurant bookings and arrange tours fluently in English — guests thank me more often than before.",
        role: "コンシェルジュ",
        roleEn: "Concierge",
        property: "Hilton Group property",
        stars: 5,
      },
    ],
  },
  {
    id: "email-full",
    title: "Email Course",
    titleJa: "メールコース",
    label: "中級",
    youtubeId: "PLACEHOLDER_FULL_EMAIL",
    description: "予約確認・変更対応・VIPゲストへの特別対応まで、プロフェッショナルな英文メールを習得。",
    descriptionEn: "Booking confirmations, change requests, VIP correspondence — professional business email in English.",
    testimonials: [
      {
        quote: "英文メールを書くのに以前は30分かかっていましたが、今は5分で書けます。表現も自然になりました。",
        quoteEn: "Business emails used to take me 30 minutes. Now it takes 5, and my phrasing sounds natural.",
        role: "フロントマネージャー",
        roleEn: "Front Office Manager",
        property: "Hilton Group property",
        stars: 5,
      },
      {
        quote: "プロフェッショナルな表現を覚えたことで、VIPゲストへのメール対応に自信が持てるようになりました。",
        quoteEn: "Learning professional expressions gave me the confidence to handle VIP guest emails without hesitation.",
        role: "ゲストリレーションズ",
        roleEn: "Guest Relations",
        property: "Hilton Group property",
        stars: 5,
      },
    ],
  },
];

const studentComments = [
  {
    id: 1,
    user: "フロントスタッフ（大阪）",
    initial: "フ",
    course: "Front Desk Course",
    text: "Lesson 3のロールプレイがすごく良かったです！実際のシーンに近くて練習しやすいです。",
    textEn: "The role-play in Lesson 3 was excellent — it felt so close to a real situation.",
    time: "2週間前",
    likes: 12,
  },
  {
    id: 2,
    user: "Reception Staff (Hiroshima)",
    initial: "R",
    course: "Front Desk Course",
    text: "The phrase 'Would you prefer a room with a view?' — I used it with a real guest yesterday and it worked perfectly!",
    textEn: null,
    time: "3週間前",
    likes: 18,
  },
  {
    id: 3,
    user: "レストランスタッフ（東京）",
    initial: "レ",
    course: "F&B Course",
    text: "Unit 2の焼き加減の表現、本当に助かりました。ゲストに自信を持って聞けるようになりました。",
    textEn: "The steak doneness expressions in Unit 2 were a lifesaver. I can now ask guests confidently.",
    time: "1ヶ月前",
    likes: 24,
  },
  {
    id: 4,
    user: "コンシェルジュ（京都）",
    initial: "コ",
    course: "Concierge Course",
    text: "レストランのレコメンデーションのフレーズが増えました。ゲストの反応が明らかに良くなっています！",
    textEn: "My restaurant recommendation vocabulary has grown significantly. Guests respond so much better now!",
    time: "1ヶ月前",
    likes: 31,
  },
  {
    id: 5,
    user: "Front Office Staff (Osaka)",
    initial: "F",
    course: "Email Course",
    text: "The email templates are saving me so much time. I used to spend 20 minutes on a single confirmation email — now it's 3 minutes.",
    textEn: null,
    time: "6週間前",
    likes: 22,
  },
  {
    id: 6,
    user: "ゲストリレーションズ（沖縄）",
    initial: "ゲ",
    course: "Concierge Course",
    text: "VIPゲスト対応のレッスンが特に勉強になりました。言葉選びが変わったと上司からも言われました。",
    textEn: "The VIP handling lessons were especially valuable. My manager noticed a change in how I express myself.",
    time: "2ヶ月前",
    likes: 19,
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${i < count ? "text-[#c9a03c] fill-[#c9a03c]" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

function VideoThumbnail({
  youtubeId,
  title,
  badge,
  onPlay,
}: {
  youtubeId: string;
  title: string;
  badge?: string;
  onPlay?: (id: string) => void;
}) {
  const isPlaceholder = youtubeId.startsWith("PLACEHOLDER");
  const thumbnailUrl = isPlaceholder
    ? null
    : `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-[#16213e] group cursor-pointer"
      style={{ aspectRatio: "16/9" }}
      onClick={() => !isPlaceholder && onPlay?.(youtubeId)}
    >
      {thumbnailUrl ? (
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
          <div className="text-white/20 text-center">
            <Play className="size-10 mx-auto mb-2" />
            <p className="text-xs tracking-widest uppercase">Video</p>
          </div>
        </div>
      )}
      {!isPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4">
            <Play className="size-8 text-white fill-white" />
          </div>
        </div>
      )}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a03c]" />
      {badge && (
        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white/60 text-xs px-2 py-0.5 rounded">
          {badge}
        </div>
      )}
    </div>
  );
}

function VideoModal({ youtubeId, onClose }: { youtubeId: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
        >
          <X className="size-4" /> Close
        </button>
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function EduPortfolioPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const handlePlay = useCallback((id: string) => setActiveVideoId(id), []);
  const handleClose = useCallback(() => setActiveVideoId(null), []);


  return (
    <main className="min-h-screen bg-[#1a1a2e]">
      {activeVideoId && <VideoModal youtubeId={activeVideoId} onClose={handleClose} />}

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#1a1a2e]/95 backdrop-blur-sm px-6 py-4">
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1a1a2e] text-white">
        <img
          src="/images/skillhunter_top.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-bottom opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-transparent to-[#1a1a2e]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/60 via-transparent to-[#1a1a2e]/80" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a03c] mb-4">
              Training Video Portfolio
            </p>
            <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              研修コース<span className="text-[#c9a03c]">サンプル</span>
            </h1>
            <p className="mt-6 text-base text-white/60 sm:text-lg">
              A 45-second sample from each Skill Hunter training course — a quick look
              at how our lessons bring real hotel English scenarios to life.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: COURSE SAMPLES (45-sec) ══════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Course Samples</h2>
            <p className="text-sm text-white/40 mt-1">
              One sample video from each course in the Skill Hunter training curriculum
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courseSamples.map((course) => (
              <div key={course.id} className="group">
                <VideoThumbnail
                  youtubeId={course.youtubeId}
                  title={course.title}
                  badge="〜45 sec"
                  onPlay={handlePlay}
                />
                <div className="mt-4">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a03c]">
                      {course.titleJa}
                    </p>
                    <span className="text-xs text-white/40 border border-white/15 rounded px-2 py-0.5">
                      {course.label}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white text-sm">{course.title}</h3>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BRIDGE ── */}
      <div className="bg-[#16213e] border-y border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { stat: "4.36", unit: "/ 5", ja: "総合満足度", en: "Overall satisfaction" },
              { stat: "27",   unit: "名",  ja: "アンケート回答者", en: "Survey respondents" },
              { stat: "6",    unit: "コース", ja: "トレーニングコース", en: "Training courses" },
              { stat: "228",  unit: "名",  ja: "現在受講中のスタッフ", en: "Staff currently enrolled" },
            ].map(({ stat, unit, ja, en }) => (
              <div key={ja} className="flex flex-col items-center gap-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{stat}</span>
                  <span className="text-sm text-white/40">{unit}</span>
                </div>
                <span className="text-xs font-medium text-white/70 mt-1">{ja}</span>
                <span className="text-xs text-white/30 italic">{en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ SECTION 2: COURSE SPOTLIGHT + TESTIMONIALS ══════════════════════════ */}
      <section className="bg-[#fafaf8] py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center mb-16 sm:mb-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a03c] mb-3">
              受講生の声
            </p>
            <h2 className="text-3xl font-bold text-[#1a1a2e] sm:text-4xl">
              コース動画 & 受講生の声
            </h2>
            <p className="mt-4 text-base text-[#1a1a2e]/55 max-w-2xl mx-auto leading-relaxed">
              Actual course content paired with real feedback from hotel staff
              currently using Skill Hunter.
            </p>
            <p className="mt-1 text-xs text-[#1a1a2e]/35 italic">
              匿名アンケート（回答者27名）より抜粋 — 総合満足度 4.36 / 5
            </p>
          </div>

          <div className="space-y-20 sm:space-y-28">
            {courseSpotlights.map((course, idx) => (
              <div key={course.id}>
                {/* Video + course info */}
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className={idx % 2 === 1 ? "lg:order-last" : ""}>
                    <VideoThumbnail
                      youtubeId={course.youtubeId}
                      title={course.title}
                      onPlay={handlePlay}
                    />
                  </div>
                  <div className={idx % 2 === 1 ? "lg:order-first" : ""}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9a03c]">
                        {course.titleJa}
                      </span>
                      <span className="text-xs text-[#1a1a2e]/40 border border-[#1a1a2e]/15 rounded px-2 py-0.5">
                        {course.label}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1a1a2e] leading-snug sm:text-3xl">
                      {course.title}
                    </h3>
                    <p className="mt-4 text-sm text-[#1a1a2e]/70 leading-relaxed">
                      {course.description}
                    </p>
                    <p className="mt-1.5 text-xs text-[#1a1a2e]/40 italic leading-relaxed">
                      {course.descriptionEn}
                    </p>
                  </div>
                </div>

                {/* Testimonial cards */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {course.testimonials.map((t, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
                    >
                      <Quote className="size-6 text-[#c9a03c] mb-3 shrink-0" />
                      <StarRating count={t.stars} />
                      <p className="mt-3 text-sm leading-relaxed text-[#1a1a2e]/90 flex-1">
                        「{t.quote}」
                      </p>
                      <p className="mt-2 text-xs text-[#1a1a2e]/40 italic leading-relaxed">
                        &ldquo;{t.quoteEn}&rdquo;
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs font-semibold text-[#1a1a2e]">
                          {t.role} / {t.roleEn}
                        </p>
                        <p className="text-xs text-[#1a1a2e]/40 mt-0.5">{t.property}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {idx < courseSpotlights.length - 1 && (
                  <div className="mt-20 sm:mt-28 h-px bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3: IN-COURSE COMMENTS ════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-100 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="size-4 text-[#c9a03c]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a03c]">
                コース内コメント
              </p>
            </div>
            <h2 className="text-2xl font-bold text-[#1a1a2e] sm:text-3xl">
              受講生のコメント
            </h2>
            <p className="mt-2 text-sm text-[#1a1a2e]/50 max-w-xl leading-relaxed">
              Real comments left by hotel staff inside the Skill Hunter learning platform —
              unedited and submitted by active learners.
            </p>
          </div>

          <div className="space-y-3">
            {studentComments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-xl border border-gray-100 bg-[#fafaf8] p-5 hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="size-9 rounded-full bg-[#1a1a2e] flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">{comment.initial}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="text-sm font-semibold text-[#1a1a2e]">{comment.user}</span>
                      <span className="text-[#1a1a2e]/20">·</span>
                      <span className="text-xs font-medium text-[#c9a03c]">{comment.course}</span>
                      <span className="text-xs text-[#1a1a2e]/30 ml-auto shrink-0">{comment.time}</span>
                    </div>
                    <p className="text-sm text-[#1a1a2e]/80 leading-relaxed">{comment.text}</p>
                    {comment.textEn && (
                      <p className="mt-1 text-xs text-[#1a1a2e]/38 italic leading-relaxed">
                        {comment.textEn}
                      </p>
                    )}
                    <div className="mt-3 flex items-center gap-1.5 text-[#1a1a2e]/30">
                      <Heart className="size-3.5" />
                      <span className="text-xs">{comment.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFIDENTIALITY NOTICE ── */}
      <div className="bg-[#16213e] border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex items-start gap-3">
            <Lock className="size-4 text-[#c9a03c] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-xs font-semibold text-[#c9a03c] tracking-wide uppercase">
                Confidential — For Business Reference Only
              </p>
              <p className="text-xs text-white/55 leading-relaxed max-w-3xl">
                This page is shared exclusively for the purpose of evaluating a potential
                collaboration with our training team. The sample videos shown here are
                unpublished training course content intended for internal review only.
                We respectfully ask that this page and its contents not be forwarded,
                screenshotted, or distributed beyond the intended recipient.
              </p>
              <p className="text-xs text-white/35 leading-relaxed max-w-3xl mt-1">
                本ページは、弊社研修コンテンツとのお取り引きをご検討いただくための、限定公開の参考資料です。
                掲載のサンプル映像は未公開のコース素材であり、社内参照用のみを目的としています。
                本ページのURL・内容の第三者への転送・共有はご遠慮ください。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#1a1a2e] py-8 px-6">
        <div className="mx-auto max-w-6xl flex items-center justify-center">
          <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-5 opacity-50" />
        </div>
      </footer>
    </main>
  );
}
