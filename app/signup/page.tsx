"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "../layout/AuthLayout";
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
import { SignupRequest } from "../lib/types/auth";
import { useFormik } from "formik";
import { signupSchema } from "../lib/validators";
import { useSignupMutation } from "../hooks/auth/authMutation";


const TOTAL = 5;

type FormValues = SignupRequest ;

export default function SignupPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(false);
    const {mutate: signup, isPending } = useSignupMutation()

  const formik = useFormik<FormValues>({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      username: "",
      date_of_birth: "",
      state: "",
      avatar_url: "",
      is_student: false,
      university: "",
      department: "",
    },
    validationSchema: signupSchema,
    validateOnMount: true,
    onSubmit: (payload) => {
      const cleanedPayload = Object.fromEntries(
        Object.entries({ ...payload, avatar_url: "avatar-3" }).filter(([, v]) => v !== "")
      ) as typeof payload;
      signup(cleanedPayload, { onSuccess: () => router.push("/dashboard/home") });

    },
  });

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const s = Number(p.get("step"));
    if (s >= 1 && s <= TOTAL) setStep(s);
    if (p.get("student")) formik.setFieldValue("is_student", true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const next = () => setStep((s) => Math.min(TOTAL, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const stepValid = (() => {
    const v = formik.values;
    switch (step) {
      case 1:
        return !!v.full_name.trim() && !!v.email.trim() && !!v.password.trim();
      case 2:
        return !!v.username.trim() && !!v.date_of_birth;
      case 3:
        return !!v.state;
      case 4:
        return true;
      case 5:
        return !v.is_student || !!v.university.trim();
      default:
        return false;
    }
  })();


  return (
    <AuthLayout>
      <form
        className="flex flex-col items-center gap-[54px] scale-[1.0]"
        onSubmit={formik.handleSubmit}
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
                    value={formik.values.full_name}
                    onChange={(e) => formik.setFieldValue("full_name", e.target.value)}
                    onBlur={() => formik.setFieldTouched("full_name", true)}
                  />
                  <AuthField
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    icon={<MailIcon className="h-[26px] w-[26px]" />}
                    value={formik.values.email}
                    onChange={(e) => formik.setFieldValue("email", e.target.value)}
                    onBlur={() => formik.setFieldTouched("email", true)}
                  />
                  <AuthField
                    label="Password"
                    type={show ? "text" : "password"}
                    placeholder="Min. 6 characters"
                    icon={<LockIcon className="h-[26px] w-[26px]" />}
                    value={formik.values.password}
                    onChange={(e) => formik.setFieldValue("password", e.target.value)}
                    onBlur={() => formik.setFieldTouched("password", true)}
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
                    value={formik.values.username}
                    onChange={(e) => formik.setFieldValue("username", e.target.value)}
                    onBlur={() => formik.setFieldTouched("username", true)}
                  />
                  <AuthField
                    label="Date of birth"
                    type="date"
                    placeholder="mm/dd/yyyy"
                    icon={<CalendarIcon className="h-[26px] w-[26px]" />}
                    value={formik.values.date_of_birth}
                    onChange={(e) => formik.setFieldValue("date_of_birth", e.target.value)}
                    onBlur={() => formik.setFieldTouched("date_of_birth", true)}
                  />
                </>
              )}

              {/* ---- Step 3: location ---- */}
              {step === 3 && (
                <StateSelect
                  value={formik.values.state}
                  onChange={(v) => formik.setFieldValue("state", v)}
                />
              )}

              {/* ---- Step 4: avatar ---- */}
              {step === 4 && (
                <AvatarPicker
                  value={Number(formik.values.avatar_url)}
                  onChange={(i) => formik.setFieldValue("avatar_url", String(i))}
                />
              )}

              {/* ---- Step 5: student / campus ---- */}
              {step === 5 && (
                <>
                  <StudentToggleCard
                    checked={formik.values.is_student}
                    onChange={(v) => formik.setFieldValue("is_student", v)}
                  />
                  {formik.values.is_student && (
                    <>
                      <AuthField
                        label="University"
                        placeholder="University of Lagos"
                        value={formik.values.university}
                        onChange={(e) => formik.setFieldValue("university", e.target.value)}
                        onBlur={() => formik.setFieldTouched("university", true)}
                      />
                      <AuthField
                        label="Department (optional)"
                        placeholder="History & International Studies"
                        value={formik.values.department}
                        onChange={(e) => formik.setFieldValue("department", e.target.value)}
                        onBlur={() => formik.setFieldTouched("department", true)}
                      />
                    </>
                  )}
                </>
              )}

              {/* primary action */}
              {step < TOTAL ? (
                <Button
                  variant="gold"
                  className="w-full"
                  onClick={next}
                  disabled={!stepValid}
                >
                  Continue
                </Button>
              ) : (
                <div className="flex flex-col items-center gap-4">
                  <Button
                    variant="gold"
                    type='submit'
                    className="w-full"
                    disabled={!stepValid}
                    loading={isPending}
                  >
                    Create account
                  </Button>
                  <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="font-display text-[14px] font-semibold leading-[19px] text-ink/60 hover:underline"
                  >
                    Skip for now
                  </button>
                </div>
              )}

              {step > 1 && <BackButton onClick={back} className="self-start" />}

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
