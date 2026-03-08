import type { Drop, Product, ProductImage } from "@/lib/supabase/types";

export const mockDrops: Drop[] = [
  {
    id: "drop-05",
    name: "Emerald Tides",
    number: 5,
    description: "A collection of rare green and blue sea glass pieces, hand-collected from the shores of Phuket after the monsoon season.",
    release_date: "2026-03-15T10:00:00Z",
    is_active: true,
    created_at: "2026-03-01T00:00:00Z",
  },
  {
    id: "drop-04",
    name: "Moonlit Shore",
    number: 4,
    description: "Delicate white and frosted glass pieces found along the quiet beaches of Koh Samui at dawn.",
    release_date: "2026-03-01T10:00:00Z",
    is_active: false,
    created_at: "2026-02-15T00:00:00Z",
  },
  {
    id: "drop-03",
    name: "Sunset Drift",
    number: 3,
    description: "Warm brown and amber sea glass transformed into earthy, organic jewelry pieces.",
    release_date: "2026-02-15T10:00:00Z",
    is_active: false,
    created_at: "2026-02-01T00:00:00Z",
  },
];

export const mockImages: ProductImage[] = [
  { id: "img-1", product_id: "prod-1", url: "/img/Card%201%20Image.png", alt_text: "Green sea glass wire-wrapped pendant", sort_order: 0, is_primary: true },
  { id: "img-2", product_id: "prod-2", url: "/img/rc2img.png", alt_text: "Blue sea glass earrings on ocean rock", sort_order: 0, is_primary: true },
  { id: "img-3", product_id: "prod-3", url: "/img/Card%202%20Image.png", alt_text: "White sea glass ring on stone", sort_order: 0, is_primary: true },
  { id: "img-4", product_id: "prod-4", url: "/img/Card%20Image.png", alt_text: "Sea glass pendant with gold chain", sort_order: 0, is_primary: true },
  { id: "img-5", product_id: "prod-5", url: "/img/Card%203%20Image.png", alt_text: "Hammered gold sea glass cuff bracelet", sort_order: 0, is_primary: true },
  { id: "img-6", product_id: "prod-6", url: "/img/Card%204%20Image.png", alt_text: "Blue sea glass drop earrings", sort_order: 0, is_primary: true },
  { id: "img-7", product_id: "prod-7", url: "/img/Main%20Image.png", alt_text: "Sea glass pendant on linen", sort_order: 0, is_primary: true },
  { id: "img-8", product_id: "prod-8", url: "/img/rc3img.png", alt_text: "Amber sea glass gold cuff bracelet", sort_order: 0, is_primary: true },
];

