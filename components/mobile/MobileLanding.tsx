import { MobileHero } from "./MobileHero";
import { MobileStats } from "./MobileStats";
import { MobileBattle } from "./MobileBattle";
import { MobileCompetitions } from "./MobileCompetitions";
import { MobileLeaderboard } from "./MobileLeaderboard";
import { MobileWallet } from "./MobileWallet";
import { MobileTestimonials } from "./MobileTestimonials";
import { MobileFaq } from "./MobileFaq";
import { MobileCta } from "./MobileCta";
import { MobileFooter } from "./MobileFooter";

/** Single-column mobile landing (renders below the `lg` breakpoint). */
export function MobileLanding() {
  return (
    <div className="w-full overflow-x-hidden">
      <MobileHero />
      <MobileStats />
      <MobileBattle />
      <MobileCompetitions />
      <MobileLeaderboard />
      <MobileWallet />
      <MobileTestimonials />
      <MobileFaq />
      <MobileCta />
      <MobileFooter />
    </div>
  );
}
