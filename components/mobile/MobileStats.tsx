import { Avatar } from "../Avatar";

function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-[102px] flex-col items-center justify-center gap-0.5 rounded-[12px] bg-stone/[0.11] px-2 text-center">
      <span className="text-gradient-dark font-body text-[24px] font-bold leading-[22px]">
        {value}
      </span>
      <span className="font-display text-[14px] leading-[19px] text-ink/60">{label}</span>
    </div>
  );
}

const avatars = [
  { rot: "rotate-[-6deg]", cell: 0 },
  { rot: "rotate-[3deg]", cell: 2 },
  { rot: "rotate-[-3deg]", cell: 3 },
  { rot: "rotate-[5deg]", cell: 5 },
];

export function MobileStats() {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex w-full max-w-[440px] flex-col gap-[30px] px-5 py-12">
        <div className="flex flex-col gap-[15px]">
          <h2 className="text-gradient-dark font-display text-[32px] font-semibold leading-[29px]">
            Every second counts, every match pays.
          </h2>
          <p className="font-display text-[18px] font-medium leading-6 text-ink/60">
            Built for challengers who love quick wins, instant payouts, and the thrill of
            live quiz battles — every second is a chance to prove your edge.
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="grid grid-cols-3 gap-2.5">
            <StatBox value="50+" label="Quiz Question" />
            <StatBox value="₦10M+" label="Paid Out" />
            <StatBox value="Live" label="Daily battles" />
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <StatBox value="100%" label="Instant Payouts" />
            <StatBox value="3s" label="Avg. Match Time" />
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            {avatars.map((a, i) => (
              <Avatar
                key={i}
                cell={a.cell}
                rounded="rounded-full"
                className={`h-[39px] w-[35px] border-2 border-white ${a.rot} ${
                  i > 0 ? "-ml-[17px]" : ""
                }`}
              />
            ))}
          </div>
          <span className="text-gradient-dark font-body text-[16px] font-normal leading-[14px]">
            23+ Geniuses ready to compete &amp; win
          </span>
        </div>
      </div>
    </section>
  );
}
