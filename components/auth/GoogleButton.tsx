import { GoogleIcon } from "./icons";

export function GoogleButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex h-[63px] w-full items-center justify-center gap-2.5 rounded-full border border-black/10 bg-white/[0.53] font-display text-[22px] font-semibold leading-[27px] text-ink transition-colors hover:bg-white/80"
    >
      <GoogleIcon className="h-[26px] w-[26px]" />
      {label}
    </button>
  );
}
