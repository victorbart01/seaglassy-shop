"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cart";

export default function CheckoutSuccessPage() {
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="pt-28 pb-20 min-h-screen flex items-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-[var(--color-sea-foam)] flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-deep-ocean)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <div>
            <h1 className="font-heading text-4xl sm:text-5xl text-[var(--color-deep-ocean)] mb-4">
              Thank You
            </h1>
            <p className="text-lg text-[var(--color-deep-ocean)]/60 leading-relaxed">
              Your order has been confirmed. A piece of the ocean is on its way to you.
            </p>
          </div>

          <div className="glass-strong rounded-2xl p-6 text-left space-y-3">
            <p className="text-sm text-[var(--color-deep-ocean)]/50">
              A confirmation email has been sent to your inbox with order details
              and tracking information.
            </p>
            <p className="text-sm text-[var(--color-deep-ocean)]/50">
              Each piece is carefully packaged by hand. Please allow 3-7 business
              days for delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link href="/shop">
              <Button variant="secondary">Continue Browsing</Button>
            </Link>
            <Link href="/drops">
              <Button variant="ghost">View Upcoming Drops</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
