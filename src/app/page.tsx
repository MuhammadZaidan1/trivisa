// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Benefit } from "@/components/sections/Benefit";
import { Catalog } from "@/components/sections/Catalog";
import { Process } from "@/components/sections/Process";
import { Testimony } from "@/components/sections/Testimony";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section: First Impression & Primary CTA */}
      <Hero />
      {/* 5. Testimony Section: Social Proof (dari 400+ record data) */}
      <Testimony />
      {/* 2. Catalog Section: Popular Destinations Showcase */}
      <Catalog />
      {/* 3. Benefit Section: Value Propositions */}
      <Benefit />
      {/* 4. Process Section: Detailed Process */}
      <Process />
      {/* 6. FAQ Section: Addressing Common Concerns */}
      <FAQ />
      {/* 7. Final CTA Section: Closing the Conversion */}
      <FinalCTA />
    </>
  );
}