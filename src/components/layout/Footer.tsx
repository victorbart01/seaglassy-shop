import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-deep-ocean)]/10 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl text-[var(--color-deep-ocean)] mb-4">
              Seaglassy
            </h3>
            <p className="text-sm text-[var(--color-deep-ocean)]/60 max-w-md leading-relaxed">
              Handcrafted jewelry made from authentic sea glass collected on
              Thai beaches. Each piece is unique, shaped by the ocean over
              decades.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-deep-ocean)]/40 mb-4">
              Shop
            </h4>
            <div className="space-y-3">
              <Link href="/shop?type=necklace" className="block text-sm text-[var(--color-deep-ocean)]/60 hover:text-[var(--color-deep-ocean)] transition-colors">
                Necklaces
              </Link>
              <Link href="/shop?type=bracelet" className="block text-sm text-[var(--color-deep-ocean)]/60 hover:text-[var(--color-deep-ocean)] transition-colors">
                Bracelets
              </Link>
              <Link href="/shop?type=earrings" className="block text-sm text-[var(--color-deep-ocean)]/60 hover:text-[var(--color-deep-ocean)] transition-colors">
                Earrings
              </Link>
              <Link href="/drops" className="block text-sm text-[var(--color-deep-ocean)]/60 hover:text-[var(--color-deep-ocean)] transition-colors">
                Drops
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-deep-ocean)]/40 mb-4">
              About
            </h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-sm text-[var(--color-deep-ocean)]/60 hover:text-[var(--color-deep-ocean)] transition-colors">
                Our Story
              </Link>
              <Link href="/about#process" className="block text-sm text-[var(--color-deep-ocean)]/60 hover:text-[var(--color-deep-ocean)] transition-colors">
                The Process
              </Link>
              <Link href="/about#sea-glass" className="block text-sm text-[var(--color-deep-ocean)]/60 hover:text-[var(--color-deep-ocean)] transition-colors">
                What is Sea Glass
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-deep-ocean)]/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-deep-ocean)]/40">
            &copy; {new Date().getFullYear()} Seaglassy. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-deep-ocean)]/40">
            Handmade in Thailand with love for the ocean.
          </p>
        </div>
      </div>
    </footer>
  );
}
