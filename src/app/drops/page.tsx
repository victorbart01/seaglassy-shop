"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { mockDrops, getProductsByDrop, getNextDrop } from "@/lib/mock-data";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export default function DropsPage() {
  const nextDrop = getNextDrop();
  const sortedDrops = [...mockDrops].sort((a, b) => b.number - a.number);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl sm:text-5xl text-[var(--color-deep-ocean)] mb-4">
            Drops
          </h1>
          <p className="text-[var(--color-deep-ocean)]/60 max-w-lg mx-auto">
            We release limited collections every week. Each drop features unique pieces
            — once they&apos;re gone, they&apos;re gone forever.
          </p>
        </motion.div>

        {nextDrop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <GlassCard strong className="p-8 sm:p-12 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-deep-ocean)]/40 mb-2">
                Next Drop
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl text-[var(--color-deep-ocean)] mb-8">
                Coming Soon
              </h2>
              <CountdownTimer targetDate={nextDrop.release_date} />
              <p className="mt-8 text-sm text-[var(--color-deep-ocean)]/50">
                Subscribe to get notified when the drop goes live.
              </p>
            </GlassCard>
          </motion.div>
        )}

        <div className="space-y-6">
          {sortedDrops.map((drop, i) => {
            const products = getProductsByDrop(drop.id);
            const soldCount = products.filter((p) => p.is_sold).length;

            return (
              <motion.div
                key={drop.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              >
                <GlassCard
                  hover
                  className="p-6 sm:p-8"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-deep-ocean)]/40">
                          Drop #{String(drop.number).padStart(2, "0")}
                        </span>
                        {drop.is_active && (
                          <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-[var(--color-sea-glass-green)]/30 text-[var(--color-deep-ocean)] rounded-full font-semibold">
                            Live
                          </span>
                        )}
                        {!drop.is_active && new Date(drop.release_date) < new Date() && (
                          <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-[var(--color-deep-ocean)]/5 text-[var(--color-deep-ocean)]/40 rounded-full font-semibold">
                            Past
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-2xl text-[var(--color-deep-ocean)]">
                        {drop.name}
                      </h3>
                      <p className="text-sm text-[var(--color-deep-ocean)]/50">
                        {new Date(drop.release_date).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                        {" "}&middot;{" "}
                        {products.length} piece{products.length !== 1 ? "s" : ""}
                        {soldCount > 0 && ` (${soldCount} sold)`}
                      </p>
                      <p className="text-sm text-[var(--color-deep-ocean)]/40 max-w-lg">
                        {drop.description}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <Link href={`/shop?drop=${drop.id}`}>
                        <Button variant="secondary" size="sm">
                          View Drop
                        </Button>
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
