"use client";

import { Suspense, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyFundWalletMutation } from "@/app/hooks/wallet/walletMutation";
import Loader from "@/components/Loader";
import { Toast } from "@/app/components/Alert/toast";

function WalletCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { mutate } = useVerifyFundWalletMutation();
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const trxref = searchParams.get("trxref");
    if (!trxref) {
      router.replace("/dashboard/wallet");
      return;
    }

    mutate(
      { reference: trxref },
      {
        onSuccess: () => {
          Toast("success", "Wallet funded successfully");
          router.replace("/dashboard/wallet");
        },
        onError: () => {
          router.replace("/dashboard/wallet");
        },
      },
    );
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <Loader />
      <span className="font-display text-[16px] font-medium text-black/60">
        Verifying your payment…
      </span>
    </div>
  );
}

export default function WalletCallbackPage() {
  return (
    <Suspense>
      <WalletCallback />
    </Suspense>
  );
}
