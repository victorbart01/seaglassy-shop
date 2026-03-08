"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function AboutSeaGlass() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-transparent via-[var(--color-sea-foam)]/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/img/originImg1.png"
                  alt="Hand holding a green sea glass piece at sunset on the beach"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl glass-strong p-4 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-heading text-2xl text-[var(--color-deep-ocean)]">40+</p>
                  <p className="text-xs text-[var(--color-deep-ocean)]/50">years in the sea</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-deep-ocean)]/40">
              The Story
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-[var(--color-deep-ocean)] leading-tight">
              Born from
              <br />
              Glass & Waves
            </h2>
            <div className="space-y-4 text-[var(--color-deep-ocean)]/60 leading-relaxed">
              <p>
                Sea glass begins as discarded glass — bottles, jars, windows — that
                finds its way into the ocean. Over decades, the relentless tumbling
                of waves, sand, and salt transforms sharp shards into smooth,
                frosted gems.
              </p>
              <p>
                We hand-collect each piece from the beaches of Thailand, where the
                warm Andaman and Gulf waters have been sculpting glass for
                generations. Every piece we find is a small miracle of time and
                nature.
              </p>
            </div>
            <Link href="/about">
              <Button variant="secondary" className="mt-4">Read Our Story</Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
