"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useSetPageHeader } from "../../context/PageHeaderContext";
import { WalletCard } from "./components/WalletCard";
import { Button } from "@/components/Button";
import {
  ClockIcon,
  VoucherIcon,
  ArrowUpIcon,
  TrendUpIcon,
  PlusIcon,
} from "../home/icons";
import {
  CloseIcon,
  BankIcon,
  WalletIconSolid,
  BackspaceIcon,
  TickIcon,
  TrophyOffIcon,
  TrendDownIcon,
  TrophyIcon,
  MoneyIcon,
} from "./icons";
import { useGetBankListQuery, useGetWalletDetailsQuery, useGetWalletTransactionsQuery } from "@/app/hooks/wallet/walletQuery";
import Loader from "@/components/Loader";
import { useCreateBankMutation, useFundWalletMutation } from "@/app/hooks/wallet/walletMutation";
import { ArrowDownLeft } from "lucide-react";
import { formatCurrency } from "@/app/utils/helpers";

type ModalKind = "fund" | "withdraw" | "addBank" | "pin" | "success" | null;

/* ------------------------------------------------------------------ */
/*  Stat cards (Total Won / Total Spent)                              */
/* ------------------------------------------------------------------ */
function StatCard({
  icon,
  trend,
  label,
  value,
  color,
  tint,
}: {
  icon: ReactNode;
  trend: ReactNode;
  label: string;
  value: string;
  color: string;
  tint: string;
}) {
  return (
    <div className="flex h-[199px] flex-1 flex-col items-center justify-center gap-[7px] rounded-[22px] bg-[#f5f4f1]">
      <div className="flex flex-col items-center gap-3">
        <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full" style={{ background: tint }}>
          {icon}
        </span>
        <span className="flex items-center gap-1.5 font-display text-[16px] font-semibold text-black/80">
          {trend}
          {label}
        </span>
      </div>
      <span className="font-display text-[32px] font-bold" style={{ color }}>
        {value}
      </span>
    </div>
  );
}



