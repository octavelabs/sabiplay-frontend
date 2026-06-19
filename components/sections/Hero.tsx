import Image from "next/image";
import { Header } from "./Header";
import { Button } from "../Button";
import {
  PrizeWonCard,
  XpBadge,
  LeaderboardCard,
  BattleCard,
} from "../cards";

export function Hero() {
  return (
    <section className="relative mx-auto h-[1125px] max-w-[1740px] overflow-hidden bg-center"
     style={{
                  
                  backgroundImage: "url('/images/section-bg.png')",
                }}
    >
      {/* soft glow ellipses */}
      <div className="relative z-20">
      <div className="pointer-events-none absolute left-[1121px] top-[275px] h-[474px] w-[414px] rounded-full bg-gold-soft opacity-60 blur-[120px]" />
      <div className="pointer-events-none absolute left-[253px] top-[160px] h-[589px] w-[919px] rounded-full bg-white opacity-70 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[589px] w-[919px] -translate-x-1/2 rounded-full bg-white opacity-70 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-[-150px] h-[474px] w-[414px] -translate-x-1/2 rounded-full bg-gold-soft opacity-60 blur-[120px]" />
      {/* hero character */}
      <Image
        src="/images/heroImage.svg"
        alt="SabiPlay player celebrating"
        width={1153}
        height={906}
        priority
        className="pointer-events-none absolute left-[287px] top-[219px] h-[906px] w-[1153px] object-contain"
      />

      <Header />

      {/* hero copy */}
      <div className="absolute left-[195px] top-[153px] z-20 flex w-[1050px] flex-col gap-[37px]">
        <div className="flex flex-col">
          <h1 className="text-gradient-dark font-display text-[106px] font-semibold leading-[96px] tracking-tight">
            Learn. Compete. Earn.
          </h1>
          <p className="mt-4 max-w-[539px] font-display text-[28px] font-medium leading-[34px] text-ink/60">
            Join live quiz battles, prove your brilliance, and earn cash for every
            victory.
          </p>
        </div>
        <div className="flex items-center gap-[26px]">
          <Button variant="dark">Join the Battle</Button>
          <a
            href="#"
            className="font-display text-[22px] font-semibold leading-[27px] text-black/60 transition-colors hover:text-black"
          >
            How it works
          </a>
        </div>
      </div>

            <XpBadge className="absolute left-[390px] top-[635px] z-20" />
      <PrizeWonCard className="absolute left-[216px] top-[676px] z-20" />
      <BattleCard className="absolute left-[972px] top-[352px] z-10 rotate-[4deg]" />
      <LeaderboardCard className="absolute left-[1028px] top-[628px] z-20" />
      </div>

      <img src='/images/bg-texture.png'
                className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-[40%]"
              />

      {/* floating cards */}

    </section>
  );
}