export const mockProducts: Product[] = [
  {
    id: "prod-1",
    drop_id: "drop-05",
    name: "Emerald Whisper Pendant",
    slug: "emerald-whisper-pendant",
    description: "A stunning deep green sea glass pendant, wire-wrapped in sterling silver. The glass has been naturally frosted by decades in the Andaman Sea.",
    origin_story: "Found on a quiet stretch of Kata Beach, Phuket, after a monsoon storm revealed treasures buried deep in the sand. This piece spent an estimated 40+ years being polished by the ocean.",
    beach_location: "Kata Beach, Phuket",
    sea_glass_code: "SG-027",
    type: "necklace",
    color: "green",
    rarity: "uncommon",
    price_cents: 6500,
    is_sold: false,
    sort_order: 1,
    created_at: "2026-03-01T00:00:00Z",
    images: [mockImages[0]],
    drop: mockDrops[0],
  },
  {
    id: "prod-2",
    drop_id: "drop-05",
    name: "Ocean Drift Bracelet",
    slug: "ocean-drift-bracelet",
    description: "Three pieces of sky-blue sea glass connected by a delicate gold-filled chain. Each piece has a unique frosted texture shaped by the sea.",
    origin_story: "These three matching blue pieces were found within meters of each other on Lamai Beach — a rare occurrence that suggests they came from the same bottle, separated and reunited by the tides.",
    beach_location: "Lamai Beach, Koh Samui",
    sea_glass_code: "SG-031",
    type: "bracelet",
    color: "blue",
    rarity: "rare",
    price_cents: 8500,
    is_sold: false,
    sort_order: 2,
    created_at: "2026-03-01T00:00:00Z",
    images: [mockImages[1]],
    drop: mockDrops[0],
  },
  {
    id: "prod-3",
    drop_id: "drop-05",
    name: "Frost Drop Earrings",
    slug: "frost-drop-earrings",
    description: "A perfectly matched pair of frosted white sea glass earrings, set in minimal sterling silver studs.",
    origin_story: "White sea glass is among the most common, yet finding two pieces this perfectly matched in size and shape is exceptionally rare. Collected from the shores of Nai Harn Beach.",
    beach_location: "Nai Harn Beach, Phuket",
    sea_glass_code: "SG-033",
    type: "earrings",
    color: "white",
    rarity: "common",
    price_cents: 4500,
    is_sold: false,
    sort_order: 3,
    created_at: "2026-03-01T00:00:00Z",
    images: [mockImages[2]],
    drop: mockDrops[0],
  },
  {
    id: "prod-4",
    drop_id: "drop-05",
    name: "Lavender Tide Pendant",
    slug: "lavender-tide-pendant",
    description: "An extraordinarily rare lavender sea glass piece, wrapped in 14k gold-filled wire. Lavender glass originates from manganese-tinted antique glass.",
    origin_story: "This is one of the rarest finds of the season — lavender sea glass accounts for less than 1% of all sea glass found worldwide. Discovered half-buried in the sand at Rawai Beach during low tide.",
    beach_location: "Rawai Beach, Phuket",
    sea_glass_code: "SG-035",
    type: "necklace",
    color: "rare",
    rarity: "very_rare",
    price_cents: 14500,
    is_sold: false,
    sort_order: 4,
    created_at: "2026-03-01T00:00:00Z",
    images: [mockImages[3]],
    drop: mockDrops[0],
  },
  {
    id: "prod-5",
    drop_id: "drop-05",
    name: "Sea Moss Cuff",
    slug: "sea-moss-cuff",
    description: "A large, beautifully tumbled green sea glass piece set into a hammered sterling silver cuff bracelet.",
    origin_story: "This substantial green piece likely originated from a vintage Coca-Cola bottle. Found on the rocky outcrops of Kamala Beach where glass gets trapped and polished over decades.",
    beach_location: "Kamala Beach, Phuket",
    sea_glass_code: "SG-037",
    type: "bracelet",
    color: "green",
    rarity: "uncommon",
    price_cents: 7500,
    is_sold: true,
    sort_order: 5,
    created_at: "2026-03-01T00:00:00Z",
    images: [mockImages[4]],
    drop: mockDrops[0],
  },
  {
    id: "prod-6",
    drop_id: "drop-05",
    name: "Driftwood Drops",
    slug: "driftwood-drops",
    description: "Warm amber-brown sea glass earrings dangling from thin gold hoops. The color evokes driftwood and warm sand.",
    origin_story: "Brown sea glass comes from old beer and medicine bottles. These two pieces have an unusually warm, honey-like tone, found at sunrise on Chaweng Beach.",
    beach_location: "Chaweng Beach, Koh Samui",
    sea_glass_code: "SG-039",
    type: "earrings",
    color: "brown",
    rarity: "common",
    price_cents: 3800,
    is_sold: false,
    sort_order: 6,
    created_at: "2026-03-01T00:00:00Z",
    images: [mockImages[5]],
    drop: mockDrops[0],
  },
  {
    id: "prod-7",
    drop_id: "drop-04",
    name: "Midnight Cove Pendant",
    slug: "midnight-cove-pendant",
    description: "A deep cobalt blue sea glass pendant on an oxidized sterling silver chain. The blue glows with an inner light reminiscent of deep ocean waters.",
    origin_story: "Cobalt blue glass is rare — it typically comes from antique medicine or poison bottles. This piece was found at the base of a cliff on Koh Phangan.",
    beach_location: "Thong Nai Pan, Koh Phangan",
    sea_glass_code: "SG-022",
    type: "necklace",
    color: "blue",
    rarity: "rare",
    price_cents: 9500,
    is_sold: true,
    sort_order: 1,
    created_at: "2026-02-15T00:00:00Z",
    images: [mockImages[6]],
    drop: mockDrops[1],
  },
  {
    id: "prod-8",
    drop_id: "drop-04",
    name: "Cloud Reef Bracelet",
    slug: "cloud-reef-bracelet",
    description: "Five pieces of perfectly frosted white sea glass linked by a minimal sterling silver chain.",
    origin_story: "Each white piece in this bracelet was carefully selected for its uniform frost and size, gathered over three separate beach walks along Bophut Beach.",
    beach_location: "Bophut Beach, Koh Samui",
    sea_glass_code: "SG-024",
    type: "bracelet",
    color: "white",
    rarity: "common",
    price_cents: 5200,
    is_sold: true,
    sort_order: 2,
    created_at: "2026-02-15T00:00:00Z",
    images: [mockImages[7]],
    drop: mockDrops[1],
  },
];

export function getActiveDrop(): Drop | undefined {
  return mockDrops.find((d) => d.is_active);
}

export function getNextDrop(): Drop | undefined {
  const now = new Date();
  return mockDrops
    .filter((d) => new Date(d.release_date) > now && !d.is_active)
    .sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime())[0];
}

export function getProductsByDrop(dropId: string): Product[] {
  return mockProducts.filter((p) => p.drop_id === dropId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return mockProducts.find((p) => p.slug === slug);
}

export function filterProducts(filters: { type?: string; color?: string }): Product[] {
  return mockProducts.filter((p) => {
    if (filters.type && p.type !== filters.type) return false;
    if (filters.color && p.color !== filters.color) return false;
    return true;
  });
}
