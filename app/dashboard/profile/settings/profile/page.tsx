"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSetPageHeader } from "../../../../context/PageHeaderContext";

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */
type SVGProps = React.SVGProps<SVGSVGElement>;

const ArrowLeftIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const CameraIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Avatar (sprite sheet)                                              */
/* ------------------------------------------------------------------ */
function Avatar({ cell, className = "" }: { cell: number; className?: string }) {
  const col = cell % 3;
  const row = Math.floor(cell / 3);
  return (
    <span
      className={`block shrink-0 rounded-full bg-cover bg-center ${className}`}
      style={{
        backgroundImage: "url(/images/auth-avatars.png)",
        backgroundSize: "300% 400%",
        backgroundPosition: `${(col / 2) * 100}% ${(row / 3) * 100}%`,
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Field                                                             */
/* ------------------------------------------------------------------ */
function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-display text-[16px] font-medium text-black">
        {label}
      </label>
      <div className="flex items-center rounded-[14px] bg-[#f5f4f1] px-4 py-[14px]">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent font-display text-[18px] font-normal text-[#1e1e1e] outline-none placeholder:text-black/40"
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function EditProfilePage() {
  useSetPageHeader({ title: "Profile", subtitle: "" });

  const router = useRouter();
  const [displayName, setDisplayName] = useState("George Omoh");
  const [username, setUsername] = useState("@emgee");

  return (
    <div className="mx-auto flex w-full max-w-[987px] flex-col gap-10 pb-10">
      {/* back link */}
      <button
        onClick={() => router.back()}
        className="flex w-fit items-center gap-1 font-display text-[16px] font-medium text-black hover:opacity-70"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back
      </button>

      {/* form fields */}
      <div className="flex flex-col gap-[22px]">
        <Field
          label="Display Name"
          value={displayName}
          onChange={setDisplayName}
          placeholder="Enter your display name"
        />
        <Field
          label="Username"
          value={username}
          onChange={setUsername}
          placeholder="@username"
        />
      </div>

      {/* avatar */}
      <div className="flex flex-col gap-[25px]">
        <span className="font-display text-[16px] font-medium text-black">
          Avatar
        </span>
        <div className="flex items-center gap-8">
          <Avatar cell={10} className="h-[131px] w-[131px]" />
          <button className="flex items-center gap-2 rounded-full bg-gold px-5 py-[9px]">
            <CameraIcon className="h-[19px] w-[19px] text-[#e9ad01]" />
            <span className="font-display text-[16px] font-medium text-[#e9ad01]">
              Change Avatar
            </span>
          </button>
        </div>
      </div>

      {/* save */}
      <button className="w-full rounded-[14px] bg-gold py-[18px] font-display text-[22px] font-semibold text-ink">
        Save Changes
      </button>
    </div>
  );
}
