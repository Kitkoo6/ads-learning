"use client";

import { useI18n } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

export function LocaleToggle() {
  const { locale, setLocale } = useI18n();
  return (
    <div className="inline-flex items-center rounded-full border bg-card p-0.5 text-xs">
      {(["en", "th"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={cn(
            "rounded-full px-3 py-1.5 font-medium transition-all",
            locale === l
              ? "bg-foreground text-background shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l === "en" ? "EN" : "ไทย"}
        </button>
      ))}
    </div>
  );
}
