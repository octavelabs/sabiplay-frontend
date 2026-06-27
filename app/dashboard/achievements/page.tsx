"use client";

import { useState } from "react";
import { useSetPageHeader } from "../../context/PageHeaderContext";
import { useGetAchievementQuery } from "@/app/hooks/achievement/achievementQuery";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const TABS = ["All", "Streak", "Categories", "Milestones", "Campus", "Special"] as const;
type Tab = (typeof TABS)[number];

type Category = Exclude<Tab, "All">;
type Badge = { name: string; icon: string; category: Category; unlocked?: boolean };

const BADGES: Badge[] = [
  { name: "First Blood", icon: "/images/firstBlood.svg", category: "Milestones",    },
  { name: "Hot Streak", icon: "/images/hotStreak.svg", category: "Streak"},
  { name: "History King", icon: "/images/historyKing.svg", category: "Categories", unlocked: true},
  { name: "Math Genius", icon: "/images/mathGenius.svg", category: "Categories" },
  { name: "1000 Questions", icon: "/images/speedDemon.svg", category: "Milestones" },
  { name: "Campus Hero", icon: "/images/campusHero.svg", category: "Campus" },
  { name: "Millionaire Bound", icon: "/images/millionaireBound.svg", category: "Milestones" },
  { name: "Referral Boss", icon: "/images/referralBoss.svg", category: "Special" },
  { name: "Perfect Score", icon: "/images/perfectScore.svg", category: "Milestones" },
  { name: "Sports Fan", icon: "/images/sportFan.svg", category: "Categories" },
  { name: "Tech Wizard", icon: "/images/techWizard.svg", category: "Categories" },
];

/* ------------------------------------------------------------------ */
/*  Pieces                                                            */
/* ------------------------------------------------------------------ */
function EarnedBadge({ count }: { count: number }) {
  return (
    <div className="flex w-[68px] flex-col items-center gap-1.5 rounded-[12px] border border-gold/50 bg-gold/[0.13] py-2.5">
      <span className="font-display text-[22px] font-medium leading-none text-[#e9ad01]">{count}</span>
      <span className="font-display text-[10px] font-medium text-ink/60">Earned</span>
    </div>
  );
}

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
                ? "border border-gold-deep/[0.53] bg-gold text-ink/70"
                : "bg-[#e7e6e2]/80 text-ink/50 hover:bg-[#e7e6e2]"
            }`}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

function BadgeTile({ badge }: { badge: Badge }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      {/* <span
        className={`flex h-[47px] items-center justify-center text-[40px] leading-none ${
          badge.unlocked ? "" : "opacity-60 grayscale"
        }`}
      >
        {badge.icon}
      </span> */}
      <img src={badge.icon} className={`h-[47px] w-[47px] mx-auto ${badge.unlocked ? "" : "grayscale"}`} />
      <span
        className={`flex h-[27px] w-[149px] items-center justify-center rounded-full px-2.5 font-display text-[14px] font-semibold text-white ${
          badge.unlocked ? "bg-[#e9ad01]" : "bg-[#a8a39d]"
        }`}
      >
        {badge.name}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function AchievementsPage() {
  useSetPageHeader({ hidden: true });
  const [tab, setTab] = useState<Tab>("All");
  const {data, isLoading} = useGetAchievementQuery()
console.log(data?.achievements)
  const visible = tab === "All" ? BADGES : BADGES.filter((b) => b.category === tab);

  return (
    <div className="mx-auto flex w-full flex-col gap-[30px]">
      {/* title + earned */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-display text-[48px] font-semibold leading-[43px] text-ink">Achievements</h1>
        <EarnedBadge count={0} />
      </div>

      {/* progress */}
      <div className="-mt-2 flex flex-col gap-3">
        <span className="font-display text-[18px] font-medium text-ink/60">0 of 12 unlocked</span>
        <div className="h-[11px] w-full overflow-hidden rounded-full bg-[#f1f1ef]">
          <div className="h-full w-[14%] rounded-full bg-gradient-to-r from-[#ffdf83] to-[#fcc11a]" />
        </div>
      </div>

      <Tabs active={tab} onChange={setTab} />

      {/* grid */}
      <div className="grid grid-cols-3 justify-items-center gap-x-[60px] gap-y-[42px] sm:grid-cols-4 lg:grid-cols-5">
        {visible.map((b, i) => (
          <BadgeTile key={b.name + i} badge={b} />
        ))}
      </div>
    </div>
  );
}
