import { Trophy, Lock, Play, Star } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const featuredWork = {
  id: "hilton-kyoto",
  title: "Hilton Kyoto — Opening Promotion Film",
  youtubeId: "zUoRkmIbu08",
  awards: [
    "優秀賞 — Tourism Services / Japan Competition (JWTFF Maniwa 2025)",
    "ART&CRAFT Award — International Competition (JWTFF Maniwa 2025)",
  ],
  certificates: [
    {
      src: "/images/pvportfolio/jwtff-japan-2025.png",
      label: "Japan Competition — 優秀賞",
    },
    {
      src: "/images/pvportfolio/jwtff-international-2025.png",
      label: "International Competition — ART&CRAFT",
    },
  ],
};

const awardVideos = [
  {
    id: "award-2",
    title: "Award-Winning Film",
    youtubeId: "PLACEHOLDER_2",
    awards: ["Award Name — Competition 2024"],
    certificates: [
      {
        src: "/images/pvportfolio/jwtff-2026-finalist-international.png",
        label: "Finalist — International Competition (JWTFF Koka 2026)",
      },
    ],
  },
  {
    id: "award-3",
    title: "Award-Winning Film",
    youtubeId: "PLACEHOLDER_3",
    awards: ["Award Name — Competition 2024"],
    certificates: [
      {
        src: "/images/pvportfolio/jwtff-2026-official-selection-international.png",
        label: "Official Selection — International Competition (JWTFF Koka 2026)",
      },
    ],
  },
];

const otherVideos = [
  { id: "other-1", title: "Promotion Film Title", youtubeId: "PLACEHOLDER_OTHER_1", client: "Hotel Name" },
  { id: "other-2", title: "Promotion Film Title", youtubeId: "PLACEHOLDER_OTHER_2", client: "Hotel Name" },
  { id: "other-3", title: "Promotion Film Title", youtubeId: "PLACEHOLDER_OTHER_3", client: "Hotel Name" },
  { id: "other-4", title: "Promotion Film Title", youtubeId: "PLACEHOLDER_OTHER_4", client: "Hotel Name" },
];

