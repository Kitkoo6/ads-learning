"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n/provider";
import { LocaleToggle } from "./locale-toggle";
import { ThemeToggle } from "./theme-toggle";
import { StudyModeToggle } from "./study-mode-toggle";
import { BarChart3, Menu, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function TopBar() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b transition-all",
          scrolled
            ? "border-border/70 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65"
            : "border-transparent bg-background/0"
        )}
      >
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background transition-transform group-hover:rotate-[8deg]">
              <Sparkles className="size-4" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm font-semibold tracking-tight">
                Ads Learning TH
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
                Meta · TikTok · Shopee
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
            <NavLink href="/meta">Meta</NavLink>
            <NavLink href="/tiktok">TikTok</NavLink>
            <NavLink href="/shopee">Shopee</NavLink>
            <NavLink href="/progress" className="ml-2 inline-flex items-center gap-1.5">
              <BarChart3 className="size-3.5" />
              {t("nav.progress")}
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <StudyModeToggle />
            </div>
            <LocaleToggle />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
              className="inline-flex size-10 items-center justify-center rounded-full border md:hidden"
            >
              {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={cn(
            "overflow-hidden border-t bg-background/95 backdrop-blur md:hidden",
            mobileOpen ? "max-h-96 border-border/70" : "max-h-0 border-transparent"
          )}
          style={{ transition: "max-height 280ms cubic-bezier(0.22,1,0.36,1)" }}
        >
          <div className="container flex flex-col gap-1 py-3 text-sm font-medium">
            <MobileLink href="/meta" onClick={() => setMobileOpen(false)}>Meta</MobileLink>
            <MobileLink href="/tiktok" onClick={() => setMobileOpen(false)}>TikTok</MobileLink>
            <MobileLink href="/shopee" onClick={() => setMobileOpen(false)}>Shopee</MobileLink>
            <MobileLink href="/progress" onClick={() => setMobileOpen(false)}>
              <span className="inline-flex items-center gap-1.5">
                <BarChart3 className="size-3.5" />
                {t("nav.progress")}
              </span>
            </MobileLink>
            <div className="mt-2 sm:hidden">
              <StudyModeToggle />
            </div>
          </div>
        </div>
      </header>
      <a id="main" tabIndex={-1} />
    </>
  );
}

function NavLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
        className
      )}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2.5 text-foreground transition-colors hover:bg-accent"
    >
      {children}
    </Link>
  );
}
