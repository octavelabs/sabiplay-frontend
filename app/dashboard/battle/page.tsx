"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSetPageHeader } from "../../context/PageHeaderContext";

/* ------------------------------------------------------------------ */
/*  Shared bits                                                       */
/* ------------------------------------------------------------------ */
type Phase = "start" | "searching" | "found" | "live" | "result";
type Outcome = "win" | "loss" | "draw";

const ME = { name: "emgee (you)", short: "emgee", level: 14, win: "72%", cell: 4 };
const OPP = { name: "Oganibi", short: "Oganibe", level: 12, win: "65%", cell: 0 };

const CATEGORIES = [
  "Entertainment",
  "Sports",
  "Science & Technology",
  "History",
  "Nigeria Politics",
  "Mathematics",
  "Religious",
];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];

function Avatar({ cell, className = "", ring }: { cell: number; className?: string; ring?: string }) {
  const col = cell % 3;
  const row = Math.floor(cell / 3);
  return (
    <span
      className={`block shrink-0 rounded-full bg-cover bg-center ${className}`}
      style={{
        backgroundImage: "url(/images/auth-avatars.png)",
        backgroundSize: "300% 400%",
        backgroundPosition: `${(col / 2) * 100}% ${(row / 3) * 100}%`,
        boxShadow: ring ? `0 0 0 4px ${ring}` : undefined,
      }}
    />
  );
}

