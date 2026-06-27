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
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.15039 4.83301H20.9201C20.9201 4.83301 19.8567 20.8519 14.5352 20.8519C11.9373 20.8519 10.3532 17.0287 9.4131 13.1186C8.42952 9.02351 8.15039 4.83301 8.15039 4.83301Z" stroke="#0E9F37" strokeWidth="1.8125" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.92 4.83335C20.92 4.83335 22.0329 3.64556 22.9584 3.62501C24.7709 3.58393 25.1057 4.83335 25.1057 4.83335C25.4609 5.57043 25.7449 7.48443 24.0423 9.25222C22.3398 11.02 20.433 12.5667 19.6573 13.1189M8.15032 4.83335C8.15032 4.83335 6.99032 3.63226 6.04178 3.62501C4.22928 3.61051 3.89457 4.83335 3.89457 4.83335C3.53932 5.57043 3.25536 7.48443 4.9579 9.25222C6.33543 10.66 7.8254 11.9532 9.41303 13.1189M10.2794 24.1667C10.2794 21.9566 14.5352 20.8522 14.5352 20.8522C14.5352 20.8522 18.7921 21.9566 18.7921 24.1667H10.2794Z" stroke="#0E9F37" strokeWidth="1.8125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);
export const TargetIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);



