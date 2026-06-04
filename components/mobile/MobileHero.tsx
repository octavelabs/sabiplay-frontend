import Image from "next/image";
import { MobileHeader } from "./MobileHeader";
import { Button } from "../Button";
import { PrizeWonCard, XpBadge, LeaderboardCard, BattleCard } from "../cards";

export function MobileHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fdf6e3] via-[#fcefcf] to-[#fbe4a8]">
      {/* decorative glow */}
      <div className="pointer-events-none absolute right-[-40px] top-[200px] h-[260px] w-[230px] rounded-full bg-gold-soft opacity-50 blur-[90px]" />

      {/* visual layer: character + floating cards on a 440 reference canvas */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 mx-auto h-[927px] w-[440px]">
        <Image
          src="/images/hero-character.png"
          alt="SabiPlay player celebrating"
          width={623}
          height={490}
          priority
          className="absolute left-[-35px] top-[438px] h-[490px] w-[623px] max-w-none object-contain"
        />
        <XpBadge className="absolute left-[31px] top-[683px] origin-top-left scale-[0.66]" />
        <PrizeWonCard className="absolute left-[44px] top-[700px] origin-top-left scale-[0.42]" />
        <BattleCard className="absolute left-[250px] top-[470px] origin-top-left scale-[0.56]" />
        <LeaderboardCard className="absolute left-[262px] top-[712px] origin-top-left scale-[0.52]" />
      </div>

      {/* content layer */}
      <div className="relative z-20 mx-auto w-full max-w-[440px] px-5 pt-7">
        <MobileHeader />

        <div className="mt-[60px] flex flex-col gap-[19px]">
          <div className="flex flex-col gap-[13px]">
            <h1 className="text-gradient-dark font-display text-[64px] font-bold leading-[58px] tracking-tight">
              Learn. Compete. Earn.
            </h1>
            <p className="max-w-[341px] font-display text-[18px] font-medium leading-[22px] text-ink/60">
              Join live quiz battles, prove your brilliance, and earn cash for every
              victory.
            </p>
          </div>
          <div className="flex items-center gap-[26px]">
            <Button variant="dark" size="xs">
              Join the Battle
            </Button>
            <a
              href="#"
              className="font-display text-[16px] font-semibold leading-5 text-black/60"
            >
              How it works
            </a>
          </div>
        </div>

        {/* spacer to reserve room for the floating visual layer */}
        <div className="h-[560px]" />
      </div>
    </section>
  );
}
