import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Seaglassy — Handcrafted Sea Glass Jewelry",
    template: "%s | Seaglassy",
  },
  description:
    "Unique handcrafted jewelry made from authentic sea glass collected on Thai beaches. Each piece is shaped by the ocean, no two are alike.",
  keywords: [
    "sea glass jewelry",
    "handmade jewelry",
    "ocean jewelry",
    "Thai sea glass",
    "unique jewelry",
    "eco-friendly jewelry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
