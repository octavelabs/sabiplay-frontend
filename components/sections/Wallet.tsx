import Image from "next/image";
import { Button } from "../Button";
import { CheckBullet, PlusIcon, ArrowUpIcon } from "../icons";

const activity = [
  {
    icon: <ArrowUpIcon className="h-6 w-6 text-win" />,
    iconBg: "bg-win/[0.12]",
    title: "Competition Win",
    sub: "Gold Cup",
    amount: "+₦15,000",
    amountClass: "text-win",
  },
  {
    icon: <ArrowUpIcon className="h-6 w-6 rotate-180 text-loss" />,
    iconBg: "bg-loss/[0.12]",
    title: "Entry Fee",
    sub: "Silver League",
    amount: "-₦1,000",
    amountClass: "text-loss",
  },
  {
    icon: <ArrowUpIcon className="h-6 w-6 text-win" />,
    iconBg: "bg-win/[0.12]",
    title: "Battle Win",
    sub: "vs Chidi",
    amount: "+₦500",
    amountClass: "text-win",
  },
];

function WalletCard() {
  return (
    <div className="relative h-[246px] overflow-hidden rounded-[35px] bg-gold">
      <Image
        src="/images/wallet-bg.png"
        alt=""
        width={762}
        height={297}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="relative flex h-full flex-col justify-between p-[35px]">
        <div className="flex flex-col">
          <span className="font-display text-[22px] font-medium leading-[30px] text-ink/70">
            Available Balance
          </span>
          <span className="font-display text-[60px] font-medium leading-[83px] text-ink">
            ₦24,500
          </span>
        </div>
        <div className="flex gap-3.5">
          <button className="flex items-center gap-1.5 rounded-pill bg-ink/[0.13] px-[26px] py-3.5 font-display text-[22px] font-medium text-black">
            <PlusIcon className="h-[22px] w-[22px]" />
            Fund Wallet
          </button>
          <button className="flex items-center gap-1.5 rounded-pill border border-black/25 bg-ink/90 px-[26px] py-3.5 font-display text-[22px] font-medium text-[#d3d2d0]">
            <ArrowUpIcon className="h-[22px] w-[22px]" />
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}

function ActivityCard() {
  return (
    <div className="flex flex-col gap-[15px] rounded-[35px] bg-white/5 px-[54px] py-10">
      <span className="font-display text-[24px] font-medium leading-[33px] text-stone">
        Recent Activity
      </span>
      <div className="flex flex-col gap-[19px]">
        {activity.map((a) => (
          <div key={a.title} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-[61px] w-[61px] items-center justify-center rounded-full ${a.iconBg}`}
              >
                {a.icon}
              </span>
              <div className="flex flex-col">
                <span className="font-display text-[24px] font-medium leading-[33px] text-white/80">
                  {a.title}
                </span>
                <span className="font-display text-[20px] font-medium leading-[27px] text-stone">
                  {a.sub}
                </span>
              </div>
            </div>
            <span className={`font-display text-[20px] font-medium leading-[27px] ${a.amountClass}`}>
              {a.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Wallet() {
  return (
    <section className="relative mx-auto h-[928px] max-w-[1740px] bg-ink-900">
      <div className="absolute left-[59px] top-[155px] flex w-[1322px] items-center justify-between">
        {/* left: wallet + activity */}
        <div className="flex w-[692px] flex-col gap-[23px]">
          <WalletCard />
          <ActivityCard />
        </div>

        {/* right: copy */}
        <div className="flex w-[541px] flex-col gap-[66px]">
          <div className="flex flex-col gap-[38px]">
            <div className="flex flex-col gap-[39px]">
              <h2 className="font-display text-[62px] font-semibold leading-[56px] text-white">
                Your winnings, instantly.
              </h2>
              <p className="font-display text-[24px] font-medium leading-[33px] text-stone">
                Fund via Paystack. Win. Withdraw to any Nigerian bank within 1–3 days. No
                hidden fees, no friction. Your money, your rules.
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {[
                "Fund from ₦500 via Paystack",
                "Winnings credited in real-time",
                "Withdraw to GTBank, Kuda, Opay + 17 others",
              ].map((it) => (
                <li key={it} className="flex items-center gap-3.5">
                  <CheckBullet />
                  <span className="font-display text-[20px] font-medium leading-[27px] text-white">
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Button variant="gold" className="self-start">
            Create free account
          </Button>
        </div>
      </div>
    </section>
  );
}