function TransactionHistory() {
  const {data, isLoading} = useGetWalletTransactionsQuery()
  const walletTransactions = data?.transactions ?? []

  return (
    <div className="flex flex-col gap-[23px]">
      <span className="flex items-center gap-1.5 font-display text-[16px] font-semibold text-black/80">
        <ClockIcon className="h-5 w-5 text-[#e9ad01]" />
        Transaction History
      </span>
      <div className="flex flex-col gap-[15px]">
        <span className="font-display text-[12px] font-medium text-black/40">{new Date().toDateString()}</span>
        {isLoading ? <Loader /> : walletTransactions.length > 0 ? 
        <div className="flex flex-col rounded-[20px] bg-[#f5f4f1] px-[23px] py-[31px]">
          {walletTransactions.map((t, i) => (
            <div key={i}>
              {i > 0 && <div className="my-[19px] h-px w-full bg-stone/10" />}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`flex h-[29px] w-[29px] items-center justify-center rounded-full ${
                      t.type === "credit" ? "bg-[#e1efe2]" : "bg-gold/20"
                    }`}
                  >
                    {t.type === "credit" ? (
                      <ArrowDownLeft className="h-[14px] w-[14px]" stroke='#0E9F37' />
                    ) : (
                      <MoneyIcon  />
                    )}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display text-[14px] font-semibold text-black/80">{t.description}</span>
                    <span className="font-display text-[12px] font-normal text-black/40">{new Date(t.created_at).toDateString()}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2.5">
                  <span className={`font-display text-[14px] font-bold ${t.type === 'credit' ? 'text-win' : 'text-[#ecbc32]'}`}>{`${t.type === 'credit' ? "+" : "-"}₦${formatCurrency(t.amount/100)}`}</span>
                  <span className="rounded-full bg-win/10 px-2 py-0.5 font-display text-[10px] font-medium text-win">
                    Success
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div> : <div>No Transactions yet</div>}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Modal shell                                                       */
/* ------------------------------------------------------------------ */
function Modal({
  children,
  onClose,
  width = "max-w-[606px]",
}: {
  children: ReactNode;
  onClose: () => void;
  width?: string;
}) {
  return (
    <div
      className="fixed inset-0 pl-[372px] z-50 flex items-center justify-center bg-black/30 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`w-full rounded-[32px] bg-white ${width}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

function ModalHeader({
  title,
  subtitle,
  onClose,
}: {
  title: string;
  subtitle?: string;
  onClose: () => void;
}) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-[9px]">
        <span className="font-display text-[22px] font-semibold leading-none text-ink">{title}</span>
        {subtitle && (
          <span className="font-display text-[14px] font-normal text-ink/60">{subtitle}</span>
        )}
      </div>
      <button onClick={onClose} aria-label="Close" className="mt-1 text-black">
        <CloseIcon className="h-[22px] w-[22px]" />
      </button>
    </div>
  );
}

/* ------- Fund ------- */
function FundModal({ onClose }: { onClose: () => void }) {
  const [amount, setAmount] = useState("");
  const chips = ["₦1,000", "₦2,000", "₦5,000", "₦10,000"];
  const { mutate, isPending } = useFundWalletMutation();

  function handleFund() {
    const parsed = Number(amount.replace(/[₦,]/g, ""));
    if (!parsed) return;
    mutate(
      { amount: parsed, callback_url: `${window.location.origin}/dashboard/wallet/callback` },
      { onSuccess: (data) => { window.location.href = data.authorization_url; } },
    );
  }

  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-[18px] px-[39px] py-[33px]">
        <ModalHeader title="Fund Wallet" subtitle="Top-up your wallet balance" onClose={onClose} />
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex h-[55px] items-center rounded-full bg-[#f5f4f1] px-5">
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="₦ Enter amount"
                className="w-full bg-transparent font-display text-[24px] font-bold text-[#00000099] outline-none placeholder:text-black/60"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {chips.map((c) => (
                <button
                  key={c}
                  onClick={() => setAmount(c)}
                  className="rounded-full border border-stone/[0.31] bg-[#f5f4f1] px-3 py-2 font-display text-[16px] font-medium text-ink/70 hover:bg-stone/10"
                >
                  {c}
                </button>
              ))}
            </div>
            <Button
              loading={isPending}
              variant="gold" className="w-full" onClick={handleFund}>
              <PlusIcon className="h-5 w-5" />
              Fund
            </Button>
          </div>
          <span className="text-center font-display text-[14px] font-normal text-ink/60">
            Secured by Paystack · Instant credit
          </span>
        </div>
      </div>
    </Modal>
  );
}

/* ------- Withdraw (no bank yet) ------- */
function WithdrawModal({ onAddBank, onClose }: { onAddBank: () => void; onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-[43px] px-[39px] py-[36px]">
        <ModalHeader
          title="Withdraw Funds"
          subtitle="Get your funds paid to your bank account"
          onClose={onClose}
        />
        <div className="flex flex-col gap-[31px]">
          <div className="flex flex-col items-center gap-[21px] text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold/[0.21] bg-[#fff8e4]">
              <BankIcon className="h-9 w-9 text-[#e9ad01]" />
            </span>
            <div className="flex flex-col gap-[9px]">
              <span className="font-display text-[22px] font-semibold text-ink">No Bank Account</span>
              <span className="font-display text-[14px] font-normal text-ink/60">
                Add a bank account to withdraw your funds
              </span>
            </div>
          </div>
          <Button variant="gold" className="w-full" onClick={onAddBank}>
            <WalletIconSolid className="h-6 w-6" />
            Add Bank Account
          </Button>
        </div>
      </div>
    </Modal>
  );
}

/* ------- Add Bank ------- */

function AddBankModal({ onCancel, onClose }: { onCancel: () => void; onClose: ()  => void}) {
  const [acctNumber, setAcctNumber] = useState("");
    const [acctName, setAcctName] = useState("");

  const [bank, setBank] = useState({
    name: "",
    code: ""
  });
  const { data } = useGetBankListQuery({ country: 'nigeria' });
  const banks = data?.banks ?? [];
  const { mutate: createBank, isPending } = useCreateBankMutation();


  return (
    <Modal onClose={onCancel}>
      <div className="flex flex-col gap-[22px] px-[39px] py-10">
        <ModalHeader title="Add Bank Account" onClose={onCancel} />
        <div className="flex flex-col gap-[22px]">
          <div className="flex flex-col gap-[5px]">
            <div className="flex flex-col gap-2">
              <label className="font-display text-[16px] font-medium text-black">Account Number</label>
              <div className="flex h-[52px] items-center rounded-full border border-black/10 bg-[#f5f4f1] px-5">
                <input
                  value={acctNumber}
                  onChange={(e) => setAcctNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="0123456789"
                  inputMode="numeric"
                  className="w-full bg-transparent font-display text-[18px] text-ink outline-none placeholder:text-ink/30"
                />
              </div>
            </div>
            <span className="font-display text-[14px] font-semibold text-ink/30">{acctNumber.length}/10 digits</span>
          </div>
           <div className="flex flex-col gap-[5px]">
            <div className="flex flex-col gap-2">
              <label className="font-display text-[16px] font-medium text-black">Account Name</label>
              <div className="flex h-[52px] items-center rounded-full border border-black/10 bg-[#f5f4f1] px-5">
                <input
                  value={acctName}
                  onChange={(e) => setAcctName(e.target.value)}
                  placeholder="e.g george obi"
                  inputMode="text"
                  className="w-full bg-transparent font-display text-[18px] text-ink outline-none placeholder:text-ink/30"
                />
              </div>
            </div>
        </div>
          <div className="flex flex-col gap-2">
            <label className="font-display text-[16px] font-medium text-black">Bank Name</label>
            <div className="relative">
              <select
                value={bank.code}
                onChange={(e) => {
                  const selected = banks.find((b) => b.code === e.target.value);
                  if (selected) setBank({ name: selected.name, code: selected.code });
                }}
                className="h-[52px] w-full appearance-none rounded-full border border-black/10 bg-[#f5f4f1] px-5 font-display text-[18px] text-ink outline-none [&:invalid]:text-ink/50"
                required
              >
                <option value="" disabled>
                  Select your bank
                </option>
                {banks.map((b) => (
                  <option key={b.code} value={b.code}>
                    {b.name}
                  </option>
                ))}
              </select>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-5 top-1/2 h-3.5 w-3.5 -translate-y-1/2" fill="none" stroke="#000" strokeWidth={2}>
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex gap-[19px]">
          <button
            onClick={onCancel}
            className="flex-1 rounded-full bg-[#fef4d9] py-[15px] font-display text-[22px] font-semibold text-gold-deep"
          >
            Cancel
          </button>
          <Button
            variant="gold"
            className="flex-1"
            disabled={isPending}
            onClick={() =>
              createBank(
                {
                  bank_name: bank.name,
                  bank_code: bank.code,
                  account_number: acctNumber,
                  account_name: acctName,
                },
                { onSuccess: onClose },
              )
            }
          >
            {isPending ? "Saving…" : "Save bank account"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

/* ------- Confirm Withdrawal (PIN) ------- */
function PinModal({ onWithdraw, onCancel }: { onWithdraw: () => void; onCancel: () => void }) {
  const [pin, setPin] = useState("");
  const press = (d: string) => setPin((p) => (p.length < 4 ? p + d : p));
  const del = () => setPin((p) => p.slice(0, -1));
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <Modal onClose={onCancel}>
      <div className="flex flex-col items-center gap-6 px-[39px] py-9">
        <div className="w-full">
          <ModalHeader title="Confirm Withdrawal" subtitle="To Opay ····7540" onClose={onCancel} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-display text-[14px] font-medium text-ink/60">Enter your 4-digit PIN</span>
          <span className="font-display text-[48px] font-semibold text-[#e9ad01]">₦2,000</span>
        </div>

        {/* pin boxes */}
        <div className="flex gap-3.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex h-[52px] w-20 items-center justify-center rounded-[20px] border border-black/10 bg-[#f5f4f1] font-display text-[24px] font-semibold text-ink"
            >
              {pin[i] ? "•" : ""}
            </div>
          ))}
        </div>

        {/* keypad */}
        <div className="grid w-full grid-cols-3 gap-[9px]">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => press(k)}
              className="h-[53px] rounded-[12px] bg-[#f5f4f1]/70 font-display text-[20px] font-semibold text-ink/60 hover:bg-[#f5f4f1]"
            >
              {k}
            </button>
          ))}
          <span />
          <button onClick={() => press("0")} className="h-[53px] rounded-[12px] bg-[#f5f4f1]/70 font-display text-[20px] font-semibold text-ink/60 hover:bg-[#f5f4f1]">
            0
          </button>
          <button onClick={del} className="flex h-[53px] items-center justify-center rounded-[12px] bg-[#f5f4f1]/70 text-black hover:bg-[#f5f4f1]">
            <BackspaceIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex w-full gap-[19px]">
          <button
            onClick={onCancel}
            className="flex-1 rounded-full bg-[#fef4d9] py-[15px] font-display text-[22px] font-semibold text-gold-deep"
          >
            Cancel
          </button>
          <Button variant="gold" className="flex-1" onClick={onWithdraw}>
            Withdraw
          </Button>
        </div>
      </div>
    </Modal>
  );
}

