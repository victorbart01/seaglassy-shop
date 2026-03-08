"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sections = [
  {
    id: "sea-glass",
    title: "What is Sea Glass?",
    image: "/img/originImg1.png",
    imageAlt: "Hand holding a green sea glass piece at sunset on the beach",
    imagePosition: "right" as const,
    content: [
      "Sea glass begins its journey as ordinary glass — bottles, jars, tableware — discarded and eventually finding its way into the ocean. Over decades, sometimes centuries, the relentless tumbling of waves, abrasion from sand, and the chemistry of saltwater transform these sharp fragments into smooth, frosted gems.",
      "The process is slow and beautiful. It takes 20 to 50 years for the ocean to fully mature a piece of sea glass, giving it the characteristic frosted, jewel-like quality that makes each piece unique.",
    ],
  },
  {
    id: "collecting",
    title: "Where We Collect",
    image: "/img/ctaRight.png",
    imageAlt: "Hands sorting sea glass by color on linen cloth",
    imagePosition: "left" as const,
    content: [
      "Every piece of Seaglassy jewelry starts with a walk on the beach. We hand-collect sea glass from beaches across Thailand — from the turquoise shores of Phuket and Koh Samui to the quieter coastlines of Koh Phangan and beyond.",
      "The warm waters of the Andaman Sea and the Gulf of Thailand create ideal conditions for sea glass formation. Different beaches yield different colors and qualities, and we've spent years learning where to find the most remarkable pieces.",
    ],
  },
  {
    id: "process",
    title: "The Handmade Process",
    image: "/img/Process Image.png",
    imageAlt: "Artisan wire-wrapping sea glass in a coastal workshop",
    imagePosition: "right" as const,
    content: [
      "Once collected, each piece of sea glass is carefully cleaned and sorted by color, size, shape, and quality. We select only the finest pieces — those with the best frost, smoothest edges, and most compelling colors.",
      "Every jewelry piece is then handcrafted using traditional wire-wrapping techniques with sterling silver or gold-filled materials. We work with the natural shape of each piece, letting the glass guide the design rather than forcing it into predetermined forms.",
    ],
  },
  {
    id: "ecology",
    title: "An Ecological Choice",
    image: "/img/Hero Image.png",
    imageAlt: "Sea glass jewelry collection on driftwood by the ocean",
    imagePosition: "left" as const,
    content: [
      "Sea glass jewelry is inherently ecological. We're transforming what was once waste into something beautiful and valuable. No new glass is produced — instead, we're giving a second life to materials that the ocean has already begun to reclaim.",
      "By choosing sea glass jewelry, you're wearing a piece of environmental history — a reminder that beauty can emerge from waste, and that nature is the greatest artist of all.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-deep-ocean)]/40 mb-6">
            Our Story
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[var(--color-deep-ocean)] leading-tight mb-8">
            From the Ocean
            <br />
            to Your Hands
          </h1>
          <p className="text-lg text-[var(--color-deep-ocean)]/60 max-w-2xl mx-auto leading-relaxed">
            Seaglassy is a small jewelry brand born from a love of the ocean and the
            extraordinary beauty of sea glass. Based in Thailand, we hand-collect
            authentic sea glass and transform it into one-of-a-kind wearable pieces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <div className="relative aspect-[16/7] rounded-3xl overflow-hidden">
            <Image
              src="/img/founderImg.png"
              alt="Founder in her coastal workshop holding a piece of sea glass"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-ocean)]/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
              <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-1">Meet the Maker</p>
              <p className="text-white font-heading text-xl sm:text-2xl">Every piece begins with a story</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-28">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                section.imagePosition === "left" ? "" : "lg:[direction:rtl] lg:*:[direction:ltr]"
              }`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-deep-ocean)]/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-heading text-3xl text-[var(--color-deep-ocean)]">
                    {section.title}
                  </h2>
                  {section.content.map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-[var(--color-deep-ocean)]/60 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 text-center"
        >
          <div className="glass-strong rounded-3xl p-10 sm:p-16">
            <h2 className="font-heading text-3xl sm:text-4xl text-[var(--color-deep-ocean)] mb-6">
              Every Piece Tells a Story
            </h2>
            <p className="text-[var(--color-deep-ocean)]/60 max-w-lg mx-auto leading-relaxed">
              When you wear Seaglassy, you carry a fragment of the ocean&apos;s
              history — a piece of glass that has traveled through time and tides
              to become something truly extraordinary.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
