"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export default function CartPage() {
  const { items, removeItem, clearCart, totalCents } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productIds: items.map((item) => item.product.id),
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  if (!mounted) {
    return (
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl text-[var(--color-deep-ocean)] mb-8">
            Your Cart
          </h1>
          <div className="animate-pulse space-y-4">
            <div className="h-24 rounded-2xl bg-[var(--color-soft-sand)]" />
            <div className="h-24 rounded-2xl bg-[var(--color-soft-sand)]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-4xl sm:text-5xl text-[var(--color-deep-ocean)] mb-2">
            Your Cart
          </h1>
          <p className="text-[var(--color-deep-ocean)]/50 mb-10">
            {items.length} piece{items.length !== 1 ? "s" : ""}
          </p>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[var(--color-deep-ocean)]/40 text-lg mb-6">
              Your cart is empty.
            </p>
            <Link href="/shop">
              <Button variant="secondary">Browse the Collection</Button>
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.div
                  key={item.product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <GlassCard className="p-4 sm:p-6">
                    <div className="flex gap-4 sm:gap-6">
                      <Link
                        href={`/shop/${item.product.slug}`}
                        className="shrink-0"
                      >
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-[var(--color-soft-sand)] overflow-hidden">
                          {item.product.images?.[0] ? (
                            <Image
                              src={item.product.images[0].url}
                              alt={item.product.images[0].alt_text}
                              fill
                              className="object-cover"
                              sizes="96px"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-sea-glass-green)]/40 to-[var(--color-ocean-blue)]/40" />
                            </div>
                          )}
                        </div>
                      </Link>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link
                              href={`/shop/${item.product.slug}`}
                              className="font-heading text-lg text-[var(--color-deep-ocean)] hover:text-[var(--color-deep-ocean)]/70 transition-colors"
                            >
                              {item.product.name}
                            </Link>
                            <p className="text-xs text-[var(--color-deep-ocean)]/40 mt-1">
                              {item.product.sea_glass_code} &middot;{" "}
                              {item.product.beach_location}
                            </p>
                          </div>
                          <p className="font-heading text-lg text-[var(--color-deep-ocean)] shrink-0">
                            {formatPrice(item.product.price_cents)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="mt-3 text-xs text-[var(--color-deep-ocean)]/30 hover:text-red-500 transition-colors cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard strong className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[var(--color-deep-ocean)]/60">Total</span>
                  <span className="font-heading text-2xl text-[var(--color-deep-ocean)]">
                    {formatPrice(totalCents())}
                  </span>
                </div>
                <div className="space-y-3">
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={handleCheckout}
                    disabled={loading}
                  >
                    {loading ? "Redirecting to Checkout..." : "Proceed to Checkout"}
                  </Button>
                  <button
                    onClick={clearCart}
                    className="w-full text-center text-sm text-[var(--color-deep-ocean)]/30 hover:text-[var(--color-deep-ocean)]/60 transition-colors cursor-pointer py-2"
                  >
                    Clear cart
                  </button>
                </div>
                <p className="text-xs text-[var(--color-deep-ocean)]/30 text-center mt-4">
                  Secure checkout powered by Stripe
                </p>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
