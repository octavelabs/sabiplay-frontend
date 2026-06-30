"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "../layout/AuthLayout";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { AuthField } from "@/components/auth/AuthField";
import { BackButton } from "@/components/auth/parts";
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon } from "@/components/auth/icons";
import {
  useForgotPasswordMutation,
  useResendOTPMutation,
  useVerifyOTPMutation,
  useResetPasswordMutation,
} from "../hooks/auth/authMutation";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);

  return (
    <AuthLayout>
      {step === 1 ? (
        <StepOne email={email} setEmail={setEmail} setStep={setStep} />
      ) : step === 2 ? (
        <StepTwo
          email={email}
          otpValues={otpValues}
          setOtpValues={setOtpValues}
          setStep={setStep}
        />
      ) : (
        <StepThree email={email} otp={otpValues.join("")} />
      )}
    </AuthLayout>
  );
}

function StepOne({
  email,
  setEmail,
  setStep,
}: {
  email: string;
  setEmail: (v: string) => void;
  setStep: (step: number) => void;
}) {
  const { mutate: forgotPassword, isPending } = useForgotPasswordMutation();
  const isValid = email.trim().length > 0 && /\S+@\S+\.\S+/.test(email);

  return (
    <form
      className="flex flex-col items-center gap-[120px]"
      onSubmit={(e) => {
        e.preventDefault();
        if (!isValid) return;
        forgotPassword({ email }, { onSuccess: () => setStep(2) });
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
            <Button
              variant="gold"
              className="w-full"
              type="submit"
              loading={isPending}
              disabled={!isValid || isPending}
            >
              Send code
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

function StepTwo({
  email,
  otpValues,
  setOtpValues,
  setStep,
}: {
  email: string;
  otpValues: string[];
  setOtpValues: (values: string[]) => void;
  setStep: (step: number) => void;
}) {
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { mutate: resendOTP, isPending: isResendingOTP } = useResendOTPMutation();
  const { mutate: verifyOTP, isPending: isVerifyingOTP } = useVerifyOTPMutation();
  const otp = otpValues.join("");
  const isComplete = otp.length === 6;

  function handleOtpChange(index: number, value: string) {
    if (!/^\d?$/.test(value)) return;
    const next = [...otpValues];
    next[index] = value;
    setOtpValues(next);
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  }

  function handleOtpKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  }

  return (
    <div className="w-full">
      <BackButton onClick={() => setStep(1)} />
      <h2 className="mb-1 mt-4 text-lg font-semibold text-[#2f3033]">Verify OTP</h2>
      <p className="mb-6 text-sm text-[#6b7280]">
        Enter the 6 digit OTP verification code sent to{" "}
        <span className="font-medium text-[#1f2937]">{email}</span>
      </p>
      <div className="mb-6 flex gap-3">
        {otpValues.map((val, i) => (
          <input
            key={i}
            ref={(el) => {
              otpRefs.current[i] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={val}
            onChange={(e) => handleOtpChange(i, e.target.value)}
            onKeyDown={(e) => handleOtpKeyDown(i, e)}
            className="h-12 w-12 rounded-xl border border-[#e5e7eb] bg-[#f3f4f6] text-center text-base font-semibold text-[#1f2937] outline-none focus:border-[#e40473]"
          />
        ))}
      </div>
      <p className="mb-6 text-center text-sm text-[#6b7280]">
        Didn&apos;t receive code?{" "}
        <button
          type="button"
          onClick={() => resendOTP({ email })}
          disabled={isResendingOTP}
          className="font-semibold text-[#e40473] disabled:opacity-60"
        >
          {isResendingOTP ? "Resending..." : "Resend Code"}
        </button>
      </p>
      <Button
        variant="gold"
        className="w-full"
        loading={isVerifyingOTP}
        disabled={!isComplete || isVerifyingOTP}
        onClick={() => verifyOTP({ email, otp }, { onSuccess: () => setStep(3) })}
      >
        Verify OTP
      </Button>
    </div>
  );
}

function StepThree({ email, otp }: { email: string; otp: string }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { mutate: resetPassword, isPending } = useResetPasswordMutation();

  const passwordsMatch = password === confirmPassword;
  const isValid = password.length >= 8 && confirmPassword.length >= 8 && passwordsMatch;

  return (
    <div className="w-full">
      <h2 className="mb-1 text-lg font-semibold text-[#2f3033]">Reset password</h2>
      <p className="mb-6 text-sm text-[#6b7280]">
        Enter your new password. Minimum of 8 characters
      </p>
      <div className="flex flex-col gap-[25px]">
        <AuthField
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<LockIcon className="h-[26px] w-[26px]" />}
          trailing={
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="text-black/40"
            >
              {showPassword ? (
                <EyeOffIcon className="h-6 w-6" />
              ) : (
                <EyeIcon className="h-6 w-6" />
              )}
            </button>
          }
        />
        <AuthField
          label="Confirm Password"
          type={showConfirm ? "text" : "password"}
          placeholder=""
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={<LockIcon className="h-[26px] w-[26px]" />}
          trailing={
            <button
              type="button"
              onClick={() => setShowConfirm((v) => !v)}
              aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
              className="text-black/40"
            >
              {showConfirm ? (
                <EyeOffIcon className="h-6 w-6" />
              ) : (
                <EyeIcon className="h-6 w-6" />
              )}
            </button>
          }
        />
        {confirmPassword.length > 0 && !passwordsMatch && (
          <p className="text-sm text-red-500">Passwords do not match</p>
        )}
        <Button
          variant="gold"
          className="w-full"
          loading={isPending}
          disabled={!isValid || isPending}
          onClick={() =>
            resetPassword(
              { email, otp, password },
              { onSuccess: () => router.push("/login") },
            )
          }
        >
          Change Password
        </Button>
      </div>
    </div>
  );
}
