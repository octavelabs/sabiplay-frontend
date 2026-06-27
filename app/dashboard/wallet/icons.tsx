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
 <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="54" height="54" rx="27" fill="#F44336" fillOpacity="0.09"/>
<path d="M21.1504 17.833H33.9201C33.9201 17.833 32.8567 33.8519 27.5352 33.8519C24.9373 33.8519 23.3532 30.0287 22.4131 26.1186C21.4295 22.0235 21.1504 17.833 21.1504 17.833Z" stroke="#F45C2E" stroke-width="1.8125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M33.92 17.8333C33.92 17.8333 35.0329 16.6456 35.9584 16.625C37.7709 16.5839 38.1057 17.8333 38.1057 17.8333C38.4609 18.5704 38.7449 20.4844 37.0423 22.2522C35.3398 24.02 33.433 25.5667 32.6573 26.1189M21.1503 17.8333C21.1503 17.8333 19.9903 16.6323 19.0418 16.625C17.2293 16.6105 16.8946 17.8333 16.8946 17.8333C16.5393 18.5704 16.2554 20.4844 17.9579 22.2522C19.3354 23.66 20.8254 24.9532 22.413 26.1189M23.2794 37.1667C23.2794 34.9566 27.5352 33.8522 27.5352 33.8522C27.5352 33.8522 31.7921 34.9566 31.7921 37.1667H23.2794Z" stroke="#F45C2E" stroke-width="1.8125" stroke-linecap="round" stroke-linejoin="round"/>
<g filter="url(#filter0_d_348_9310)">
<path d="M12.2349 15.5L42.7349 37" stroke="#F45C2E" stroke-width="2" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_348_9310" x="7.23486" y="14.5" width="40.5" height="31.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_348_9310"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_348_9310" result="shape"/>
</filter>
</defs>
</svg>


);

export const TrendDownIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m3 8 5 5 4-4 7 7M16 16h5v-5" />
  </svg>
);

export const TrophyIcon = (p: SVGProps<SVGSVGElement>) => (
<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" {...p}>
<path d="M8.15039 4.83301H20.9201C20.9201 4.83301 19.8567 20.8519 14.5352 20.8519C11.9373 20.8519 10.3532 17.0287 9.4131 13.1186C8.42952 9.02351 8.15039 4.83301 8.15039 4.83301Z" stroke={p.stroke} strokeWidth="1.8125" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.92 4.83335C20.92 4.83335 22.0329 3.64556 22.9584 3.62501C24.7709 3.58393 25.1057 4.83335 25.1057 4.83335C25.4609 5.57043 25.7449 7.48443 24.0423 9.25222C22.3398 11.02 20.433 12.5667 19.6573 13.1189M8.15032 4.83335C8.15032 4.83335 6.99032 3.63226 6.04178 3.62501C4.22928 3.61051 3.89457 4.83335 3.89457 4.83335C3.53932 5.57043 3.25536 7.48443 4.9579 9.25222C6.33543 10.66 7.8254 11.9532 9.41303 13.1189M10.2794 24.1667C10.2794 21.9566 14.5352 20.8522 14.5352 20.8522C14.5352 20.8522 18.7921 21.9566 18.7921 24.1667H10.2794Z" stroke={p.stroke} strokeWidth="1.8125" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
)
