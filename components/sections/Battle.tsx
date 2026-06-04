import { Button } from "../Button";
import { CheckBullet } from "../icons";
import { PhoneBattle } from "../PhoneBattle";
import { PrizeWonCard, XpBadge } from "../cards";

const bullets = [
  "Instant 1v1 matching — no waiting",
  "10 questions per battle, 15 seconds each",
  "Earn XP, climb divisions, win cash",
];

export function Battle() {
  return (
    <section className="relative mx-auto h-[1187px] w-[1440px] overflow-hidden bg-ink-900">
      {/* heading + bullets + cta */}
      <div className="absolute left-1/2 top-[65px] flex w-[1320px] -translate-x-1/2 flex-col items-center gap-[70px]">
        <div className="flex flex-col items-center gap-[38px]">
          <div className="flex flex-col items-center gap-[19px]">
            <h2 className="text-center font-display text-[62px] font-semibold leading-[56px] text-white">
              Beat opponents in real-time.
            </h2>
            <p className="max-w-[1094px] text-center font-display text-[24px] font-medium leading-[33px] text-cream/80">
              Match with a rival in under 3 seconds. 10 questions, a live timer, and
              pure head-to-head competition. Fast fingers and a sharp mind win.
            </p>
          </div>
          <div className="flex items-center gap-[38px]">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-3.5">
                <CheckBullet />
                <span className="font-display text-[18px] font-medium leading-6 text-cream/80">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Button variant="gold">Enter the Arena</Button>
      </div>

      <div className="absolute left-[438px] top-[534px]">
        <PhoneBattle />
      </div>
      <PrizeWonCard className="absolute left-[223px] top-[656px] z-20 -rotate-[8deg]" />
      <XpBadge tone="gold" className="absolute left-[1007px] top-[804px] z-20 scale-[1.25]" />
    </section>
  );
}
