"use client";

import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/Button";
import type { Product } from "@/lib/supabase/types";
import { useState, useEffect } from "react";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem, removeItem, isInCart } = useCartStore();
  const [inCart, setInCart] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setInCart(isInCart(product.id));
  }, [isInCart, product.id]);

  const handleClick = () => {
    if (inCart) {
      removeItem(product.id);
      setInCart(false);
    } else {
      addItem(product);
      setInCart(true);
    }
  };

  if (product.is_sold) {
    return (
      <Button disabled size="lg" className="w-full">
        Sold Out
      </Button>
    );
  }

  if (!mounted) {
    return (
      <Button size="lg" className="w-full">
        Add to Cart
      </Button>
    );
  }

  return (
    <Button
      size="lg"
      className="w-full"
      variant={inCart ? "secondary" : "primary"}
      onClick={handleClick}
    >
      {inCart ? "Remove from Cart" : "Add to Cart"}
    </Button>
  );
}
