import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { mockProducts } from "@/lib/mock-data";

export async function POST(req: NextRequest) {
  try {
    const { productIds } = await req.json();

    if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
      return NextResponse.json({ error: "No products provided" }, { status: 400 });
    }

    const products = productIds
      .map((id: string) => mockProducts.find((p) => p.id === id))
      .filter(Boolean);

    const soldProducts = products.filter((p) => p!.is_sold);
    if (soldProducts.length > 0) {
      return NextResponse.json(
        {
          error: "Some items are already sold",
          soldIds: soldProducts.map((p) => p!.id),
        },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: products.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product!.name,
            description: `${product!.sea_glass_code} — ${product!.beach_location}`,
            metadata: {
              product_id: product!.id,
            },
          },
          unit_amount: product!.price_cents,
        },
        quantity: 1,
      })),
      metadata: {
        product_ids: JSON.stringify(productIds),
      },
      shipping_address_collection: {
        allowed_countries: [
          "US", "CA", "GB", "FR", "DE", "AU", "JP", "TH", "SG", "HK",
          "NL", "BE", "CH", "AT", "IT", "ES", "SE", "NO", "DK", "FI",
        ],
      },
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
