"use client";

import { useEffect, useState } from "react";
import { useSetPageHeader } from "../../context/PageHeaderContext";

/* ------------------------------------------------------------------ */
/*  Shared bits                                                       */
/* ------------------------------------------------------------------ */
const TABS = ["National", "Weekly", "Daily", "Campus"] as const;
type Tab = (typeof TABS)[number];

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
        boxShadow: ring ? `0 0 0 2px ${ring}` : undefined,
      }}
    />
  );
}

const Bronze = () => (
  <span className="rounded-full border border-gold/45 bg-[#f39736] px-[7px] py-[3px] font-display text-[11px] font-semibold leading-none text-white">
    Bronze
  </span>
);

const MEDALS = ["🥇", "🥈", "🥉"];

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
type Player = { name: string; pts: number; cell: number; you?: boolean; uni?: string };

const national: Player[] = [
  { name: "oganibi", pts: 320, cell: 0 },
  { name: "jhoneyume", pts: 80, cell: 4 },
  { name: "clintonadabanya", pts: 70, cell: 7 },
  { name: "chibudom", pts: 70, cell: 9 },
  { name: "emgee (you)", pts: 0, cell: 10, you: true },
  { name: "cfcani", pts: 0, cell: 3 },
  { name: "bants_meter", pts: 0, cell: 2 },
  { name: "okonkwo", pts: 0, cell: 5 },
];

const weekly: Player[] = [
  { name: "oganibi", pts: 320, cell: 0 },
  { name: "jhoneyume", pts: 80, cell: 4 },
];

const daily: Player[] = [{ name: "oganibi", pts: 320, cell: 0 }];

const campus: Player[] = [{ name: "oganibi", pts: 320, cell: 0, uni: "Uniben" }];

