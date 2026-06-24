"use client";

import { useMemo, useState } from "react";
import type { DragMatchExercise } from "@/content/schema";
import { useI18n } from "@/lib/i18n/provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Link2, RotateCcw, X } from "lucide-react";

/**
 * Tap-to-pair: click a left item, then a right item to bind. Click again to unbind.
 * Simpler + accessible vs HTML5 drag, works on mobile.
 */
export function DragMatch({ exercise }: { exercise: DragMatchExercise }) {
  const { tb, locale, t } = useI18n();

  const shuffledRight = useMemo(() => {
    const arr = exercise.pairs.map((p, i) => ({ ...p, originalIndex: i }));
    return [...arr].sort(() => Math.random() - 0.5);
  }, [exercise.pairs]);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  /** leftIndex -> rightShuffledIndex */
  const [pairs, setPairs] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const submit = () => setSubmitted(true);
  const reset = () => {
    setPairs({});
    setSelectedLeft(null);
    setSubmitted(false);
  };

  const handleLeftClick = (li: number) => {
    if (submitted) return;
    if (pairs[li] !== undefined) {
      const next = { ...pairs };
      delete next[li];
      setPairs(next);
      return;
    }
    setSelectedLeft(li);
  };

  const handleRightClick = (ri: number) => {
    if (submitted || selectedLeft === null) return;
    // remove this right from any previous left pairing
    const next: Record<number, number> = {};
    for (const [k, v] of Object.entries(pairs)) {
      if (v !== ri) next[Number(k)] = v;
    }
    next[selectedLeft] = ri;
    setPairs(next);
    setSelectedLeft(null);
  };

  const isCorrect = (li: number) => {
    const ri = pairs[li];
    if (ri === undefined) return false;
    return shuffledRight[ri].originalIndex === li;
  };

  const allPaired = Object.keys(pairs).length === exercise.pairs.length;
  const correctCount = exercise.pairs.reduce(
    (acc, _, li) => (isCorrect(li) ? acc + 1 : acc),
    0
  );

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
        <Link2 className="size-3.5" />
        {locale === "en" ? "Match the pairs" : "จับคู่ให้ถูกต้อง"}
      </div>
      <p className="mt-3 text-sm text-muted-foreground" lang={locale}>
        {tb(exercise.prompt).primary}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {locale === "en" ? "Items" : "รายการ"}
          </div>
          {exercise.pairs.map((p, li) => {
            const paired = pairs[li] !== undefined;
            const correct = submitted && isCorrect(li);
            const wrong = submitted && paired && !correct;
            const selected = selectedLeft === li;
            return (
              <button
                key={li}
                onClick={() => handleLeftClick(li)}
                disabled={submitted}
                className={cn(
                  "flex w-full items-center justify-between gap-2 rounded-xl border p-3 text-left text-sm transition-all",
                  selected && "border-foreground ring-2 ring-foreground/30",
                  paired && !selected && !submitted && "border-foreground/60 bg-accent",
                  correct && "border-emerald-500 bg-emerald-500/10",
                  wrong && "border-rose-500 bg-rose-500/10"
                )}
              >
                <span lang={locale}>{tb(p.left).primary}</span>
                {paired && (
                  <span className="text-xs text-muted-foreground">
                    {String.fromCharCode(65 + pairs[li])}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {locale === "en" ? "Choices" : "ตัวเลือก"}
          </div>
          {shuffledRight.map((p, ri) => {
            const usedBy = Object.entries(pairs).find(([, v]) => v === ri);
            const used = !!usedBy;
            return (
              <button
                key={ri}
                onClick={() => handleRightClick(ri)}
                disabled={submitted || selectedLeft === null}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl border p-3 text-left text-sm transition-all",
                  selectedLeft !== null && !submitted && "hover:border-foreground hover:bg-accent",
                  used && !submitted && "border-foreground/30 bg-accent/60",
                  selectedLeft === null && !submitted && "opacity-90",
                  submitted && "cursor-default"
                )}
              >
                <span className="font-mono text-xs text-muted-foreground">
                  {String.fromCharCode(65 + ri)}
                </span>
                <span lang={locale}>{tb(p.right).primary}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t pt-5">
        {submitted ? (
          <>
            <div className="text-sm">
              <span className="font-semibold">{correctCount}/{exercise.pairs.length}</span>{" "}
              <span className="text-muted-foreground">
                {locale === "en" ? "correct" : "ถูกต้อง"}
              </span>
            </div>
            <Button variant="outline" className="rounded-full" onClick={reset}>
              <RotateCcw className="size-4" />
              {locale === "en" ? "Try again" : "ลองใหม่"}
            </Button>
          </>
        ) : (
          <>
            <span className="text-xs text-muted-foreground">
              {selectedLeft !== null
                ? locale === "en" ? "Now pick a choice on the right →" : "ตอนนี้เลือกตัวเลือกฝั่งขวา →"
                : locale === "en" ? "Pick an item on the left to start" : "เลือกรายการฝั่งซ้ายเพื่อเริ่ม"}
            </span>
            <Button onClick={submit} disabled={!allPaired} className="rounded-full">
              {t("quiz.submit")}
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
