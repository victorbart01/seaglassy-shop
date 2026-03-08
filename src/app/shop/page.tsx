import { Suspense } from "react";
import { ShopContent } from "./ShopContent";

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-28 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl sm:text-5xl text-[var(--color-deep-ocean)] mb-4">
                The Collection
              </h1>
              <p className="text-[var(--color-deep-ocean)]/60 max-w-lg mx-auto">
                Every piece is one of a kind — naturally shaped by the ocean
                and handcrafted into wearable art.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl bg-[var(--color-soft-sand)]/50 aspect-[4/5] animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
