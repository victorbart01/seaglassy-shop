export type ProductType = "necklace" | "bracelet" | "earrings";
export type ProductColor = "white" | "green" | "brown" | "blue" | "rare";
export type ProductRarity = "common" | "uncommon" | "rare" | "very_rare";
export type OrderStatus = "pending" | "paid" | "shipped" | "delivered" | "cancelled";

export interface Drop {
  id: string;
  name: string;
  number: number;
  description: string;
  release_date: string;
  is_active: boolean;
  created_at: string;
}

export interface Product {
  id: string;
  drop_id: string;
  name: string;
  slug: string;
  description: string;
  origin_story: string;
  beach_location: string;
  sea_glass_code: string;
  type: ProductType;
  color: ProductColor;
  rarity: ProductRarity;
  price_cents: number;
  is_sold: boolean;
  sort_order: number;
  created_at: string;
  images?: ProductImage[];
  drop?: Drop;
}

export interface ProductImage {
  id: string;
  product_id: string;
  url: string;
  alt_text: string;
  sort_order: number;
  is_primary: boolean;
}

export interface Order {
  id: string;
  stripe_session_id: string;
  stripe_payment_intent: string;
  customer_email: string;
  customer_name: string;
  shipping_address: string;
  status: OrderStatus;
  total_cents: number;
  created_at: string;
  items?: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  price_cents: number;
  product?: Product;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
}
