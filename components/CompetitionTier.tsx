export type Tier = {
  badge: string;
  badgeClass: string;
  prize: string;
  title: string;
  entry: string;
  players: string;
  medal: string;
  rowClass: string;
  titleClass: string;
  metaClass: string;
  prizeClass: string;
};

export const tiers: Tier[] = [
  {
    badge: "Gold",
    badgeClass: "bg-[#f8932a]/90 text-white",
    prize: "₦50,000",
    title: "National Championship",
    entry: "Entry: ₦2,000",
    players: "14/16 players",
    medal: "🥇",
    rowClass: "bg-gold border-2 border-[#f8932a]/[0.53]",
    titleClass: "text-ink/70",
    metaClass: "text-black/60",
    prizeClass: "text-black",
  },
  {
    badge: "Silver",
    badgeClass: "bg-[#fdffff]/80 text-[#2f2d2d]/60",
    prize: "₦20,000",
    title: "Weekly League",
    entry: "Entry: ₦1,000",
    players: "28/32 players",
    medal: "🥈",
    rowClass: "bg-[#b8b6b4] border-2 border-stone",
    titleClass: "text-ink/70",
    metaClass: "text-black/60",
    prizeClass: "text-black",
  },
  {
    badge: "Bronze",
    badgeClass: "bg-[#f39736] text-white",
    prize: "₦20,000",
    title: "Campus Cup",
    entry: "Entry: ₦500",
    players: "7/16 players",
    medal: "🥉",
    rowClass: "bg-[#d57c1f] border-2 border-gold/[0.52]",
    titleClass: "text-white",
    metaClass: "text-white",
    prizeClass: "text-[#fdffff]",
  },
];

export function TierRow({
  tier,
  compact = false,
}: {
  tier: Tier;
  compact?: boolean;
}) {
  const radius = compact ? "rounded-[13px]" : "rounded-[19px]";
  const pad = compact ? "px-3.5 py-3" : "px-[22px] py-4";
  const badge = compact ? "text-[14px] leading-[17px] px-2 py-0.5" : "text-[16px] leading-5 px-2.5 py-1";
  const prize = compact ? "text-[14px] leading-[17px]" : "text-[16px] leading-5";
  const title = compact ? "text-[14px] leading-[19px]" : "text-[20px] leading-[27px]";
  const meta = compact ? "text-[14px] leading-[17px]" : "text-[13px] leading-4";
  const medal = compact ? "text-[49px] right-7" : "text-[80px] right-10";

  return (
    <div className={`relative overflow-hidden ${radius} ${pad} ${tier.rowClass}`}>
      <span
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 leading-none opacity-90 ${medal}`}
      >
        {tier.medal}
      </span>
      <div className="relative flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span
            className={`rounded-pill font-display font-semibold ${badge} ${tier.badgeClass}`}
          >
            {tier.badge}
          </span>
          <span className={`font-body ${prize} ${tier.prizeClass}`}>{tier.prize}</span>
        </div>
        <h3 className={`font-display font-semibold ${title} ${tier.titleClass}`}>
          {tier.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className={`font-body ${meta} ${tier.metaClass} opacity-90`}>
            {tier.entry}
          </span>
          <span className={`font-body ${meta} ${tier.metaClass} opacity-70`}>
            {tier.players}
          </span>
        </div>
      </div>
    </div>
  );
}
