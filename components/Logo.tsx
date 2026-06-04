/**
 * SabiPlay wordmark: circular swirl mark + lowercase "sabiplay".
 * Reproduced from the Figma vector logo; inherits color via `currentColor`.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 text-ink ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="19" fill="currentColor" />
        <path
          d="M20 7c-4 4-4 9 0 13s4 9 0 13c7 0 13-6 13-13S27 7 20 7Z"
          fill="#fff"
        />
        <circle cx="20" cy="13.5" r="2.4" fill="currentColor" />
        <circle cx="20" cy="26.5" r="2.4" fill="#fff" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className="font-display text-[32px] font-bold lowercase leading-none tracking-tight">
        sabiplay
      </span>
    </div>
  );
}
