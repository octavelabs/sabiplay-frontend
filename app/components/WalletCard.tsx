import Image from "next/image";
import { EyeIcon, PlusIcon, WithdrawIcon } from "../dashboard/home/icons";

/** Gold wallet-balance card with Fund / Withdraw actions (shared dashboard widget). */
export function WalletCard({
  balance = "₦24,500",
  onFund,
  onWithdraw,
  className = "",
}: {
  balance?: string;
  onFund?: () => void;
  onWithdraw?: () => void;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[199px] w-full overflow-hidden rounded-[22px] bg-gold sm:w-[408px] ${className}`}
    >
      <Image
        src="/images/wallet-bg.png"
        alt=""
        fill
        sizes="408px"
        className="object-cover opacity-90"
      />
      <div className="relative flex h-full flex-col justify-between p-[26px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-display text-[14px] font-medium leading-[19px] text-ink/80">
              Wallet Balance
            </span>
            <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/[0.16]">
              <EyeIcon className="h-5 w-5 text-[#342c1c]" />
            </span>
          </div>
          <span className="font-display text-[32px] lg:text-[48px] font-medium leading-[47px] lg:leading-[63px] text-ink">
            {balance}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onFund}
            className="flex flex-1 items-center justify-center gap-1 rounded-[81px] bg-ink/[0.13] py-2.5 font-display text-[16px] font-medium text-black"
          >
            <PlusIcon className="h-4 w-4" />
            Fund Wallet
          </button>
          <button
            onClick={onWithdraw}
            className="flex flex-1 items-center justify-center gap-1 rounded-[81px] border border-black/[0.26] bg-ink/90 py-2.5 font-display text-[16px] font-medium text-[#d3d2d0]"
          >
            <WithdrawIcon className="h-[15px] w-[15px]" />
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
