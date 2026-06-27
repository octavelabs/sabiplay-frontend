import type { ReactNode } from "react";
import Loader from "./Loader";

type Variant = "dark" | "gold" | "white";

const variants: Record<Variant, string> = {
  dark: "bg-ink-600 text-white border border-[#dfd8d8]/20",
  gold: "bg-gold text-ink border border-gold-deep",
  white: "bg-white text-ink border border-[#e2deda]",
};

/**
 * Pill CTA button. Matches the Figma "Frame 3" component:
 * radius 100, padding 15px / 24px, 18–22px display type.
 */
export function Button({
  children,
  variant = "dark",
  className = "",
  size = "md",
  type = "button",
  onClick,
  loading,
  disabled,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  size?: "xs" | "sm" | "md";
  type?: "button" | "submit";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}) {
  const pad =
    size === "xs"
      ? "px-6 py-[15px] text-[16px]"
      : size === "sm"
        ? "px-6 py-[15px] text-[18px]"
        : "px-6 py-[15px] text-[22px]";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-pill font-display font-semibold leading-tight transition-transform duration-150 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${pad} ${variants[variant]} ${className}`}
    >
      {loading ? 
      <Loader />
      :children}
    </button>
  );
}
