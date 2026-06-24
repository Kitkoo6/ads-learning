"use client";

import Link from "next/link";
import { TopBar } from "@/components/top-bar";
import { LessonCard } from "@/components/lesson-card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/provider";
import { useProgress } from "@/lib/progress";
import { tracks } from "@/content/curriculum";
import type { TrackId } from "@/content/schema";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function TrackHub({ trackId }: { trackId: TrackId }) {
  const track = tracks.find((t) => t.id === trackId)!;
  const { tb, locale, t } = useI18n();
  const { trackProgress } = useProgress();
  const progress = trackProgress(track.id);
  const name = tb(track.name);
  const tagline = tb(track.tagline);
  const description = tb(track.description);
  const otherLang = locale === "en" ? "th" : "en";

  const beginners = track.lessons.filter((l) => l.level === "beginner");
  const advanced = track.lessons.filter((l) => l.level === "advanced");

  const firstUnfinished =
    track.lessons.find((l) => !progress.pct || false) ?? track.lessons[0];

  return (
    <div className="min-h-screen">
      <TopBar />

      {/* Track hero */}
      <section className="relative overflow-hidden border-b">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-90",
            track.accentClass
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.6),transparent_60%)] mix-blend-overlay" />

        <div className="container relative py-14 text-white">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur transition-colors hover:bg-white/30"
          >
            <ArrowLeft className="size-3.5" />
            {locale === "en" ? "All tracks" : "หลักสูตรทั้งหมด"}
          </Link>

          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                {track.id} {locale === "en" ? "Track" : "หลักสูตร"}
              </div>
              <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-6xl" lang={locale}>
                {name.primary}
              </h1>
              {name.secondary && (
                <p className="mt-1 text-xl text-white/80" lang={otherLang}>
                  {name.secondary}
                </p>
              )}
              <p className="mt-3 max-w-xl text-white/90" lang={locale}>
                {tagline.primary}
              </p>
              <p className="mt-1 max-w-xl text-sm text-white/70" lang={locale}>
                {description.primary}
              </p>
            </div>

            <div className="w-full max-w-xs rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center justify-between text-xs font-medium text-white/80">
                <span>{t("progress.your")}</span>
                <span>
                  {progress.done}/{progress.total}
                </span>
              </div>
              <Progress
                value={progress.pct}
                className="mt-2 bg-white/20"
                indicatorClassName="bg-white"
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-2xl font-semibold">{progress.pct}%</span>
                <Button asChild size="sm" variant="secondary" className="rounded-full text-foreground">
                  <Link href={`/${track.id}/${firstUnfinished.slug}`}>
                    {progress.done > 0
                      ? locale === "en" ? "Resume" : "เรียนต่อ"
                      : t("home.cta.start")}
                    <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beginner */}
      <section className="container py-14">
        <SectionHeader
          label={t("level.beginner")}
          accent="emerald"
          subtitle={locale === "en"
            ? `${beginners.length} lessons to lay the foundation.`
            : `${beginners.length} บทเรียนเพื่อปูพื้นฐาน`}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {beginners.map((l, i) => (
            <div key={l.id} className="anim-rise" style={{ animationDelay: `${i * 50}ms` }}>
              <LessonCard lesson={l} track={track} />
            </div>
          ))}
        </div>
      </section>

      {/* Advanced */}
      <section className="container border-t pt-14 pb-24">
        <SectionHeader
          label={t("level.advanced")}
          accent="rose"
          subtitle={locale === "en"
            ? `${advanced.length} deeper lessons, including a Thailand-specific playbook.`
            : `${advanced.length} บทเรียนเชิงลึก รวมเพลย์บุ๊กสำหรับตลาดไทย`}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {advanced.map((l, i) => (
            <div key={l.id} className="anim-rise" style={{ animationDelay: `${i * 50}ms` }}>
              <LessonCard lesson={l} track={track} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  label,
  accent,
  subtitle,
}: {
  label: string;
  accent: "emerald" | "rose";
  subtitle: string;
}) {
  const dotColor = accent === "emerald" ? "bg-emerald-500" : "bg-rose-500";
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span className={cn("inline-block size-2 rounded-full", dotColor)} />
          {label}
        </div>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {label}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  );
}