/* ------- Success ------- */
function SuccessModal({ onAgain, onClose }: { onAgain: () => void; onClose: () => void }) {
  return (
    <Modal onClose={onClose} width="max-w-[592px]">
      <div className="flex flex-col items-center gap-[115px] px-[43px] py-[85px]">
        <div className="flex flex-col items-center gap-[15px] text-center">
          <span className="flex h-[122px] w-[122px] items-center justify-center rounded-full bg-[#27c840]/[0.11]">
            <TickIcon className="h-[92px] w-[92px] text-[#128807]" />
          </span>
          <span className="font-display text-[32px] font-semibold text-black/80">Withdrawal Successful</span>
          <p className="max-w-[344px] font-display text-[18px] font-normal text-black/60">
            You have successfully transferred ₦2,000 to your OPay account ***7540
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-[18px]">
          <Button variant="gold" className="w-full" onClick={onAgain}>
            Withdraw again
          </Button>
          <button onClick={onClose} className="font-display text-[22px] font-normal text-ink">
            Back to Wallet
          </button>
        </div>
      </div>
    </Modal>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function WalletPage() {
  useSetPageHeader({
    title: "Wallet",
    subtitle: "Manage your balance and transactions",
  });
  const [modal, setModal] = useState<ModalKind>(null);

  // Deep-link a modal for previewing/testing, e.g. ?modal=pin
  useEffect(() => {
    const m = new URLSearchParams(window.location.search).get("modal");
    if (m && ["fund", "withdraw", "addBank", "pin", "success"].includes(m)) {
      setModal(m as ModalKind);
    }
  }, []);

  const {data, isLoading} = useGetWalletDetailsQuery()
  const walletDetails = data?.wallet

  return (
    <div className="mx-auto flex w-full  flex-col gap-9">
      
      {isLoading ? <Loader /> : <div className="flex flex-col gap-4 lg:flex-row">
        <WalletCard onFund={() => setModal("fund")} onWithdraw={() => setModal("withdraw")}/>
        <div className="flex flex-1 flex-col gap-4 sm:flex-row">
          <StatCard
            icon={<TrophyIcon stroke='#0E9F37' />}
            trend={<TrendUpIcon className="h-5 w-5 text-win" />}
            label="Total Won"
            value={`₦${walletDetails?.total_won}`}
            color="#0e9f37"
            tint="rgba(14,159,55,0.09)"
          />
          <StatCard
            icon={<TrophyOffIcon className="h-7 w-7 text-[#f45c2e]" />}
            trend={<TrendDownIcon className="h-5 w-5 text-[#f45c2e]" />}
            label="Total Spent"
             value={`₦${walletDetails?.total_spent}`}
            color="#f45c2e"
            tint="rgba(244,67,54,0.09)"
          />
        </div>
      </div>}

      <TransactionHistory />

      {/* modal flow */}
      {modal === "fund" && <FundModal onClose={() => setModal(null)} />}
      {modal === "withdraw" && (
        <WithdrawModal onAddBank={() => setModal("addBank")} onClose={() => setModal(null)} />
      )}
      {modal === "addBank" && (
        <AddBankModal onClose={() => setModal("withdraw")}  onCancel={() => setModal(null)} />
      )}
      {/* {modal === "pin" && (
        <PinModal onWithdraw={() => setModal("success")} onCancel={() => setModal(null)} />
      )} */}
      {modal === "success" && (
        <SuccessModal onAgain={() => setModal("withdraw")} onClose={() => setModal(null)} />
      )}
    </div>
  );
}
