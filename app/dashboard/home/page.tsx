"use client";

import Image from "next/image";
import {
  UsersIcon,
  ClockIcon,
  TrendUpIcon,
  ChevronRightIcon,
  VoucherIcon,
  ArrowUpIcon,
  StormIcon,
  CalendarIcon,
  JoinIcon,
  LevelIcon,
  BoltIcon,
  
  TargetIcon,
} from "./icons";
import { BattleIcon, BellIcon } from "@/app/components/sidebar/icons";
import { useSetPageHeader } from "@/app/context/PageHeaderContext";
import { Competition } from "@/app/lib/types/compete";
import { WalletCard } from "../wallet/components/WalletCard";

type Stat = {
  value: string;
  label: string;
  color: string;
  grad: string;
  icon: string;
};
const stats: Stat[] = [
  { value: "1", label: "Level", color: "#8a38f5", grad: "from-[#8a38f5] to-[#9f63ed]", icon: '/images/homeLevel.svg' },
  { value: "0", label: "XP", color: "#06b6d4", grad: "from-[#06b6d4] to-[#4acee4]", icon: '/images/homeXP.svg'},
  { value: "1", label: "Points", color: "#f59e0b", grad: "from-[#f39e0b] to-[#fcd89c]", icon: '/images/homePoints.svg' },
  { value: "₦0", label: "Won", color: "#0e9f37", grad: "from-[#0fa038] to-[#41cf69]", icon: '/images/homeWon.svg' },
];

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="relative h-[137px] flex-1 overflow-hidden rounded-[11px] border border-black/5 bg-white lg:h-[195px] lg:rounded-[16px]">
      {/* top colored glow */}
      <div
        className="pointer-events-none absolute -top-10 left-1/2 h-16 w-[160px] -translate-x-1/2 rounded-full opacity-30 blur-2xl"
        style={{ background: stat.color }}
      />
      {/* <div className="absolute left-1/2 top-0 h-[9px] w-[107px] -translate-x-1/2 rounded-b-full" style={{ background: stat.color }} /> */}
      <img src='/images/homeLevelBg.png' className="absolute top-0 left-1/2 -translate-x-1/2"/>
      <div className="relative flex h-full flex-col items-center gap-[7px] p-[10px] lg:gap-[11px] lg:p-[17px]">
        <img
          src={stat.icon}
          className={`flex h-[39px] lg:h-[56px] w-[39px] lg:w-[56px] items-center justify-center rounded-full  ${stat.grad}`}
        
        />
        
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-display text-[22px] font-bold leading-[30px] text-ink lg:text-[32px] lg:leading-[44px]">
            {stat.value}
          </span>
          <span className="font-display text-[13px] font-medium leading-4 text-ink/60 lg:text-[18px] lg:leading-6">
            {stat.label}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Level progress                                                    */
