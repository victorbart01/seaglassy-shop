"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/img/Hero Image.png"
          alt="Sea glass jewelry collection on driftwood by the ocean"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-soft-sand)]/90 via-[var(--color-soft-sand)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-soft-sand)]/60 via-transparent to-[var(--color-soft-sand)]/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm uppercase tracking-[0.3em] text-[var(--color-deep-ocean)]/60 mb-6"
          >
            Handcrafted from the Sea
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-[var(--color-deep-ocean)] leading-[0.95] mb-8"
          >
            Shaped by
            <br />
            the Ocean
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-[var(--color-deep-ocean)]/60 max-w-lg mb-10 leading-relaxed"
          >
            Each piece of sea glass has been naturally polished by the waves over decades.
            We transform these ocean treasures into unique, handcrafted jewelry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/shop">
              <Button size="lg">Discover the Collection</Button>
            </Link>
            <Link href="/drops">
              <Button variant="secondary" size="lg">
                View Latest Drop
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-deep-ocean)]/30 to-transparent" />
      </motion.div>
    </section>
  );
}