/** Vertically-centered shell for the focused battle states. */
function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full w-full items-center justify-center px-4 py-10">{children}</div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dropdown                                                           */
/* ------------------------------------------------------------------ */
function ChevronDownIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Dropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <span className="font-display text-[18px] font-semibold text-[#1e1e1e]/60">{label}</span>
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between rounded-full bg-black/[0.02] px-5 py-[15px]"
        >
          <span className="font-display text-[18px] font-normal text-black/40">{value}</span>
          <ChevronDownIcon
            className={`h-5 w-5 shrink-0 text-black/40 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-[20px] bg-white shadow-xl">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full px-5 py-3.5 text-left font-display text-[16px] transition-colors hover:bg-black/5 ${
                  value === opt ? "font-semibold text-[#d9961b]" : "font-normal text-black/70"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Start                                                             */
/* ------------------------------------------------------------------ */
const startStats = [
  { value: "10", label: "Questions" },
  { value: "15s", label: "Per Question" },
  { value: "+50", label: "XP Reward" },
];

function StartScreen({ onFind }: { onFind: () => void }) {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [difficulty, setDifficulty] = useState(DIFFICULTIES[0]);

  return (
   
      <div className="flex w-full lg:w-[446px] flex-col items-center gap-6 mx-auto">
        <Image
          src="/images/battle-icon.png"
          alt=""
          width={158}
          height={153}
          className="h-[134px] w-[137px] object-contain lg:h-[153px] lg:w-[158px]"
        />
        <div className="flex w-full flex-col items-center gap-5 lg:gap-[35px]">
          <div className="flex flex-col items-center gap-3.5 text-center">
            <h1 className="font-display text-[33px] font-semibold leading-[38px] text-ink lg:text-[48px] lg:leading-[43px]">
              Quick Battle
            </h1>
            <p className="font-display text-[16px] font-medium text-ink/60 lg:text-[18px]">
              1v1 live quiz · 10 questions · 15s each
            </p>
          </div>
          <div className="flex w-full gap-3">
            {startStats.map((s) => (
              <div
                key={s.label}
                className="flex h-[74px] flex-1 flex-col items-center justify-center rounded-[14px] border border-gold/[0.38] bg-[#fff9eb]/[0.32] lg:h-[83px] lg:w-[140px] lg:flex-none lg:rounded-2xl"
              >
                <span className="font-display text-[28px] font-semibold text-[#d9961b] lg:text-[32px]">
                  {s.value}
                </span>
                <span className="font-display text-[14px] font-medium text-black/60">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* dropdowns */}
        <div className="flex w-full flex-col gap-4">
          <Dropdown
            label="Category"
            options={CATEGORIES}
            value={category}
            onChange={setCategory}
          />
          <Dropdown
            label="Difficulty"
            options={DIFFICULTIES}
            value={difficulty}
            onChange={setDifficulty}
          />
        </div>

        <button
          onClick={onFind}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-[#cf9b09] bg-gold py-[17px] font-display text-[18px] font-semibold text-ink lg:w-[403px]"
        >
          <BoltIcon className="h-5 w-5" />
          Find Battle
        </button>
      </div>
  
  );
}

/* ------------------------------------------------------------------ */
/*  Searching                                                         */
/* ------------------------------------------------------------------ */
function SearchingScreen() {
  return (
    <Centered>
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative h-[120px] w-[120px] lg:h-[160px] lg:w-[160px]">
          <span
            className="absolute inset-0 animate-spin rounded-full border-[6px] border-[#F2EBE0] border-t-[#FD9A0E]"
            style={{ animationDuration: "1.2s" }}
          />
          <Image
            src="/images/battle-search.png"
            alt=""
            width={160}
            height={160}
            className="h-full w-full object-contain p-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-[28px] font-semibold leading-tight text-ink lg:text-[42px]">
            Finding Opponent...
          </h1>
          <p className="font-display text-[16px] font-medium text-ink/60 lg:text-[18px]">
            Matching you with a player of similar skill
          </p>
        </div>
      </div>
    </Centered>
  );
}

/* ------------------------------------------------------------------ */
/*  Opponent found                                                    */
/* ------------------------------------------------------------------ */
function FoundScreen({ progress }: { progress: number }) {
  return (
    <Centered>
      <div className="flex w-full max-w-[900px] flex-col items-center gap-7 lg:gap-9">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-display text-[28px] font-semibold leading-tight text-ink lg:text-[42px]">
            Opponent Found!
          </h1>
          <p className="font-display text-[16px] font-medium text-ink/60 lg:text-[18px]">
            Get ready to battle!
          </p>
        </div>

        <div className="flex w-full items-center justify-between">
          <PlayerStat p={ME} />
          <Image
            src="/images/battle-vs.svg"
            alt="VS"
            width={252}
            height={252}
            className="h-[80px] w-[80px] object-contain lg:h-[200px] lg:w-[200px]"
          />
          <PlayerStat p={OPP} />
        </div>

        <div className="flex w-full max-w-[520px] flex-col items-center gap-[28px]">
          <span className="font-display text-[18px] font-semibold text-ink lg:text-[22px]">
            Starting in
          </span>
          <div className="h-[28px] relative w-full rounded-full bg-gradient-to-b from-[#97918B7A] to-[#312F2D00] p-[4px] shadow-[0px_1px_15px_0px_#FCC11A47,inset_0px_4px_4px_0px_#00000040] border border-[#97918B7A]">
  <div className="h-[20px] w-full overflow-hidden rounded-full bg-stone/15">
    <div
      className="relative h-full rounded-full bg-gradient-to-b from-[#fcc11a] to-[#DB9A0D] transition-all duration-200"
      style={{ width: `${progress}%` }}
    >
      <div
        className="absolute inset-0 z-10 rounded-full"
        style={{ backgroundImage: "url('/images/battleLoading.png')", backgroundRepeat: "repeat-x", backgroundSize: "auto 100%" }}
      />
      
      </div>
  </div>

  <span
    className="absolute -top-10 -translate-x-1/2 rounded bg-gold px-1.5 py-0.5 font-display text-[11px] font-semibold text-ink"
    style={{ left: `${progress}%` }}
  >
    {progress}%
  </span>
</div>
        </div>
      </div>
    </Centered>
  );
}

function PlayerStat({ p }: { p: typeof ME }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center lg:gap-3">
      <Avatar cell={p.cell} className="h-[72px] w-[72px] lg:h-[120px] lg:w-[120px]" />
      <div className="flex flex-col gap-0.5 lg:gap-1">
        <span className="font-display text-[16px] font-semibold text-ink/80 lg:text-[28px]">
          {p.name}
        </span>
        <span className="font-display text-[13px] font-medium text-black/70 lg:text-[18px]">
          Level: <span className="text-gold-deep">{p.level}</span>
        </span>
        <span className="font-display text-[13px] font-medium text-black/70 lg:text-[18px]">
          Win rate: <span className="text-gold-deep">{p.win}</span>
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Live battle                                                       */
/* ------------------------------------------------------------------ */
const answers = [
  { letter: "A.", text: "Lagos Film Industry", correct: false },
  { letter: "C.", text: "Abuja Film Hub", correct: false },
  { letter: "B.", text: "Nigeria Movie Industry", correct: true },
  { letter: "D.", text: "All of the above", correct: false },
];

function LiveBattle({ onFinish }: { onFinish?: () => void }) {
  return (
    <div className="mx-auto flex w-full flex-col gap-5 px-2 py-6 lg:gap-7">
      <h1 className="text-center font-display text-[28px] font-semibold text-ink lg:text-[42px]">
        Quick Battle
      </h1>

      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-display text-[13px] font-medium text-ink/80 lg:text-[14px]">
          <span className="h-2 w-2 rounded-full bg-win" /> LIVE BATTLE
        </span>
        <span className="font-display text-[14px] font-medium text-ink/80 lg:text-[16px]">Q7/10</span>
      </div>

      {/* players + timer */}
      <div className="flex items-start justify-between">
        <LivePlayer p={ME} score="6" />
        <div className="flex flex-col items-center pt-4 lg:pt-6">
          <div
            className="flex h-[54px] w-[54px] items-center justify-center rounded-full lg:h-[68px] lg:w-[68px]"
            style={{ background: "conic-gradient(#fcc11a 0deg 270deg, #e5e1d8 270deg 360deg)" }}
          >
            <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#fdfbf4] lg:h-[58px] lg:w-[58px]">
              <span className="font-display text-[20px] font-semibold text-ink/70 lg:text-[24px]">
                11
              </span>
            </div>
          </div>
          <span className="mt-1 font-display text-[12px] text-ink/60 lg:text-[14px]">Seconds</span>
        </div>
        <LivePlayer p={OPP} score="4" alignRight />
      </div>

      {/* question */}
      <div className="flex flex-col gap-2.5 rounded-2xl border border-[#fdd053] bg-[#feefc6]/[0.29] px-4 py-[18px] lg:py-[23px]">
        <div className="flex items-center gap-[3px]">
          <span className="rounded-full bg-gold/[0.12] px-2 py-px font-display text-[12px] font-semibold text-burnt/75 lg:text-[13px]">
            Entertainment
          </span>
          <span className="rounded-full bg-burnt/[0.62] px-2 py-px font-display text-[12px] font-semibold text-white lg:text-[13px]">
            Medium
          </span>
        </div>
        <p className="font-display text-[18px] font-semibold text-[#656361] lg:text-[22px]">
          Which Nigerian film industry is nicknamed &quot;Nollywood&quot;?
        </p>
      </div>

      {/* answers */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:gap-y-[17px]">
        {answers.map((a) => (
          <button
            key={a.letter}
            onClick={onFinish}
            className={`flex h-[52px] items-center gap-1.5 rounded-full border px-5 font-display text-[15px] font-semibold lg:h-[58px] lg:px-6 lg:text-[16px] ${
              a.correct
                ? "border-win/[0.52] bg-[#d4edd8] text-win"
                : "border-transparent bg-[#535250]/[0.06] text-ink"
            }`}
          >
            <span>{a.letter}</span>
            <span>{a.text}</span>
          </button>
        ))}
      </div>

      {/* explanation */}
      <div className="flex flex-col gap-1">
        <span className="font-display text-[15px] font-semibold text-ink/60 lg:text-[16px]">
          Explanation
        </span>
        <p className="font-display text-[15px] font-normal text-ink/90 lg:text-[16px]">
          Nollyword refers to the Nigeria film industry, which is the second largest in the world by
          volume of production
        </p>
      </div>
    </div>
  );
}

function LivePlayer({
  p,
  score,
  alignRight,
}: {
  p: typeof ME;
  score: string;
  alignRight?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-2 lg:gap-3 ${alignRight ? "items-end" : "items-start"}`}>
      <div className={`flex flex-col items-center gap-1.5 lg:gap-2 ${alignRight ? "items-end" : "items-start"}`}>
        <Avatar cell={p.cell} className="h-[64px] w-[64px] lg:h-[100px] lg:w-[100px]" />
        <span className="font-display text-[16px] font-medium text-ink/80 lg:text-[22px]">
          {p.name}
        </span>
      </div>
      <span className="w-full text-center font-display text-[24px] font-bold text-ink lg:text-[32px]">
        {score}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Result overlay                                                    */
