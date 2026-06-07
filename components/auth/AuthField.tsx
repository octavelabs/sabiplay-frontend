import type { InputHTMLAttributes, ReactNode } from "react";

type Props = {
  label: string;
  /** right-aligned element on the label row, e.g. a "Forgot password?" link */
  labelAction?: ReactNode;
  /** leading icon inside the field */
  icon?: ReactNode;
  /** trailing element inside the field, e.g. an eye toggle or chevron */
  trailing?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * Labeled pill input matching the Figma auth fields:
 * bg #f6f2e7 @ 98%, 1px black/10 border, 63px tall, fully rounded.
 */
export function AuthField({ label, labelAction, icon, trailing, ...input }: Props) {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="font-display text-[16px] font-medium leading-[22px] text-black">
          {label}
        </label>
        {labelAction}
      </div>
      <div className="flex h-[63px] items-center gap-2.5 rounded-full border border-black/10 bg-[#f6f2e7]/[0.98] px-5">
        {icon && <span className="shrink-0 text-black/40">{icon}</span>}
        <input
          className="min-w-0 flex-1 bg-transparent font-display text-[18px] leading-6 text-ink outline-none placeholder:text-ink/40"
          {...input}
        />
        {trailing && <span className="shrink-0">{trailing}</span>}
      </div>
    </div>
  );
}

/** Read-only "select" styled like AuthField (used for the state dropdown). */
export function AuthSelectField({
  label,
  icon,
  value,
  placeholder,
  trailing,
  onClick,
}: {
  label: string;
  icon?: ReactNode;
  value?: string;
  placeholder: string;
  trailing?: ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="font-display text-[16px] font-medium leading-[22px] text-black">
        {label}
      </label>
      <button
        type="button"
        onClick={onClick}
        className="flex h-[63px] items-center gap-2.5 rounded-full border border-black/10 bg-[#f6f2e7]/[0.98] px-5 text-left"
      >
        {icon && <span className="shrink-0 text-black/40">{icon}</span>}
        <span
          className={`min-w-0 flex-1 font-display text-[18px] leading-6 ${
            value ? "text-ink" : "text-ink/60"
          }`}
        >
          {value || placeholder}
        </span>
        {trailing && <span className="shrink-0 text-black/70">{trailing}</span>}
      </button>
    </div>
  );
}
