"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSetPageHeader } from "../../context/PageHeaderContext";
import { Modal } from "../../components/Modal";
import { UsersIcon, ClockIcon, ChevronRightIcon, TrophyIcon } from "../home/icons";

/** Turn a competition title into a URL slug for the detail route. */
const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* ------------------------------------------------------------------ */
/*  Filter tabs                                                       */
/* ------------------------------------------------------------------ */
const TABS = [
  { label: "All" },
  { label: "My Competitions", badge: 2 },
  { label: "League" },
  { label: "Cup" },
  { label: "Mini Cup" },
  { label: "Daily" },
  { label: "Battles" },
];

function Tabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (label: string) => void;
}) {
  return (
    <div className="flex max-w-full overflow-auto gap-3.5 scrollbar-hide">
      {TABS.map((t) => {
        const on = active === t.label;
        return (
          <button
            key={t.label}
            onClick={() => onChange(t.label)}
            className={`flex items-center gap-2 rounded-full px-3 py-2 font-display text-[16px] whitespace-nowrap font-medium leading-none transition-colors ${
              on
                ? "border border-gold-deep/[0.53] bg-gold text-[#615e53]"
                : "bg-gold/[0.13] text-ink/70 hover:bg-gold/20"
            }`}
          >
            {t.label}
            {t.badge && (
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gold font-display text-[12px] font-semibold text-ink">
                {t.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-[20px]  px-6 py-14 text-center">
      <img src='/images/trophy.svg' className="w-[81px] h-[81px]"/>
      <p className="font-display text-[16px] font-normal text-black/45">
        Check back soon — new ones open daily
      </p>
      <h3 className="font-display text-[24px] font-bold leading-7 text-black/80">
        No competitions here
      </h3>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="h-2 w-2 rounded-full bg-win" />
      <span className="font-display text-[16px] font-semibold leading-5 text-black/80">
        {children}
      </span>
    </div>
  );
}

const CheckMini = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5">
    <path d="m5 13 4 4L19 7" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Joined card                                                       */
/* ------------------------------------------------------------------ */
type Joined = {
  tier: string;
  title: string;
  prize: string;
  players: string;
  pct: number;
  color: string;
  cardBg: string;
  border: string;
  bar: string;
  btn: string;
};

const joined: Joined[] = [
  {
    tier: "Sapphire Tier", title: "Daily Grind Mini Cup", prize: "₦5,000", players: "3/20 players", pct: 50,
    color: "#0f7bba", cardBg: "bg-[url('/images/sapphire.png')] bg-cover bg-center", border: "border-[#0f52ba]/25", bar: "from-[#6490d5] to-[#0f7bba]", btn: "bg-[#0f7bba] border-[#066182]",
  },
  {
    tier: "Bronze Tier", title: "Daily Grind Mini Cup", prize: "₦10,000", players: "3/20 players", pct: 50,
    color: "#d9961b", cardBg: "bg-[url('/images/gold.png')] bg-cover bg-center", border: "border-gold/25", bar: "from-[#ffdf83] to-[#fcc11a]", btn: "bg-[#d9961b] border-[#b47445]",
  },
];

function JoinedCard({ c, onView }: { c: Joined; onView: () => void }) {
  return (
    <div className={`flex flex-col gap-[15px] rounded-[20px] border px-6 py-5 ${c.border} ${c.cardBg}`}>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="font-display text-[12px] font-medium uppercase tracking-wide text-black/60">
            {c.tier}
          </span>
          <span className="flex items-center gap-1 font-display text-[12px] font-semibold" style={{ color: c.color }}>
            <TrophyIcon className="h-3.5 w-3.5" />
            {c.prize}
          </span>
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-[14px] font-bold leading-5 text-black/80">{c.title}</h3>
          <span className="flex w-fit items-center gap-1 rounded-full border border-win bg-win/10 px-[9px] py-0.5 font-display text-[10px] font-semibold text-win">
            <CheckMini />
            Joined
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between font-display text-[10px] font-semibold text-black/60">
          <span>{c.players}</span>
          <span>Started</span>
        </div>
        <div className="h-[11px] w-full overflow-hidden rounded-full bg-[#f1f1ef]">
          <div className={`h-full rounded-full bg-gradient-to-r ${c.bar}`} style={{ width: `${c.pct}%` }} />
        </div>
      </div>
      <button
        onClick={onView}
        className={`flex items-center justify-center gap-2 rounded-full border py-2 font-display text-[16px] font-semibold text-white ${c.btn}`}
      >
        View Competition
        <ChevronRightIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Other-games card                                                  */
/* ------------------------------------------------------------------ */
type Game = {
  tier: string;
  title: string;
  prize: string;
  entry: string;
  players: string;
  pct: number;
  prizeColor: string;
  cardBg: string;
  border: string;
  prizeBox: string;
  bar: string;
  btn: string;
};

const games: Game[] = [
  {
    tier: "Silver Tier · cup", title: "Sports Champions Cup", prize: "₦20,000", entry: "₦2,000", players: "19/50 players", pct: 24,
    prizeColor: "#1e1e1e", cardBg: "bg-[url('/images/silver.png')] bg-cover bg-center", border: "", prizeBox: "bg-white/60 border-stone/35", bar: "from-[#bbb8b6] to-[#999999]", btn: "bg-[#97918b] text-white border-black/40",
  },
  {
    tier: "Gold Tier · league", title: "Nigeria Premier League Quiz", prize: "₦50,000", entry: "₦5,000", players: "6/100 players", pct: 50,
    prizeColor: "#cf9b09", cardBg: "bg-[url('/images/gold.png')] bg-cover bg-center", border: "border-gold/25", prizeBox: "bg-[#fff6de] border-gold/40", bar: "from-[#ffdf83] to-[#fcc11a]", btn: "bg-gold text-ink/70 border-gold-deep",
  },
  {
    tier: "Bronze Tier · daily", title: "Test World Cup", prize: "₦57,600", entry: "₦500", players: "0/200 players", pct: 0,
    prizeColor: "#d9961b", cardBg: "bg-[url('/images/bronze.png')] bg-cover bg-center", border: "border-[#d9961b]/25", prizeBox: "bg-[#d9961b]/[0.07] border-[#d9961b]/40", bar: "from-[#f0bb5a] to-[#d9961b]", btn: "bg-[#d9961b] text-white border-[#b47445]",
  },
  {
    tier: "Diamond Tier · league", title: "Diamond League Season 1", prize: "₦100,000", entry: "₦5,000", players: "6/100 players", pct: 50,
    prizeColor: "#0e9f37", cardBg: "bg-[url('/images/diamond.png')] bg-cover bg-center", border: "border-win/25", prizeBox: "bg-win/[0.07] border-win/40", bar: "from-[#6bd789] to-[#0e9f37]", btn: "bg-win text-white border-[#157831]",
  },
];

function GameCard({ c, onJoin }: { c: Game; onJoin: () => void }) {
  return (
    <div className={`flex flex-col gap-3 rounded-[20px] border p-5 ${c.border} ${c.cardBg}`}>
      <div className="flex items-center justify-between">
        <span className="font-display text-[12px] font-medium uppercase tracking-wide text-black/60">
          {c.tier}
        </span>
        <span className="flex items-center gap-1 font-display text-[12px] font-semibold text-black/60">
          <ClockIcon className="h-3.5 w-3.5" />
          Started
        </span>
      </div>
      <h3 className="min-h-[34px] font-display text-[14px] font-bold leading-[17px] text-black/80">
        {c.title}
      </h3>
      <div className={`flex flex-col gap-1 rounded-[12px] border p-3 ${c.prizeBox}`}>
        <span className="font-display text-[12px] font-normal text-black/60">Prize Pool</span>
        <div className="flex items-end justify-between">
          <span className="font-display text-[16px] font-bold leading-5" style={{ color: c.prizeColor }}>
            {c.prize}
          </span>
          <span className="font-display text-[12px] font-semibold text-black/60">Entry: {c.entry}</span>
        </div>
      </div>
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
      <button
        onClick={onJoin}
        className={`mt-1 rounded-full border py-2 font-display text-[16px] font-semibold ${c.btn}`}
      >
        Join Competition
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Join confirmation modal                                           */
/* ------------------------------------------------------------------ */
function JoinModal({
  game,
  onConfirm,
  onClose,
}: {
  game: Game;
  onConfirm: () => void;
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-8 px-8 py-7">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-start justify-between gap-5">
            <div className="flex flex-col gap-[3px]">
              <span className="font-display text-[16px] font-bold leading-[23px] text-black/80">
                Join {game.title}?
              </span>
              <span className="font-display text-[14px] font-normal text-black/70">
                Entry fee will be deducted from your wallet
              </span>
            </div>
            <button onClick={onClose} aria-label="Close" className="mt-1 text-black">
              <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <span className="font-display text-[32px] font-bold text-[#dba409]">{game.prize}</span>
        </div>
        <div className="flex gap-2.5">
          <button
            onClick={onClose}
            className="flex-1 rounded-full bg-gold/[0.14] px-6 py-2 font-display text-[16px] font-semibold text-gold-deep"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-full border border-gold-deep bg-gold px-6 py-2 font-display text-[16px] font-semibold text-ink/70"
          >
            Pay &amp; Join
          </button>
        </div>
      </div>
    </Modal>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function ComputePage() {
  useSetPageHeader({
    title: "Compete",
    subtitle: "Choose your competition and play to win",
  });

  const router = useRouter();
  const [active, setActive] = useState("All");
  const [joinGame, setJoinGame] = useState<Game | null>(null);

  // Pre-open a join confirmation via ?join=<slug> (deep-link / preview).
  useEffect(() => {
    const j = new URLSearchParams(window.location.search).get("join");
    if (j) {
      const g = games.find((g) => slugify(g.title) === j);
      if (g) setJoinGame(g);
    }
  }, []);

  // TODO: drive from the endpoint response once tab filtering is wired up.
  // For now, simulate an empty result on the "Battles" tab.
  const hasCompetitions = active !== "Battles";

  return (
    <div className="mx-auto flex w-full flex-col gap-7">
      <Tabs active={active} onChange={setActive} />

      {hasCompetitions ? (
        <>
          <section className="flex flex-col gap-4">
            <SectionTitle>Games you joined</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {joined.map((c, i) => (
                <JoinedCard
                  key={i}
                  c={c}
                  onView={() => router.push(`/dashboard/compete/${slugify(c.title)}`)}
                />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <SectionTitle>Other Games</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {games.map((c) => (
                <GameCard key={c.title} c={c} onJoin={() => setJoinGame(c)} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <EmptyState />
      )}

      {joinGame && (
        <JoinModal
          game={joinGame}
          onClose={() => setJoinGame(null)}
          onConfirm={() => router.push(`/dashboard/compete/${slugify(joinGame.title)}`)}
        />
      )}
    </div>
  );
}
