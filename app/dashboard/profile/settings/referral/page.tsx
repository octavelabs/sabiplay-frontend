"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSetPageHeader } from "../../../../context/PageHeaderContext";

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */
type SVGProps = React.SVGProps<SVGSVGElement>;

const ArrowLeftIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const LinkIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const GiftIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8H7.5z" />
    <path d="M16.5 8a2.5 2.5 0 0 0 0-5C14 3 12 8 12 8h4.5z" />
  </svg>
);

const UserAddIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <line x1="19" y1="8" x2="19" y2="14" />
    <line x1="22" y1="11" x2="16" y2="11" />
  </svg>
);

const ShareIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const CrownIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M2 20h20M5 20 3 8l5 4 4-7 4 7 5-4-2 12" />
  </svg>
);

const MoneyIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
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
/*  Hero banner                                                        */
/* ------------------------------------------------------------------ */
function HeroBanner() {
  return (
    <div className="relative" style={{ paddingTop: 94 }}>
      {/* decorative floating coin illustration */}
      <div className="absolute right-[180px] top-0 flex h-[274px] w-[274px] items-center justify-center rounded-full bg-gradient-to-br from-gold to-[#f5a623] text-[100px] shadow-[0_8px_32px_rgba(245,166,35,0.35)]">
        💰
      </div>
      {/* banner */}
      <div className="relative h-[162px] overflow-hidden rounded-[20px] bg-[#e84d0b] px-8">
        {/* wave decorations */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border-2 border-white"
              style={{
                width: 80 + i * 60,
                height: 80 + i * 60,
                left: -20 + i * 20,
                top: -20 + i * 10,
                opacity: 0.4 - i * 0.05,
              }}
            />
          ))}
        </div>
        {/* text content */}
        <div className="relative flex h-full max-w-[415px] flex-col justify-center gap-2">
          <span className="w-fit rounded-full bg-gold px-3 py-[3px] font-display text-[11px] font-normal text-ink/60">
            Earn some ₦₦
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="font-display text-[34px] font-semibold leading-[38px] text-white">
              Refer a friend &amp; Earn
            </span>
            <span className="font-display text-[16px] font-normal text-white/80">
              for each friend that you invite
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Invite link row                                                    */
/* ------------------------------------------------------------------ */
function InviteLinkRow() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText("Sabiplay.app/invite/user/@emgee").catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="font-display text-[16px] font-normal text-black/50">
        Your invite link:
      </span>
      <div className="flex h-[50px] overflow-hidden rounded-[12px]">
        {/* link display */}
        <div className="flex flex-1 items-center justify-between gap-3 bg-[#f8f8f8] px-4">
          <span className="truncate font-display text-[15px] font-normal text-stone">
            Sabiplay.app/invite/user/@emgee
          </span>
          <LinkIcon className="h-5 w-5 shrink-0 text-stone" />
        </div>
        {/* copy button */}
        <button
          onClick={handleCopy}
          className="flex shrink-0 items-center justify-center bg-gold px-6 font-display text-[16px] font-medium text-ink/70 transition-opacity hover:opacity-90"
        >
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Summary cards                                                      */
/* ------------------------------------------------------------------ */
function SummaryCard({
  stripBg,
  icon,
  label,
  value,
  cardBg,
}: {
  stripBg: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  cardBg: string;
}) {
  return (
    <div className={`flex flex-1 flex-col overflow-hidden rounded-[16px] ${cardBg}`}>
      {/* colored strip with icon */}
      <div className={`relative flex h-[72px] items-center justify-center overflow-hidden ${stripBg}`}>
        {/* wave decorations */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full border-[6px] border-white" />
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border-[4px] border-white" />
        </div>
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
          {icon}
        </div>
      </div>
      {/* stats */}
      <div className="flex flex-col gap-0.5 px-5 py-4">
        <span className="font-display text-[18px] font-normal text-black/50">{label}</span>
        <span className="font-display text-[28px] font-semibold text-black/70">{value}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  How it works                                                       */
/* ------------------------------------------------------------------ */
const HOW_STEPS = [
  { icon: <ShareIcon className="h-4 w-4 text-black/50" />, text: "Share your invite link" },
  { icon: <CrownIcon className="h-4 w-4 text-black/50" />, text: "Your friend get ₦1000 upon signup" },
  { icon: <MoneyIcon className="h-4 w-4 text-[#e9ad01]" />, text: "You receive ₦2000 when your friend funds up to ₦5000" },
];

function HowItWorks() {
  return (
    <div className="flex w-[407px] shrink-0 flex-col gap-4">
      <span className="font-display text-[18px] font-medium text-black/80">
        How it works:
      </span>
      <div className="flex flex-col gap-5">
        {HOW_STEPS.map((s, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
              {s.icon}
            </span>
            <span className="font-display text-[16px] font-normal leading-[22px] text-black/50">
              {s.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Referral history                                                   */
/* ------------------------------------------------------------------ */
const REFERRALS = [
  { name: "Folarunsho", email: "Fola@gmail.com", cell: 2, bonus: "₦5000", date: "22 Apr 2024, 09:15" },
  { name: "Laura", email: "Lauraesio@gmail.com", cell: 5, bonus: "₦5000", date: "22 Apr 2024, 09:15" },
  { name: "Bolaji", email: "Bolaji.r@gmail.com", cell: 3, bonus: "₦5000", date: "22 Apr 2024, 09:15" },
  { name: "Chiomaokafor", email: "Chiomaokafor@gmail.com", cell: 8, bonus: "₦5000", date: "22 Apr 2024, 09:15" },
];

function ReferralHistory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <span className="font-display text-[18px] font-medium text-black/80">
        Referral History
      </span>
      <div className="flex flex-col gap-4">
        {REFERRALS.map((r) => (
          <div key={r.name} className="flex items-center justify-between">
            {/* avatar + name */}
            <div className="flex items-center gap-3">
              <Avatar cell={r.cell} className="h-[33px] w-[33px]" />
              <div className="flex flex-col gap-0.5">
                <span className="font-display text-[16px] font-medium text-black">
                  {r.name}
                </span>
                <span className="font-display text-[12px] font-normal text-[#1e1e1e]/60">
                  {r.email}
                </span>
              </div>
            </div>
            {/* bonus + date */}
            <div className="flex flex-col items-end gap-1">
              <span className="rounded-full bg-win/10 px-2 py-[3px] font-display text-[12px] font-semibold text-win">
                Bonus {r.bonus}
              </span>
              <span className="font-display text-[12px] font-normal text-[#1e1e1e]/60">
                {r.date}
              </span>
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
export default function ReferralPage() {
  useSetPageHeader({ title: "Referral", subtitle: "" });
  const router = useRouter();

  return (
    <div className="mx-auto flex w-full max-w-[986px] flex-col gap-8 pb-10">
      {/* back */}
      <button
        onClick={() => router.back()}
        className="flex w-fit items-center gap-1 font-display text-[16px] font-medium text-black hover:opacity-70"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back
      </button>

      <HeroBanner />
      <InviteLinkRow />

      {/* summary */}
      <div className="flex flex-col gap-4">
        <span className="font-display text-[18px] font-medium text-black/80">
          Referral Summary
        </span>
        <div className="flex gap-3">
          <SummaryCard
            stripBg="bg-[#fcc438]"
            cardBg="bg-[#fefbee]"
            icon={<GiftIcon className="h-5 w-5 text-white" />}
            label="Earned"
            value="₦5000"
          />
          <SummaryCard
            stripBg="bg-[#6490d5]"
            cardBg="bg-[#f9f9f9]"
            icon={<UserAddIcon className="h-5 w-5 text-white" />}
            label="Referrals"
            value="09"
          />
        </div>
      </div>

      {/* bottom two-column */}
      <div className="flex gap-7">
        <HowItWorks />
        <ReferralHistory />
      </div>
    </div>
  );
}
