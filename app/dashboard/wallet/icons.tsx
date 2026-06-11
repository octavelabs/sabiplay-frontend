import type { SVGProps } from "react";

export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const BankIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2 2 7v2h20V7L12 2Z" />
    <path d="M4 10v8H3v3h18v-3h-1v-8h-2v8h-3v-8h-2v8h-2v-8H9v8H6v-8H4Z" />
  </svg>
);

export const WalletIconSolid = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H5a2 2 0 0 0-2 2z" />
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <circle cx="16.5" cy="14" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

export const BackspaceIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M9 5h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9L2 12z" />
    <path d="m12 9 5 6M17 9l-5 6" />
  </svg>
);

export const TickIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm5.7 8.3-6.4 6.4a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4l2.3 2.3 5.7-5.7a1 1 0 0 1 1.4 1.4Z" />
  </svg>
);

export const TrophyOffIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0z" />
    <path d="M5 4H3v2a3 3 0 0 0 3 3M19 4h2v2a3 3 0 0 1-3 3M12 13v3M9 20h6M10 20l.5-3h3l.5 3" />
    <path d="m3 3 18 18" />
  </svg>
);

export const TrendDownIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m3 8 5 5 4-4 7 7M16 16h5v-5" />
  </svg>
);
