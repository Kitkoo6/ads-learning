"use client";

import { useI18n } from "@/lib/i18n/provider";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

export function StudyModeToggle() {
  const { studyMode, setStudyMode, t } = useI18n();
  const active = studyMode === "side-by-side";
  return (
    <button
      onClick={() => setStudyMode(active ? "single" : "side-by-side")}
      title={t("nav.study_mode")}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
        active
          ? "border-foreground bg-foreground text-background"
          : "bg-card text-muted-foreground hover:text-foreground"
      )}
    >
      <Languages className="size-3.5" />
      {t("nav.study_mode")}
    </button>
  );
}
