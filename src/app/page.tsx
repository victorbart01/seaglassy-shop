import { Hero } from "@/components/sections/Hero";
import { LatestDrop } from "@/components/sections/LatestDrop";
import { ShopByType } from "@/components/sections/ShopByType";
import { ShopByColor } from "@/components/sections/ShopByColor";
import { AboutSeaGlass } from "@/components/sections/AboutSeaGlass";
import { Newsletter } from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LatestDrop />
      <ShopByType />
      <ShopByColor />
      <AboutSeaGlass />
      <Newsletter />
    </>
  );
}
