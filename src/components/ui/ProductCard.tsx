"use client";

import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { RarityBadge } from "./RarityBadge";
import type { Product } from "@/lib/supabase/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const primaryImage = product.images?.find((img) => img.is_primary) || product.images?.[0];

  return (
    <Link
      href={`/shop/${product.slug}`}
      className={cn(
        "group block rounded-2xl overflow-hidden transition-all duration-500",
        "glass hover:shadow-xl hover:shadow-[var(--color-deep-ocean)]/8 hover:scale-[1.02]",
        product.is_sold && "opacity-75",
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-soft-sand)]">
        {primaryImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${primaryImage.url})` }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-sea-glass-green)]/40 to-[var(--color-ocean-blue)]/40" />
          </div>
        )}

        {product.is_sold && (
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center">
            <span className="glass-strong px-6 py-2 rounded-full text-sm font-semibold text-[var(--color-deep-ocean)] uppercase tracking-widest">
              Sold
            </span>
          </div>
        )}

        <div className="absolute top-3 left-3">
          <RarityBadge rarity={product.rarity} />
        </div>
      </div>

      <div className="p-4 space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg leading-tight text-[var(--color-deep-ocean)] group-hover:text-[var(--color-deep-ocean)]/80 transition-colors">
            {product.name}
          </h3>
        </div>
        <p className="text-xs text-[var(--color-deep-ocean)]/50 uppercase tracking-wider">
          {product.sea_glass_code} &middot; {product.beach_location}
        </p>
        <p className="font-heading text-lg text-[var(--color-deep-ocean)]">
          {formatPrice(product.price_cents)}
        </p>
      </div>
    </Link>
  );
}
