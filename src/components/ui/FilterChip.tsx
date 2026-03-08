"use client";

import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  active?: boolean;
  colorDot?: string;
  onClick?: () => void;
}

export function FilterChip({ label, active = false, colorDot, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
        active
          ? "bg-[var(--color-deep-ocean)] text-white shadow-md"
          : "glass text-[var(--color-deep-ocean)] hover:bg-white/50"
      )}
    >
      {colorDot && (
        <span
          className="w-3 h-3 rounded-full border border-white/50 shrink-0"
          style={{ backgroundColor: colorDot }}
        />
      )}
      {label}
    </button>
  );
}
