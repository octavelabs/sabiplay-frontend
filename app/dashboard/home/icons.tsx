import type { SVGProps } from "react";

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const EyeIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
export const PlusIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const WithdrawIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const UsersIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 19a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M21 19a6 6 0 0 0-4-5.7" />
  </svg>
);
export const ClockIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const TrendUpIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="m3 16 5-5 4 4 7-7M16 8h5v5" />
  </svg>
);
export const ChevronRightIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);
export const VoucherIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...s} strokeWidth={1.6} {...p}>
    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
    <path d="M9 8v8" strokeDasharray="2 2" />
  </svg>
);
export const ArrowUpIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...s} {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);
export const StormIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13 2 4.5 13H11l-1 9 8.5-11H12z" />
  </svg>
);
export const CalendarIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <rect x="3" y="5" width="18" height="16" rx="3" />
    <path d="M3 9h18" stroke="#fff9eb" strokeWidth="1.5" />
    <rect x="6.5" y="12" width="4" height="4" rx="1" fill="#fff9eb" />
  </svg>
);
export const JoinIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <circle cx="9" cy="12" r="6" opacity="0.85" />
    <circle cx="15" cy="12" r="6" opacity="0.85" />
  </svg>
);
export const LevelIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <rect x="4" y="11" width="3.5" height="8" rx="1" />
    <rect x="10.2" y="6" width="3.5" height="13" rx="1" />
    <rect x="16.5" y="14" width="3.5" height="5" rx="1" />
  </svg>
);
export const BoltIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13 2 4.5 13H11l-1 9 8.5-11H12z" />
  </svg>
);
export const TrophyIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M7 4h10v3a5 5 0 0 1-10 0z" />
    <path d="M5 4H3v2a3 3 0 0 0 3 3M19 4h2v2a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.6" fill="none" />
    <path d="M12 12v3M9 20h6M10 20l.5-3h3l.5 3" stroke="currentColor" strokeWidth="1.6" fill="none" />
  </svg>
);
export const TargetIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);
