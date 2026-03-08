import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="pt-28 pb-20 min-h-screen flex items-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-[var(--color-soft-sand)] flex items-center justify-center">
            <span className="font-heading text-2xl text-[var(--color-deep-ocean)]/40">?</span>
          </div>
          <div>
            <h1 className="font-heading text-4xl sm:text-5xl text-[var(--color-deep-ocean)] mb-4">
              Lost at Sea
            </h1>
            <p className="text-lg text-[var(--color-deep-ocean)]/60">
              This page has drifted away. Let&apos;s get you back to shore.
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            <Link href="/">
              <Button>Back to Home</Button>
            </Link>
            <Link href="/shop">
              <Button variant="secondary">Browse Shop</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
