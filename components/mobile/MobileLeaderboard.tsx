import Image from "next/image";
import { Button } from "../Button";
import { FeatureList } from "../cards";
import { PersonIcon } from "../icons";

const rows = [
  { rank: "1.", name: "Ayomide O.", sub: "UNN", score: "2,847", highlight: false },
  { rank: "2.", name: "Segun A.", sub: "UNILAG", score: "2,610", highlight: false },
  { rank: "3.", name: "Fatima A.", sub: "BUK", score: "2,415", highlight: false },
  { rank: "4.", name: "You", sub: "↑ 12", score: "1,988", highlight: true },
];

function Overlay() {
  return (
    <div className="absolute left-1/2 top-1/2 flex w-[201px] -translate-x-1/2 -translate-y-1/2 flex-col gap-5 rounded-[21px] border border-white/80 bg-black/15 px-[18px] py-5 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="font-display text-[11px] font-semibold leading-[13px] text-white">
          Leaderboard
        </span>
        <span className="rounded-pill bg-white px-[7px] py-1 font-display text-[8px] font-semibold leading-[9px] text-ink/70">
          This Week
        </span>
      </div>
      <div className="flex flex-col gap-3.5">
        {rows.map((r) => (
          <div
            key={r.name}
            className={`flex items-center justify-between rounded-[9px] px-[7px] py-[5px] ${
              r.highlight ? "bg-white/[0.26]" : ""
            }`}
          >
            <div className="flex items-center gap-[5px]">
              <span className="font-body text-[12px] leading-[15px] text-white">{r.rank}</span>
              <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-white/20">
                <PersonIcon className="h-2.5 w-2.5 text-white" />
              </span>
              <div className="flex flex-col">
                <span className="font-display text-[12px] font-semibold leading-[15px] text-white">
                  {r.name}
                </span>
                <span className="font-body text-[8px] leading-[9px] text-white">{r.sub}</span>
              </div>
            </div>
            <span className="font-body text-[10px] leading-[12px] text-white">{r.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileLeaderboard() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex w-full max-w-[440px] flex-col gap-[38px] px-5 pt-12">
        <div className="flex flex-col gap-[38px]">
          <div className="flex flex-col gap-[19px]">
            <h2 className="text-gradient-dark font-display text-[36px] font-semibold leading-[32px]">
              Prove you&apos;re the smartest.
            </h2>
            <p className="font-display text-[18px] font-medium leading-6 text-ink/60">
              Daily, weekly, and national leaderboards show where you stand. Climb from
              Bronze to Elite division as you rack up wins and XP.
            </p>
          </div>
          <FeatureList
            tone="dark"
            textClass="text-[16px] leading-[22px]"
            items={[
              "Daily, weekly, national leaderboards",
              "7 divisions: Bronze → Platinum → Elite",
              "Campus leaderboards — beat your university",
            ]}
          />
        </div>
        <Button variant="gold" size="xs" className="self-start">
          See the leaderboard
        </Button>
      </div>

      {/* phone image + overlay */}
      <div className="relative mt-10 h-[306px] w-full overflow-hidden bg-sand">
        <Image
          src="/images/leaderboard-phone.png"
          alt="SabiPlay leaderboard screen"
          width={501}
          height={349}
          className="absolute left-1/2 top-1/2 h-[349px] w-[501px] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <Overlay />
      </div>
    </section>
  );
}
