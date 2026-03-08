import { cn, getRarityLabel } from "@/lib/utils";
import type { ProductRarity } from "@/lib/supabase/types";

interface RarityBadgeProps {
  rarity: ProductRarity;
  className?: string;
}

const rarityStyles: Record<ProductRarity, string> = {
  common: "bg-[var(--color-soft-sand)] text-[var(--color-deep-ocean)]/70",
  uncommon: "bg-[var(--color-sea-foam)] text-[var(--color-deep-ocean)]",
  rare: "bg-[var(--color-ocean-blue)]/20 text-[var(--color-deep-ocean)]",
  very_rare: "bg-gradient-to-r from-[var(--color-ocean-blue)]/20 to-[var(--color-sea-glass-green)]/20 text-[var(--color-deep-ocean)]",
};

export function RarityBadge({ rarity, className }: RarityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase",
        rarityStyles[rarity],
        className
      )}
    >
      {rarity === "very_rare" && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
          <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9.5L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z" fill="currentColor" opacity="0.6" />
        </svg>
      )}
      {getRarityLabel(rarity)}
    </span>
  );
}
