"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useSetPageHeader } from "../../../context/PageHeaderContext";
import { Button } from "@/components/Button";
import { VoucherIcon, UsersIcon, ClockIcon, TrophyIcon } from "../../home/icons";

const TABS = ["Overview", "Fixtures", "Results", "Standings", "Rules"] as const;
type Tab = (typeof TABS)[number];

/* avatar from the 3×4 sprite */
function Avatar({ cell, className = "" }: { cell: number; className?: string }) {
  const col = cell % 3;
  const row = Math.floor(cell / 3);
  return (
    <span
      className={`block shrink-0 rounded-full bg-cover ${className}`}
      style={{
        backgroundImage: "url(/images/auth-avatars.png)",
        backgroundSize: "300% 400%",
        backgroundPosition: `${(col / 2) * 100}% ${(row / 3) * 100}%`,
      }}
    />
  );
}

const Bronze = () => (
  <span className="rounded-full border border-gold/45 bg-[#f39736] px-[7px] py-[3px] font-display text-[11px] font-semibold leading-none text-white">
    Bronze
  </span>
);

const Tick = () => (
  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
    <path d="m5 13 4 4L19 7" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Hero banner                                                       */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-[#0f7bba]/[0.16] bg-[#f3f1eb]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: "url(/images/comp-sapphire.png)" }}
      />
      <div className="absolute inset-x-0 top-0 h-[120px] bg-white/80" />
      <div className="relative flex flex-col gap-[11px] p-7">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <span className="font-display text-[14px] font-normal text-black/60">Prize Pool</span>
              <span className="flex items-center gap-1 rounded-full border border-win bg-win/10 px-[9px] py-0.5 font-display text-[10px] font-semibold text-win">
                <Tick /> Joined
              </span>
            </div>
            <span className="font-display text-[33px] font-bold leading-tight text-[#0f7bba]">₦5,000</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-win bg-win/10 px-[9px] py-0.5 font-display text-[10px] font-semibold text-win">
              Open
            </span>
            <span className="flex items-center gap-1 font-display text-[10px] font-semibold text-black/60">
              <ClockIcon className="h-3 w-3 text-black/40" />
              Started
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between font-display text-[12px] font-medium text-black/60">
            <span className="flex items-center gap-1">
              <UsersIcon className="h-3.5 w-3.5 text-stone" />
              0/30 players
            </span>
            <span>15%</span>
          </div>
          <div className="h-[11px] w-full overflow-hidden rounded-full bg-[#e9f0f3]">
            <div className="h-full rounded-full bg-gradient-to-r from-[#6490d5] to-[#0f7bba]" style={{ width: "15%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tabs                                                              */
/* ------------------------------------------------------------------ */
function TabBar({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="flex overflow-x-auto">
      {TABS.map((t) => {
        const on = active === t;
        return (
          <button key={t} onClick={() => onChange(t)} className="flex w-[133px] shrink-0 flex-col items-center gap-2.5">
            <span className={`font-display text-[14px] font-semibold ${on ? "text-gold-deep" : "text-[#97918b]"}`}>
              {t}
            </span>
            <span className="h-1.5 w-full rounded-full bg-[#f3f3f3]/95">
              <span className={`block h-full rounded-full ${on ? "bg-gold" : "bg-transparent"}`} />
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cards / shared                                                    */
/* ------------------------------------------------------------------ */
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[22px] bg-[#f8f8f5] ${className}`}>{children}</div>;
}

/* ------------------------------------------------------------------ */
/*  Overview                                                          */
/* ------------------------------------------------------------------ */
const overviewStats = [
  { icon: <VoucherIcon className="h-5 w-5 text-[#e9ad01]" />, value: "₦500", label: "Entry Fee" },
  { icon: <UsersIcon className="h-5 w-5 text-[#e9ad01]" />, value: "3/20", label: "Players" },
  { icon: <ClockIcon className="h-5 w-5 text-[#e9ad01]" />, value: "11 May, 05:02", label: "Entry Fee" },
  { icon: <TrophyIcon className="h-5 w-5 text-[#e9ad01]" />, value: "₦5,000", label: "Entry Fee" },
];

const howItWorks = ["Round of 16 format", "Same rules as Cup but faster", "Top 16 players compete directly"];

const prizeDist = [
  { place: "1st Place", amount: "₦3,000", pct: 74 },
  { place: "2nd Place (1st Runner Up)", amount: "₦1,250", pct: 53 },
  { place: "3rd Place (2nd Runner Up)", amount: "₦1,250", pct: 32 },
];

const players = [
  { name: "clintonadabanya", cell: 7 },
  { name: "emgee", cell: 10 },
  { name: "chibudom", cell: 9 },
];

function Overview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {overviewStats.map((s, i) => (
          <Card key={i} className="flex h-[126px] flex-col items-center justify-center gap-2 px-4 text-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">{s.icon}</span>
            <div className="flex flex-col items-center">
              <span className="font-display text-[12px] font-semibold text-black/80">{s.value}</span>
              <span className="font-display text-[10px] font-normal text-black/60">{s.label}</span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="flex flex-col gap-[11px] p-[26px]">
        <span className="font-display text-[16px] font-semibold text-black/80">How It Works</span>
        <div className="flex flex-col gap-2">
          {howItWorks.map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full bg-gold/20 font-display text-[14px] font-semibold text-[#e9ad01]">
                {i + 1}
              </span>
              <span className="font-display text-[12px] font-normal text-black/60">{t}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="flex flex-col gap-3 px-[33px] py-5">
        <div className="flex flex-col">
          <span className="font-display text-[16px] font-semibold text-black/80">Prize Distribution</span>
          <span className="font-display text-[12px] font-normal text-black/40">
            10% platform commission already deducted. Amounts shown are what winners receive.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {prizeDist.map((p) => (
            <div key={p.place} className="flex items-center justify-between">
              <span className="font-display text-[14px] font-normal text-black/80">{p.place}</span>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-[76px] overflow-hidden rounded-full bg-[#dfdfdf]/95">
                  <span className="block h-full rounded-full bg-gold" style={{ width: `${p.pct}%` }} />
                </span>
                <span className="font-display text-[12px] font-semibold text-[#e9ad01]">{p.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="flex flex-col gap-4 px-8 py-[26px]">
        <span className="font-display text-[16px] font-semibold text-black/80">Registered Players (3)</span>
        <div className="flex flex-wrap gap-2.5">
          {players.map((p) => (
            <span
              key={p.name}
              className="flex items-center gap-1.5 rounded-full border border-gold-deep/[0.22] bg-[#fef2ce]/[0.48] py-1 pl-1 pr-2.5"
            >
              <Avatar cell={p.cell} className="h-[26px] w-[26px]" />
              <span className="font-display text-[14px] font-normal text-black/80">{p.name}</span>
              <Bronze />
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Empty states                                                      */
/* ------------------------------------------------------------------ */
function FixturesTab() {
  return (
    <Card className="flex flex-col items-center justify-center gap-3 py-14 text-center">
      <span className="text-5xl">😟</span>
      <div className="flex flex-col gap-1">
        <span className="font-display text-[16px] font-semibold text-black/80">No fixtures yet</span>
        <span className="font-display text-[12px] font-normal text-black/60">
          Fixtures are generated automatically when all slots are filled
        </span>
      </div>
      <Button variant="gold" size="sm" className="mt-1">Generate Now</Button>
    </Card>
  );
}

function ResultsTab() {
  return (
    <Card className="flex flex-col items-center justify-center gap-3 py-14 text-center">
      <span className="text-5xl">🏆</span>
      <div className="flex flex-col gap-1">
        <span className="font-display text-[16px] font-semibold text-black/80">No matches have been played yet</span>
        <span className="font-display text-[12px] font-normal text-black/60">
          Results will appear here once matches are completed
        </span>
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Standings                                                         */
/* ------------------------------------------------------------------ */
const COLS = ["MP", "W", "D", "L", "CA", "Pts"];

function StandingsTab() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 font-display text-[12px] font-medium text-black/60">
          <UsersIcon className="h-3.5 w-3.5 text-stone" />
          Waiting for&nbsp;<b className="font-bold">17 more players</b>&nbsp;to join before fixtures are generated.
        </span>
        <span className="font-display text-[14px] font-medium text-black/40">3/20</span>
      </div>
      <Card className="flex flex-col gap-3 px-6 py-5">
        <div className="flex items-center font-display text-[12px] font-normal text-black/40">
          <span className="w-8">#</span>
          <span className="flex-1">Player</span>
          {COLS.map((c) => (
            <span key={c} className="w-12 text-center">{c}</span>
          ))}
          <span className="w-12 text-right">Acc</span>
        </div>
        {players.map((p, i) => (
          <div key={p.name} className="flex items-center border-t border-stone/10 pt-3 font-display text-[12px] text-black/40">
            <span className="w-8">{i + 1}.</span>
            <span className="flex flex-1 items-center gap-1.5">
              <Avatar cell={p.cell} className="h-[26px] w-[26px]" />
              <span className="text-[14px] text-black/80">{p.name}</span>
              <Bronze />
            </span>
            {COLS.map((c) => (
              <span key={c} className="w-12 text-center">0</span>
            ))}
            <span className="w-12 text-right">0%</span>
          </div>
        ))}
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Rules                                                             */
/* ------------------------------------------------------------------ */
const rules = [
  { title: "Format", body: "Single-elimination bracket. Lose once and you're out." },
  { title: "Match Play", body: "10 questions, 15 seconds each. Higher score advances. Equal scores: response speed decides." },
  { title: "Prize", body: "Winner takes the full prize pool (subject to distribution by tier)." },
  { title: "Byes", body: "If total players is odd, one player advances with a bye in the first round." },
  { title: "Fair Play", body: "Switching browser tabs during a match is flagged. Multiple violations result in disqualification." },
];

function RulesTab() {
  return (
    <Card className="flex flex-col gap-5 p-8">
      {rules.map((r) => (
        <div key={r.title} className="flex flex-col gap-1.5 border-b border-stone/10 pb-5">
          <span className="font-display text-[16px] font-semibold text-black/80">{r.title}</span>
          <span className="font-display text-[12px] font-normal text-ink/60">{r.body}</span>
        </div>
      ))}
      <div className="flex flex-col gap-1.5">
        <span className="flex items-center gap-1.5 font-display text-[16px] font-semibold text-black/80">
          🚩 Disputes
        </span>
        <span className="font-display text-[12px] font-normal text-ink/60">
          All question results are final. If you believe a question is inaccurate, report it via the question
          report button during play. Reports are reviewed within 24 hours and points adjusted if warranted.
          Contact{" "}
          <a href="mailto:support@sabiplay.com" className="text-gold-deep">support@sabiplay.com</a> for
          competition-level disputes.
        </span>
      </div>
    </Card>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
function BackArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-black/60" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5m6-6-6 6 6 6" />
    </svg>
  );
}

export default function CompetitionDetailPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("Overview");

  // Allow deep-linking a tab for previewing/sharing, e.g. ?tab=Rules
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("tab");
    if (q && (TABS as readonly string[]).includes(q)) setTab(q as Tab);
  }, []);

  const headerNode = useMemo(
    () => (
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => router.back()}
          aria-label="Back"
          className="flex h-[31px] w-[31px] items-center justify-center rounded-full border border-gold"
        >
          <BackArrow />
        </button>
        <div className="flex flex-col">
          <span className="font-display text-[12px] font-medium text-black/60">Sapphire Tier</span>
          <span className="font-display text-[18px] font-bold text-black/80">Daily Grind Mini Cup</span>
        </div>
      </div>
    ),
    [router],
  );
  useSetPageHeader({ node: headerNode });

  return (
    <div className="mx-auto flex w-full max-w-[990px] flex-col gap-7">
      <Hero />
      <TabBar active={tab} onChange={setTab} />
      {tab === "Overview" && <Overview />}
      {tab === "Fixtures" && <FixturesTab />}
      {tab === "Results" && <ResultsTab />}
      {tab === "Standings" && <StandingsTab />}
      {tab === "Rules" && <RulesTab />}
    </div>
  );
}
