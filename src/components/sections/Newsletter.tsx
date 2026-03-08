"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/img/sea-glass-collection.png"
                alt="Sea glass pieces on sand by the water"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--color-deep-ocean)]/60 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 py-16 sm:py-20 px-6 sm:px-12 max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl sm:text-4xl text-white mb-4">
                Never Miss a Drop
              </h2>
              <p className="text-white/70 mb-8">
                Join our list and be the first to know when new sea glass pieces are released.
                Each drop is limited — early access matters.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4"
                >
                  <p className="font-heading text-xl text-white">
                    Welcome aboard.
                  </p>
                  <p className="text-sm text-white/50 mt-2">
                    We&apos;ll notify you when the next drop goes live.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-3 rounded-full bg-white/15 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all backdrop-blur-sm"
                  />
                  <Button type="submit" className="bg-white text-[var(--color-deep-ocean)] hover:bg-white/90">
                    Notify Me
                  </Button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
