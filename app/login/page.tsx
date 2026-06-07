"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthLayout } from "../layout/AuthLayout";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { AuthField } from "@/components/auth/AuthField";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon } from "@/components/auth/icons";

export default function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <AuthLayout>
      <form
        className="flex flex-col items-center gap-[60px]"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* header */}
        <div className="flex flex-col items-center gap-[38px]">
          <img
          src="/images/sabiplayLogo.png"
          alt="SabiPlay"
          className="h-[43px] w-[169px]"
        />
          <div className="flex flex-col items-center gap-3.5">
            <h1 className="font-display text-[58px] font-semibold leading-[52px] text-ink">
              Welcome back.
            </h1>
            <p className="font-display text-[18px] font-medium leading-6 text-ink/60">
              Sign in to your account
            </p>
          </div>
        </div>

        {/* form */}
        <div className="flex w-full flex-col gap-[26px]">
          <div className="flex flex-col gap-[25px]">
            <AuthField
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              icon={<MailIcon className="h-[26px] w-[26px]" />}
            />
            <AuthField
              label="Password"
              type={show ? "text" : "password"}
              placeholder="••••••••••••••••"
              icon={<LockIcon className="h-[26px] w-[26px]" />}
              labelAction={
                <Link
                  href="/forgot-password"
                  className="font-display text-[14px] font-medium leading-[19px] text-[#88670a] hover:underline"
                >
                  Forgot password?
                </Link>
              }
              trailing={
                <button
                  type="button"
                  onClick={() => setShow((v) => !v)}
                  aria-label={show ? "Hide password" : "Show password"}
                  className="text-black/40"
                >
                  {show ? (
                    <EyeOffIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </button>
              }
            />
            <Button variant="gold" className="w-full">
              Log in
            </Button>
            <GoogleButton label="Sign in with Google" />
          </div>

          <p className="text-center font-display text-[18px] font-medium leading-6 text-ink/60">
            Don't  have an account?{" "}
            <Link href="/signup" className="font-semibold text-gold-deep hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
