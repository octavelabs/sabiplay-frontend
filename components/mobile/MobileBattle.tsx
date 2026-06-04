import { Button } from "../Button";
import { CheckBullet } from "../icons";
import { PhoneBattle } from "../PhoneBattle";
import { PrizeWonCard, XpBadge } from "../cards";

const bullets = [
  "Instant 1v1 matching — no waiting",
  "10 questions per battle, 15 seconds each",
  "Earn XP, climb divisions, win cash",
];

export function MobileBattle() {
  return (
    <section className="overflow-hidden bg-ink-900">
      <div className="mx-auto flex w-full max-w-[440px] flex-col items-center gap-[34px] px-5 py-14">
        {/* heading + bullets + cta */}
        <div className="flex flex-col items-center gap-[38px]">
          <div className="flex flex-col items-center gap-[19px]">
            <h2 className="text-center font-display text-[36px] font-semibold leading-[32px] text-white">
              Beat opponents in real-time.
            </h2>
            <p className="text-center font-display text-[16px] font-medium leading-[22px] text-cream/80">
              Match with a rival in under 3 seconds. 10 questions, a live timer, and pure
              head-to-head competition. Fast fingers and a sharp mind win.
            </p>
          </div>
          <div className="flex flex-col gap-[30px] self-start">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-3.5">
                <CheckBullet />
                <span className="font-display text-[16px] font-medium leading-[22px] text-cream/80">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Button variant="gold" size="xs">
          Enter the Arena
        </Button>

        {/* phone + floating cards */}
        <div className="relative mt-4 h-[417px] w-[378px]">
          <div className="absolute left-0 top-0 h-[417px] w-[378px] origin-top-left scale-[0.62]">
            <PhoneBattle />
          </div>
          <PrizeWonCard className="absolute left-[-8px] top-[150px] z-20 origin-top-left scale-[0.8] -rotate-[8deg]" />
          <XpBadge
            tone="gold"
            className="absolute right-[-6px] top-[210px] z-20 origin-top-right"
          />
        </div>
      </div>
    </section>
  );
}
