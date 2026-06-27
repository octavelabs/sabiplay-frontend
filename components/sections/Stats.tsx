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

export function Stats() {
  const imgs = [
    { src: "/images/stat1.svg", height: 81 },
    { src: "/images/stat2.svg", height: 87 },
    { src: "/images/stat3.svg", height: 95 },
    { src: "/images/stat4.svg", height: 89 },
  ];

  return (
    <section className="mx-auto w-full max-w-shell bg-cream">
      <div className="flex items-start gap-[52px] px-[56px] pb-[67px] pt-[114px]">
        {/* left: heading + subtext (7px lower than stats grid to match original top offsets) */}
        <div className="flex w-[50%] shrink-0 flex-col gap-[39px] pt-[7px]">
          <h2 className="text-gradient-dark font-display text-[62px] font-semibold leading-[56px]">
            Every second <br />counts, every <br/> match pays.
          </h2>
          <p className="w-[80%] font-display text-[24px] font-medium leading-[33px] text-ink/60">
            Built for challengers who love quick wins, instant payouts, and the
            thrill of live quiz battles — every second is a chance to prove your
            edge.
          </p>
        </div>

        {/* right: stat grid + avatar caption */}
        <div className="flex w-[50%] flex-col">
          {/* top row — 3 equal boxes */}
          <div className="flex gap-[17px]">
            <StatBox value="50+" label="Quiz Question" className="flex-1" />
            <StatBox value="₦10M+" label="Paid Out" className="flex-1" />
            <StatBox value="Live" label="Daily battles" className="flex-1" />
          </div>

          {/* bottom row — 2 equal boxes */}
          <div className="mt-[15px] flex gap-[17px]">
            <StatBox value="100%" label="Instant Payouts" className="flex-1" />
            <StatBox value="3s" label="Avg. Match Time" className="flex-1" />
          </div>

          {/* avatar stack + caption */}
          <div className="mt-[63px] flex items-center gap-3">
            <div className="flex items-center">
              {imgs.map((img, i) => (
                <div
                  key={i}
                  style={{ zIndex: i, width: 79, height: img.height }}
                  className={`relative overflow-hidden rounded-full border-2 border-white bg-stone/20 ${
                    i > 0 ? "-ml-[40px]" : ""
                  }`}
                >
                  <img src={img.src} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-gradient-dark font-body text-[36px] font-normal leading-[32px]">
              23+ Geniuses ready to compete &amp; win
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
