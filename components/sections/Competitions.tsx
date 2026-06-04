import { Button } from "../Button";
import { FeatureList } from "../cards";
import { tiers, TierRow } from "../CompetitionTier";

export function Competitions() {
  return (
    <section className="relative mx-auto h-[928px] w-[1440px] bg-cream">
      {/* gold cup card */}
      <div className="absolute left-[52px] top-[215px] flex w-[571px] flex-col gap-[15px] rounded-[48px] bg-[#fef8e9] px-[42px] py-12">
        <div className="flex items-center justify-between">
          <span className="font-display text-[22px] font-semibold leading-[27px] text-black/70">
            Gold Cup
          </span>
          <span className="rounded-pill border border-gold/20 bg-gold/[0.05] px-2.5 py-1 font-display text-[16px] font-semibold leading-5 text-[#edb310]">
            Open
          </span>
        </div>
        <div className="flex flex-col gap-[7px]">
          {tiers.map((t) => (
            <TierRow key={t.badge} tier={t} />
          ))}
        </div>
      </div>

      {/* right copy */}
      <div className="absolute left-[743px] top-[156px] flex w-[584px] flex-col gap-[45px]">
        <div className="flex flex-col gap-[38px]">
          <div className="flex flex-col gap-[39px]">
            <h2 className="text-gradient-dark font-display text-[62px] font-semibold leading-[56px]">
              Compete for serious prizes.
            </h2>
            <p className="max-w-[514px] font-display text-[24px] font-medium leading-[33px] text-ink/60">
              Enter leagues and cups across tiers — from Bronze to Diamond. Entry fees
              as low as ₦500. Prize pools up to ₦50,000 per competition.
            </p>
          </div>
          <FeatureList
            tone="dark"
            items={[
              "Instant 1v1 matching — no waiting",
              "10 questions per battle, 15 seconds each",
              "Earn XP, climb divisions, win cash",
            ]}
          />
        </div>
        <Button variant="gold" className="self-start">
          Browse Competitions
        </Button>
      </div>
    </section>
  );
}
