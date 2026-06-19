"use client";

import { useState } from "react";
import { useSetPageHeader } from "../../context/PageHeaderContext";

/* ------------------------------------------------------------------ */
/*  Types & constants                                                  */
/* ------------------------------------------------------------------ */
type Phase = "setup" | "question" | "revealed" | "complete";
type Mode = "timed" | "flashcard" | "mock";
type Difficulty = "Easy" | "Medium" | "Hard";

const CATEGORIES = [
  "Sports",
  "Religious",
  "Entertainment",
  "Nigeria Politics",
  "History",
  "Mathematics",
  "Science & Technology",
];

const DIFFICULTIES: Difficulty[] = ["Easy", "Medium", "Hard"];

const SAMPLE_QUESTION = {
  category: "Entertainment",
  difficulty: "Novice",
  text: "Which Nigerian film industry is nicknamed 'Nollywood'?",
  options: [
    "Lagos Film Industry",
    "Nigeria Movie Industry",
    "Abuja Film Hub",
    "All of the above",
  ],
  correctIndex: 1,
  explanation:
    "Nollywood refers to the Nigeria film industry, which is the second largest in the world by volume of production.",
};

/* ------------------------------------------------------------------ */
/*  Setup screen                                                       */
/* ------------------------------------------------------------------ */
const MODES: { key: Mode; label: string; desc: string }[] = [
  { key: "timed", label: "Timed", desc: "Test yourself on the clock" },
  { key: "flashcard", label: "Flashcard", desc: "Learn at your pace" },
  { key: "mock", label: "Mock Exam", desc: "Simulate a real exam" },
];

function ModeIcon() {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20">
      <span className="h-3 w-3 rounded-full bg-gold" />
    </span>
  );
}