const verticalVideos = [
  { id: "vert-1", title: "Short Form", youtubeId: "PLACEHOLDER_VERT_1" },
  { id: "vert-2", title: "Short Form", youtubeId: "PLACEHOLDER_VERT_2" },
  { id: "vert-3", title: "Short Form", youtubeId: "PLACEHOLDER_VERT_3" },
  { id: "vert-4", title: "Short Form", youtubeId: "PLACEHOLDER_VERT_4" },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function VideoThumbnail({
  youtubeId,
  title,
  aspectRatio = "16/9",
}: {
  youtubeId: string;
  title: string;
  aspectRatio?: "16/9" | "9/16";
}) {
  const isPlaceholder = youtubeId.startsWith("PLACEHOLDER");
  const thumbnailUrl = isPlaceholder
    ? null
    : `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  const inner = (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-[#16213e] group cursor-pointer"
      style={{ aspectRatio }}
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
            <Play className="size-12 mx-auto mb-2" />
            <p className="text-xs tracking-widest uppercase">Video</p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4">
          <Play className="size-8 text-white fill-white" />
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a03c]" />
    </div>
  );

  if (isPlaceholder) return inner;

  return (
    <a href={`https://www.youtube.com/watch?v=${youtubeId}`} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function PvPortfolioPage() {
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
          src="/images/camera_crew.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-transparent to-[#1a1a2e]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/60 via-transparent to-[#1a1a2e]/80" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9a03c] mb-4">
              Promotion Video Portfolio
            </p>
            <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              映像制作<span className="text-[#c9a03c]">実績</span>
            </h1>
            <p className="mt-6 text-base text-white/60 sm:text-lg">
              A selection of promotion films and short-form content
              created for luxury hospitality brands across Japan.
            </p>
          </div>
        </div>
      </section>

      {/* ══ SECTION 1: FEATURED WORK ══════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6">
        <div className="mx-auto max-w-6xl">

          <div className="flex items-center gap-3 mb-10">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#c9a03c]/10 text-[#c9a03c]">
              <Star className="size-5 fill-[#c9a03c]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Featured Work</h2>
              <p className="text-sm text-white/40 mt-0.5">Most-awarded film in our portfolio</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#c9a03c]/20 bg-[#16213e] p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px] items-start">

              <div>
                <VideoThumbnail youtubeId={featuredWork.youtubeId} title={featuredWork.title} />
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a03c] mb-2">
                    受賞作品 / Award-Winning Film
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-snug">
                    {featuredWork.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {featuredWork.awards.map((award) => (
                    <div
                      key={award}
                      className="flex items-start gap-3 rounded-lg border border-[#c9a03c]/25 bg-[#c9a03c]/8 px-4 py-3"
                    >
                      <Trophy className="size-4 text-[#c9a03c] shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80">{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-5">
                Official Award Certificates
              </p>
              <div className="grid grid-cols-2 gap-4">
                {featuredWork.certificates.map((cert) => (
                  <div key={cert.label} className="flex flex-col items-center gap-2">
                    <div className="w-full rounded-xl bg-white p-3 shadow-lg">
                      <img
                        src={cert.src}
                        alt={cert.label}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <p className="text-xs text-white/40 text-center leading-snug">{cert.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ══ SECTION 2: OTHER AWARD-WINNING FILMS ═════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6">
        <div className="mx-auto max-w-6xl">

          <div className="flex items-center gap-3 mb-10">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#c9a03c]/10 text-[#c9a03c]">
              <Trophy className="size-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">Award-Winning Films</h2>
              <p className="text-sm text-white/40 mt-0.5">
                Recognition from Japan and Asia Pacific film competitions
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {awardVideos.map((video) => (
              <div key={video.id}>
                <VideoThumbnail youtubeId={video.youtubeId} title={video.title} />
                <div className="mt-5">
                  <h3 className="text-lg font-bold text-white">{video.title}</h3>
                  {video.certificates && video.certificates.length > 0 ? (
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {video.certificates.map((cert) => (
                        <div key={cert.label} className="flex flex-col items-center gap-2">
                          <div className="w-full rounded-xl bg-white p-3 shadow-lg">
                            <img
                              src={cert.src}
                              alt={cert.label}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                          <p className="text-xs text-white/40 text-center leading-snug">{cert.label}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-3 space-y-2">
                      {video.awards.map((award) => (
                        <div
                          key={award}
                          className="flex items-start gap-3 rounded-lg border border-[#c9a03c]/20 bg-[#16213e] px-4 py-3"
                        >
                          <Trophy className="size-4 text-[#c9a03c] shrink-0 mt-0.5" />
                          <span className="text-sm text-white/80">{award}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ══ SECTION 3: PROMOTION FILMS ════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Promotion Films</h2>
            <p className="text-sm text-white/40 mt-1">A selection of our hotel promotion work</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {otherVideos.map((video) => (
              <div key={video.id} className="group">
                <VideoThumbnail youtubeId={video.youtubeId} title={video.title} />
                <div className="mt-3">
                  <p className="text-xs text-[#c9a03c] font-medium tracking-wide uppercase">
                    {video.client}
                  </p>
                  <h3 className="mt-1 font-semibold text-white text-sm">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* ══ SECTION 4: SHORT-FORM / VERTICAL ════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <h2 className="text-xl font-bold text-white sm:text-2xl">Short-Form Content</h2>
            <p className="text-sm text-white/40 mt-1">
              Vertical and short-form videos for social platforms
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {verticalVideos.map((video) => (
              <div key={video.id} className="group">
                <VideoThumbnail
                  youtubeId={video.youtubeId}
                  title={video.title}
                  aspectRatio="9/16"
                />
                <h3 className="mt-3 text-xs font-semibold text-white/80">{video.title}</h3>
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
                This page is shared exclusively for the purpose of evaluating a potential collaboration with our production team.
                The works presented here involve clients who maintain strict brand guidelines regarding the external use of their name and imagery.
                Accordingly, this page is not publicly listed or indexed, and we respectfully ask that its contents — including any client names or footage shown — not be forwarded, screenshotted, or distributed beyond the intended recipient.
                We appreciate your understanding and discretion.
              </p>
              <p className="text-xs text-white/35 leading-relaxed max-w-3xl mt-1">
                本ページは、弊社映像制作チームとのお取り引きをご検討いただくための、限定公開の参考資料です。
                掲載作品には、自社ブランドの外部使用に厳格なガイドラインを設けているクライアントの作品が含まれるため、
                本ページのURL・内容・クライアント名等の第三者への転送・共有はご遠慮ください。
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
