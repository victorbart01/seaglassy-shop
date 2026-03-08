"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "primary" &&
          "bg-[var(--color-deep-ocean)] text-white hover:bg-[var(--color-deep-ocean)]/90 hover:shadow-lg hover:shadow-[var(--color-deep-ocean)]/20",
        variant === "secondary" &&
          "glass border border-white/40 text-[var(--color-deep-ocean)] hover:bg-white/50 hover:shadow-md",
        variant === "ghost" &&
          "text-[var(--color-deep-ocean)] hover:bg-[var(--color-deep-ocean)]/5",
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-2.5 text-sm",
        size === "lg" && "px-8 py-3.5 text-base tracking-wide",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
