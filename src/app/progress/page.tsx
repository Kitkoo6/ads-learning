"use client";

import Link from "next/link";
import { TopBar } from "@/components/top-bar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n/provider";
import { useProgress } from "@/lib/progress";
import { tracks } from "@/content/curriculum";
import type { Track } from "@/content/schema";
import { cn } from "@/lib/utils";
import { Check, Flame, RotateCcw, Sparkles, Trophy } from "lucide-react";

export default function ProgressPage() {
  const { tb, locale, t } = useI18n();
  const { overallProgress, trackProgress, isDone, reset } = useProgress();
  const overall = overallProgress();

  return (
    <div className="min-h-screen">
      <TopBar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-br from-emerald-400/30 via-sky-400/30 to-violet-400/30 blur-3xl" />

        <div className="container relative py-16">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t("progress.your")}
          </div>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {locale === "en" ? "Your learning, in one place." : "การเรียนของคุณในที่เดียว"}
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            {locale === "en"
              ? "Progress is saved locally in your browser. No login, no cloud."
              : "ความคืบหน้าบันทึกในเบราว์เซอร์ของคุณ ไม่ต้องล็อกอิน ไม่มีคลาวด์"}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-[1.4fr_1fr]">
            {/* Overall progress card */}
            <div className="rounded-2xl border bg-card p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                    <Sparkles className="size-3" />
                    {locale === "en" ? "All tracks" : "ทุกหลักสูตร"}
                  </div>
                  <div className="mt-4 flex items-baseline gap-3">
                    <span className="font-display text-6xl font-semibold leading-none">
                      {overall.pct}%
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {overall.done}/{overall.total} {t("progress.lessons")}
                    </span>
                  </div>
                  <Progress value={overall.pct} className="mt-4 h-2.5" />
                </div>

                {overall.pct === 100 && (
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-white shadow-lg">
                    <Trophy className="size-8" />
                  </div>
                )}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {tracks.map((tr) => {
                  const p = trackProgress(tr.id);
                  return (
                    <Link
                      key={tr.id}
                      href={`/${tr.id}`}
                      className="group rounded-xl border bg-background p-3 transition-all hover:-translate-y-0.5 hover:border-foreground/40"
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={cn(
                            "size-2 rounded-full bg-gradient-to-br",
                            tr.accentClass
                          )}
                          style={{ backgroundColor: tr.brandColor }}
                        />
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {tr.id}
                        </span>
                      </div>
                      <div className="mt-3 font-display text-xl font-semibold">
                        {p.pct}%
                      </div>
                      <div className="text-[11px] text-muted-foreground">
                        {p.done}/{p.total}
                      </div>
                      <Progress
                        value={p.pct}
                        className="mt-2 h-1"
                        indicatorClassName={cn("bg-gradient-to-r", tr.accentClass)}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Streak / actions */}
            <div className="space-y-4">
              <div className="rounded-2xl border bg-card p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  <Flame className="size-4 text-orange-500" />
                  {locale === "en" ? "Status" : "สถานะ"}
                </div>
                <div className="mt-4 font-display text-2xl font-semibold">
                  {overall.done === 0
                    ? locale === "en" ? "Ready to start" : "พร้อมเริ่มเรียน"
                    : overall.pct === 100
                    ? locale === "en" ? "Course complete! 🎉" : "เรียนจบหลักสูตร! 🎉"
                    : locale === "en"
                    ? `${overall.done} lessons in the bank`
                    : `เรียนไปแล้ว ${overall.done} บทเรียน`}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {locale === "en"
                    ? "Keep going — even one lesson a day adds up."
                    : "ทำต่อไป — วันละบทก็เพิ่มพูนได้"}
                </p>
              </div>

              <div className="rounded-2xl border border-dashed bg-card/50 p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {locale === "en" ? "Danger zone" : "โซนอันตราย"}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {locale === "en"
                    ? "Reset wipes all completion marks from this browser."
                    : "การรีเซ็ตจะลบเครื่องหมายเรียนจบทั้งหมดออกจากเบราว์เซอร์นี้"}
                </p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-full"
                  onClick={() => {
                    if (
                      window.confirm(
                        locale === "en"
                          ? "Reset all progress?"
                          : "รีเซ็ตความคืบหน้าทั้งหมดใช่มั้ย?"
                      )
                    )
                      reset();
                  }}
                >
                  <RotateCcw className="size-4" />
                  {t("progress.reset")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Per-track breakdown */}
      <section className="container py-14">
        <div className="space-y-12">
          {tracks.map((tr) => (
            <TrackBreakdown key={tr.id} track={tr} isDone={isDone} locale={locale} tb={tb} />
          ))}
        </div>
      </section>
    </div>
  );
}

function TrackBreakdown({
  track,
  isDone,
  locale,
  tb,
}: {
  track: Track;
  isDone: (id: string) => boolean;
  locale: "en" | "th";
  tb: ReturnType<typeof useI18n>["tb"];
}) {
  const done = track.lessons.filter((l) => isDone(l.id)).length;
  const total = track.lessons.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
            style={{ backgroundColor: track.brandColor }}
          >
            {track.id}
          </div>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl" lang={locale}>
            {tb(track.name).primary}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl font-semibold">{pct}%</span>
          <span className="text-sm text-muted-foreground">
            {done}/{total}
          </span>
        </div>
      </div>

      <Progress
        value={pct}
        className="mt-4 h-1.5"
        indicatorClassName={cn("bg-gradient-to-r", track.accentClass)}
      />

      <ul className="mt-6 grid gap-2 md:grid-cols-2">
        {track.lessons.map((l) => {
          const d = isDone(l.id);
          return (
            <li key={l.id}>
              <Link
                href={`/${track.id}/${l.slug}`}
                className={cn(
                  "flex items-start gap-3 rounded-xl border p-3 text-sm transition-all hover:-translate-y-0.5 hover:bg-accent",
                  d && "border-emerald-500/30 bg-emerald-500/5"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-mono",
                    d
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : "border-border text-muted-foreground"
                  )}
                >
                  {d ? <Check className="size-3" /> : String(l.order).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium" lang={locale}>
                    {tb(l.title).primary}
                  </div>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge
                      variant={l.level === "beginner" ? "beginner" : "advanced"}
                      className="px-1.5 py-0 text-[10px]"
                    >
                      {l.level}
                    </Badge>
                    <span>{l.readTimeMin} min</span>
                    {l.thailandFocus && <span>🇹🇭 Thailand</span>}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
