"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";
import type { Track } from "@/content/schema";
import { ArrowUpRight } from "lucide-react";

export function TrackCard({ track }: { track: Track }) {
  const { tb, locale, t } = useI18n();
  const name = tb(track.name);
  const tagline = tb(track.tagline);
  const beginnerCount = track.lessons.filter((l) => l.level === "beginner").length;
  const advancedCount = track.lessons.filter((l) => l.level === "advanced").length;
  const otherLang = locale === "en" ? "th" : "en";

  return (
    <Link
      href={`/${track.id}`}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b opacity-90",
          track.accentClass
        )}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_70%)] mix-blend-overlay" />

      <div className="relative z-10 flex items-center justify-between">
        <span
          className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm"
        >
          {track.id}
        </span>
        <ArrowUpRight className="size-5 text-white opacity-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>

      <div className="relative z-10 mt-16 flex flex-1 flex-col">
        <h3 className="font-display text-2xl font-semibold tracking-tight" lang={locale}>
          {name.primary}
        </h3>
        {name.secondary && (
          <p className="text-sm text-muted-foreground" lang={otherLang}>
            {name.secondary}
          </p>
        )}
        <p className="mt-2 text-sm text-muted-foreground" lang={locale}>
          {tagline.primary}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg border bg-background/60 p-2">
            <div className="text-lg font-semibold">{track.lessons.length}</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {locale === "en" ? "lessons" : "บทเรียน"}
            </div>
          </div>
          <div className="rounded-lg border bg-background/60 p-2">
            <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
              {beginnerCount}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {t("level.beginner")}
            </div>
          </div>
          <div className="rounded-lg border bg-background/60 p-2">
            <div className="text-lg font-semibold text-rose-600 dark:text-rose-400">
              {advancedCount}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {t("level.advanced")}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
