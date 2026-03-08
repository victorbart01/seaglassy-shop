"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/ProductCard";
import { Button } from "@/components/ui/Button";
import { getActiveDrop, getProductsByDrop } from "@/lib/mock-data";
import Link from "next/link";

export function LatestDrop() {
  const activeDrop = getActiveDrop();
  if (!activeDrop) return null;
  const products = getProductsByDrop(activeDrop.id);

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
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-deep-ocean)]/40 mb-4">
            Drop #{String(activeDrop.number).padStart(2, "0")}
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-[var(--color-deep-ocean)] mb-4">
            {activeDrop.name}
          </h2>
          <p className="text-[var(--color-deep-ocean)]/60 max-w-lg mx-auto">
            {activeDrop.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/shop">
            <Button variant="secondary" size="lg">
              View All Pieces
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