/* ------------------------------------------------------------------ */
function LevelProgress() {
  return (
    <div className="flex flex-col gap-3 rounded-[15px] border border-gold/[0.67] bg-gold/[0.13] px-[9px] py-3">
      <div className="flex items-center justify-between px-2">
        <span className="flex items-center gap-1 rounded-full border border-[#f8932a]/75 bg-[#f8932a]/[0.11] px-[5px] py-[3px] font-display text-[13px] font-medium text-[#f8932a]">
          🥉 Bronze
        </span>
        <span className="font-display text-[13px] font-medium leading-4 text-black/80">
          Level 1 · 500 XP needed
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="h-[11px] w-full overflow-hidden rounded-full bg-[#f9e9bb]">
          <div className="h-full rounded-full bg-[#f8932a]" style={{ width: "23%" }} />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-display text-[13px] font-normal text-black/60">0 XP</span>
          <span className="font-display text-[13px] font-medium text-black/60">23% to Level 2</span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Quick battle banner                                               */
/* ------------------------------------------------------------------ */
function QuickBattleBanner() {
  return (
    <div className="relative flex h-[95px] items-center overflow-hidden rounded-[22px] bg-gradient-to-r from-[#dc460b] to-[#ec4a0c] px-4 lg:h-[124px] lg:px-7">
      <div className="relative z-10 flex items-center gap-3 lg:gap-5">
        
        <div className="flex flex-col gap-1">
          <span className="font-display text-[14px] font-semibold text-white">Ready to battle?</span>
          <div className="flex gap-[38px]"><span className="font-display text-[22px] font-bold leading-[24px] text-white lg:text-[26px] lg:leading-[28px]">Quick Battle</span>
          <button className="flex lg:hidden relative z-10  items-center gap-2 rounded-full bg-white px-3 py-[5px] font-display text-[10px] font-bold text-[#6b270d] lg:ml-7 lg:text-[13px]">
        Play Now
        <ChevronRightIcon className="h-3.5 w-3.5" />
      </button></div>
          <span className="font-display text-[12px] font-normal text-white/90">
            Matched in seconds • XP every win
          </span>
        </div>
        <button className="hidden lg:flex relative z-10  items-center gap-2 rounded-full bg-white px-3 py-[5px] font-display text-[10px] font-bold text-[#6b270d] lg:ml-7 lg:text-[13px]">
        Play Now
        <ChevronRightIcon className="h-3.5 w-3.5" />
      </button>
      </div>

      
      <div className="absolute  z-10 flex translate-x-[500%] -translate-y-[5%] items-center justify-center">
        {/* rays behind the badge */}
        <Image
          src="/images/Rays.svg"
          alt=""
          width={300}
          height={300}
          className="pointer-events-none absolute left-1/2 -top-[10px] w-[280px] max-w-none -translate-x-1/2 "
        />
        <div
          className="relative flex h-[104px] w-[104px] items-center justify-center rounded-full border-[2.34px] border-transparent shadow-[0px_10.54px_13.94px_0px_#FFFFFFCF]"
          style={{
            background:
              "linear-gradient(#e9490c, #e9490c) padding-box, linear-gradient(to bottom, #f7cdbd, #ffffff) border-box",
          }}
        >
          <Image src="/images/banner-coin.png" alt="" width={104} height={104} className="h-[100px] w-[100px] object-contain rounded-full" />
        </div>
      </div>

      <Image
        src="/images/banner-coins.png"
        alt=""
        width={1536}
        height={1024}
        className="pointer-events-none absolute -bottom-4 lg:bottom-0 right-0 h-[150px] w-[120px] object-cover object-right scale-[1.2]"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 45%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 45%)",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Competition cards                                                 */
/* ------------------------------------------------------------------ */
type Tier = {
  tier: string;
  title: string;
  prize: string;
  entry: string;
  players: string;
  pct: number;
  prizeColor: string;
  header: string;
  border: string;
  prizeBox: string;
  bar: string;
  btn: string;
  bg: string
};
const competitions: Tier[] = [
  {
    tier: "Gold Tier · league", title: "Nigeria Premier League Quiz", prize: "₦50,000", entry: "₦5,000",
    players: "6/100 players", pct: 50, prizeColor: "#cf9b09",
    header: "from-[#fff3d6] to-white", border: "border-gold/25", bg: "bg-[url('/images/gold.png')] bg-cover bg-center",
    prizeBox: "bg-[#fff6de] border-gold/40", bar: "from-[#ffdf83] to-[#fcc11a]",
    btn: "bg-gold text-ink/70 border-gold-deep",
  },
  {
    tier: "Silver Tier · cup", title: "Sports Champions Cup", prize: "₦20,000", entry: "₦2,000",
    players: "19/50 players", pct: 24, prizeColor: "#1e1e1e",
    header: "from-[#ededeb] to-white", border: "border-stone/25", bg: "bg-[url('/images/silver.png')] bg-cover bg-center",
    prizeBox: "bg-white/70 border-stone/40", bar: "from-[#bbb8b6] to-[#999999]",
    btn: "bg-[#97918b] text-white border-black/40",
  },
  {
    tier: "Sapphire Tier · mini cup", title: "Daily Grind Mini Cup", prize: "₦5,000", entry: "₦500",
    players: "0/30 players", pct: 0, prizeColor: "#0f8cba",
    header: "from-[#e3f1f8] to-white", border: "border-[#0f52ba]/20", bg: "bg-[url('/images/sapphire.png')] bg-cover bg-center",
    prizeBox: "bg-[#0f7bba]/[0.07] border-[#0f52ba]/40", bar: "from-[#6490d5] to-[#0f7bba]",
    btn: "bg-[#0f7bba] text-white border-[#066182]",
  },
  {
    tier: "Bronze Tier · daily", title: "Beat the Time Challenge", prize: "₦10,000", entry: "₦500",
    players: "0/200 players", pct: 0, prizeColor: "#d9961b",
    header: "from-[#fdf3e1] to-white", border: "border-[#d9961b]/25", bg: "bg-[url('/images/bronze.png')] bg-cover bg-center",
    prizeBox: "bg-[#d9961b]/[0.07] border-[#d9961b]/40", bar: "from-[#f0bb5a] to-[#d9961b]",
    btn: "bg-[#d9961b] text-white border-[#b47445]",
  },
   {
    tier: "Diamond Tier · daily", title: "Beat the Time Challenge", prize: "₦10,000", entry: "₦500",
    players: "0/200 players", pct: 32, prizeColor: "#0e9f37",
    header: "from-[#fdf3e1] to-white", border: "border-[#0e9f37]/25", bg: "bg-[url('/images/diamond.png')] bg-cover bg-center",
    prizeBox: "bg-[#0e9f37]/[0.07] border-[#0e9f37]/40", bar: "from-[#6BD789] to-[#0e9f37]",
    btn: "bg-[#0e9f37] text-white border-[#157831]",
  },
];

function CompetitionCard({ c }: { c: Tier }) {
  return (
    <div className={`flex flex-1 flex-col overflow-hidden rounded-[28px] bg-white border lg:rounded-[20px] ${c.border}`}>
      <div className={`flex flex-col `}>
        <div className={`flex items-center justify-between  p-[15px] pt-[80px] ${c.bg}`}>
          <span className={`font-display text-[12px] font-medium uppercase rounded-full tracking-wide text-black/60 py-[2px] px-[10px] ${c.btn}`}>
            {c.tier}
          </span>
          <span className="flex items-center gap-1 font-display text-[12px] font-semibold text-black/60">
            <ClockIcon className="h-3.5 w-3.5" />
            Started
          </span>
        </div>
        <h3 className="font-display text-[18px] font-bold leading-[22px] text-black/80 mx-[15px] py-[11px] lg:text-[14px] lg:leading-[17px]">{c.title}</h3>
        <div className={`flex flex-col gap-0.5 rounded-[12px] border mx-[15px] mb-[27px] p-3 ${c.prizeBox}`}>
          <span className="font-display text-[12px] font-normal text-black/60">Prize Pool</span>
          <div className="flex items-end justify-between">
            <span className="font-display text-[16px] font-bold leading-5" style={{ color: c.prizeColor }}>
              {c.prize}
            </span>
            <span className="font-display text-[12px] font-semibold text-black/60">Entry: {c.entry}</span>
          </div>
        </div>
      </div>

      <div className={`flex flex-col gap-2.5 px-[15px] pb-[15px]`}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 font-display text-[10px] font-semibold text-black/60">
              <UsersIcon className="h-3.5 w-3.5 text-stone" />
              {c.players}
            </span>
            <span className="font-display text-[10px] font-semibold text-black/60">{c.pct}%</span>
          </div>
          <div className="h-[11px] w-full overflow-hidden rounded-full bg-[#f1f1ef]">
            <div className={`h-full rounded-full bg-gradient-to-r ${c.bar}`} style={{ width: `${c.pct}%` }} />
          </div>
        </div>
        <button className={`mt-1 rounded-full border py-2 font-display text-[16px] font-semibold ${c.btn}`}>
          Join Competition
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Top players + recent activity                                     */
/* ------------------------------------------------------------------ */
function PlayerAvatar({ cell, className = "" }: { cell: number; className?: string }) {
  const col = cell % 3;
  const row = Math.floor(cell / 3);
  return (
    <span
      className={`block rounded-full bg-cover ${className}`}
      style={{
        backgroundImage: "url(/images/auth-avatars.png)",
        backgroundSize: "300% 400%",
        backgroundPosition: `${(col / 2) * 100}% ${(row / 3) * 100}%`,
      }}
    />
  );
}

const players = [
  { name: "oganibi", pts: "320 pts", medal: "🥇", cell: 0, rank: null, you: false },
  { name: "jhoneyume", pts: "80 pts", medal: "🥈", cell: 4, rank: null, you: false },
  { name: "clintonadabanya", pts: "70 pts", medal: "🥉", cell: 7, rank: null, you: false },
  { name: "chibudom", pts: "70 pts", medal: null, cell: 9, rank: "4", you: false },
  { name: "emgee (you)", pts: "0 pts", medal: null, cell: 10, rank: "5", you: true },
];

function SectionHeader({
  icon, title, action = "All",
}: { icon: React.ReactNode; title: string; action?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-1.5 font-display text-[18px] font-semibold text-black/80 lg:text-[16px]">
        {icon}
        {title}
      </span>
      <span className="flex items-center gap-1 font-display text-[14px] font-semibold text-[#e9ad01] lg:text-[12px]">
        {action}
        <ChevronRightIcon className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}

function TopPlayers() {
  return (
    <div className="flex flex-col gap-[21px]">
      <SectionHeader icon={<TrendUpIcon className="h-6 w-6 text-[#e9ad01] lg:h-5 lg:w-5" />} title="Top Players" />
      <div className="flex flex-col gap-2">
        {players.map((p) => (
          <div
            key={p.name}
            className={`flex items-center justify-between rounded-[20px] px-3 py-[14px] lg:py-[17px] ${
              p.you ? "border border-gold/[0.68] bg-[#feefc3]" : "bg-[#f5f4f1]"
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="flex w-[23px] justify-center text-[18px] leading-none">
                {p.medal ?? <span className="font-display text-[14px] font-semibold text-black/80">{p.rank}</span>}
              </span>
              <PlayerAvatar cell={p.cell} className="h-[37px] w-[37px]" />
              <div className="ml-2 flex flex-col gap-1">
                <span className="font-display text-[14px] font-semibold leading-[17px] text-black/80">{p.name}</span>
                <span className="w-fit rounded-[71px] border border-gold/45 bg-[#f39736] px-[7px] py-[3px] font-display text-[11px] font-semibold leading-none text-white">
                  Bronze
                </span>
              </div>
            </div>
            <span className="font-display text-[14px] font-semibold text-black/80">{p.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const activities = [
  { icon: <VoucherIcon className="h-3.5 w-3.5 text-[#e9ad01]" />, iconBg: "bg-gold/20", title: "Entry fee — Beat the Time...", amount: "-₦1,000", amountColor: "text-[#e9ad01]" },
  { icon: <ArrowUpIcon className="h-3 w-3 text-win" />, iconBg: "bg-[#e1efe2]", title: "Wallet funded via Paystack", amount: "-₦10,000", amountColor: "text-win" },
];

function RecentActivity() {
  return (
    <div className="flex flex-col gap-[21px]">
      <SectionHeader icon={<ClockIcon className="h-6 w-6 text-[#e9ad01] lg:h-5 lg:w-5" />} title="Recent Activity" />
      <div className="flex flex-col gap-2.5 rounded-[20px] bg-gray-100 p-3">
        {activities.map((a, i) => (
          <div key={i}>
            {i > 0 && <div className="mb-2.5 h-px w-full bg-stone/10" />}
            <div className="flex items-start gap-2">
              <span className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${a.iconBg}`}>
                {a.icon}
              </span>
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[12px] font-semibold text-black/80">{a.title}</span>
                  <span className={`font-display text-[12px] font-semibold ${a.amountColor}`}>{a.amount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-[10px] font-normal text-black/60">15d ago</span>
                  <span className="rounded-full bg-win/10 px-2 py-0.5 font-display text-[10px] font-medium text-win">
                    Success
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Quick-play row                                                    */
/* ------------------------------------------------------------------ */
const quickPlay = [
  { icon: <StormIcon className="h-7 w-4 text-gold" />, title: "Beat the Time", sub: "20 Questions fastest" },
  { icon: <CalendarIcon className="h-[26px] w-[26px] text-gold" />, title: "In What Year", sub: "Historical dates" },
  { icon: <JoinIcon className="h-7 w-7 text-gold" />, title: "Tag Tam", sub: "2v2 quiz battle" },
];

function QuickPlayRow() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-1.5">
        <BattleIcon className="h-5 w-5 text-[#edbd33] lg:h-4 lg:w-4" />
        <span className="font-display text-[18px] font-semibold text-black/80 lg:text-[16px]">Active Competitions</span>
      </div>
      <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3">
        {quickPlay.map((q) => (
          <div
            key={q.title}
            className="flex items-center gap-4 rounded-[16px] border border-gold/[0.38] bg-[#fff9eb]/[0.32] px-[17px] py-[18px]"
          >
            <span className="flex h-8 w-8 items-center justify-center">{q.icon}</span>
            <div className="flex flex-1 items-center justify-between">
              <div className="flex flex-col">
                <span className="font-display text-[14px] font-semibold text-black/80">{q.title}</span>
                <span className="font-display text-[10px] font-semibold text-black/60">{q.sub}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-display text-[12px] font-semibold text-[#d9961b]">-₦1,000</span>
                <span className="font-display text-[10px] font-normal text-black/60">-₦1,000</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function DashboardHome() {
  useSetPageHeader({
    
    button: <BellIcon fill='black' className="h-[26px] w-[26px] text-ink-900" />,
    onButtonClick: () => console.log("bolt clicked"),
  });

  return (
    <div className="mx-auto flex w-full flex-col gap-4 lg:gap-6">
      {/* wallet + stats */}
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <WalletCard />
        <div className="grid flex-1 grid-cols-4 lg:grid-cols-2 gap-2.5 sm:flex sm:gap-2.5">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>

      <LevelProgress />
      <QuickBattleBanner />

      <div className='block lg:hidden w-full flex justify-between items-center my-[45px]'>
        <div className='flex gap-[15px]'>
<svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.0173 37.854C41.0173 37.854 34.7608 43.7254 26.4878 43.7254C18.2148 43.7254 11.9625 37.854 11.9625 37.854C11.9625 37.854 10.799 32.2683 13.8051 22.6248C15.3909 17.5401 37.9573 17.0225 39.7254 21.4696C42.7315 29.0179 41.0173 37.854 41.0173 37.854Z" fill="#424242"/>
<path d="M11.9626 37.8537L13.946 39.4437C13.946 39.4437 13.9294 36.2969 14.9025 33.3612C15.2669 32.2639 16.567 31.8043 17.5442 32.4212L25.1174 37.1705C25.5326 37.4305 26.0118 37.57 26.5016 37.5737C26.9914 37.5773 27.4726 37.4449 27.8916 37.1912C31.5105 34.9967 40.9512 29.2537 41.3818 28.9017C41.3818 28.9017 41.3818 28.1937 41.2037 27.291L11.855 27.3283L11.9626 37.8537Z" fill="#212121"/>
<path d="M50.8514 21.5435L27.3326 35.5513C26.8192 35.8577 26.1774 35.8577 25.6598 35.5513L2.14936 21.5435C1.49514 21.1543 1.49514 20.2061 2.14936 19.8169L25.6681 5.80915C26.1815 5.50274 26.8233 5.50274 27.3409 5.80915L50.8597 19.8169C51.5097 20.2061 51.5097 21.1543 50.8514 21.5435Z" fill="#424242"/>
<path d="M26.5164 34.5241C26.5123 34.5241 26.504 34.5282 26.4998 34.5282C26.4336 34.5282 26.3673 34.5117 26.3094 34.4744L1.73061 20.3052C1.73061 20.3052 1.61054 20.5329 1.73061 20.9428C1.85483 21.3528 2.0453 21.4853 2.14882 21.5474L25.6676 35.5551C25.9243 35.7083 26.2141 35.787 26.504 35.787H26.5205V34.5241H26.5164Z" fill="#9E9E9E"/>
<path d="M26.5 34.5241C26.5041 34.5241 26.5124 34.5282 26.5166 34.5282C26.5828 34.5282 26.6491 34.5117 26.707 34.4744L51.2858 20.3052C51.2858 20.3052 51.4058 20.5329 51.2858 20.9428C51.1616 21.3528 50.9711 21.4853 50.8676 21.5474L27.3488 35.5551C27.0921 35.7083 26.8023 35.787 26.5124 35.787H26.4958V34.5241H26.5Z" fill="#616161"/>
<path d="M14.6782 29.0093L14.8107 27.8458C14.8107 27.8458 24.9594 22.3263 25.9614 21.7466C26.9635 21.1669 28.0152 20.521 28.4831 20.0034C29.3112 19.0925 28.7149 18.5211 28.7149 18.5211C28.7149 18.5211 28.0607 19.5811 26.4997 19.3948C25.6053 19.2871 24.4418 18.5625 24.2472 18.223C24.0526 17.8834 12.7901 26.4628 12.7901 26.4628L12.7114 27.8416L14.6782 29.0093Z" fill="#424242"/>
<path d="M28.715 18.5252C27.6302 20.0406 25.7917 19.3781 25.7917 19.3781C25.7917 19.3781 20.0321 22.1399 19.8168 21.7217C19.6015 21.3035 24.5744 18.7446 24.5744 18.7446C24.5744 18.7446 24.297 17.726 24.326 17.2913C24.326 17.2913 15.3325 23.0136 11.9579 24.939C10.1899 25.9493 9.81306 26.9017 9.8172 28.2432C9.8172 28.8312 9.82548 30.74 9.83376 31.8787C9.83376 32.0899 9.74267 32.2886 9.58118 32.4211C9.33664 32.6214 9.1396 32.8735 9.00428 33.1592C8.86895 33.4449 8.7987 33.7571 8.79861 34.0732C8.79861 34.7067 9.07603 35.274 9.51493 35.6674C9.75095 35.8785 9.70126 36.334 9.72197 36.628C9.76337 37.1911 9.72197 37.4478 9.49009 37.9695C9.26236 38.4788 9.05118 39.0006 8.90626 39.5388C8.79447 39.9529 8.71993 40.3794 8.6454 40.8017C8.15267 43.6298 7.92908 46.6524 6.62478 49.2527C6.60022 49.3013 6.58555 49.3543 6.58163 49.4086C6.57771 49.463 6.58462 49.5175 6.60196 49.5691C6.61929 49.6207 6.64671 49.6684 6.68261 49.7093C6.71851 49.7503 6.76219 49.7837 6.81111 49.8076C6.90945 49.8572 7.02344 49.8659 7.12817 49.8318C7.23291 49.7976 7.31988 49.7234 7.37009 49.6254C8.04915 48.2714 8.40111 46.7891 8.69095 45.3191C8.67439 46.6483 8.66611 47.9899 8.62056 49.4391C8.61228 49.7206 8.59158 50.2879 8.84829 50.4121C9.81306 50.88 9.81306 49.4391 9.81306 49.4391C9.81306 49.4391 9.82548 50.7351 11.1381 50.7351C12.4506 50.7351 12.5459 49.4391 12.5459 49.4391C12.5459 49.4391 12.6411 50.6274 13.316 50.5695C13.5893 50.5446 13.9495 50.379 13.8212 48.9588C13.6928 47.5427 13.374 42.4663 13.2374 40.8597C13.0469 38.6362 12.3181 37.3153 12.1691 36.5286C12.1152 36.2305 12.1111 35.9199 12.3471 35.7253C12.5873 35.5285 12.7818 35.2817 12.917 35.0021C13.0522 34.7226 13.1249 34.4169 13.13 34.1064C13.1351 33.7959 13.0725 33.488 12.9466 33.2041C12.8207 32.9202 12.6345 32.6672 12.401 32.4625C12.3179 32.39 12.2529 32.299 12.2112 32.197C12.1696 32.0949 12.1523 31.9845 12.1608 31.8745C12.2395 30.8021 12.3264 29.2452 12.3968 28.885C12.7032 27.266 13.5024 26.9762 14.3222 26.4959C15.142 26.0114 27.0174 20.6203 27.7088 20.1607C28.9883 19.3036 28.715 18.5252 28.715 18.5252Z" fill="#E2A610"/>
<path d="M28.715 18.5252C27.6923 19.9702 25.5681 19.3243 25.5681 19.3243C25.5681 19.3243 20.1398 21.73 20.5 21.2952C20.8561 20.8605 24.5744 18.7446 24.5744 18.7446C24.5744 18.7446 24.297 17.726 24.326 17.2913C24.326 17.2913 15.1752 22.5788 11.6267 25.1212C10.7116 25.7795 9.57704 26.8561 10.5004 27.9285C10.9269 28.4213 11.7509 28.5248 12.2767 28.1356C12.5956 27.9037 12.844 27.5641 13.1256 27.295C13.4734 26.9555 13.8957 26.7402 14.3098 26.4959C15.1296 26.0114 27.0049 20.6203 27.6964 20.1607C28.9883 19.3036 28.715 18.5252 28.715 18.5252Z" fill="#FFCA28"/>
<path d="M10.8108 38.036C10.2642 38.036 9.89568 37.9905 9.56029 37.9118C9.50045 37.8981 9.44751 37.8635 9.41105 37.8141C9.37458 37.7647 9.35702 37.7039 9.36154 37.6427L9.46919 36.061C9.48161 35.8995 9.63482 35.7877 9.79216 35.8332C10.1648 35.9409 10.9101 36.0486 12.1275 35.7918C12.2765 35.7587 12.4256 35.8622 12.4422 36.0154L12.6078 37.5889C12.6202 37.7172 12.5374 37.8373 12.4132 37.8663C11.7797 38.0112 11.3201 38.036 10.8108 38.036Z" fill="#9E740B"/>
<path d="M41.0169 37.8539C41.0169 37.8539 41.7498 34.028 41.4559 29.9577C41.4062 29.2704 40.9838 28.6783 40.6567 31.084C40.4704 32.4628 40.0646 36.591 39.3731 39.1706C40.429 38.4087 41.0169 37.8539 41.0169 37.8539ZM27.2162 15.2337C27.5185 15.3289 27.7959 15.5608 27.8746 15.8713C27.9781 16.2854 27.7173 16.6994 27.4357 17.0224C26.885 17.6559 26.1273 18.2108 25.2867 18.1818C25.0093 18.1735 24.7112 18.0824 24.5414 17.863C24.4213 17.7097 24.3799 17.511 24.3675 17.3164C24.293 15.8962 25.8995 14.8196 27.2162 15.2337Z" fill="#616161"/>
</svg>
<div>
  <p className="text-[18px] font-semibold text-[#000000CC] mb-1">Answer Practice Questions</p>
  <p className="text-sm text-[#00000099]">Fortify yourself by answering questions for practice</p>
</div>
        </div>
        <ChevronRightIcon  className="h-[36px] w-[18px]" stroke='#97918B'/>
      </div>

      {/* two-column area */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* active competitions */}
        <div className="flex flex-col gap-[21px] lg:w-[615px]">
          <SectionHeader
            icon={<span className="h-3 w-3 rounded-full bg-win lg:h-2 lg:w-2" />}
            title="Active Competitions"
            action="View all"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {competitions.map((c) => (
              <CompetitionCard key={c.title} c={c} />
            ))}
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-1 flex-col gap-6">
          <TopPlayers />
          <RecentActivity />
        </div>
      </div>

      <QuickPlayRow />
    </div>
  );
}
