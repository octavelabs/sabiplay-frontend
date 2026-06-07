"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "../layout/AuthLayout";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { AuthField } from "@/components/auth/AuthField";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { AvatarPicker } from "@/components/auth/AvatarPicker";
import { AccountNote, BackButton, StudentToggleCard } from "@/components/auth/parts";
import {
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  UserIcon,
  CalendarIcon,
} from "@/components/auth/icons";
import { SignupHeader } from "./components/SignupHeader";
import { StateSelect } from "./components/StateSelect";

const TOTAL = 5;

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    dob: "",
    state: "",
    avatar: 0,
    isStudent: false,
    university: "",
    department: "",
  });
  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  // Allow deep-linking / resuming a step via ?step=N (e.g. ?step=4).
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const s = Number(p.get("step"));
    if (s >= 1 && s <= TOTAL) setStep(s);
    if (p.get("student")) set("isStudent", true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const next = () => setStep((s) => Math.min(TOTAL, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));
  const finish = () => router.push("/login");

  return (
    <AuthLayout>
      <form
        className="flex flex-col items-center gap-[54px] scale-[1.0]"
        onSubmit={(e) => e.preventDefault()}
      >
        <img
          src="/images/sabiplayLogo.png"
          alt="SabiPlay"
          className="h-[43px] w-[169px]"
        />

        <div className="flex w-full flex-col gap-[37px]">
          <SignupHeader step={step} />

          <div className="flex w-full flex-col gap-[26px]">
            <div className="flex w-full flex-col gap-[25px]">
              {/* ---- Step 1: account basics ---- */}
              {step === 1 && (
                <>
                  <AuthField
                    label="Full name"
                    placeholder="George Omoh"
                    icon={<UserIcon className="h-[26px] w-[26px]" />}
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                  <AuthField
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    icon={<MailIcon className="h-[26px] w-[26px]" />}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                  <AuthField
                    label="Password"
                    type={show ? "text" : "password"}
                    placeholder="Min. 6 characters"
                    icon={<LockIcon className="h-[26px] w-[26px]" />}
                    value={form.password}
                    onChange={(e) => set("password", e.target.value)}
                    trailing={<EyeToggle show={show} setShow={setShow} />}
                  />
                </>
              )}

              {/* ---- Step 2: identity ---- */}
              {step === 2 && (
                <>
                  <AuthField
                    label="Username"
                    placeholder="georgekyrian123"
                    icon={<UserIcon className="h-[26px] w-[26px]" />}
                    value={form.username}
                    onChange={(e) => set("username", e.target.value)}
                  />
                  <AuthField
                    label="Date of birth"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    icon={<CalendarIcon className="h-[26px] w-[26px]" />}
                    value={form.dob}
                    onChange={(e) => set("dob", e.target.value)}
                  />
                </>
              )}

              {/* ---- Step 3: location ---- */}
              {step === 3 && (
                <StateSelect value={form.state} onChange={(v) => set("state", v)} />
              )}

              {/* ---- Step 4: avatar ---- */}
              {step === 4 && (
                <AvatarPicker value={form.avatar} onChange={(i) => set("avatar", i)} />
              )}

              {/* ---- Step 5: student / campus ---- */}
              {step === 5 && (
                <>
                  <StudentToggleCard
                    checked={form.isStudent}
                    onChange={(v) => set("isStudent", v)}
                  />
                  {form.isStudent && (
                    <>
                      <AuthField
                        label="University"
                        placeholder="University of Lagos"
                        value={form.university}
                        onChange={(e) => set("university", e.target.value)}
                      />
                      <AuthField
                        label="Department (optional)"
                        placeholder="History & International Studies"
                        value={form.department}
                        onChange={(e) => set("department", e.target.value)}
                      />
                    </>
                  )}
                </>
              )}

              {/* primary action */}
              {step < TOTAL ? (
                <Button variant="gold" className="w-full" onClick={next}>
                  Continue
                </Button>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <Button variant="gold" className="w-full" onClick={finish}>
                    Create account
                  </Button>
                  <button
                    type="button"
                    onClick={finish}
                    className="font-display text-[14px] font-semibold leading-[19px] text-ink/60 hover:underline"
                  >
                    Skip for now
                  </button>
                </div>
              )}

              {step > 1 && <BackButton onClick={back} />}

              {step < TOTAL && <GoogleButton label="Sign up with Google" />}
            </div>

            <AccountNote />
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

function EyeToggle({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => setShow(!show)}
      aria-label={show ? "Hide password" : "Show password"}
      className="text-black/40"
    >
      {show ? <EyeOffIcon className="h-6 w-6" /> : <EyeIcon className="h-6 w-6" />}
    </button>
  );
}
