"use client";

import { ReactNode, useEffect, useState } from "react";
import { useSetPageHeader } from "../../context/PageHeaderContext";
import { useGetPracticeQuestionsQuery } from "@/app/hooks/practice/practiceQuery";
import { ListPracticeQuestionsParams, PracticeQuestion } from "@/app/lib/types/practice";
import { Button } from "@/components/Button";
import { ClockIcon, FlashCardIcon, MockExamIcon, TickIcon, WrongIcon } from "./icons";

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


/* ------------------------------------------------------------------ */
/*  Setup screen                                                       */
/* ------------------------------------------------------------------ */
const MODES: { key: Mode; label: string; desc: string; icon: ReactNode }[] = [
  { key: "timed", label: "Timed", desc: "Test yourself on the clock", icon: <ClockIcon /> },
  { key: "flashcard", label: "Flashcard", desc: "Learn at your pace", icon: <FlashCardIcon /> },
  { key: "mock", label: "Mock Exam", desc: "Simulate a real exam", icon: <MockExamIcon /> },
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
  isFetching,
}: {
  onStart: (cat: string, mode: Mode, diff: Difficulty) => void;
  isFetching?: boolean;
}) {
  const [cat, setCat] = useState("Sports");
  const [mode, setMode] = useState<Mode>("timed");
  const [diff, setDiff] = useState<Difficulty>("Easy");
  const [diffOpen, setDiffOpen] = useState(false);

  return (
    <div className="flex min-h-full w-full justify-center py-6">
      <div className="flex w-full  flex-col gap-6  shadow-sm">
        {/* Category */}
        <div className="flex flex-col gap-3 bg-[#F5F4F1] p-6 rounded-[20px]">
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
                    : "bg-[#E7E6E2] text-ink/70 hover:bg-gold/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Mode */}
        <div className="flex flex-col gap-3 p-6 bg-[#F5F4F1] rounded-[20px]">
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
                  <div className="flex justify-center items-center h-10 w-10 bg-[#F6EED9] rounded-full">
 {m.icon}
                  </div>
                 
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display text-[14px] font-semibold text-black/80">
                      {m.label}
                    </span>
                    <span className="font-display text-[12px] font-normal text-black/50">
                      {m.desc}
                    </span>
                  </div>
                </div>
               
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty */}
        <div className="flex flex-col gap-3 bg-[#F5F4F1] rounded-[20px] p-6">
          <span className="font-display text-[13px] font-semibold text-black/60">
            Difficulty
          </span>
          <div className="relative">
            <button
              onClick={() => setDiffOpen((o) => !o)}
              className="flex w-full items-center justify-between rounded-[12px] border border-[#E9AD0191] bg-[#FCC11A1C] px-4 py-3 font-display text-[14px] font-medium text-black/80"
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

         <Button loading={isFetching} variant="gold" className="w-full" type='button' onClick={() => onStart(cat, mode, diff)}>
                      Start Practice
                    </Button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Question screen                                                    */
/* ------------------------------------------------------------------ */
function QuestionScreen({
  question,
  qIndex,
  total,
  onAnswer,
}: {
  question: PracticeQuestion;
  qIndex: number;
  total: number;
  onAnswer: (idx: number) => void;
}) {
  const options = [question.option_a, question.option_b, question.option_c, question.option_d];
  const letters = ["A", "B", "C", "D"];

  return (
    <div className="flex min-h-full w-full flex-col gap-5">
      {/* progress bar */}
      <div className="h-[11px] w-full overflow-hidden rounded-full bg-black/[0.06]">
        <div
          className="h-full rounded-full bg-gold"
          style={{ width: `${((qIndex + 1) / total) * 100}%` }}
        />
      </div>

      {/* tags */}
       <div className="flex flex-col  gap-2 border border-[#FDD053] bg-[#FEEFC64A] rounded-[16px] py-6 px-4">
        <div>
        <span className="rounded-full bg-[#FCC11A1F] px-3 py-1 font-display text-[12px] font-semibold text-[#D1701CBD] capitalize">
          {question.category}
        </span>
        <span className="rounded-full bg-[#D1701CBD] px-3 py-1 font-display text-[12px] font-semibold text-white capitalize">
          {question.difficulty}
        </span>
        </div>
        <p className="font-display text-[18px] font-semibold leading-[26px] text-[#656361]">
          {question.question_text}
        </p>
      </div>

      {/* question card */}
      <div className="flex flex-col gap-5 rounded-[20px] bg-white p-6 shadow-sm">
      
        <div className="flex flex-col gap-3">
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onAnswer(i)}
              className="flex items-center gap-3 rounded-full bg-[#f8f8f5] px-4 py-3 text-left transition-colors hover:border-gold/40 hover:bg-gold/[0.06]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full  font-display text-[13px] font-bold text-black/60">
                {`${letters[i]}.`}
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
  question,
  selectedIdx,
  onNext,
}: {
  question: PracticeQuestion;
  selectedIdx: number;
  onNext: () => void;
}) {
  const options = [question.option_a, question.option_b, question.option_c, question.option_d];
  const letters = ["A", "B", "C", "D"];
  const correctIdx = ["a", "b", "c", "d"].indexOf(question.correct_option);

  return (
    <div className="flex min-h-full w-full flex-col gap-5">
      {/* progress bar */}
      <div className="h-[11px] w-full overflow-hidden rounded-full bg-black/[0.06]">
        <div className="h-full rounded-full bg-gold" style={{ width: "20%" }} />
      </div>

      {/* tags */}
      <div className="flex flex-col  gap-2 border border-[#FDD053] bg-[#FEEFC64A] rounded-[16px] py-6 px-4">
        <div>
        <span className="rounded-full bg-[#FCC11A1F] px-3 py-1 font-display text-[12px] font-semibold text-[#D1701CBD] capitalize">
          {question.category}
        </span>
        <span className="rounded-full bg-[#D1701CBD] px-3 py-1 font-display text-[12px] font-semibold text-white capitalize">
          {question.difficulty}
        </span>
        </div>
        <p className="font-display text-[18px] font-semibold leading-[26px] text-[#656361]">
          {question.question_text}
        </p>
      </div>

      {/* question card */}
      <div className="flex flex-col gap-5 rounded-[20px] bg-white p-6 shadow-sm">
        

        <div className="flex flex-col gap-3">
          {options.map((opt, i) => {
            const isCorrect = i === correctIdx;
            const isWrong = i === selectedIdx && !isCorrect;
            return (
              <div
                key={i}
                className={`flex items-center gap-3 rounded-full border px-4 py-3 ${
                  isCorrect
                    ? "border-win/40 bg-win/[0.08]"
                    : isWrong
                    ? "border-loss/30 bg-loss/[0.06]"
                    : "border-black/[0.08] bg-[#f8f8f5]"
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-[13px] font-bold ${
                    isCorrect ? "text-win" : isWrong ? " text-loss" : " text-[#656361]"
                  }`}
                >
                  {`${letters[i]}.`}
                </span>
                <span
                  className={`font-display text-[14px] font-medium ${
                    isCorrect ? "text-win" : isWrong ? "text-loss" : "text-[#656361]"
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
            {question.explanation}
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
function CompleteScreen({
  correct,
  wrong,
  total,
  onRestart,
  onSettings,
}: {
  correct: number;
  wrong: number;
  total: number;
  onRestart: () => void;
  onSettings: () => void;
}) {
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const xp = correct * 10;



 


  return (
    <div className="flex w-[50%] flex-col gap-4 py-6">
      {/* accuracy card */}
      <div className="flex flex-col items-center gap-3 rounded-[20px] bg-[#F5F4F1] py-8 px-6">
        {/* badge */}
        <img src='/images/sessionComplete.svg' className=""/>
        <span className="font-display text-[48px] font-bold leading-none text-gold">
          {accuracy}%
        </span>
        <span className="font-display text-[14px] font-medium text-black/50">Accuracy</span>
      </div>

      {/* stat boxes */}
      <div className="grid grid-cols-3 gap-3">
        {/* correct */}
        <div className="flex flex-col justify-center items-center gap-2 rounded-[16px] bg-[#F5F4F1] py-4 px-2">
         
          <div className="flex gap-2 items-center">
            <TickIcon />
                      <span className="font-display leading-[31.91px] text-[35.46px] font-bold text-black/80">{correct}</span>
          </div>
          <span className="font-display text-sm font-medium text-black/50">Correct</span>
        </div>

        {/* wrong */}
        <div className="flex flex-col justify-center items-center gap-2 rounded-[16px] bg-[#F5F4F1] py-4 px-[55px]">
        
           <div className="flex gap-2 items-center">
            <WrongIcon />
                      <span className="font-display leading-[31.91px] text-[35.46px] font-bold text-black/80">{wrong}</span>
          </div>
          <span className="font-display text-sm font-medium text-black/50">Wrong</span>
        </div>

        {/* xp */}
        <div className="flex flex-col justify-center items-center gap-2 rounded-[16px] bg-[#F5F4F1] py-4 px-[39px]">
    
          <span className="font-display leading-[31.91px] text-[35.46px] font-bold text-[#E9AD01]">+{xp}</span>
          <span className="font-display text-sm font-medium text-black/50">XP Earned</span>
        </div>
      </div>

      {/* actions */}
      <div className="flex w-full gap-3 pt-2">
        <button
          onClick={onRestart}
          className="flex flex-1 items-center justify-center bg-gold border border-gold-deep gap-2 rounded-full  py-3.5 font-display text-[16px] font-semibold text-[#1E1E1E]"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Play Again
        </button>
        <button
          onClick={onSettings}
          className="flex-1 rounded-full bg-gold/[0.15] py-3.5 font-display text-[16px] font-semibold text-gold-deep"
        >
          Change Settings
        </button>
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


/* ------------------------------------------------------------------ */
/*  Page root                                                          */
/* ------------------------------------------------------------------ */
export default function PracticePage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [qIndex, setQIndex] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [startParams, setStartParams] = useState<ListPracticeQuestionsParams | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const { data, isFetching } = useGetPracticeQuestionsQuery(
    startParams ?? {},
    { enabled: !!startParams },
  );

  useEffect(() => {
    if (data?.questions && data.questions.length > 0) {
      setQuestions(data.questions);
      setQIndex(0);
      setSelectedIdx(null);
      setPhase("question");
      setStartParams(null);
    }
  }, [data]);

  /* Header changes per phase */
  useSetPageHeader(
    phase === "setup"
      ? { title: "Practice Mode", subtitle: "No stakes — earn XP and sharpen your knowledge" }
      : phase === "complete"
      ? { title: "Session Complete", subtitle: "Great effort! Review your performance below" }
      : { title: "Practice", subtitle: "" }
  );

  function handleStart(cat: string, _mode: Mode, diff: Difficulty) {
    setStartParams({
      category: cat,
      difficulty: diff.toLowerCase() as ListPracticeQuestionsParams["difficulty"],
    });
  }

  function handleAnswer(idx: number) {
    setSelectedIdx(idx);
    setPhase("revealed");
    const correctIdx = ["a", "b", "c", "d"].indexOf(questions[qIndex].correct_option);
    if (idx === correctIdx) {
      setCorrectCount((c) => c + 1);
    } else {
      setWrongCount((w) => w + 1);
    }
  }

  function handleNext() {
    const next = qIndex + 1;
    if (next >= questions.length) {
      setPhase("complete");
    } else {
      setQIndex(next);
      setSelectedIdx(null);
      setPhase("question");
    }
  }

  const currentQuestion = questions[qIndex];

  return (
    <div className="mx-auto flex w-full flex-col gap-0 pb-10">
      {phase === "setup" && <SetupScreen onStart={handleStart} isFetching={isFetching} />}
      {phase === "question" && currentQuestion && (
        <QuestionScreen question={currentQuestion} qIndex={qIndex} total={questions.length} onAnswer={handleAnswer} />
      )}
      {phase === "revealed" && currentQuestion && selectedIdx !== null && (
        <RevealedScreen question={currentQuestion} selectedIdx={selectedIdx} onNext={handleNext} />
      )}
      {phase === "complete" && (
        <CompleteScreen
          correct={correctCount}
          wrong={wrongCount}
          total={questions.length}
          onRestart={() => {
            setPhase("setup");
            setQIndex(0);
            setSelectedIdx(null);
            setQuestions([]);
            setCorrectCount(0);
            setWrongCount(0);
          }}
          onSettings={() => setPhase("setup")}
        />
      )}
    </div>
  );
}
