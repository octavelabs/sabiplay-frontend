import { Avatar } from "../Avatar";

function StatBox({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-[178px] flex-col items-center justify-center gap-1 rounded-[21px] bg-stone/[0.11] ${className}`}
    >
      <span className="text-gradient-dark font-body text-[58px] font-bold leading-[53px]">
        {value}
      </span>
      <span className="font-display text-[22px] leading-[30px] text-ink/60">
        {label}
      </span>
    </div>
  );
}

const avatars = [
  { rot: "rotate-[-6deg]", cell: 0 },
  { rot: "rotate-[3deg]", cell: 2 },
  { rot: "rotate-[-3deg]", cell: 3 },
  { rot: "rotate-[5deg]", cell: 5 },
];

export function Stats() {
  return (
    <section className="relative mx-auto h-[710px] w-[1440px] bg-cream">
      {/* heading */}
      <div className="absolute left-[56px] top-[121px] flex w-[578px] flex-col gap-[39px]">
        <h2 className="text-gradient-dark font-display text-[62px] font-semibold leading-[56px]">
          Every second counts, every match pays.
        </h2>
        <p className="max-w-[514px] font-display text-[24px] font-medium leading-[33px] text-ink/60">
          Built for challengers who love quick wins, instant payouts, and the thrill
          of live quiz battles — every second is a chance to prove your edge.
        </p>
      </div>

      {/* stat boxes — top row */}
      <div className="absolute left-[686px] top-[114px] flex gap-[17px]">
        <StatBox value="50+" label="Quiz Question" className="w-[219px]" />
        <StatBox value="₦10M+" label="Paid Out" className="w-[218px]" />
        <StatBox value="Live" label="Daily battles" className="w-[219px]" />
      </div>
      {/* stat boxes — bottom row */}
      <div className="absolute left-[686px] top-[307px] flex gap-[17px]">
        <StatBox value="100%" label="Instant Payouts" className="w-[337px]" />
        <StatBox value="3s" label="Avg. Match Time" className="w-[337px]" />
      </div>

      {/* avatar stack + caption */}
      <div className="absolute left-[686px] top-[548px] flex items-center gap-3">
        <div className="flex items-center">
          {avatars.map((a, i) => (
            <Avatar
              key={i}
              cell={a.cell}
              rounded="rounded-full"
              className={`h-[87px] w-[78px] border-2 border-white ${a.rot} ${
                i > 0 ? "-ml-[39px]" : ""
              }`}
            />
          ))}
        </div>
        <span className="text-gradient-dark font-body text-[36px] font-normal leading-[32px]">
          23+ Geniuses ready to compete &amp; win
        </span>
      </div>
    </section>
  );
}