/* ------------------------------------------------------------------ */
const RESULTS: Record<
  Outcome,
  {
    banner: string;
    meScore: string;
    oppScore: string;
    rightBar: string;
    meRing: string;
    oppRing: string;
    message: string;
    points: string;
    pointsColor: string;
    primary: { label: string; variant: "gold" | "white"; color?: string };
    secondary: { label: string };
  }
> = {
  win: {
    banner: "/images/battle-win.svg",
    meScore: "8", oppScore: "6", rightBar: "from-[#ffe9a8] to-[#fcc11a]",
    meRing: "#0e9f37", oppRing: "#f44336",
    message: "Congratulations, you answered 8 out of 10 questions correctly. Keep it up!",
    points: "+10 Points", pointsColor: "#e9ad01",
    primary: { label: "Play again", variant: "gold" }, secondary: { label: "Exit to Home" },
  },
  loss: {
    banner: "/images/battle-defeat.png",
    meScore: "6", oppScore: "8", rightBar: "from-[#ff8a6b] to-[#f04a23]",
    meRing: "#f44336", oppRing: "#0e9f37",
    message: "You answered only 3 out of 10 questions correctly. Better luck next time!",
    points: "-10 Points", pointsColor: "#f04a23",
    primary: { label: "Play again", variant: "gold", color: "#f04a23" }, secondary: { label: "Leaderboard" },
  },
  draw: {
    banner: "/images/battle-draw.svg",
    meScore: "8", oppScore: "8", rightBar: "from-[#6fc0f5] to-[#2d8fe0]",
    meRing: "#2d8fe0", oppRing: "#2d8fe0",
    message: "You tied with Oganibe. Excellent Result! Go again, you could win",
    points: "+50 Points", pointsColor: "#2d8fe0",
    primary: { label: "Rematch", variant: "white" }, secondary: { label: "Exit to Home" },
  },
};

