"use client";

import { useState } from "react";
import type { Scenario as ScenarioT } from "@/content/schema";
import { useI18n } from "@/lib/i18n/provider";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lightbulb, Target } from "lucide-react";

export function Scenario({ scenario }: { scenario: ScenarioT }) {
  const { tb, locale, t } = useI18n();
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [hintsOpen, setHintsOpen] = useState(false);

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
        <Target className="size-3.5" />
        {t("scenario.title")}
      </div>

      <p className="mt-4 whitespace-pre-wrap text-base leading-relaxed" lang={locale}>
        {tb(scenario.prompt).primary}
      </p>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder={
          locale === "en"
            ? "Write your approach here — budget split, audiences, creative angles…"
            : "เขียนแนวคิดของคุณที่นี่ — การแบ่งงบ กลุ่มเป้าหมาย แนวครีเอทีฟ..."
        }
        rows={5}
        className="mt-5 w-full resize-y rounded-xl border bg-background p-4 text-sm outline-none ring-ring transition-shadow focus:ring-2"
      />

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button onClick={() => setRevealed((v) => !v)} className="rounded-full">
          {revealed ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          {revealed
            ? locale === "en" ? "Hide answer" : "ซ่อนคำตอบ"
            : t("scenario.check")}
        </Button>

        {scenario.hints && scenario.hints.length > 0 && (
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => setHintsOpen((v) => !v)}
          >
            <Lightbulb className="size-4" />
            {locale === "en" ? "Hints" : "คำใบ้"} ({scenario.hints.length})
          </Button>
        )}
      </div>

      {hintsOpen && scenario.hints && (
        <ul className="mt-4 space-y-2 rounded-xl border border-dashed bg-secondary/40 p-4 text-sm">
          {scenario.hints.map((h, i) => (
            <li key={i} className="flex gap-2" lang={locale}>
              <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" />
              <span>{tb(h).primary}</span>
            </li>
          ))}
        </ul>
      )}

      {revealed && (
        <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
            {locale === "en" ? "Sample answer" : "ตัวอย่างคำตอบ"}
          </div>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed" lang={locale}>
            {tb(scenario.idealAnswer).primary}
          </p>
        </div>
      )}
    </section>
  );
}
