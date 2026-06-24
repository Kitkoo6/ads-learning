"use client";

import Link from "next/link";
import { TopBar } from "@/components/top-bar";
import { ReadingProgress } from "@/components/reading-progress";
import { Prose } from "@/components/prose";
import { MarkComplete } from "@/components/mark-complete";
import { Quiz } from "@/components/quiz/quiz";
import { DragMatch } from "@/components/quiz/drag-match";
import { Scenario } from "@/components/quiz/scenario";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useI18n } from "@/lib/i18n/provider";
import { useProgress } from "@/lib/progress";
import { tracks } from "@/content/curriculum";
import type { LessonSection, TrackId } from "@/content/schema";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  MapPin,
  PlayCircle,
} from "lucide-react";

export function LessonView({
  trackId,
  lessonSlug,
}: {
  trackId: TrackId;
  lessonSlug: string;
}) {
  const track = tracks.find((t) => t.id === trackId)!;
  const idx = track.lessons.findIndex((l) => l.slug === lessonSlug);
  const lesson = track.lessons[idx];
  const prev = idx > 0 ? track.lessons[idx - 1] : null;
  const next = idx < track.lessons.length - 1 ? track.lessons[idx + 1] : null;

  const { tb, locale, t, studyMode } = useI18n();
  const { trackProgress, isDone } = useProgress();
  const progress = trackProgress(track.id);
  const otherLang = locale === "en" ? "th" : "en";

  const title = tb(lesson.title);
  const summary = tb(lesson.summary);
  const trackName = tb(track.name);

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <TopBar />

      <div className="border-b bg-secondary/30">
        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={`/${track.id}`}
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              {trackName.primary}
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">
                {progress.done}/{progress.total}
              </span>
              <Progress value={progress.pct} className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <article className="container grid gap-10 py-12 lg:grid-cols-[1fr_280px]">
        <div className="min-w-0">
          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant={lesson.level === "beginner" ? "beginner" : "advanced"}>
                {t(lesson.level === "beginner" ? "level.beginner" : "level.advanced")}
              </Badge>
              <Badge
                variant={
                  track.id === "meta"
                    ? "meta"
                    : track.id === "tiktok"
                    ? "tiktok"
                    : "shopee"
                }
              >
                {trackName.primary}
              </Badge>
              {lesson.thailandFocus && (
                <Badge variant="outline" className="border-brand-thai/40 text-brand-thai">
                  <MapPin className="size-3" />
                  {locale === "en" ? "Thailand" : "ไทย"}
                </Badge>
              )}
              <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="size-3.5" />
                {lesson.readTimeMin} {t("lesson.read_time")}
              </span>
            </div>

            <h1
              className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
              lang={locale}
            >
              {title.primary}
            </h1>
            {title.secondary && (
              <h2
                className="mt-2 font-display text-2xl font-medium text-muted-foreground"
                lang={otherLang}
              >
                {title.secondary}
              </h2>
            )}

            <p className="mt-4 max-w-2xl text-lg text-muted-foreground" lang={locale}>
              {summary.primary}
            </p>

            {lesson.videoRef && (
              <a
                href={lesson.videoRef.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                <PlayCircle className="size-4 text-rose-500" />
                {t("lesson.video")}
                <ArrowRight className="size-3.5" />
              </a>
            )}
          </header>

          {/* Body */}
          {lesson.sections.length === 0 ? (
            <EmptyBodyNotice locale={locale} />
          ) : (
            <div className="space-y-12">
              {lesson.sections.map((s, i) => (
                <SectionBlock key={i} section={s} sideBySide={studyMode === "side-by-side"} locale={locale} />
              ))}
            </div>
          )}

          {/* Interactive elements */}
          {(lesson.dragMatch || lesson.scenario || lesson.quiz) && (
            <div className="mt-14 space-y-8">
              {lesson.dragMatch && <DragMatch exercise={lesson.dragMatch} />}
              {lesson.scenario && <Scenario scenario={lesson.scenario} />}
              {lesson.quiz && <Quiz quiz={lesson.quiz} />}
            </div>
          )}

          {/* Mark complete */}
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-card p-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {locale === "en" ? "Finished reading?" : "อ่านจบแล้วใช่มั้ย?"}
              </div>
              <div className="mt-1 font-display text-lg font-semibold">
                {locale === "en"
                  ? "Mark this lesson complete to track your progress."
                  : "ทำเครื่องหมายว่าเรียนจบเพื่อบันทึกความคืบหน้า"}
              </div>
            </div>
            <MarkComplete lessonId={lesson.id} />
          </div>

          {/* Prev/Next */}
          <nav className="mt-10 grid gap-3 md:grid-cols-2">
            {prev ? (
              <Link
                href={`/${track.id}/${prev.slug}`}
                className="group flex items-center gap-3 rounded-2xl border bg-card p-4 transition-colors hover:bg-accent"
              >
                <ArrowLeft className="size-4 text-muted-foreground" />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t("lesson.prev")}
                  </div>
                  <div className="truncate font-medium" lang={locale}>
                    {tb(prev.title).primary}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/${track.id}/${next.slug}`}
                className="group flex items-center justify-end gap-3 rounded-2xl border bg-card p-4 text-right transition-colors hover:bg-accent"
              >
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t("lesson.next")}
                  </div>
                  <div className="truncate font-medium" lang={locale}>
                    {tb(next.title).primary}
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
            )}
          </nav>
        </div>

        {/* Sidebar TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="rounded-2xl border bg-card p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {locale === "en" ? "On this track" : "ในหลักสูตรนี้"}
              </div>
              <ol className="mt-3 space-y-1">
                {track.lessons.map((l) => {
                  const done = isDone(l.id);
                  const active = l.slug === lesson.slug;
                  return (
                    <li key={l.id}>
                      <Link
                        href={`/${track.id}/${l.slug}`}
                        className={cn(
                          "flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors",
                          active
                            ? "bg-foreground text-background"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground"
                        )}
                      >
                        <span
                          className={cn(
                            "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border text-[10px] font-mono",
                            done
                              ? "border-emerald-500 bg-emerald-500 text-white"
                              : active
                              ? "border-background"
                              : "border-border"
                          )}
                        >
                          {done ? <Check className="size-2.5" /> : String(l.order).padStart(2, "0")}
                        </span>
                        <span className="line-clamp-2" lang={locale}>
                          {tb(l.title).primary}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </aside>
      </article>
    </div>
  );
}

function SectionBlock({
  section,
  sideBySide,
  locale,
}: {
  section: LessonSection;
  sideBySide: boolean;
  locale: "en" | "th";
}) {
  if (sideBySide) {
    return (
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            English
          </div>
          <h3 className="mt-1 font-display text-xl font-semibold tracking-tight" lang="en">
            {section.heading.en}
          </h3>
          <div className="mt-3">
            <Prose text={section.body.en} lang="en" />
          </div>
        </div>
        <div className="rounded-2xl border bg-card p-6">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            ไทย
          </div>
          <h3 className="mt-1 font-display text-xl font-semibold tracking-tight font-thai" lang="th">
            {section.heading.th}
          </h3>
          <div className="mt-3">
            <Prose text={section.body.th} lang="th" />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section>
      <h3 className="font-display text-2xl font-semibold tracking-tight" lang={locale}>
        {section.heading[locale]}
      </h3>
      <div className="mt-3">
        <Prose text={section.body[locale]} lang={locale} />
      </div>
    </section>
  );
}

function EmptyBodyNotice({ locale }: { locale: "en" | "th" }) {
  return (
    <div className="rounded-2xl border-2 border-dashed bg-card/50 p-10 text-center">
      <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
        ✨ {locale === "en" ? "Content pending" : "เนื้อหากำลังสร้าง"}
      </div>
      <p className="mt-4 max-w-md mx-auto text-sm text-muted-foreground">
        {locale === "en"
          ? "This lesson's content is in progress. The title, summary, and structure are already in place."
          : "เนื้อหาของบทเรียนนี้กำลังอยู่ระหว่างดำเนินการ โครงสร้างและสรุปพร้อมแล้ว"}
      </p>
    </div>
  );
}
