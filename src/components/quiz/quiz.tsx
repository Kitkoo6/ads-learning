"use client";

import { useMemo, useState } from "react";
import type { Quiz as QuizT } from "@/content/schema";
import { useI18n } from "@/lib/i18n/provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, RotateCcw, Sparkles, X } from "lucide-react";

export function Quiz({ quiz }: { quiz: QuizT }) {
  const { tb, locale, t } = useI18n();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () =>
      quiz.questions.reduce(
        (acc, q, i) => (answers[i] === q.correctIndex ? acc + 1 : acc),
        0
      ),
    [answers, quiz.questions]
  );

  const total = quiz.questions.length;
  const allAnswered = Object.keys(answers).length === total;
  const pct = Math.round((score / total) * 100);

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
          <Sparkles className="size-3.5" />
          {t("quiz.title")}
        </div>
        <span className="text-xs text-muted-foreground">
          {total} {locale === "en" ? "questions" : "ข้อ"}
        </span>
      </div>

      <ol className="mt-6 space-y-8">
        {quiz.questions.map((q, qi) => {
          const userAnswer = answers[qi];
          const correct = userAnswer === q.correctIndex;
          return (
            <li key={qi}>
              <div className="font-display text-base font-semibold" lang={locale}>
                <span className="mr-2 text-muted-foreground">{qi + 1}.</span>
                {tb(q.prompt).primary}
              </div>
              <div className="mt-3 grid gap-2">
                {q.options.map((opt, oi) => {
                  const selected = userAnswer === oi;
                  const showCorrect = submitted && oi === q.correctIndex;
                  const showWrong = submitted && selected && oi !== q.correctIndex;
                  return (
                    <button
                      key={oi}
                      disabled={submitted}
                      onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                      className={cn(
                        "group flex items-start gap-3 rounded-xl border p-3 text-left text-sm transition-all",
                        selected && !submitted && "border-foreground bg-accent",
                        !selected && !submitted && "hover:bg-accent",
                        showCorrect && "border-emerald-500 bg-emerald-500/10",
                        showWrong && "border-rose-500 bg-rose-500/10",
                        submitted && "cursor-default"
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-mono",
                          selected && !submitted && "border-foreground bg-foreground text-background",
                          showCorrect && "border-emerald-500 bg-emerald-500 text-white",
                          showWrong && "border-rose-500 bg-rose-500 text-white"
                        )}
                      >
                        {showCorrect ? <Check className="size-3" /> :
                         showWrong ? <X className="size-3" /> :
                         String.fromCharCode(65 + oi)}
                      </span>
                      <span className="flex-1" lang={locale}>
                        {tb(opt).primary}
                      </span>
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div
                  className={cn(
                    "mt-3 rounded-xl border p-3 text-sm",
                    correct
                      ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-700 dark:text-emerald-300"
                      : "border-rose-500/30 bg-rose-500/5 text-rose-700 dark:text-rose-300"
                  )}
                >
                  <div className="font-semibold">
                    {correct ? t("quiz.correct") : t("quiz.incorrect")}
                  </div>
                  <div className="mt-1 text-foreground/80" lang={locale}>
                    {tb(q.explanation).primary}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-8 flex items-center justify-between gap-4 border-t pt-6">
        {submitted ? (
          <>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t("quiz.score")}
              </div>
              <div className="font-display text-3xl font-semibold">
                {score}/{total}{" "}
                <span className="text-base font-normal text-muted-foreground">({pct}%)</span>
              </div>
            </div>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                setAnswers({});
                setSubmitted(false);
              }}
            >
              <RotateCcw className="size-4" />
              {t("quiz.retake")}
            </Button>
          </>
        ) : (
          <>
            <span className="text-xs text-muted-foreground">
              {Object.keys(answers).length}/{total} {locale === "en" ? "answered" : "ตอบแล้ว"}
            </span>
            <Button
              disabled={!allAnswered}
              onClick={() => setSubmitted(true)}
              size="lg"
              className="rounded-full"
            >
              {t("quiz.submit")}
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
