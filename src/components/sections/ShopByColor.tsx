"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getColorHex } from "@/lib/utils";

const colors = [
  { slug: "white", label: "White" },
  { slug: "green", label: "Green" },
  { slug: "brown", label: "Brown" },
  { slug: "blue", label: "Blue" },
  { slug: "rare", label: "Rare Colors" },
];

export function ShopByColor() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-[var(--color-deep-ocean)] mb-4">
            Shop by Color
          </h2>
          <p className="text-[var(--color-deep-ocean)]/60">
            Each color tells a different ocean story
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {colors.map((color, i) => (
            <motion.div
              key={color.slug}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/shop?color=${color.slug}`}
                className="group flex flex-col items-center gap-3"
              >
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-white/60 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                  style={{
                    backgroundColor: getColorHex(color.slug),
                    boxShadow: `0 8px 24px ${getColorHex(color.slug)}40`,
                  }}
                />
                <span className="text-sm text-[var(--color-deep-ocean)]/60 group-hover:text-[var(--color-deep-ocean)] transition-colors">
                  {color.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
