import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Battle } from "@/components/sections/Battle";
import { Competitions } from "@/components/sections/Competitions";
import { Leaderboard } from "@/components/sections/Leaderboard";
import { Wallet } from "@/components/sections/Wallet";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { Footer } from "@/components/sections/Footer";
import { MobileLanding } from "@/components/mobile/MobileLanding";

export default function Home() {
  return (
    <main className="w-full">
      {/* Mobile / tablet layout (< lg) */}
      <div className="lg:hidden">
        <MobileLanding />
      </div>

      {/* Desktop layout (>= lg) — fixed 1440px comp */}
      <div className="mx-auto hidden w-full max-w-shell overflow-x-clip lg:block">
        <Hero />
        <Stats />
        <Battle />
        <Competitions />
        <Leaderboard />
        <Wallet />
        <Testimonials />
        <Faq />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}
