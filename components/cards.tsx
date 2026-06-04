import { CheckBullet } from "./icons";
import { Avatar } from "./Avatar";

/* ------------------------------------------------------------------ */
/*  Prize-won wallet card (Hero "Frame 28" + reused in battle section) */
/* ------------------------------------------------------------------ */
export function PrizeWonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-[252px] flex-col gap-2.5 rounded-[21px] border-2 border-[#fefffa] bg-white/90 px-[18px] py-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-sm ${className}`}
    >
      <div className="flex items-start justify-between">
        <span className="font-display text-[12px] font-semibold leading-[15px] text-black/60">
          PRIZE WON
        </span>
        <span className="text-[20px] leading-none">💰</span>
      </div>
      <div className="font-display text-[37px] font-semibold leading-[46px] text-burnt">
        ₦6,200
      </div>
      <div className="flex items-center gap-1 text-win">
        <span className="text-[10px]">▲</span>
        <span className="font-display text-[12px] font-semibold leading-[15px]">
          +₦1,500 from last competition
        </span>
      </div>
      <div className="mt-1 border-t border-black/10 pt-2.5">
        <div className="flex items-center gap-[7px]">
          <span className="h-[5px] w-[5px] rounded-full bg-win" />
          <span className="text-[12px] leading-[15px] text-[#8b8682]">
            Paid to Kuda Bank ····3421
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  XP earned pill                                                    */
/* ------------------------------------------------------------------ */
export function XpBadge({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "gold";
}) {
  return (
    <div
      className={`inline-flex items-center rounded-pill border bg-gold/[0.12] px-[14px] py-[7px] ${
        tone === "gold"
          ? "border-gold/25 text-gold"
          : "border-plum/20 text-black/60"
      } ${className}`}
    >
      <span className="text-[18px] leading-[23px]">⚡+50 XP earned</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero leaderboard card ("Frame 51")                                */
/* ------------------------------------------------------------------ */
const leaders = [
  { medal: "🥇", name: "Ayomide", pts: "320 pts", highlight: false },
  { medal: "🥈", name: "Chidiebere", pts: "280 pts", highlight: false },
  { medal: "🥉", name: "You", pts: "280 pts", highlight: true },
];

export function LeaderboardCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex w-[354px] flex-col gap-3.5 rounded-[25px] border-[0.8px] border-gold/30 bg-cream px-[23px] py-7 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.3)] ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-[17px] font-semibold leading-[21px] text-black">
          Leaderboard
        </span>
        <span className="text-[24px] leading-none">🏆</span>
      </div>
      <div className="flex flex-col gap-3.5">
        {leaders.map((l) => (
          <div
            key={l.name}
            className={`flex items-center justify-between ${
              l.highlight
                ? "rounded-[15px] border-[0.7px] border-gold/[0.67] bg-gold/25 px-[9px] py-[11px]"
                : "px-[9px]"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[24px] leading-none">{l.medal}</span>
              <span className="font-display text-[13px] font-semibold leading-4 text-black">
                {l.name}
              </span>
            </div>
            <span className="text-[13px] leading-4 text-black/60">{l.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Live battle card ("Frame 8")  — light + dark variants            */
/* ------------------------------------------------------------------ */
const options = [
  { letter: "A", value: "1998", correct: false },
  { letter: "B", value: "1995", correct: false },
  { letter: "C", value: "2000", correct: false },
  { letter: "D", value: "1990", correct: true },
];

export function BattleCard({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex w-[328px] flex-col gap-[15px] rounded-[25px] px-[25px] py-[17px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)] ${
        dark ? "bg-ink-800" : "border-[0.6px] border-black/5 bg-cream"
      } ${className}`}
    >
      {/* status row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[7px]">
          <span className="h-1.5 w-1.5 rounded-full bg-win" />
          <span className="text-[12px] leading-[15px] text-black/70">LIVE BATTLE</span>
        </div>
        <span className="text-[12px] leading-[15px] text-[#97918b]">Q7/10</span>
      </div>

      {/* players + timer */}
      <div className="flex items-end justify-between">
        <Player name="You" score="6" cell={3} />
        <div className="relative flex h-[74px] w-[65px] flex-col items-center justify-center">
          <span
            className="flex h-[53px] w-[53px] items-center justify-center rounded-full"
            style={{
              background:
                "conic-gradient(#fcc11a 0deg 280deg, rgba(223,216,216,0.42) 280deg 360deg)",
            }}
          >
            <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-cream text-[20px] font-semibold leading-none text-ink">
              11
            </span>
          </span>
          <span className="absolute bottom-0 text-[9px] leading-[11px] text-[#97918b]">
            Seconds
          </span>
        </div>
        <Player name="Chidi" score="4" cell={0} />
      </div>

      {/* question */}
      <div className="flex flex-col gap-2 rounded-2xl border-[0.8px] border-[#fdd053] bg-[#feefc6]/30 p-3">
        <div className="flex items-center gap-[3px]">
          <span className="rounded-pill bg-gold/[0.12] px-1 py-px text-[9px] leading-[11px] text-burnt/75">
            HISTORY
          </span>
          <span className="rounded-pill bg-burnt/[0.62] px-1 py-px text-[9px] leading-[11px] text-white">
            MEDIUM
          </span>
        </div>
        <p className="font-display text-[12px] font-semibold leading-4 text-[#656361]">
          In what year did Nigeria first qualify for the FIFA World Cup?
        </p>
      </div>

      {/* answers */}
      <div className="grid grid-cols-2 gap-2">
        {options.map((o) => (
          <div
            key={o.letter}
            className={`flex items-center gap-1.5 rounded-pill border-[0.5px] px-[11px] py-[5px] ${
              o.correct
                ? "border-win/20 bg-win/[0.18] text-win"
                : "border-transparent bg-[#535250]/[0.06] text-[#97918b]"
            }`}
          >
            <span className="text-[9px] leading-[11px]">{o.letter}</span>
            <span className="text-[9px] leading-[11px]">{o.value}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-[9px] leading-[11px] text-black">🔥3× streak active</p>
    </div>
  );
}

function Player({
  name,
  score,
  cell,
}: {
  name: string;
  score: string;
  cell: number;
}) {
  return (
    <div className="flex flex-col items-center gap-[5px]">
      <div className="flex flex-col items-center">
        <Avatar cell={cell} rounded="rounded-[2px]" className="h-[47px] w-[44px]" />
        <span className="text-[9px] leading-[11px] text-[#97918b]">{name}</span>
      </div>
      <span className="text-[26px] font-medium leading-none text-ink">{score}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature list (yellow check bullets)                               */
/* ------------------------------------------------------------------ */
export function FeatureList({
  items,
  tone = "dark",
  className = "",
  textClass = "text-[20px] leading-[27px]",
}: {
  items: string[];
  tone?: "dark" | "light";
  className?: string;
  textClass?: string;
}) {
  return (
    <ul className={`flex flex-col gap-4 ${className}`}>
      {items.map((it) => (
        <li key={it} className="flex items-center gap-3.5">
          <CheckBullet />
          <span
            className={`font-display font-medium ${textClass} ${
              tone === "dark" ? "text-black/70" : "text-cream/80"
            }`}
          >
            {it}
          </span>
        </li>
      ))}
    </ul>
  );
}