function SetupScreen({
  onStart,
}: {
  onStart: (cat: string, mode: Mode, diff: Difficulty) => void;
}) {
  const [cat, setCat] = useState("Sports");
  const [mode, setMode] = useState<Mode>("timed");
  const [diff, setDiff] = useState<Difficulty>("Easy");
  const [diffOpen, setDiffOpen] = useState(false);

  return (
    <div className="flex min-h-full w-full justify-center py-6">
      <div className="flex w-full  flex-col gap-6 rounded-[20px] bg-white p-6 shadow-sm">
        {/* Category */}
        <div className="flex flex-col gap-3">
          <span className="font-display text-[13px] font-semibold text-black/60">
            Category
          </span>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3 py-1.5 font-display text-[13px] font-medium transition-colors ${
                  cat === c
                    ? "border border-gold-deep/50 bg-gold text-[#615e53]"
                    : "bg-gold/[0.12] text-ink/70 hover:bg-gold/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Mode */}
        <div className="flex flex-col gap-3">
          <span className="font-display text-[13px] font-semibold text-black/60">
            Mode
          </span>
          <div className="flex flex-col gap-2">
            {MODES.map((m) => (
              <button
                key={m.key}
                onClick={() => setMode(m.key)}
                className={`flex items-center justify-between rounded-[14px] border px-4 py-3 text-left transition-colors ${
                  mode === m.key
                    ? "border-gold/50 bg-gold/[0.08]"
                    : "border-black/[0.08] bg-[#f8f8f5] hover:border-gold/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <ModeIcon />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display text-[14px] font-semibold text-black/80">
                      {m.label}
                    </span>
                    <span className="font-display text-[12px] font-normal text-black/50">
                      {m.desc}
                    </span>
                  </div>
                </div>
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                    mode === m.key
                      ? "border-gold bg-gold"
                      : "border-black/20 bg-white"
                  }`}
                >
                  {mode === m.key && (
                    <span className="h-2 w-2 rounded-full bg-white" />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="flex flex-col gap-3">
          <span className="font-display text-[13px] font-semibold text-black/60">
            Difficulty
          </span>
          <div className="relative">
            <button
              onClick={() => setDiffOpen((o) => !o)}
              className="flex w-full items-center justify-between rounded-[12px] border border-black/[0.10] bg-[#f8f8f5] px-4 py-3 font-display text-[14px] font-medium text-black/80"
            >
              {diff}
              <ChevronDown />
            </button>
            {diffOpen && (
              <div className="absolute left-0 right-0 top-full z-10 mt-1 overflow-hidden rounded-[12px] border border-black/[0.10] bg-white shadow-lg">
                {DIFFICULTIES.map((d) => (
                  <button
                    key={d}
                    onClick={() => {
                      setDiff(d);
                      setDiffOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left font-display text-[14px] hover:bg-gold/10 ${
                      diff === d ? "font-semibold text-gold-deep" : "text-black/70"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onStart(cat, mode, diff)}
          className="mt-1 w-full rounded-full border border-gold-deep/60 bg-gold py-3 font-display text-[16px] font-semibold text-[#615e53]"
        >
          Start Practice
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Question screen                                                    */
/* ------------------------------------------------------------------ */
function QuestionScreen({
  qIndex,
  total,
  onAnswer,
}: {
  qIndex: number;
  total: number;
  onAnswer: (idx: number) => void;
}) {
  const q = SAMPLE_QUESTION;
  const letters = ["A", "B", "C", "D"];

  return (
    <div className="flex min-h-full w-full flex-col gap-5">
      {/* progress bar */}
      <div className="h-1 w-full overflow-hidden rounded-full bg-black/[0.06]">
        <div
          className="h-full rounded-full bg-gold"
          style={{ width: `${((qIndex + 1) / total) * 100}%` }}
        />
      </div>

      {/* tags */}
      <div className="flex items-center gap-2">
        <span className="rounded-full border border-gold-deep/50 bg-gold px-3 py-1 font-display text-[12px] font-semibold text-[#615e53]">
          {q.category}
        </span>
        <span className="rounded-full bg-black/[0.07] px-3 py-1 font-display text-[12px] font-semibold text-black/60">
          {q.difficulty}
        </span>
      </div>

      {/* question card */}
      <div className="flex flex-col gap-5 rounded-[20px] bg-white p-6 shadow-sm">
        <p className="font-display text-[18px] font-semibold leading-[26px] text-black/80">
          {q.text}
        </p>
        <div className="flex flex-col gap-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onAnswer(i)}
              className="flex items-center gap-3 rounded-[14px] border border-black/[0.08] bg-[#f8f8f5] px-4 py-3 text-left transition-colors hover:border-gold/40 hover:bg-gold/[0.06]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black/[0.06] font-display text-[13px] font-bold text-black/60">
                {letters[i]}
              </span>
              <span className="font-display text-[14px] font-medium text-black/80">
                {opt}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Revealed screen                                                    */
/* ------------------------------------------------------------------ */
function RevealedScreen({
  selectedIdx,
  onNext,
}: {
  selectedIdx: number;
  onNext: () => void;
}) {
  const q = SAMPLE_QUESTION;
  const letters = ["A", "B", "C", "D"];

  return (
    <div className="flex min-h-full w-full flex-col gap-5">
      {/* progress bar (full for this question) */}
      <div className="h-1 w-full overflow-hidden rounded-full bg-black/[0.06]">
        <div className="h-full rounded-full bg-gold" style={{ width: "20%" }} />
      </div>

      {/* tags */}
      <div className="flex items-center gap-2">
        <span className="rounded-full border border-gold-deep/50 bg-gold px-3 py-1 font-display text-[12px] font-semibold text-[#615e53]">
          {q.category}
        </span>
        <span className="rounded-full bg-black/[0.07] px-3 py-1 font-display text-[12px] font-semibold text-black/60">
          {q.difficulty}
        </span>
      </div>

      {/* question card */}
      <div className="flex flex-col gap-5 rounded-[20px] bg-white p-6 shadow-sm">
        <p className="font-display text-[18px] font-semibold leading-[26px] text-black/80">
          {q.text}
        </p>

        <div className="flex flex-col gap-3">
          {q.options.map((opt, i) => {
            const isCorrect = i === q.correctIndex;
            const isWrong = i === selectedIdx && !isCorrect;

            return (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-[14px] border px-4 py-3 ${
                  isCorrect
                    ? "border-win/40 bg-win/[0.08]"
                    : isWrong
                    ? "border-loss/30 bg-loss/[0.06]"
                    : "border-black/[0.08] bg-[#f8f8f5]"
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-[13px] font-bold ${
                    isCorrect
                      ? "bg-win text-white"
                      : isWrong
                      ? "bg-loss/20 text-loss"
                      : "bg-black/[0.06] text-black/60"
                  }`}
                >
                  {letters[i]}
                </span>
                <span
                  className={`font-display text-[14px] font-medium ${
                    isCorrect
                      ? "text-win"
                      : isWrong
                      ? "text-loss"
                      : "text-black/60"
                  }`}
                >
                  {opt}
                </span>
              </div>
            );
          })}
        </div>

        {/* explanation */}
        <div className="flex flex-col gap-1.5 rounded-[14px] bg-[#f8f8f5] p-4">
          <span className="font-display text-[12px] font-semibold uppercase tracking-wide text-black/50">
            Explanation
          </span>
          <p className="font-display text-[14px] font-normal leading-[21px] text-black/70">
            {q.explanation}
          </p>
        </div>

        <button
          onClick={onNext}
          className="mt-1 w-full rounded-full border border-gold-deep/60 bg-gold py-3 font-display text-[16px] font-semibold text-[#615e53]"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Session complete screen                                            */
/* ------------------------------------------------------------------ */
const SESSION_STATS = [
  { count: 1, label: "Correct", color: "text-win", dot: "bg-win" },
  { count: 4, label: "Wrong", color: "text-loss", dot: "bg-loss" },
  { count: 10, label: "Skipped", color: "text-burnt", dot: "bg-burnt" },
];

function CompleteScreen({ onRestart, onSettings }: { onRestart: () => void; onSettings: () => void }) {
  return (
    <div className="flex min-h-full w-full items-center justify-center py-10">
      <div className="flex w-full max-w-[400px] flex-col items-center gap-8">
        {/* accuracy badge */}
        <div className="relative flex h-[160px] w-[160px] items-center justify-center rounded-full border-[6px] border-gold bg-gradient-to-b from-[#ffd23f] to-[#f5a623] shadow-[0_8px_32px_rgba(245,166,35,0.4)]">
          <div className="flex flex-col items-center">
            <span className="font-display text-[40px] font-bold leading-none text-white">
              50%
            </span>
            <span className="font-display text-[13px] font-medium text-white/80">
              Accuracy
            </span>
          </div>
          {/* medal ribbon */}
          <div className="absolute -bottom-3 flex h-7 w-7 items-center justify-center rounded-full bg-[#cd3c10] font-display text-[14px] font-bold text-white shadow">
            7
          </div>
        </div>

        {/* stats */}
        <div className="flex w-full items-center justify-center gap-6">
          {SESSION_STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
              <span className={`font-display text-[14px] font-bold ${s.color}`}>
                {s.count}
              </span>
              <span className="font-display text-[13px] font-normal text-black/50">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* actions */}
        <div className="flex w-full gap-3">
          <button
            onClick={onRestart}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold-deep/60 bg-gold py-3 font-display text-[16px] font-semibold text-[#615e53]"
          >
            <PlayIcon />
            Play Again
          </button>
          <button
            onClick={onSettings}
            className="flex-1 rounded-full border border-black/[0.12] bg-white py-3 font-display text-[16px] font-semibold text-black/70 hover:bg-black/[0.03]"
          >
            Change Settings
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */
function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-black/40">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M5 3l14 9-14 9V3z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page root                                                          */
/* ------------------------------------------------------------------ */
export default function PracticePage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [qIndex, setQIndex] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const TOTAL = 5;

  /* Header changes per phase */
  useSetPageHeader(
    phase === "setup"
      ? { title: "Practice Mode", subtitle: "Go ahead — learn it! and sharpen your knowledge" }
      : phase === "complete"
      ? { title: "Session Complete", subtitle: "Great effort! Review your performance below" }
      : { title: "Practice", subtitle: "Answer each question to the best of your ability" }
  );

  function handleStart(_cat: string, _mode: Mode, _diff: Difficulty) {
    setQIndex(0);
    setSelectedIdx(null);
    setPhase("question");
  }

  function handleAnswer(idx: number) {
    setSelectedIdx(idx);
    setPhase("revealed");
  }

  function handleNext() {
    const next = qIndex + 1;
    if (next >= TOTAL) {
      setPhase("complete");
    } else {
      setQIndex(next);
      setSelectedIdx(null);
      setPhase("question");
    }
  }

  return (
    <div className="mx-auto flex w-full  flex-col gap-0 pb-10">
      {phase === "setup" && <SetupScreen onStart={handleStart} />}
      {phase === "question" && (
        <QuestionScreen qIndex={qIndex} total={TOTAL} onAnswer={handleAnswer} />
      )}
      {phase === "revealed" && selectedIdx !== null && (
        <RevealedScreen selectedIdx={selectedIdx} onNext={handleNext} />
      )}
      {phase === "complete" && (
        <CompleteScreen
          onRestart={() => {
            setPhase("setup");
            setQIndex(0);
            setSelectedIdx(null);
          }}
          onSettings={() => setPhase("setup")}
        />
      )}
    </div>
  );
}
