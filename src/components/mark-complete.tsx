"use client";

import { useI18n } from "@/lib/i18n/provider";
import { useProgress } from "@/lib/progress";
import { Button } from "./ui/button";
import { Check, RotateCcw } from "lucide-react";

export function MarkComplete({ lessonId }: { lessonId: string }) {
  const { t } = useI18n();
  const { isDone, toggle } = useProgress();
  const done = isDone(lessonId);

  return (
    <Button
      onClick={() => toggle(lessonId)}
      variant={done ? "outline" : "default"}
      size="lg"
      className="rounded-full"
    >
      {done ? (
        <>
          <RotateCcw className="size-4" />
          {t("lesson.completed")}
        </>
      ) : (
        <>
          <Check className="size-4" />
          {t("lesson.complete")}
        </>
      )}
    </Button>
  );
}
