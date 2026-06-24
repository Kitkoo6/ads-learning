import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground",
        beginner: "border-transparent bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
        advanced: "border-transparent bg-rose-500/15 text-rose-700 dark:text-rose-300",
        meta: "border-transparent bg-[#1877F2]/15 text-[#1877F2]",
        tiktok: "border-transparent bg-[#FE2C55]/15 text-[#FE2C55]",
        shopee: "border-transparent bg-[#EE4D2D]/15 text-[#EE4D2D]",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
