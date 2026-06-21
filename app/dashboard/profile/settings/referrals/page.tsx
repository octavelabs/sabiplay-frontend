"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSetPageHeader } from "../../../../context/PageHeaderContext";
import { ArrowLeft } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */
type SVGProps = React.SVGProps<SVGSVGElement>;


const LinkIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
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
    <div className="relative" >
      {/* decorative floating coin illustration */}
      
      {/* banner */}
      <div className="relative h-[162px] rounded-[32px] bg-[#e84d0b] px-8">
        {/* text content */}
        <div className="relative flex h-full max-w-[415px] flex-col justify-center gap-2">
          <span className="w-fit rounded-[8px] bg-gold px-3 py-[3px] font-display text-[11px] font-normal text-ink/60 border border-[#D7A415]">
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
        <div className="w-[352px] bg-cover bg-center absolute -bottom-0 right-20" style={{
          backgroundImage: "url('/images/bannerBg.png')",
         
        }}>
          <img src='/images/referralBanner.svg' className="" />
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
      <div className="flex h-[50px] gap-1 overflow-hidden rounded-[12px]">
        {/* link display */}
        <div className="flex flex-1 items-center justify-between gap-3 bg-[#f8f8f8] px-4 rounded-[12px]">
          <span className="truncate font-display text-[15px] font-normal text-stone">
            Sabiplay.app/invite/user/@emgee
          </span>
          <LinkIcon className="h-5 w-5 shrink-0 text-stone" />
        </div>
        {/* copy button */}
        <button
          onClick={handleCopy}
          className="flex rounded-[12px] shrink-0 items-center justify-center bg-gold px-6 font-display text-[16px] font-medium text-ink/70 transition-opacity hover:opacity-90"
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
  bgImage
}: {
  stripBg: string;
  icon: string;
  label: string;
  value: string;
  cardBg: string;
  bgImage: string
}) {
  return (
    <div className={`flex flex-1 flex-col overflow-hidden rounded-[16px] ${cardBg}`}>
      {/* colored strip with icon */}
      <div className={`relative flex h-[72px] items-center justify-center overflow-hidden ${stripBg}`}>
       
          <img src={icon} className="relative z-10 flex h-10 w-10"/>
          <img src={bgImage} className="absolute h-[72px] right-0"/>
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
    <div className="mx-auto flex w-full  flex-col gap-8 pb-10">
      {/* back */}
      <button
        onClick={() => router.back()}
        className="flex w-fit items-center gap-[9px] font-display text-[16px] font-medium text-black hover:opacity-70"
      >
        <ArrowLeft size="18" />
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
            icon='/images/referralGift.svg'
            bgImage='/images/referralVectorYellow.png'
            label="Earned"
            value="₦5000"
          />
          <SummaryCard
            stripBg="bg-[#6490d5]"
            cardBg="bg-[#f9f9f9]"
            icon='/images/profileAdd.svg'
            bgImage='/images/referralVectorBlue.png'
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
