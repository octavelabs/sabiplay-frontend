import Image from "next/image";
import { Button } from "../Button";
import { CheckBullet, PlusIcon, ArrowUpIcon } from "../icons";

const activity = [
  {
    icon: <ArrowUpIcon className="h-3.5 w-3.5 text-win" />,
    iconBg: "bg-win/[0.12]",
    title: "Competition Win",
    sub: "Gold Cup",
    amount: "+₦15,000",
    amountClass: "text-win",
  },
  {
    icon: <ArrowUpIcon className="h-3.5 w-3.5 rotate-180 text-loss" />,
    iconBg: "bg-loss/[0.12]",
    title: "Entry Fee",
    sub: "Silver League",
    amount: "-₦1,000",
    amountClass: "text-loss",
  },
  {
    icon: <ArrowUpIcon className="h-3.5 w-3.5 text-win" />,
    iconBg: "bg-win/[0.12]",
    title: "Battle Win",
    sub: "vs Chidi",
    amount: "+₦500",
    amountClass: "text-win",
  },
];

export function MobileWallet() {
  return (
    <section className="bg-ink-900">
      <div className="mx-auto flex w-full max-w-[440px] flex-col gap-[66px] px-5 py-14">
        {/* wallet + activity */}
        <div className="flex flex-col gap-[13px]">
          {/* wallet card */}
          <div className="relative h-[141px] overflow-hidden rounded-[20px] bg-gold">
            <Image
              src="/images/wallet-bg.png"
              alt=""
              width={437}
              height={170}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-90"
            />
            <div className="relative flex h-full flex-col justify-between p-5">
              <div className="flex flex-col">
                <span className="font-display text-[13px] font-medium leading-[17px] text-ink/70">
                  Available Balance
                </span>
                <span className="font-display text-[35px] font-medium leading-[48px] text-ink">
                  ₦24,500
                </span>
              </div>
              <div className="flex gap-2.5">
                <button className="flex flex-1 items-center justify-center gap-1 rounded-pill bg-ink/[0.13] py-2 font-display text-[13px] font-medium text-black">
                  <PlusIcon className="h-3.5 w-3.5" />
                  Fund Wallet
                </button>
                <button className="flex flex-1 items-center justify-center gap-1 rounded-pill bg-ink/90 py-2 font-display text-[13px] font-medium text-[#d3d2d0]">
                  <ArrowUpIcon className="h-3.5 w-3.5" />
                  Withdrawal
                </button>
              </div>
            </div>
          </div>

          {/* activity card */}
          <div className="flex flex-col gap-2.5 rounded-[20px] bg-white/5 px-[31px] py-6">
            <span className="font-display text-[14px] font-medium leading-[19px] text-stone">
              Recent Activity
            </span>
            <div className="flex flex-col gap-3">
              {activity.map((a) => (
                <div key={a.title} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`flex h-[35px] w-[35px] items-center justify-center rounded-full ${a.iconBg}`}
                    >
                      {a.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-display text-[14px] font-medium leading-[19px] text-white/80">
                        {a.title}
                      </span>
                      <span className="font-display text-[11px] font-medium leading-[16px] text-stone">
                        {a.sub}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`font-display text-[14px] font-medium leading-[19px] ${a.amountClass}`}
                  >
                    {a.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* copy */}
        <div className="flex flex-col gap-[38px]">
          <div className="flex flex-col gap-[39px]">
            <div className="flex flex-col gap-[19px]">
              <h2 className="font-display text-[36px] font-semibold leading-[32px] text-white">
                Your winnings, instantly.
              </h2>
              <p className="font-display text-[18px] font-medium leading-6 text-stone">
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
                  <span className="font-display text-[16px] font-medium leading-[22px] text-white">
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Button variant="gold" size="xs" className="self-start">
            Create free account
          </Button>
        </div>
      </div>
    </section>
  );
}
