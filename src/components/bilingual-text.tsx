"use client";

import { useI18n } from "@/lib/i18n/provider";
import type { Bilingual } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

type Props = {
  text: Bilingual;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "div";
  className?: string;
  secondaryClassName?: string;
};

export function BilingualText({
  text,
  as: Tag = "p",
  className,
  secondaryClassName,
}: Props) {
  const { tb, locale } = useI18n();
  const { primary, secondary } = tb(text);
  const otherLang = locale === "en" ? "th" : "en";
  return (
    <>
      <Tag className={className} lang={locale}>
        {primary}
      </Tag>
      {secondary && (
        <Tag
          className={cn(
            "mt-1 text-[0.92em] text-muted-foreground/90",
            secondaryClassName
          )}
          lang={otherLang}
        >
          {secondary}
        </Tag>
      )}
    </>
  );
}