/* ------------------------------------------------------------------ */
/*  Tabs                                                              */
/* ------------------------------------------------------------------ */
function Tabs({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="flex flex-wrap gap-3.5">
      {TABS.map((t) => {
        const on = active === t;
        return (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`rounded-full px-3 py-2 font-display text-[16px] font-medium leading-none transition-colors ${
              on
                ? "border border-gold-deep/[0.53] bg-gold text-[#615e53]"
                : "bg-gold/[0.13] text-ink/70 hover:bg-gold/20"
            }`}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Podium (Top 3)                                                    */
/* ------------------------------------------------------------------ */
type PodiumTier = {
  rank: string;
  player: Player;
  height: number;
  front: string;
  top: string;
  ring: string;
  medal: string;
};

function Podium({ players }: { players: Player[] }) {
  const tiers: PodiumTier[] = [
    { rank: "2nd", player: players[1], height: 178, front: "#2faa3f", top: "#46c659", ring: "#0e9f37", medal: "🥈" },
    { rank: "1st", player: players[0], height: 230, front: "#2f93e0", top: "#5aaef0", ring: "#fcc11a", medal: "🥇" },
    { rank: "3rd", player: players[2], height: 150, front: "#bf7d2f", top: "#d59341", ring: "#cf7a23", medal: "🥉" },
  ];

  return (
    <div className="relative flex w-full flex-col gap-6 rounded-[20px] bg-[#f8f8f5] p-6 lg:w-[383px]">
      <span className="font-display text-[17px] font-semibold text-black">Top 3</span>

      {/* avatars + winged trophy */}
      <div className="relative mt-2 flex items-end justify-between px-1">
        {[tiers[0], tiers[1], tiers[2]].map((t, i) => (
          <div key={t.rank} className={`flex flex-col items-center gap-1 ${i === 1 ? "-mb-1" : "mb-6"}`}>
            {i === 1 && (
              <div className="mb-1 flex h-12 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-[#ffd23f] to-[#f5a623] text-[22px] font-bold text-[#b3300b] shadow-[0_4px_12px_rgba(245,166,35,0.5)]">
                1
              </div>
            )}
            <Avatar cell={t.player.cell} ring={t.ring} className={i === 1 ? "h-[50px] w-[50px]" : "h-10 w-10"} />
            <span className="max-w-[110px] truncate font-display text-[14px] font-bold text-ink/60">
              {t.player.name}
            </span>
          </div>
        ))}
      </div>

      {/* podium blocks */}
      <div className="flex items-end justify-center gap-1.5">
        {tiers.map((t) => (
          <PodiumBlock key={t.rank} tier={t} />
        ))}
      </div>
    </div>
  );
}

function PodiumBlock({ tier }: { tier: PodiumTier }) {
  return (
    <div className="relative w-[108px]" style={{ height: tier.height }}>
      {/* top face */}
      <div
        className="absolute left-0 right-0 top-0 h-3"
        style={{ background: tier.top, clipPath: "polygon(6% 100%, 0 0, 100% 0, 94% 100%)" }}
      />
      {/* front face */}
      <div
        className="absolute inset-x-0 bottom-0 top-3 flex flex-col items-center gap-1.5 rounded-b-[2px] pt-4"
        style={{ background: tier.front }}
      >
        <span className="font-display text-[18px] font-bold text-white">
          {tier.rank.slice(0, 1)}
          <sup className="text-[10px]">{tier.rank.slice(1)}</sup>
        </span>
        <span className="rounded-full bg-black/15 px-2 py-0.5 font-display text-[10px] font-semibold text-white">
          {tier.player.pts} pts
        </span>
        <span className="text-[26px] leading-none">{tier.medal}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Top Players list                                                  */
/* ------------------------------------------------------------------ */
function TopPlayers({ players }: { players: Player[] }) {
  return (
    <div className="flex flex-1 flex-col gap-[21px]">
      <span className="flex items-center gap-1.5 font-display text-[16px] font-semibold text-black/80">
        <TrendUpIcon className="h-5 w-5 text-[#e9ad01]" />
        Top Players
      </span>
      <div className="flex flex-col gap-2">
        {players.map((p, i) => (
          <LeaderRow key={p.name} index={i} p={p} />
        ))}
      </div>
    </div>
  );
}

function LeaderRow({ index, p }: { index: number; p: Player }) {
  return (
    <div
      className={`flex items-center justify-between rounded-[20px] px-3 py-3.5 ${
        p.you ? "border border-gold/[0.68] bg-[#feefc3]" : "bg-[#f5f4f1]"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="flex w-6 justify-center text-[18px] leading-none">
          {index < 3 ? MEDALS[index] : <span className="font-display text-[14px] font-semibold text-black/60">{index + 1}</span>}
        </span>
        <Avatar cell={p.cell} className="h-[37px] w-[37px]" />
        <div className="flex items-center gap-2">
          <span className="font-display text-[14px] font-semibold text-black/80">{p.name}</span>
          <Bronze />
          {p.uni && <span className="font-display text-[14px] text-black/60">{p.uni}</span>}
        </div>
      </div>
      <span className="font-display text-[14px] font-semibold text-black/80">
        {p.pts} <span className="text-black/40">pts</span>
      </span>
    </div>
  );
}

/* flat list (Weekly / Daily / Campus) */
function FlatList({ players }: { players: Player[] }) {
  return (
    <div className="flex flex-col gap-2">
      {players.map((p, i) => (
        <LeaderRow key={p.name + i} index={i} p={p} />
      ))}
    </div>
  );
}

function TrendUpIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m3 16 5-5 4 4 7-7M16 8h5v5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function LeaderboardPage() {
  useSetPageHeader({ title: "Leaderboard", subtitle: "See who's topping the charts" });
  const [tab, setTab] = useState<Tab>("National");

  // deep-link a tab for previewing/sharing, e.g. ?tab=Campus
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("tab");
    if (q && (TABS as readonly string[]).includes(q)) setTab(q as Tab);
  }, []);

  return (
    <div className="mx-auto flex w-full flex-col gap-7">
      <Tabs active={tab} onChange={setTab} />

      {tab === "National" ? (
        <div className="flex flex-col gap-7 lg:flex-row">
          <Podium players={national} />
          <TopPlayers players={national} />
        </div>
      ) : (
        <FlatList players={tab === "Weekly" ? weekly : tab === "Daily" ? daily : campus} />
      )}
    </div>
  );
}