function ResultOverlay({
  outcome,
  onPrimary,
  onSecondary,
}: {
  outcome: Outcome;
  onPrimary: () => void;
  onSecondary: () => void;
}) {
  const r = RESULTS[outcome];
  return (
    <div className="fixed inset-0 z-40 flex pl-[378px] flex-col items-center justify-center bg-[#000000DE] px-4">
      <Image
        src={r.banner}
        alt={outcome}
        width={560}
        height={246}
        className="w-full max-w-[560px] object-contain"
        priority
      />

      {/* score bar */}
      <div className="relative -mt-2 w-full max-w-[820px]">
        <div className="flex overflow-hidden rounded-[18px] shadow-xl">
          <div className="flex flex-1 items-center justify-between bg-white px-4 py-4 lg:px-8 lg:py-5">
            <span className="font-display text-[16px] font-medium text-ink/80 lg:text-[20px]">
              {ME.short}
            </span>
            <span className="font-display text-[24px] font-bold text-ink lg:text-[34px]">
              {r.meScore}
            </span>
          </div>
          <div
            className={`flex flex-1 items-center justify-between bg-gradient-to-r px-4 py-4 lg:px-8 lg:py-5 ${r.rightBar}`}
          >
            <span className="font-display text-[24px] font-bold text-white lg:text-[34px]">
              {r.oppScore}
            </span>
            <span className="font-display text-[16px] font-medium text-white lg:text-[20px]">
              {OPP.short}
            </span>
          </div>
        </div>
        {/* avatars overlapping the bar */}
        <Avatar
          cell={ME.cell}
          ring={r.meRing}
          className="absolute -top-7 left-[14%] h-14 w-14 -translate-x-1/2 border-2 border-white"
        />
        <Image
          src="/images/battle-vs.svg"
          alt=""
          width={48}
          height={48}
          className="absolute top-[25%] left-1/2 h-12 w-12 -translate-x-1/2"
        />
        <Avatar
          cell={OPP.cell}
          ring={r.oppRing}
          className="absolute -top-7 right-[14%] h-14 w-14 translate-x-1/2 border-2 border-white"
        />
      </div>

      {/* message */}
      <p className="mt-5 max-w-[640px] text-center font-display text-[16px] font-medium text-white lg:mt-6 lg:text-[20px]">
        {r.message}
      </p>
      <p
        className="mt-2 font-display text-[18px] font-bold lg:text-[20px]"
        style={{ color: r.pointsColor }}
      >
        {r.points}
      </p>

      {/* actions */}
      <div className="mt-5 flex items-center gap-3 lg:mt-6 lg:gap-4">
        {r.primary.variant === "gold" ? (
          <button
            onClick={onPrimary}
            className="rounded-full px-8 py-3 font-display text-[16px] font-semibold text-ink lg:px-12 lg:py-3.5 lg:text-[18px]"
            style={{
              background: r.primary.color ?? "#fcc11a",
              color: r.primary.color ? "#fff" : undefined,
            }}
          >
            {r.primary.label}
          </button>
        ) : (
          <button
            onClick={onPrimary}
            className="rounded-full bg-white px-8 py-3 font-display text-[16px] font-semibold text-ink lg:px-12 lg:py-3.5 lg:text-[18px]"
          >
            {r.primary.label}
          </button>
        )}
        <button
          onClick={onSecondary}
          className="rounded-full bg-white px-8 py-3 font-display text-[16px] font-semibold text-ink lg:px-12 lg:py-3.5 lg:text-[18px]"
        >
          {r.secondary.label}
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */
function BoltIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13 2 4.5 13H11l-1 9 8.5-11H12z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function BattlePage() {
  useSetPageHeader({ hidden: true });
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("start");
  const [outcome, setOutcome] = useState<Outcome>("draw");
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const p = q.get("phase");
    const o = q.get("result");
    if (o && ["win", "loss", "draw"].includes(o)) setOutcome(o as Outcome);
    if (p && ["start", "searching", "found", "live", "result"].includes(p)) setPhase(p as Phase);
  }, []);

  useEffect(() => {
    if (phase !== "searching") return;
    const t = setTimeout(() => setPhase("found"), 1800);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "found") return;
    setProgress(0);
    const id = setInterval(() => {
      setProgress((v) => {
        if (v >= 100) { clearInterval(id); setPhase("live"); return 100; }
        return v + 5;
      });
    }, 120);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <div className="">
      {phase === "start" && <StartScreen onFind={() => setPhase("searching")} />}
      {phase === "searching" && <SearchingScreen />}
      {phase === "found" && <FoundScreen progress={progress} />}
      {(phase === "live" || phase === "result") && (
        <LiveBattle onFinish={() => setPhase("result")} />
      )}
      {phase === "result" && (
        <ResultOverlay
          outcome={outcome}
          onPrimary={() => setPhase("start")}
          onSecondary={() =>
            router.push(outcome === "loss" ? "/dashboard/leaderboard" : "/dashboard/home")
          }
        />
      )}
    </div>
  );
}
