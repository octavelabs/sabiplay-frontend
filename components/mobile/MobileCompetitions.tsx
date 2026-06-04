import { Button } from "../Button";
import { FeatureList } from "../cards";
import { tiers, TierRow } from "../CompetitionTier";

export function MobileCompetitions() {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex w-full max-w-[440px] flex-col gap-[38px] px-5 py-12">
        {/* gold cup card */}
        <div className="flex flex-col gap-3.5 rounded-[33px] bg-[#fef8e9] p-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-[16px] font-semibold leading-5 text-black/70">
              Gold Cup
            </span>
            <span className="rounded-pill border border-gold/20 bg-gold/[0.05] px-2 py-1 font-display text-[14px] font-semibold leading-[17px] text-[#edb310]">
              Open
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {tiers.map((t) => (
              <TierRow key={t.badge} tier={t} compact />
            ))}
          </div>
        </div>

        {/* copy */}
        <div className="flex flex-col gap-[38px]">
          <div className="flex flex-col gap-[19px]">
            <h2 className="text-gradient-dark font-display text-[36px] font-semibold leading-[32px]">
              Compete for serious prizes.
            </h2>
            <p className="font-display text-[18px] font-medium leading-6 text-ink/60">
              Enter leagues and cups across tiers — from Bronze to Diamond. Entry fees as
              low as ₦500. Prize pools up to ₦50,000 per competition.
            </p>
          </div>
          <FeatureList
            tone="dark"
            textClass="text-[16px] leading-[22px]"
            items={[
              "Instant 1v1 matching — no waiting",
              "10 questions per battle, 15 seconds each",
              "Earn XP, climb divisions, win cash",
            ]}
          />
        </div>
        <Button variant="gold" size="xs" className="self-start">
          Browse Competitions
        </Button>
      </div>
    </section>
  );
}
