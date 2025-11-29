"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Not Generic Astrology",
    image: "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=2071&auto=format&fit=crop",
    description:
      "Actual astronomical math combined with advanced AI interpretation. We don't just use sun signs; we analyze the entire sky at the exact moment of your birth.",
  },
  {
    id: 2,
    title: "Real Planetary Data",
    image: "https://images.unsplash.com/photo-1614730341194-75c60740a073?q=80&w=2148&auto=format&fit=crop",
    description:
      "We use precise ephemeris calculations from NASA data. No oversimplified readings—just pure, accurate planetary positions tracked in real-time.",
  },
  {
    id: 3,
    title: "Clear, Actionable Predictions",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=2171&auto=format&fit=crop",
    description:
      "Get specific guidance you can apply to your daily decisions. Whether it's career moves or relationship timing, our AI gives you practical advice, not vague metaphors.",
  },
  {
    id: 4,
    title: "Private & Secure",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    description:
      "Your birth data is encrypted and never shared with third parties. We believe your cosmic blueprint is personal, and we treat it with the highest level of security.",
  },
  {
    id: 5,
    title: "Always Evolving",
    image: "https://images.unsplash.com/photo-1534081333815-ae5019106622?q=80&w=2070&auto=format&fit=crop",
    description:
      "Our AI models are constantly learning and improving. As we process more charts and feedback, your readings become even more personalized and accurate over time.",
  },
];

const WhyAstroAI = () => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section id="why" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">Why AstroAI</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Astrology backed by science & AI
            </h2>
        </div>

        <div className="flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`} className="border-border/50">
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-6 !no-underline transition hover:text-primary"
                  >
                    <h6
                      className={`text-xl font-semibold text-left ${tab.id === activeTabId ? "text-primary" : "text-muted-foreground"}`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-2 text-muted-foreground text-base leading-relaxed">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="h-full max-h-80 w-full rounded-xl object-cover border border-border/50"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-2xl bg-muted/20 border border-border/50 md:block h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <img
              src={activeImage}
              alt="Feature preview"
              className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAstroAI;
