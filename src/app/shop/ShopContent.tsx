"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterChip } from "@/components/ui/FilterChip";
import { mockProducts } from "@/lib/mock-data";
import { getColorHex, getTypeLabel } from "@/lib/utils";
import type { ProductType, ProductColor } from "@/lib/supabase/types";

const types: ProductType[] = ["necklace", "bracelet", "earrings"];
const colors: ProductColor[] = ["white", "green", "brown", "blue", "rare"];

export function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<string | null>(null);

  useEffect(() => {
    setActiveType(searchParams.get("type"));
    setActiveColor(searchParams.get("color"));
  }, [searchParams]);

  const updateFilters = (type: string | null, color: string | null) => {
    const params = new URLSearchParams();
    if (type) params.set("type", type);
    if (color) params.set("color", color);
    const qs = params.toString();
    router.push(qs ? `/shop?${qs}` : "/shop", { scroll: false });
  };

  const toggleType = (t: string) => {
    const next = activeType === t ? null : t;
    setActiveType(next);
    updateFilters(next, activeColor);
  };

  const toggleColor = (c: string) => {
    const next = activeColor === c ? null : c;
    setActiveColor(next);
    updateFilters(activeType, next);
  };

  const clearFilters = () => {
    setActiveType(null);
    setActiveColor(null);
    router.push("/shop", { scroll: false });
  };

  const filtered = useMemo(() => {
    return mockProducts.filter((p) => {
      if (activeType && p.type !== activeType) return false;
      if (activeColor && p.color !== activeColor) return false;
      return true;
    });
  }, [activeType, activeColor]);

  const hasFilters = activeType || activeColor;

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl sm:text-5xl text-[var(--color-deep-ocean)] mb-4">
            The Collection
          </h1>
          <p className="text-[var(--color-deep-ocean)]/60 max-w-lg mx-auto">
            Every piece is one of a kind — naturally shaped by the ocean
            and handcrafted into wearable art.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 space-y-4"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-xs uppercase tracking-widest text-[var(--color-deep-ocean)]/40 self-center mr-2">
              Type
            </span>
            {types.map((t) => (
              <FilterChip
                key={t}
                label={getTypeLabel(t)}
                active={activeType === t}
                onClick={() => toggleType(t)}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-xs uppercase tracking-widest text-[var(--color-deep-ocean)]/40 self-center mr-2">
              Color
            </span>
            {colors.map((c) => (
              <FilterChip
                key={c}
                label={c === "rare" ? "Rare" : c.charAt(0).toUpperCase() + c.slice(1)}
                active={activeColor === c}
                colorDot={getColorHex(c)}
                onClick={() => toggleColor(c)}
              />
            ))}
          </div>
          {hasFilters && (
            <div className="text-center">
              <button
                onClick={clearFilters}
                className="text-sm text-[var(--color-deep-ocean)]/40 hover:text-[var(--color-deep-ocean)] transition-colors underline underline-offset-4 cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </motion.div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[var(--color-deep-ocean)]/40 text-lg">
              No pieces match your filters.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 text-sm text-[var(--color-deep-ocean)]/60 hover:text-[var(--color-deep-ocean)] underline underline-offset-4 cursor-pointer"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-[var(--color-deep-ocean)]/40">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
