"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSetPageHeader } from "../../context/PageHeaderContext";
import { Button } from "@/components/Button";

/* ------------------------------------------------------------------ */
/*  Shared bits                                                       */
/* ------------------------------------------------------------------ */
type Phase = "start" | "searching" | "found" | "live" | "result";
type Outcome = "win" | "loss" | "draw";

const ME = { name: "emgee (you)", short: "emgee", level: 14, win: "72%", cell: 4 };
const OPP = { name: "Oganibi", short: "Oganibe", level: 12, win: "65%", cell: 0 };

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
/*  Start                                                             */
/* ------------------------------------------------------------------ */
const startStats = [
  { value: "10", label: "Questions" },
  { value: "15s", label: "Per Question" },
  { value: "+50", label: "XP Reward" },
];

function StartScreen({ onFind }: { onFind: () => void }) {
  return (
    <Centered>
      <div className="flex w-[446px] max-w-full flex-col items-center gap-6">
        <Image src="/images/battle-icon.png" alt="" width={158} height={153} className="h-[153px] w-[158px] object-contain" />
        <div className="flex flex-col items-center gap-[35px]">
          <div className="flex flex-col items-center gap-3.5 text-center">
            <h1 className="font-display text-[48px] font-semibold leading-[43px] text-ink">Quick Battle</h1>
            <p className="font-display text-[18px] font-medium text-ink/60">
              1v1 live quiz · 10 questions · 15s each
            </p>
          </div>
          <div className="flex gap-3.5">
            {startStats.map((s) => (
              <div
                key={s.label}
                className="flex h-[83px] w-[140px] flex-col items-center justify-center rounded-2xl border border-gold/[0.38] bg-[#fff9eb]/[0.32]"
              >
                <span className="font-display text-[32px] font-semibold text-[#d9961b]">{s.value}</span>
                <span className="font-display text-[14px] font-medium text-black/60">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <Button variant="gold" className="w-[403px] max-w-full" onClick={onFind}>
          <BoltIcon className="h-5 w-5" />
          Find Battle
        </Button>
      </div>
    </Centered>
  );
}

/* ------------------------------------------------------------------ */
/*  Searching                                                         */
/* ------------------------------------------------------------------ */
function SearchingScreen() {
  return (
    <Centered>
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative h-[160px] w-[160px]">
          <span className="absolute inset-0 animate-spin rounded-full border-[6px] border-gold/30 border-t-gold" style={{ animationDuration: "1.2s" }} />
          <Image src="/images/battle-search.png" alt="" width={160} height={160} className="h-full w-full object-contain p-2" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-[42px] font-semibold leading-tight text-ink">Finding Opponent...</h1>
          <p className="font-display text-[18px] font-medium text-ink/60">Matching you with a player of similar skill</p>
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
      <div className="flex w-full max-w-[900px] flex-col items-center gap-9">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="font-display text-[42px] font-semibold leading-tight text-ink">Opponent Found!</h1>
          <p className="font-display text-[18px] font-medium text-ink/60">Get ready to battle!</p>
        </div>

        <div className="flex w-full items-center justify-between">
          <PlayerStat p={ME} />
          <Image src="/images/battle-vs.png" alt="VS" width={252} height={252} className="h-[200px] w-[200px] object-contain" />
          <PlayerStat p={OPP} />
        </div>

        <div className="flex w-full max-w-[520px] flex-col items-center gap-3">
          <span className="font-display text-[20px] font-semibold text-ink">Starting in</span>
          <div className="relative w-full">
            <div className="h-[18px] w-full overflow-hidden rounded-full bg-stone/15">
              <div className="h-full rounded-full bg-gradient-to-r from-[#ffdf83] to-[#fcc11a] transition-all duration-200" style={{ width: `${progress}%` }} />
            </div>
            <span
              className="absolute -top-6 -translate-x-1/2 rounded bg-gold px-1.5 py-0.5 font-display text-[11px] font-semibold text-ink"
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
    <div className="flex flex-col items-center gap-3 text-center">
      <Avatar cell={p.cell} className="h-[120px] w-[120px]" />
      <div className="flex flex-col gap-1">
        <span className="font-display text-[28px] font-semibold text-ink/80">{p.name}</span>
        <span className="font-display text-[18px] font-medium text-black/70">
          Level: <span className="text-gold-deep">{p.level}</span>
        </span>
        <span className="font-display text-[18px] font-medium text-black/70">
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
    <div className="mx-auto flex w-full flex-col gap-7 px-2 py-6">
      <h1 className="text-center font-display text-[42px] font-semibold text-ink">Quick Battle</h1>

      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-display text-[14px] font-medium text-ink/80">
          <span className="h-2 w-2 rounded-full bg-win" /> LIVE BATTLE
        </span>
        <span className="font-display text-[16px] font-medium text-ink/80">Q7/10</span>
      </div>

      {/* players + timer */}
      <div className="flex items-start justify-between">
        <LivePlayer p={ME} score="6" />
        <div className="flex flex-col items-center pt-6">
          <div
            className="flex h-[68px] w-[68px] items-center justify-center rounded-full"
            style={{ background: "conic-gradient(#fcc11a 0deg 270deg, #e5e1d8 270deg 360deg)" }}
          >
            <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#fdfbf4]">
              <span className="font-display text-[24px] font-semibold text-ink/70">11</span>
            </div>
          </div>
          <span className="mt-1 font-display text-[14px] text-ink/60">Seconds</span>
        </div>
        <LivePlayer p={OPP} score="4" alignRight />
      </div>

      {/* question */}
      <div className="flex flex-col gap-2.5 rounded-2xl border border-[#fdd053] bg-[#feefc6]/[0.29] px-4 py-[23px]">
        <div className="flex items-center gap-[3px]">
          <span className="rounded-full bg-gold/[0.12] px-2 py-px font-display text-[13px] font-semibold text-burnt/75">Entertainment</span>
          <span className="rounded-full bg-burnt/[0.62] px-2 py-px font-display text-[13px] font-semibold text-white">Medium</span>
        </div>
        <p className="font-display text-[22px] font-semibold text-[#656361]">
          Which Nigerian film industry is nicknamed &quot;Nollywood&quot;?
        </p>
      </div>

      {/* answers */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-[17px] sm:grid-cols-2">
        {answers.map((a) => (
          <button
            key={a.letter}
            onClick={onFinish}
            className={`flex h-[58px] items-center gap-1.5 rounded-full border px-6 font-display text-[16px] font-semibold ${
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
        <span className="font-display text-[16px] font-semibold text-ink/60">Explanation</span>
        <p className="font-display text-[16px] font-normal text-ink/90">
          Nollyword refers to the Nigeria film industry, which is the second largest in the world by volume of
          production
        </p>
      </div>
    </div>
  );
}

function LivePlayer({ p, score, alignRight }: { p: typeof ME; score: string; alignRight?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 ${alignRight ? "items-end" : "items-start"}`}>
      <div className={`flex flex-col items-center gap-2 ${alignRight ? "items-end" : "items-start"}`}>
        <Avatar cell={p.cell} className="h-[100px] w-[100px]" />
        <span className="font-display text-[22px] font-medium text-ink/80">{p.name}</span>
      </div>
      <span className={`w-full font-display text-[32px] font-bold text-ink ${alignRight ? "text-center" : "text-center"}`}>
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
    banner: "/images/battle-victory.png",
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
    banner: "/images/battle-draw.png",
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
    <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/55 px-4">
      <Image src={r.banner} alt={outcome} width={560} height={246} className="w-[560px] max-w-full object-contain" priority />

      {/* score bar */}
      <div className="relative -mt-2 w-full max-w-[820px]">
        <div className="flex overflow-hidden rounded-[18px] shadow-xl">
          <div className="flex flex-1 items-center justify-between bg-white px-8 py-5">
            <span className="font-display text-[20px] font-medium text-ink/80">{ME.short}</span>
            <span className="font-display text-[34px] font-bold text-ink">{r.meScore}</span>
          </div>
          <div className={`flex flex-1 items-center justify-between bg-gradient-to-r px-8 py-5 ${r.rightBar}`}>
            <span className="font-display text-[34px] font-bold text-white">{r.oppScore}</span>
            <span className="font-display text-[20px] font-medium text-white">{OPP.short}</span>
          </div>
        </div>
        {/* avatars overlapping the bar */}
        <Avatar cell={ME.cell} ring={r.meRing} className="absolute -top-7 left-[14%] h-14 w-14 -translate-x-1/2 border-2 border-white" />
        <Image src="/images/battle-vs.png" alt="" width={48} height={48} className="absolute -top-2 left-1/2 h-12 w-12 -translate-x-1/2" />
        <Avatar cell={OPP.cell} ring={r.oppRing} className="absolute -top-7 right-[14%] h-14 w-14 translate-x-1/2 border-2 border-white" />
      </div>

      {/* message */}
      <p className="mt-6 max-w-[640px] text-center font-display text-[20px] font-medium text-white">{r.message}</p>
      <p className="mt-2 font-display text-[20px] font-bold" style={{ color: r.pointsColor }}>{r.points}</p>

      {/* actions */}
      <div className="mt-6 flex items-center gap-4">
        {r.primary.variant === "gold" ? (
          <button
            onClick={onPrimary}
            className="rounded-full px-12 py-3.5 font-display text-[18px] font-semibold text-ink"
            style={{ background: r.primary.color ?? "#fcc11a", color: r.primary.color ? "#fff" : undefined }}
          >
            {r.primary.label}
          </button>
        ) : (
          <button onClick={onPrimary} className="rounded-full bg-white px-12 py-3.5 font-display text-[18px] font-semibold text-ink">
            {r.primary.label}
          </button>
        )}
        <button onClick={onSecondary} className="rounded-full bg-white px-12 py-3.5 font-display text-[18px] font-semibold text-ink">
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
  const [outcome, setOutcome] = useState<Outcome>("win");
  const [progress, setProgress] = useState(0);

  // deep-link a phase/outcome for previewing, e.g. ?phase=result&result=draw
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const p = q.get("phase");
    const o = q.get("result");
    if (o && ["win", "loss", "draw"].includes(o)) setOutcome(o as Outcome);
    if (p && ["start", "searching", "found", "live", "result"].includes(p)) setPhase(p as Phase);
  }, []);

  // searching -> found
  useEffect(() => {
    if (phase !== "searching") return;
    const t = setTimeout(() => setPhase("found"), 1800);
    return () => clearTimeout(t);
  }, [phase]);

  // found progress -> live
  useEffect(() => {
    if (phase !== "found") return;
    setProgress(0);
    const id = setInterval(() => {
      setProgress((v) => {
        if (v >= 100) {
          clearInterval(id);
          setPhase("live");
          return 100;
        }
        return v + 5;
      });
    }, 120);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <div className="relative min-h-full w-full">
      {phase === "start" && <StartScreen onFind={() => setPhase("searching")} />}
      {phase === "searching" && <SearchingScreen />}
      {phase === "found" && <FoundScreen progress={progress} />}
      {(phase === "live" || phase === "result") && <LiveBattle onFinish={() => setPhase("result")} />}
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
