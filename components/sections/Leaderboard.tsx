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

function LeaderboardOverlay() {
  return (
    <div className="absolute left-[56px] top-[86px] flex w-[292px] flex-col gap-7 rounded-[31px] border-[1.5px] border-white bg-[#00000026] px-[26px] py-[30px] backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <span className="font-display text-[16px] font-semibold leading-[19px] text-white">
          Leaderboard
        </span>
        <span className="rounded-pill bg-white px-2.5 py-1.5 font-display text-[11px] font-semibold leading-[14px] text-ink/70">
          This Week
        </span>
      </div>
      <div className="flex flex-col gap-5">
        {rows.map((r) => (
          <div
            key={r.name}
            className={`flex items-center justify-between rounded-[13px] px-2.5 py-1.5 ${
              r.highlight ? "bg-white/30" : ""
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="font-body text-[18px] leading-[22px] text-white">{r.rank}</span>
              <div className="flex items-center gap-2.5">
                <span className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white/20">
                  <PersonIcon className="h-3.5 w-3.5 text-white" />
                </span>
                <div className="flex flex-col">
                  <span className="font-display text-[18px] font-semibold leading-[22px] text-white">
                    {r.name}
                  </span>
                  <span className="font-body text-[11px] leading-[14px] text-white/90">
                    {r.sub}
                  </span>
                </div>
              </div>
            </div>
            <span className="font-body text-[15px] leading-[18px] text-white">{r.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Leaderboard() {
  return (
    <section className="relative mx-auto h-[778px] max-w-[1740px] bg-white" id='leaderboard'>
      {/* left copy */}
      <div className="absolute left-[56px] top-[131px] flex w-[584px] flex-col gap-[45px]">
        <div className="flex flex-col gap-[38px]">
          <div className="flex flex-col gap-[39px]">
            <h2 className="text-gradient-dark font-display text-[62px] font-semibold leading-[56px]">
              Prove you&apos;re the smartest.
            </h2>
            <p className="font-display text-[24px] font-medium leading-[33px] text-ink/60">
              Daily, weekly, and national leaderboards show where you stand. Climb from
              Bronze to Elite division as you rack up wins and XP.
            </p>
          </div>
          <FeatureList
            tone="dark"
            items={[
              "Daily, weekly, national leaderboards",
              "7 divisions: Bronze → Platinum → Elite",
              "Campus leaderboards — beat your university",
            ]}
          />
        </div>
        <Button variant="gold" className="self-start">
          See the leaderboard
        </Button>
      </div>

      {/* right phone + overlay */}
      <div className="absolute left-[666px] top-[150px] h-[514px] w-[711px] overflow-hidden rounded-[32px] bg-sand">
        <Image
          src="/images/leaderboard-phone.png"
          alt="SabiPlay leaderboard screen"
          width={802}
          height={535}
          className="absolute left-1/2 top-0 h-[535px] w-[802px] max-w-none -translate-x-1/2 object-cover"
        />
        <LeaderboardOverlay />
      </div>
    </section>
  );
}
