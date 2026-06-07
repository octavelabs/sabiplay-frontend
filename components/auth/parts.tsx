import Link from "next/link";
import type { ReactNode } from "react";
import { BackArrowIcon } from "./icons";

export function BackButton({
  children = "Back",
  onClick,
  href,
}: {
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
}) {
  const inner = (
    <span className="inline-flex items-center gap-[3px] font-display text-[14px] font-normal leading-[19px] text-black">
      <BackArrowIcon className="h-6 w-6" />
      {children}
    </span>
  );
  if (href) return <Link href={href}>{inner}</Link>;
  return (
    <button type="button" onClick={onClick}>
      {inner}
    </button>
  );
}

export function AccountNote() {
  return (
    <p className="text-center font-display text-[18px] font-medium leading-6 text-ink/60">
      Already have an account?{" "}
      <Link href="/login" className="font-semibold text-gold-deep hover:underline">
        Sign in
      </Link>
    </p>
  );
}

export function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`flex h-[15px] w-[26px] items-center rounded-full px-[2px] transition-colors ${
        checked ? "bg-gold" : "bg-stone"
      }`}
    >
      <span
        className={`h-[11px] w-[11px] rounded-full bg-white transition-transform ${
          checked ? "translate-x-[11px]" : "translate-x-0"
        }`}
      />
    </button>
  );
}

/** "Are you a student?" toggle card used on signup step 5. */
export function StudentToggleCard({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex h-[80px] items-center justify-between rounded-[22px] border border-black/10 bg-[#f6f2e7]/[0.98] px-[27px]">
      <div className="flex flex-col">
        <span className="font-display text-[18px] font-semibold leading-6 text-ink/80">
          Are you a student?
        </span>
        <span className="font-display text-[14px] font-normal leading-[19px] text-ink/60">
          Unlocks campus features
        </span>
      </div>
      <Toggle checked={checked} onChange={onChange} />
    </div>
  );
}
