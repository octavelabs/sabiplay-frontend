"use client";

import { Bolt } from "lucide-react";
import { useSetPageHeader } from "../../context/PageHeaderContext";
import { TrophyIcon, TargetIcon, StormIcon } from "../home/icons";
import { useRouter } from "next/navigation";

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
/*  Profile info card                                                  */
/* ------------------------------------------------------------------ */
function ProfileCard() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-[20px] bg-[#f5f4f1] px-6 py-14">
      <Avatar cell={10} className="h-[89px] w-[89px]" />
      <div className="flex flex-col items-center gap-1">
        <span className="font-display text-[23px] font-semibold leading-[29px] text-black">
          George Omoh
        </span>
        <span className="font-display text-[14px] font-medium text-black/60">
          @emgee
        </span>
      </div>
      <span className="flex items-center gap-1.5 rounded-full border border-gold/45 bg-[#f39736] px-[10px] py-[5px] font-display text-[11px] font-semibold text-white">
        🥉 Bronze
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Level progress card                                                */
/* ------------------------------------------------------------------ */
function LevelCard() {
  return (
    <div className="flex flex-col gap-3 rounded-[20px] bg-[#f5f4f1] px-6 py-5">
      <div className="flex items-center justify-between">
        <span className="font-display text-[14px] font-semibold text-black">
          Level 1
        </span>
        <span className="font-display text-[12px] font-medium text-black/60">
          0 / 500 XP
        </span>
      </div>
      <div className="h-[11px] w-full overflow-hidden rounded-full bg-[#e7e6e2]">
        <div
          className="h-full rounded-full bg-[#f8932a]"
          style={{ width: "18%" }}
        />
      </div>
      <span className="font-display text-[12px] font-medium text-black/60">
        18% to Level 2
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Wallet balance card                                                */
/* ------------------------------------------------------------------ */
function WalletBalanceCard() {
  return (
    <div className="flex flex-col gap-1.5 rounded-[20px] bg-[#f5f4f1] px-6 py-5">
      <span className="font-display text-[12px] font-medium text-black/60">
        Wallet Balance
      </span>
      <span className="font-display text-[23px] font-bold leading-8 text-[#e9ad01]">
        ₦4,500
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Statistics section                                                 */
/* ------------------------------------------------------------------ */
const STATS = [
  {
    label: "Matches",
    value: "0",
    color: "#8a38f5",
    bg: "bg-[#8a38f5]",
    icon: <TargetIcon className="h-4 w-4 text-white" />,
  },
  {
    label: "Win Rate",
    value: "0%",
    color: "#e9ad01",
    bg: "bg-gold",
    icon: <TrophyIcon className="h-4 w-4 text-white" />,
  },
  {
    label: "Total Won",
    value: "₦0",
    color: "#0e9f37",
    bg: "bg-win",
    icon: <StormIcon className="h-4 w-4 text-white" />,
  },
];

function Statistics() {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-display text-[16px] font-medium text-black">
        Statistics
      </span>
      <div className="flex gap-3">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-1 flex-col items-center gap-3 rounded-[16px] bg-[#f5f4f1] py-5"
          >
            <div
              className={`flex h-[30px] w-[30px] items-center justify-center rounded-full ${s.bg}`}
            >
              {s.icon}
            </div>
            <div className="flex flex-col items-center gap-1">
              <span
                className="font-display text-[18px] font-bold"
                style={{ color: s.color }}
              >
                {s.value}
              </span>
              <span className="font-display text-[14px] font-normal text-black">
                {s.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Achievements section                                               */
/* ------------------------------------------------------------------ */
const ACHIEVEMENTS = [
  { label: "First Blood", emoji: "⚔️", active: false },
  { label: "Hot Streak", emoji: "🔥", active: true },
  { label: "History King", emoji: "👑", active: false },
  { label: "Math Genius", emoji: "🧮", active: false },
  { label: "Campus Hero", emoji: "🏫", active: false },
  { label: "Referral Boss", emoji: "🤝", active: false },
  { label: "Millionaire Bound", emoji: "💰", active: false },
  { label: "1000 Questions", emoji: "❓", active: false },
];

function Achievements() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="font-display text-[16px] font-medium text-black">
          Achievements
        </span>
        <span className="flex cursor-pointer items-center gap-1 font-display text-[12px] font-semibold text-[#e9ad01] hover:opacity-80">
          View all
        </span>
      </div>

      <div className="grid grid-cols-3 gap-[28px]">
        {ACHIEVEMENTS.map((badge) => (
            <div className="flex flex-col items-center gap-2.5">
      <span
        className={`flex h-[47px] items-center justify-center text-[40px] leading-none ${
          badge.active ? "" : "opacity-60 grayscale"
        }`}
      >
        {badge.emoji}
      </span>
      <span
        className={`flex h-[27px] w-[149px] items-center justify-center rounded-full px-2.5 font-display text-[14px] font-semibold text-white ${
          badge.active ? "bg-[#e9ad01]" : "bg-[#a8a39d]"
        }`}
      >
        {badge.label}
      </span>
    </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function ProfilePage() {
  const router = useRouter()

   useSetPageHeader({
    title: "Profile",
    subtitle: "@emgee",
    button: <Bolt className="h-[26px] w-[26px] text-ink-900" />,
    onButtonClick: () => router.push("/dashboard/profile/settings"),
  });

  return (
    <div className="mx-auto flex w-full flex-col gap-6 lg:flex-row">
      {/* left column — profile card */}
      <div className="flex w-full flex-col gap-3 lg:w-[477px] lg:shrink-0">
        <ProfileCard />
        <LevelCard />
        <WalletBalanceCard />
      </div>

      {/* right column — stats + achievements */}
      <div className="flex flex-1 flex-col gap-6">
        <Statistics />
        <Achievements />
      </div>
    </div>
  );
}
