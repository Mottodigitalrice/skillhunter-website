"use client";

import { Trophy, Lock, Play, Star, X, Menu } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { label: "Work", labelJa: "作品", href: "/pvportfolio" },
  { label: "Process", labelJa: "制作の流れ", href: "/pvprocess" },
  { label: "Why us", labelJa: "選ばれる理由", href: "/pvwhyus" },
  { label: "About us", labelJa: "制作チーム", href: "/pvabout" },
  { label: "Contact", labelJa: "お問い合わせ", href: "/pvcontact" },
];

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
    title: "Hilton Hiroshima Opening Video",
    youtubeId: "lgk_zNa_Tvg",
  },
  {
    id: "award-3",
    title: "Tubame Kotsu Cruiser Video",
    youtubeId: "FD8A_JPMfhc",
  },
];

const otherVideos: { id: string; title: string; youtubeId?: string; instagramUrl?: string }[] = [
  { id: "other-1", title: "Double Tree by Hilton Kyoto Station Room Video", youtubeId: "MKMIP6NkCCA" },
  { id: "other-2", title: "DoubleTree by Tokyo Ariake", youtubeId: "fzOkq-jt0GU" },
  { id: "other-3", title: "Hilton Tokyo", youtubeId: "58Klnxrmvdg" },
  { id: "other-4", title: "Takayama Nagoya Coaster Experience", youtubeId: "MK7GTonGUbI" },
];

const verticalVideos: { id: string; title: string; youtubeId?: string; instagramUrl?: string }[] = [
  { id: "vert-1", title: "Hilton Fukuoka Sea Hawk Wedding Promotion Video", youtubeId: "OBJorL7i5yY" },
  { id: "vert-2", title: "Hilton Osaka Centrum restaurant Steak promotion", instagramUrl: "https://www.instagram.com/reel/DH-2LY6iZxF/" },
  { id: "vert-3", title: "Doubletree by Hilton Osaka Castle Pool Promotion Video", instagramUrl: "https://www.instagram.com/reel/DMg_Vi1vn7_/" },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function VideoThumbnail({
  youtubeId,
  title,
  aspectRatio = "16/9",
  onPlay,
}: {
  youtubeId: string;
  title: string;
  aspectRatio?: "16/9" | "9/16";
  onPlay?: (id: string) => void;
}) {
  const isPlaceholder = youtubeId.startsWith("PLACEHOLDER");
  const thumbnailUrl = isPlaceholder
    ? null
    : `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-[#16213e] group cursor-pointer"
      style={{ aspectRatio }}
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
            <Play className="size-12 mx-auto mb-2" />
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
    </div>
  );
}

function VideoModal({ youtubeId, onClose }: { youtubeId: string; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
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

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

let instagramEmbedScriptPromise: Promise<void> | null = null;

function loadInstagramEmbedScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve();
  if (!instagramEmbedScriptPromise) {
    instagramEmbedScriptPromise = new Promise((resolve) => {
      const existing = document.querySelector<HTMLScriptElement>(
        'script[src="https://www.instagram.com/embed.js"]'
      );
      if (existing) {
        existing.addEventListener("load", () => resolve());
        return;
      }
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => resolve();
      document.body.appendChild(script);
    });
  }
  return instagramEmbedScriptPromise;
}

function InstagramEmbed({ url, title }: { url: string; title: string }) {
  useEffect(() => {
    let cancelled = false;
    loadInstagramEmbedScript().then(() => {
      if (!cancelled) window.instgrm?.Embeds.process();
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-[#16213e]">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ background: "#FFF", borderRadius: "12px", margin: 0, width: "100%", minWidth: "100%" }}
      >
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </blockquote>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a03c]" />
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function PvPortfolioPage() {
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
          <a href="/pvfilm">
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
            <a href="/pvfilm" className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 hover:text-[#c9a03c] transition-colors">
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
            <a href="/pvfilm" onClick={() => setMenuOpen(false)} className="text-xs text-white/40 hover:text-[#c9a03c] transition-colors uppercase tracking-[0.15em]">← Home</a>
          </div>
        )}
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
              制作<span className="text-[#c9a03c]">実績</span>
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
                <VideoThumbnail youtubeId={featuredWork.youtubeId} title={featuredWork.title} onPlay={handlePlay} />
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
                <VideoThumbnail youtubeId={video.youtubeId} title={video.title} onPlay={handlePlay} />
                <div className="mt-5">
                  <h3 className="text-lg font-bold text-white">{video.title}</h3>
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
                {video.instagramUrl ? (
                  <InstagramEmbed url={video.instagramUrl} title={video.title} />
                ) : (
                  <VideoThumbnail youtubeId={video.youtubeId!} title={video.title} onPlay={handlePlay} />
                )}
                <div className="mt-3">
                  <h3 className="font-semibold text-white text-sm">{video.title}</h3>
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

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {verticalVideos.map((video) => (
              <div key={video.id} className="group">
                {video.instagramUrl ? (
                  <InstagramEmbed url={video.instagramUrl} title={video.title} />
                ) : (
                  <VideoThumbnail
                    youtubeId={video.youtubeId!}
                    title={video.title}
                    aspectRatio="9/16"
                    onPlay={handlePlay}
                  />
                )}
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
