/**
 * Circular step indicator ("n/5") with a gold progress arc, per the Figma
 * "Frame 170" component (55px track #f6f3e7, gold arc, #cf9b09 label).
 */
export function StepBadge({ step, total = 5 }: { step: number; total?: number }) {
  const deg = Math.round((step / total) * 360);
  return (
    <div
      className="flex h-[55px] w-[55px] items-center justify-center rounded-full"
      style={{
        background: `conic-gradient(#fcc11a ${deg}deg, #f6f3e7 ${deg}deg 360deg)`,
      }}
    >
      <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#fffdf6]">
        <span className="font-display text-[16px] font-semibold leading-[21px] text-gold-deep">
          {step}/{total}
        </span>
      </div>
    </div>
  );
}
