import type { SVGProps } from "react";

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M5 12h14" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}

export function ArrowUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 19V5M5 12l7-7 7 7"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarHalfIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 17.27 7.82 19.79l1.11-4.76L5.24 11.9l4.87-.42L12 7l1.89 4.48 4.87.42-3.69 3.13 1.11 4.76z" />
    </svg>
  );
}

export function PersonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2.25c-3.86 0-7 2.4-7 5.25 0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75 0-2.85-3.14-5.25-7-5.25Z" />
    </svg>
  );
}

/** Small filled status dot (used in "LIVE" pills and payout rows). */
export function Dot({ className = "" }: { className?: string }) {
  return <span className={`inline-block rounded-full ${className}`} />;
}

/** Yellow ring + dot bullet used in every feature list. */
export function CheckBullet() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-[0.6px] border-gold/50 bg-gold/[0.05]">
      <span className="h-3 w-3 rounded-full bg-gold" />
    </span>
  );
}

export function HamburgerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function XSocialIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 1.9h3.6l-7.9 9 9.3 12.3h-7.3l-5.7-7.5-6.5 7.5H.8l8.4-9.6L0 1.9h7.5l5.2 6.8 6.2-6.8Zm-1.3 19.2h2L6.5 3.9H4.4l13.2 17.2Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5"
        stroke="currentColor"
        strokeWidth={2}
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={2} />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 2c.3 2.2 1.6 3.6 3.7 3.8v2.6c-1.3.1-2.5-.3-3.7-1v6.6c0 4.2-3.6 6.9-7.3 5.5-2.3-.9-3.6-3.4-3-5.9.5-2.1 2.4-3.6 4.6-3.7.4 0 .7 0 1.1.1v2.8c-.4-.1-.8-.2-1.2-.1-1.2.1-2 1.1-1.9 2.3.1 1.1 1.1 2 2.3 1.9 1.2-.1 2-1 2-2.3V2h3.4Z" />
    </svg>
  );
}
