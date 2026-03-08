"use client";

import { useState } from "react";
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
          className="max-w-2xl mx-auto text-center"
        >
          <div className="glass-strong rounded-3xl p-10 sm:p-14">
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--color-deep-ocean)] mb-4">
              Never Miss a Drop
            </h2>
            <p className="text-[var(--color-deep-ocean)]/60 mb-8">
              Join our list and be the first to know when new sea glass pieces are released.
              Each drop is limited — early access matters.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4"
              >
                <p className="font-heading text-xl text-[var(--color-deep-ocean)]">
                  Welcome aboard.
                </p>
                <p className="text-sm text-[var(--color-deep-ocean)]/50 mt-2">
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
                  className="flex-1 px-5 py-3 rounded-full bg-white/60 border border-white/50 text-[var(--color-deep-ocean)] placeholder:text-[var(--color-deep-ocean)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--color-sea-glass-green)]/50 focus:border-transparent transition-all"
                />
                <Button type="submit">Notify Me</Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
