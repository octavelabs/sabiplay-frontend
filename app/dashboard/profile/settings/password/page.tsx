"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSetPageHeader } from "../../../../context/PageHeaderContext";

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */
type SVGProps = React.SVGProps<SVGSVGElement>;

const ArrowLeftIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const LockIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const EyeIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Password field                                                     */
/* ------------------------------------------------------------------ */
function PasswordField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="font-display text-[16px] font-medium text-black">
        {label}
      </label>
      <div className="flex items-center rounded-full border border-black/10 bg-[#f5f4f1] px-7 py-[18px]">
        <LockIcon className="mr-3 h-[26px] w-[26px] shrink-0 text-[#1e1e1e]/40" />
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="••••••••••••••••"
          className="min-w-0 flex-1 bg-transparent font-display text-[18px] font-normal text-[#1e1e1e]/40 outline-none placeholder:text-[#1e1e1e]/40"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="ml-3 shrink-0 text-black/40 hover:text-black/60"
        >
          {show ? (
            <EyeOffIcon className="h-6 w-6" />
          ) : (
            <EyeIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function PasswordSettingsPage() {
  useSetPageHeader({ title: "Password", subtitle: "" });
  const router = useRouter();

  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="mx-auto flex w-full max-w-[987px] flex-col gap-8 pb-10">
      {/* back */}
      <button
        onClick={() => router.back()}
        className="flex w-fit items-center gap-1 font-display text-[16px] font-medium text-black hover:opacity-70"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back
      </button>

      {/* password fields */}
      <div className="flex flex-col gap-6">
        <PasswordField
          label="Current Password"
          value={current}
          onChange={setCurrent}
        />
        <PasswordField
          label="New Password"
          value={newPass}
          onChange={setNewPass}
        />
        <PasswordField
          label="Confirm New Password"
          value={confirm}
          onChange={setConfirm}
        />
      </div>

      {/* subtext */}
      <p className="font-display text-[18px] font-normal text-[#1e1e1e]/60">
        Manage and Change your password for security.
      </p>

      {/* update button */}
      <button className="w-full rounded-full border border-[#cf9b09] bg-gold py-[18px] font-display text-[22px] font-semibold text-ink hover:opacity-90">
        Update
      </button>
    </div>
  );
}
