"use client";

import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProductBySlug, getProductsByDrop } from "@/lib/mock-data";
import { formatPrice, getTypeLabel, getRarityLabel } from "@/lib/utils";
import { RarityBadge } from "@/components/ui/RarityBadge";
import { ProductCard } from "@/components/ui/ProductCard";
import { AddToCartButton } from "./AddToCartButton";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const relatedProducts = getProductsByDrop(product.drop_id)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/shop"
            className="text-sm text-[var(--color-deep-ocean)]/40 hover:text-[var(--color-deep-ocean)] transition-colors"
          >
            &larr; Back to Collection
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--color-soft-sand)]">
              {product.images?.[0] ? (
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].alt_text}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[var(--color-sea-glass-green)]/40 to-[var(--color-ocean-blue)]/40" />
                </div>
              )}

              {product.is_sold && (
                <div className="absolute inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="glass-strong px-8 py-3 rounded-full font-semibold text-[var(--color-deep-ocean)] uppercase tracking-widest">
                    Sold
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <RarityBadge rarity={product.rarity} />
                  <span className="text-xs text-[var(--color-deep-ocean)]/40 uppercase tracking-wider">
                    {getTypeLabel(product.type)}
                  </span>
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--color-deep-ocean)] leading-tight">
                  {product.name}
                </h1>
              </div>

              <p className="font-heading text-3xl text-[var(--color-deep-ocean)]">
                {formatPrice(product.price_cents)}
              </p>

              <div className="glass-strong rounded-2xl p-6 space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-deep-ocean)]/40">
                  Origin Story
                </p>
                <div className="space-y-1">
                  <p className="font-heading text-lg text-[var(--color-deep-ocean)]">
                    {product.sea_glass_code}
                  </p>
                  <p className="text-sm text-[var(--color-deep-ocean)]/60">
                    Found on {product.beach_location}
                  </p>
                  <p className="text-sm text-[var(--color-deep-ocean)]/60">
                    {getRarityLabel(product.rarity)} &middot; Naturally polished by the ocean
                  </p>
                </div>
              </div>

              <p className="text-[var(--color-deep-ocean)]/60 leading-relaxed">
                {product.description}
              </p>

              <p className="text-sm text-[var(--color-deep-ocean)]/50 leading-relaxed italic">
                {product.origin_story}
              </p>

              <AddToCartButton product={product} />

              <div className="pt-4 border-t border-[var(--color-deep-ocean)]/5">
                <div className="flex flex-wrap gap-4 text-xs text-[var(--color-deep-ocean)]/40">
                  <span>Handcrafted in Thailand</span>
                  <span>&middot;</span>
                  <span>Authentic sea glass</span>
                  <span>&middot;</span>
                  <span>One of a kind</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-32"
          >
            <h2 className="font-heading text-3xl text-[var(--color-deep-ocean)] text-center mb-12">
              From the Same Drop
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
