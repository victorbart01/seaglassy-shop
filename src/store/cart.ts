"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/supabase/types";

export interface CartItem {
  product: Product;
  addedAt: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
  totalCents: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product: Product) => {
        const { items } = get();
        if (items.some((item) => item.product.id === product.id)) return;
        set({ items: [...items, { product, addedAt: Date.now() }] });
      },

      removeItem: (productId: string) => {
        set({ items: get().items.filter((item) => item.product.id !== productId) });
      },

      clearCart: () => set({ items: [] }),

      isInCart: (productId: string) => {
        return get().items.some((item) => item.product.id === productId);
      },

      totalCents: () => {
        return get().items.reduce((sum, item) => sum + item.product.price_cents, 0);
      },
    }),
    {
      name: "seaglassy-cart",
    }
  )
);
