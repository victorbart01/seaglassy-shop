"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const types = [
  {
    slug: "necklace",
    label: "Necklaces",
    description: "Sea glass pendants on delicate chains",
    image: "/img/Main Image.png",
  },
  {
    slug: "bracelet",
    label: "Bracelets",
    description: "Ocean treasures wrapped around your wrist",
    image: "/img/rc3img.png",
  },
  {
    slug: "earrings",
    label: "Earrings",
    description: "Paired sea glass drops and studs",
    image: "/img/rc2img.png",
  },
];

export function ShopByType() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-transparent via-[var(--color-soft-sand)]/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl text-[var(--color-deep-ocean)] mb-4">
            Shop by Type
          </h2>
          <p className="text-[var(--color-deep-ocean)]/60">
            Find your perfect ocean piece
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {types.map((type, i) => (
            <motion.div
              key={type.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                href={`/shop?type=${type.slug}`}
                className="group block rounded-2xl overflow-hidden glass hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-[var(--color-soft-sand)]">
                  <Image
                    src={type.image}
                    alt={type.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-ocean)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl text-[var(--color-deep-ocean)] mb-1">
                    {type.label}
                  </h3>
                  <p className="text-sm text-[var(--color-deep-ocean)]/50">
                    {type.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
