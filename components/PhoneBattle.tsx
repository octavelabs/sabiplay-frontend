import { Avatar } from "./Avatar";

const answers = [
  { value: "1998", correct: false },
  { value: "1995", correct: false },
  { value: "2000", correct: false },
  { value: "1990", correct: true },
];

function TimerRing() {
  return (
    <div className="relative flex h-[140px] w-[110px] flex-col items-center justify-center">
      <div
        className="flex h-[110px] w-[110px] items-center justify-center rounded-full"
        style={{
          background:
            "conic-gradient(#fcc11a 0deg 280deg, rgba(223,216,216,0.42) 280deg 360deg)",
        }}
      >
        <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-ink-800">
          <span className="text-[44px] font-semibold leading-none text-white">11</span>
        </div>
      </div>
      <span className="absolute bottom-0 text-[18px] leading-[22px] text-stone">
        Seconds
      </span>
    </div>
  );
}

function PhonePlayer({
  name,
  score,
  cell,
}: {
  name: string;
  score: string;
  cell: number;
}) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div className="flex flex-col items-center">
        <Avatar cell={cell} rounded="rounded-[3px]" className="h-[82px] w-[76px]" />
        <span className="mt-1 text-[18px] leading-[22px] text-stone">{name}</span>
      </div>
      <span className="text-[44px] font-semibold leading-none text-white">{score}</span>
    </div>
  );
}

/**
 * Phone mockup containing the live-battle UI. Fixed 610×673 at base scale;
 * callers position/scale it (the mobile layout renders it at ~0.62 scale).
 */
export function PhoneBattle({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative h-[673px] w-[610px] overflow-hidden rounded-t-[114px] border-[20px] border-b-0 border-[#222222] bg-ink-800 ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-[14px] h-[30px] w-[149px] -translate-x-1/2 rounded-pill bg-black" />

      <div className="flex flex-col gap-[30px] px-[50px] pt-[72px]">
        {/* status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-win" />
            <span className="text-[24px] leading-[29px] text-stone">LIVE BATTLE</span>
          </div>
          <span className="text-[24px] leading-[29px] text-white">Q7/10</span>
        </div>

        {/* players + timer */}
        <div className="flex items-end justify-between">
          <PhonePlayer name="You" score="6" cell={3} />
          <TimerRing />
          <PhonePlayer name="Chidi" score="4" cell={0} />
        </div>

        {/* question */}
        <div className="flex flex-col gap-3.5 rounded-[32px] border-[1.6px] border-gold-soft/10 bg-ink-700/50 p-6">
          <div className="flex items-center gap-1.5">
            <span className="rounded-pill bg-gold/[0.12] px-2 py-0.5 text-[18px] leading-[22px] text-gold/[0.66]">
              History
            </span>
            <span className="rounded-pill bg-gold px-2 py-0.5 text-[18px] leading-[22px] text-ink">
              Medium
            </span>
          </div>
          <p className="font-display text-[24px] font-semibold leading-8 text-white">
            In what year did Nigeria first qualify for the FIFA World Cup?
          </p>
        </div>

        {/* answers */}
        <div className="grid grid-cols-2 gap-3">
          {answers.map((a, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 rounded-pill border px-6 py-2.5 ${
                a.correct
                  ? "border-win/20 bg-win/[0.18] text-win"
                  : "border-stone/10 bg-white/[0.04] text-white"
              }`}
            >
              <span className="text-[18px] leading-[22px]">A</span>
              <span className="text-[18px] leading-[22px]">{a.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
