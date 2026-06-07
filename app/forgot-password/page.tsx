"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AuthLayout } from "../layout/AuthLayout";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { AuthField } from "@/components/auth/AuthField";
import { BackButton } from "@/components/auth/parts";
import { MailIcon, CheckIcon } from "@/components/auth/icons";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  // Allow previewing the success state via ?sent=1.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("sent")) setSent(true);
  }, []);

  return (
    <AuthLayout>
      {sent ? (
        <CheckMail email={email || "georgekyrian@gmail.com"} />
      ) : (
        <ResetPassword
          email={email}
          setEmail={setEmail}
          onSubmit={() => setSent(true)}
        />
      )}
    </AuthLayout>
  );
}

function ResetPassword({
  email,
  setEmail,
  onSubmit,
}: {
  email: string;
  setEmail: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <form
      className="flex flex-col items-center gap-[120px]"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Logo />

      <div className="flex w-full flex-col gap-[21px]">
        <BackButton href="/login">Back to login</BackButton>

        <div className="flex flex-col items-center gap-[37px]">
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-display text-[48px] font-semibold leading-[43px] text-ink">
              Reset password
            </h1>
            <p className="text-center font-display text-[18px] font-medium leading-6 text-ink/60">
              Enter your email and we&apos;ll send you a reset link
            </p>
          </div>

          <div className="flex w-full flex-col gap-[25px]">
            <AuthField
              label="Email"
              type="email"
              placeholder="you@example.com"
              icon={<MailIcon className="h-[26px] w-[26px]" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="gold" className="w-full" type="submit">
              Send reset link
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

function CheckMail({ email }: { email: string }) {
  return (
    <div className="flex flex-col items-center gap-[120px]">
      <Logo />

      <div className="flex flex-col items-center gap-[19px]">
        <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border-2 border-win bg-win/15 text-win">
          <CheckIcon className="h-[46px] w-[46px]" />
        </div>

        <div className="flex flex-col items-center gap-[37px]">
          <div className="flex flex-col items-center gap-3">
            <h1 className="font-display text-[48px] font-semibold leading-[43px] text-ink">
              Check your email
            </h1>
            <p className="text-center font-display text-[18px] font-medium leading-6 text-ink/60">
              We sent a reset link to {email}
            </p>
          </div>
          <Link
            href="/login"
            className="font-display text-[16px] font-semibold leading-[22px] text-[#e9ad01] hover:underline"
          >
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
}
