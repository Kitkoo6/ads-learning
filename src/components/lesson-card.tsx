"use client";

import Link from "next/link";
import type { Lesson, Track } from "@/content/schema";
import { useI18n } from "@/lib/i18n/provider";
import { useProgress } from "@/lib/progress";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { Check, Clock, MapPin } from "lucide-react";

export function LessonCard({ lesson, track }: { lesson: Lesson; track: Track }) {
  const { tb, locale, t } = useI18n();
  const { isDone } = useProgress();
  const done = isDone(lesson.id);
  const title = tb(lesson.title);
  const summary = tb(lesson.summary);
  const otherLang = locale === "en" ? "th" : "en";

  return (
    <Link
      href={`/${track.id}/${lesson.slug}`}
      className={cn(
        "group relative flex flex-col gap-3 rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-25px_rgba(0,0,0,0.35)]",
        done && "ring-1 ring-emerald-500/30"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant={lesson.level === "beginner" ? "beginner" : "advanced"}>
            <span className="inline-block size-1.5 rounded-full bg-current" />
            {t(lesson.level === "beginner" ? "level.beginner" : "level.advanced")}
          </Badge>
          {lesson.thailandFocus && (
            <Badge variant="outline" className="border-brand-thai/40 text-brand-thai">
              <MapPin className="size-3" />
              {locale === "en" ? "Thailand" : "ไทย"}
            </Badge>
          )}
        </div>
        <div
          className={cn(
            "flex size-7 items-center justify-center rounded-full border text-muted-foreground transition-colors",
            done
              ? "border-emerald-500 bg-emerald-500 text-white"
              : "border-border bg-background"
          )}
          aria-hidden
        >
          {done && <Check className="size-4" />}
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-[11px] font-medium text-muted-foreground">
            {String(lesson.order).padStart(2, "0")}
          </span>
          <h4 className="font-display text-lg font-semibold leading-tight tracking-tight" lang={locale}>
            {title.primary}
          </h4>
        </div>
        {title.secondary && (
          <p className="ml-7 mt-0.5 text-sm text-muted-foreground" lang={otherLang}>
            {title.secondary}
          </p>
        )}
      </div>

      <p className="text-sm text-muted-foreground" lang={locale}>
        {summary.primary}
      </p>

      <div className="mt-auto flex items-center justify-between pt-1 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Clock className="size-3.5" />
          {lesson.readTimeMin} {t("lesson.read_time")}
        </div>
        <span className="text-foreground/60 transition-transform group-hover:translate-x-0.5">→</span>
      </div>
    </Link>
  );
}
