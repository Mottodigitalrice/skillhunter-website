import { Lock, Play } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const courses = [
  {
    id: "a1-course",
    title: "A1 Course",
    titleJa: "A1コース",
    label: "初級",
    youtubeId: "PLACEHOLDER_EDU_A1",
    description: "ゼロから始める基礎ホスピタリティ英語",
  },
  {
    id: "front-desk",
    title: "Front Desk Course",
    titleJa: "フロントデスクコース",
    label: "中級",
    youtubeId: "PLACEHOLDER_EDU_FRONTDESK",
    description: "チェックイン・チェックアウト・予約対応",
  },
  {
    id: "email",
    title: "Email Course",
    titleJa: "メールコース",
    label: "中級",
    youtubeId: "PLACEHOLDER_EDU_EMAIL",
    description: "プロの英文メール — 予約確認からVIP対応まで",
  },
  {
    id: "phone",
    title: "Phone Handling Course",
    titleJa: "電話対応コース",
    label: "中級",
    youtubeId: "PLACEHOLDER_EDU_PHONE",
    description: "予約受付・転送・伝言・クレーム対応",
  },
  {
    id: "concierge",
    title: "Concierge Course",
    titleJa: "コンシェルジュコース",
    label: "上級",
    youtubeId: "PLACEHOLDER_EDU_CONCIERGE",
    description: "VIPゲスト対応・レストラン推薦・ツアー手配",
  },
  {
    id: "fb",
    title: "F&B Course",
    titleJa: "F&Bコース",
    label: "中級",
    youtubeId: "PLACEHOLDER_EDU_FB",
    description: "注文対応・メニュー説明・アレルギー・アップセリング",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function VideoThumbnail({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const isPlaceholder = youtubeId.startsWith("PLACEHOLDER");
  const thumbnailUrl = isPlaceholder
    ? null
    : `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-[#16213e] group cursor-pointer"
      style={{ aspectRatio: "16/9" }}
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
            <p className="text-xs tracking-widest uppercase">Sample Video</p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4">
          <Play className="size-8 text-white fill-white" />
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a03c]" />
      <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white/60 text-xs px-2 py-0.5 rounded">
        〜45 sec
      </div>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function EduPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#1a1a2e]">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#1a1a2e]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-7" />
          <a href="/" className="text-sm text-white/50 hover:text-white transition-colors">
            ← Main Site
          </a>
        </div>
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

      {/* ══ COURSE SAMPLES ════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Course Samples</h2>
            <p className="text-sm text-white/40 mt-1">
              One sample video from each course in the Skill Hunter training curriculum
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.id} className="group">
                <VideoThumbnail youtubeId={course.youtubeId} title={course.title} />
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

      {/* ── CONFIDENTIALITY NOTICE ── */}
      <div className="bg-[#16213e] border-t border-white/10 mt-8">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <div className="flex items-start gap-3">
            <Lock className="size-4 text-[#c9a03c] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-xs font-semibold text-[#c9a03c] tracking-wide uppercase">
                Confidential — For Business Reference Only
              </p>
              <p className="text-xs text-white/55 leading-relaxed max-w-3xl">
                This page is shared exclusively for the purpose of evaluating a potential collaboration with our training team.
                The sample videos shown here are unpublished training course content intended for internal review only.
                We respectfully ask that this page and its contents not be forwarded, screenshotted, or distributed beyond the intended recipient.
                We appreciate your understanding and discretion.
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
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="mx-auto max-w-6xl flex items-center justify-center">
          <img src="/images/logo_wh_v2.png" alt="Skill Hunter" className="h-5 opacity-50" />
        </div>
      </footer>
    </main>
  );
}
