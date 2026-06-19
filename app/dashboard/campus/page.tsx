"use client";

import { useState } from "react";
import { useSetPageHeader } from "../../context/PageHeaderContext";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type Tab = "leaders" | "rankings";

type SVGProps = React.SVGProps<SVGSVGElement>;

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */
const SearchIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const TrophyIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
    <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
    <path d="M12 17c-2.8 0-5-2.2-5-5V3h10v9c0 2.8-2.2 5-5 5z" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Avatar (sprite sheet)                                              */
/* ------------------------------------------------------------------ */
function Avatar({ cell, className = "" }: { cell: number; className?: string }) {
  const col = cell % 3;
  const row = Math.floor(cell / 3);
  return (
    <span
      className={`block shrink-0 rounded-full bg-cover bg-center ${className}`}
      style={{
        backgroundImage: "url(/images/auth-avatars.png)",
        backgroundSize: "300% 400%",
        backgroundPosition: `${(col / 2) * 100}% ${(row / 3) * 100}%`,
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Sample data                                                        */
/* ------------------------------------------------------------------ */
const LEADERS = [
  { rank: 1, name: "emgee (you)", university: "Uniben", cell: 10, pts: 0, isYou: true },
  { rank: 2, name: "Folarunsho", university: "Uniben", cell: 2, pts: 1200, isYou: false },
  { rank: 3, name: "Laura", university: "Uniben", cell: 5, pts: 980, isYou: false },
  { rank: 4, name: "Bolaji", university: "Uniben", cell: 3, pts: 750, isYou: false },
  { rank: 5, name: "Chioma", university: "Uniben", cell: 8, pts: 640, isYou: false },
];

const RANKINGS = [
  { rank: 1, name: "Uniben", players: 1, pts: "0.0K" },
  { rank: 2, name: "Unilag", players: 48, pts: "24.5K" },
  { rank: 3, name: "OAU", players: 37, pts: "19.2K" },
  { rank: 4, name: "UI", players: 29, pts: "14.8K" },
  { rank: 5, name: "LASU", players: 22, pts: "11.3K" },
];

/* ------------------------------------------------------------------ */
/*  User rank banner                                                   */
/* ------------------------------------------------------------------ */
function UserRankBanner() {
  return (
    <div className="flex items-center justify-between rounded-[20px] border border-gold/70 bg-[#feefc3] px-[13px] py-[17px]">
      <div className="flex items-center gap-2">
        <span className="text-[20px] leading-none">🏅</span>
        <Avatar cell={10} className="h-[37px] w-[37px]" />
        <div className="flex flex-col gap-1">
          <span className="font-display text-[14px] font-semibold text-black/80">
            emgee (you)
          </span>
          <span className="w-fit rounded-full border border-gold/45 bg-[#f39736] px-2 py-[2px] font-display text-[13px] font-normal text-black/80">
            Uniben
          </span>
        </div>
      </div>
      <span className="font-display text-[14px] font-semibold text-black/80">
        0 pts
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tab bar                                                            */
/* ------------------------------------------------------------------ */
function TabBar({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  const tabs: { id: Tab; label: string }[] = [
    { id: "leaders", label: "Campus Leaders" },
    { id: "rankings", label: "University Rankings" },
  ];

  return (
    <div className="flex bg-white">
      {tabs.map((tab) => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="flex flex-1 flex-col items-start gap-2 pb-1"
          >
            <span
              className={`font-display text-[22px] font-semibold transition-colors ${
                isActive ? "text-[#1e1e1e]" : "text-[#1e1e1e]/40"
              }`}
            >
              {tab.label}
            </span>
            <div className="h-[8px] w-full overflow-hidden rounded-full bg-[#f5f4f1]">
              {isActive && <div className="h-full w-full rounded-full bg-gold" />}
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Empty state                                                        */
/* ------------------------------------------------------------------ */
function EmptyState() {
  return (
    <div className="flex items-center justify-center rounded-[22px] bg-[#f5f4f1] py-14">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-[80px] leading-none">🎓</span>
        <div className="flex flex-col gap-1">
          <span className="font-display text-[20px] font-semibold text-[#1e1e1e]/60">
            No students found
          </span>
          <span className="font-display text-[16px] font-normal text-black/40">
            Search for your university above
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Leader row                                                         */
/* ------------------------------------------------------------------ */
function LeaderRow({ rank, name, university, cell, pts, isYou }: (typeof LEADERS)[number]) {
  const ptsDisplay = pts >= 1000 ? (pts / 1000).toFixed(1) + "K" : pts + " pts";
  return (
    <div
      className={`flex items-center justify-between rounded-[21px] px-5 py-[18px] ${
        isYou ? "bg-[#feefc3]" : "bg-[#f5f4f1]/80"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#e9ad01]/30 bg-gold/5">
          <span className="font-display text-[18px] font-semibold text-[#e9ad01]">{rank}.</span>
        </div>
        <Avatar cell={cell} className="h-[37px] w-[37px]" />
        <div className="flex flex-col gap-1">
          <span className="font-display text-[18px] font-semibold text-[#1e1e1e]/80">{name}</span>
          <span className="w-fit rounded-full border border-gold/45 bg-[#f39736] px-2 py-[2px] font-display text-[13px] font-normal text-black/80">
            {university}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <TrophyIcon className="h-[18px] w-[18px] text-[#e9ad01]" />
        <span className="font-display text-[14px] font-semibold text-[#e9ad01]">{ptsDisplay}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Ranking row                                                        */
/* ------------------------------------------------------------------ */
function RankingRow({ rank, name, players, pts }: (typeof RANKINGS)[number]) {
  return (
    <div className="flex items-center justify-between rounded-[21px] bg-[#f5f4f1]/80 px-5 py-[18px]">
      <div className="flex items-center gap-3">
        <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-[#e9ad01]/30 bg-gold/5">
          <span className="font-display text-[18px] font-semibold text-[#e9ad01]">{rank}.</span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-display text-[18px] font-semibold text-[#1e1e1e]/80">{name}</span>
          <span className="font-display text-[14px] font-normal text-black/40">
            {players} {players === 1 ? "Player" : "Players"}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <TrophyIcon className="h-[24px] w-[24px] text-[#e9ad01]" />
        <span className="font-display text-[14px] font-semibold text-[#e9ad01]">{pts}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function CampusPage() {
  useSetPageHeader({
    title: "Campus",
    subtitle: "Rep your school and compete for university glory",
  });

  const [tab, setTab] = useState<Tab>("leaders");
  const [search, setSearch] = useState("");

  const hasUniversity = true;

  const filteredLeaders = LEADERS.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.university.toLowerCase().includes(search.toLowerCase())
  );

  const filteredRankings = RANKINGS.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-col gap-6 pb-10">
      {/* search bar */}
      <div className="flex items-center gap-3 rounded-full bg-[#f5f4f1] px-5 py-3">
        <SearchIcon className="h-6 w-6 shrink-0 text-[#e9ad01]" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for your university..."
          className="min-w-0 flex-1 bg-transparent font-display text-[16px] font-normal text-black outline-none placeholder:text-black/40"
        />
      </div>

      {/* user rank banner */}
      {hasUniversity && <UserRankBanner />}

      {/* tab bar */}
      <TabBar active={tab} onChange={setTab} />

      {/* tab content */}
      {tab === "leaders" && (
        <div className="flex flex-col gap-3">
          {filteredLeaders.length === 0 ? (
            <EmptyState />
          ) : (
            filteredLeaders.map((l) => <LeaderRow key={l.name} {...l} />)
          )}
        </div>
      )}

      {tab === "rankings" && (
        <div className="flex flex-col gap-3">
          {filteredRankings.length === 0 ? (
            <EmptyState />
          ) : (
            filteredRankings.map((r) => <RankingRow key={r.name} {...r} />)
          )}
        </div>
      )}
    </div>
  );
}
