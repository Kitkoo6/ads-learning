"use client";

import Link from "next/link";
import { TopBar } from "@/components/top-bar";
import { TrackCard } from "@/components/track-card";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/provider";
import { tracks, totalLessons } from "@/content/curriculum";
import {
  ArrowRight,
  BookOpen,
  Languages,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";

export default function HomePage() {
  const { t, tb, locale } = useI18n();
  const title = tb({ en: "Master Ads in Thailand", th: "เชี่ยวชาญการยิงแอดในไทย" });
  const subtitle = tb({
    en: "A bilingual playbook for Meta, TikTok, and Shopee — built for the Thai market.",
    th: "คู่มือสองภาษาสำหรับ Meta, TikTok และ Shopee — ออกแบบเพื่อตลาดไทย",
  });
  const otherLang = locale === "en" ? "th" : "en";

  return (
    <div className="relative min-h-screen">
      <TopBar />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#1877F2]/20 via-[#FE2C55]/20 to-[#EE4D2D]/20 blur-3xl" />

        <div className="container relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1.5 text-xs font-medium backdrop-blur anim-in"
              style={{ animationDelay: "40ms" }}
            >
              <span className="relative inline-flex size-1.5 items-center justify-center">
                <span className="absolute inline-flex size-1.5 animate-ping rounded-full bg-emerald-500/60" />
                <span className="relative inline-block size-1.5 rounded-full bg-emerald-500" />
              </span>
              {locale === "en" ? "21 lessons · 3 platforms · 2 languages" : "21 บทเรียน · 3 แพลตฟอร์ม · 2 ภาษา"}
            </div>

            <h1
              className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl anim-rise"
              style={{ animationDelay: "100ms" }}
              lang={locale}
            >
              {title.primary}
            </h1>
            {title.secondary && (
              <h2
                className="mt-3 font-display text-2xl font-medium text-muted-foreground md:text-3xl anim-in"
                style={{ animationDelay: "240ms" }}
                lang={otherLang}
              >
                {title.secondary}
              </h2>
            )}

            <p
              className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground md:text-lg anim-in"
              style={{ animationDelay: "320ms" }}
              lang={locale}
            >
              {subtitle.primary}
            </p>
            {subtitle.secondary && (
              <p
                className="mx-auto mt-2 max-w-xl text-balance text-sm text-muted-foreground/70"
                lang={otherLang}
              >
                {subtitle.secondary}
              </p>
            )}

            <div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 anim-in"
              style={{ animationDelay: "440ms" }}
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href="/meta">
                  {t("home.cta.start")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="#tracks">
                  {t("home.cta.explore")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <Stat icon={<BookOpen className="size-4" />} value={String(totalLessons())} label={locale === "en" ? "Lessons" : "บทเรียน"} />
            <Stat icon={<Target className="size-4" />} value="3" label={locale === "en" ? "Platforms" : "แพลตฟอร์ม"} />
            <Stat icon={<Languages className="size-4" />} value="EN · TH" label={locale === "en" ? "Bilingual" : "สองภาษา"} />
            <Stat icon={<Trophy className="size-4" />} value="∞" label={locale === "en" ? "Re-takes" : "ทำซ้ำได้" } />
          </div>
        </div>
      </section>

      <section id="tracks" className="container relative pb-24">
        <div className="mb-10 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {locale === "en" ? "Choose your track" : "เลือกหลักสูตร"}
            </div>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {locale === "en" ? "Three platforms. One playbook." : "สามแพลตฟอร์ม คู่มือเดียว"}
            </h3>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            {locale === "en"
              ? "Beginner-to-advanced lessons, quizzes, and Thailand-only campaigns like 11.11 and Songkran."
              : "บทเรียนระดับเริ่มต้นถึงสูง พร้อมแบบทดสอบและแคมเปญเฉพาะตลาดไทย เช่น 11.11 และสงกรานต์"}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tracks.map((tr, i) => (
            <div
              key={tr.id}
              className="anim-rise"
              style={{ animationDelay: `${120 + i * 100}ms` }}
            >
              <TrackCard track={tr} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t bg-secondary/40">
        <div className="container py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium">
                <Sparkles className="size-3.5" />
                {locale === "en" ? "Built for Thailand" : "สร้างมาเพื่อตลาดไทย"}
              </div>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {locale === "en"
                  ? "Not just a translation. A Thai market playbook."
                  : "ไม่ใช่แค่แปล — เป็นเพลย์บุ๊กของตลาดไทย"}
              </h3>
              <p className="mt-3 max-w-lg text-muted-foreground">
                {locale === "en"
                  ? "LINE OA integration. Songkran seasonal beats. Thai Gen Z patterns on TikTok. Shopee mega campaigns 10.10 / 11.11 / 12.12. Real ฿ benchmarks."
                  : "เชื่อมต่อ LINE OA · แคมเปญสงกรานต์ · พฤติกรรม Gen Z ไทยบน TikTok · แคมเปญใหญ่ Shopee 10.10 / 11.11 / 12.12 · เบนช์มาร์กราคาจริงในไทย"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <ThaiTile flag="🇹🇭" title={locale === "en" ? "11.11 Mega Sale" : "เซลใหญ่ 11.11"} />
              <ThaiTile flag="🪷" title={locale === "en" ? "Songkran" : "สงกรานต์"} />
              <ThaiTile flag="💬" title={locale === "en" ? "LINE OA" : "LINE OA"} />
              <ThaiTile flag="🛒" title={locale === "en" ? "Shopee Live" : "Shopee Live"} />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-3 py-8 text-xs text-muted-foreground md:flex-row">
          <div>© Ads Learning TH — internal study platform</div>
          <div className="flex items-center gap-3">
            <span>v0.1</span>
            <span>·</span>
            <span>{locale === "en" ? "Built with Next.js" : "สร้างด้วย Next.js"}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border bg-card/60 p-4 backdrop-blur">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
          {label}
        </span>
      </div>
      <div className="mt-1.5 font-display text-2xl font-semibold">{value}</div>
    </div>
  );
}

function ThaiTile({ flag, title }: { flag: string; title: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-background p-5 transition-all hover:-translate-y-0.5">
      <div className="text-3xl">{flag}</div>
      <div className="mt-3 font-medium">{title}</div>
      <div className="pointer-events-none absolute -right-6 -bottom-6 size-24 rounded-full bg-brand-thai/10 blur-2xl transition-opacity group-hover:opacity-80" />
    </div>
  );
}
