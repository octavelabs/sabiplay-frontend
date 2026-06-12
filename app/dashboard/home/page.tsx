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
  TrophyIcon,
  TargetIcon,
} from "./icons";
import { WalletCard } from "../../components/WalletCard";

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
    <div className="relative h-[195px] flex-1 overflow-hidden rounded-[16px] border border-black/5 bg-white sm:w-[134px] sm:flex-none">
      {/* top colored glow */}
      <div
        className="pointer-events-none absolute -top-10 left-1/2 h-16 w-[160px] -translate-x-1/2 rounded-full opacity-30 blur-2xl"
        style={{ background: stat.color }}
      />
      {/* <div className="absolute left-1/2 top-0 h-[9px] w-[107px] -translate-x-1/2 rounded-b-full" style={{ background: stat.color }} /> */}
      <img src='/images/homeLevelBg.png' className="absolute top-0 left-1/2 -translate-x-1/2"/>
      <div className="relative flex h-full flex-col items-center gap-[11px] p-[17px]">
        <img
          src={stat.icon}
          className={`flex h-[56px] w-[56px] items-center justify-center rounded-full  ${stat.grad}`}
        
        />
        
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-display text-[32px] font-bold leading-[44px] text-ink">
            {stat.value}
          </span>
          <span className="font-display text-[18px] font-medium leading-6 text-ink/60">
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
    <div className="relative flex h-[124px] items-center overflow-hidden rounded-[22px] bg-gradient-to-r from-[#dc460b] to-[#ec4a0c] px-7">
      <div className="relative z-10 flex items-center gap-5">
        
        <div className="flex flex-col gap-1">
          <span className="font-display text-[14px] font-semibold text-white">Ready to battle?</span>
          <span className="font-display text-[26px] font-bold leading-[28px] text-white">Quick Battle</span>
          <span className="font-display text-[12px] font-normal text-white/90">
            Matched in seconds • XP every win
          </span>
        </div>
        <button className="relative z-10 ml-7 flex items-center gap-2 rounded-full bg-white px-3 py-[5px] font-display text-[13px] font-bold text-[#6b270d]">
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
        className="pointer-events-none absolute bottom-0 right-0 h-[150px] w-[120px] object-cover object-right scale-[1.2]"
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
];

function CompetitionCard({ c }: { c: Tier }) {
  return (
    <div className={`flex flex-1 flex-col overflow-hidden rounded-[20px] bg-white border ${c.border}`}>
      <div className={`flex flex-col   ${c.header}`}>
        <div className={`flex items-center justify-between  p-[15px] pt-[80px] ${c.bg} border-b`}>
          <span className={`font-display text-[12px] font-medium uppercase rounded-full tracking-wide text-black/60 py-[2px] px-[10px] ${c.btn}`}>
            {c.tier}
          </span>
          <span className="flex items-center gap-1 font-display text-[12px] font-semibold text-black/60">
            <ClockIcon className="h-3.5 w-3.5" />
            Started
          </span>
        </div>
        <h3 className="font-display text-[14px] font-bold leading-[17px] text-black/80 mx-[15px] py-[11px]">{c.title}</h3>
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
      <span className="flex items-center gap-1.5 font-display text-[16px] font-semibold text-black/80">
        {icon}
        {title}
      </span>
      <span className="flex items-center gap-1 font-display text-[12px] font-semibold text-[#e9ad01]">
        {action}
        <ChevronRightIcon className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}

function TopPlayers() {
  return (
    <div className="flex flex-col gap-[21px]">
      <SectionHeader icon={<TrendUpIcon className="h-5 w-5 text-[#e9ad01]" />} title="Top Players" />
      <div className="flex flex-col gap-2">
        {players.map((p) => (
          <div
            key={p.name}
            className={`flex items-center justify-between rounded-[20px] px-3 py-[17px] ${
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
      <SectionHeader icon={<ClockIcon className="h-5 w-5 text-[#e9ad01]" />} title="Recent Activity" />
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
        <TrophyIcon className="h-5 w-5 text-[#edbd33]" />
        <span className="font-display text-[16px] font-semibold text-black/80">Active Competitions</span>
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
  return (
    <div className="mx-auto flex w-full  flex-col gap-6">
      {/* wallet + stats */}
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <WalletCard />
        <div className="grid flex-1 grid-cols-2 gap-2.5 sm:flex sm:gap-2.5">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>
      </div>

      <LevelProgress />
      <QuickBattleBanner />

      {/* two-column area */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* active competitions */}
        <div className="flex flex-col gap-[21px] lg:w-[615px]">
          <SectionHeader
            icon={<span className="h-2 w-2 rounded-full bg-win" />}
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
