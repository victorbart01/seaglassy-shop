export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getRarityLabel(rarity: string): string {
  const labels: Record<string, string> = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    very_rare: "Very Rare",
  };
  return labels[rarity] || rarity;
}

export function getColorHex(color: string): string {
  const colors: Record<string, string> = {
    white: "#F9FAFB",
    green: "#9ECDBB",
    brown: "#C4A882",
    blue: "#7FAFD4",
    rare: "#D4A8D4",
  };
  return colors[color] || "#F9FAFB";
}

export function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    necklace: "Necklace",
    bracelet: "Bracelet",
    earrings: "Earrings",
  };
  return labels[type] || type;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
