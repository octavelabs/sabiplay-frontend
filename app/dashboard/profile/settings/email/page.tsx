"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSetPageHeader } from "../../../../context/PageHeaderContext";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
type Phase = "view" | "password" | "newEmail" | "confirmation";

type SVGProps = React.SVGProps<SVGSVGElement>;

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */
const ArrowLeftIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const EditIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
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

const XIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Email illustration (envelope)                                      */
/* ------------------------------------------------------------------ */
function EmailIllustration() {
  return (
    <svg width="89" height="89" viewBox="0 0 89 89" fill="none">
      {/* envelope back flap */}
      <path d="M4 20 L44.5 4 L85 20 L85 72 L4 72 Z" fill="#cf9b09" />
      {/* paper/letter peeking out */}
      <rect x="16" y="10" width="57" height="68" rx="4" fill="#f0f0f0" />
      {/* paper lines */}
      <rect x="22" y="22" width="30" height="3" rx="1.5" fill="#cccccc" />
      <rect x="22" y="30" width="45" height="2" rx="1" fill="#d9d9d9" />
      <rect x="22" y="36" width="40" height="2" rx="1" fill="#d9d9d9" />
      <rect x="22" y="42" width="42" height="2" rx="1" fill="#d9d9d9" />
      <rect x="22" y="48" width="35" height="2" rx="1" fill="#d9d9d9" />
      <rect x="22" y="54" width="38" height="2" rx="1" fill="#d9d9d9" />
      {/* envelope left flap */}
      <path d="M4 20 L44.5 52 L4 72 Z" fill="#fcc11a" />
      {/* envelope right flap */}
      <path d="M85 20 L44.5 52 L85 72 Z" fill="#fcc11a" />
      {/* envelope front */}
      <path d="M4 72 L44.5 52 L85 72 Z" fill="#cc9804" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Shadow stack under illustration                                    */
/* ------------------------------------------------------------------ */
function IllustrationShadow() {
  return (
    <div className="flex flex-col items-center gap-[3px] pt-2">
      <div className="h-[3px] w-[78px] rounded-full bg-[#1e1e1e]/10" />
      <div className="h-[3px] w-[57px] rounded-full bg-[#1e1e1e]/10" />
      <div className="h-[3px] w-[37px] rounded-full bg-[#1e1e1e]/10" />
      <div className="h-[3px] w-[18px] rounded-full bg-[#1e1e1e]/10" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  View screen (phase: view | password)                               */
/* ------------------------------------------------------------------ */
function ViewScreen({ onChangeEmail }: { onChangeEmail: () => void }) {
  const router = useRouter();
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

      {/* current email field */}
      <div className="flex flex-col gap-2">
        <label className="font-display text-[16px] font-medium text-black">
          Currenct Email
        </label>
        <div className="flex items-center gap-3 rounded-[14px] bg-[#f5f4f1]/50 px-4 py-[14px]">
          <span className="flex-1 font-display text-[18px] font-normal text-[#1e1e1e]/30">
            emgee@mail.com
          </span>
          <span className="rounded-full bg-[#0e9f37]/10 px-2 py-[3px] font-display text-[10px] font-medium text-[#0e9f37]">
            Verified
          </span>
        </div>
      </div>

      {/* subtext */}
      <p className="font-display text-[18px] font-normal text-[#1e1e1e]/60">
        Manage your email address to receive update &amp; account notifications
      </p>

      {/* save button */}
      <button className="w-full rounded-[14px] bg-gold py-[18px] font-display text-[22px] font-semibold text-ink">
        Save Changes
      </button>

      {/* change email link */}
      <button
        onClick={onChangeEmail}
        className="flex w-fit items-center gap-1.5 font-display text-[16px] font-medium text-[#e9ad01] hover:opacity-80"
      >
        <EditIcon className="h-4 w-4" />
        Change Email Address
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  New email screen (phase: newEmail | confirmation)                  */
/* ------------------------------------------------------------------ */
function NewEmailScreen({
  email,
  onEmailChange,
  onUpdate,
}: {
  email: string;
  onEmailChange: (v: string) => void;
  onUpdate: () => void;
}) {
  const router = useRouter();
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

      {/* new email input */}
      <div className="flex flex-col gap-2">
        <label className="font-display text-[16px] font-medium text-black">
          Enter New Email Address
        </label>
        <div className="flex items-center rounded-[14px] bg-[#f5f4f1]/50 px-4 py-[14px]">
          <input
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="e.g georgekyrian@gmail.com"
            type="email"
            className="min-w-0 flex-1 bg-transparent font-display text-[18px] font-normal text-[#1e1e1e] outline-none placeholder:text-[#1e1e1e]/30"
          />
        </div>
      </div>

      {/* subtext */}
      <p className="font-display text-[18px] font-normal text-[#1e1e1e]/60">
        Manage your email address to receive update &amp; account notifications
      </p>

      {/* update button */}
      <button
        onClick={onUpdate}
        className="w-[320px] rounded-[14px] bg-gold py-[18px] font-display text-[22px] font-semibold text-ink"
      >
        Update Email
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Enter Password modal                                               */
/* ------------------------------------------------------------------ */
function EnterPasswordModal({
  onClose,
  onContinue,
}: {
  onClose: () => void;
  onContinue: () => void;
}) {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[606px] rounded-[24px] bg-white px-[37px] py-[37px]">
        {/* header row */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="font-display text-[22px] font-semibold text-[#1e1e1e]">
              Enter Password
            </span>
            <span className="font-display text-[14px] font-normal text-[#1e1e1e]/60">
              Input your password to change Email
            </span>
          </div>
          <button
            onClick={onClose}
            className="flex h-[22px] w-[22px] items-center justify-center hover:opacity-70"
          >
            <XIcon className="h-[14px] w-[14px] text-black" />
          </button>
        </div>

        {/* password field */}
        <div className="mb-8 flex flex-col gap-2">
          <label className="font-display text-[16px] font-medium text-black">
            Password
          </label>
          <div className="flex items-center rounded-[14px] bg-[#f5f4f1] px-4 py-[18px]">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              className="min-w-0 flex-1 bg-transparent font-display text-[18px] font-normal text-[#1e1e1e] outline-none placeholder:text-[#1e1e1e]/30"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="ml-2 shrink-0 text-black/40 hover:text-black/60"
            >
              {show ? (
                <EyeOffIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* continue button */}
        <button
          onClick={onContinue}
          className="w-full rounded-[14px] bg-gold py-[18px] font-display text-[22px] font-semibold text-ink"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Email Confirmation modal                                           */
/* ------------------------------------------------------------------ */
function EmailConfirmationModal({
  email,
  onClose,
}: {
  email: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative w-[606px] rounded-[24px] bg-white px-[70px] py-[37px]">
        {/* close */}
        <button
          onClick={onClose}
          className="absolute right-[37px] top-[37px] flex h-[22px] w-[22px] items-center justify-center hover:opacity-70"
        >
          <XIcon className="h-[14px] w-[14px] text-black" />
        </button>

        {/* illustration + shadow */}
        <div className="mb-8 flex flex-col items-center">
          <EmailIllustration />
          <IllustrationShadow />
        </div>

        {/* text */}
        <div className="flex flex-col gap-4 text-center">
          <span className="font-display text-[28px] font-semibold text-[#1e1e1e]">
            Email Confirmation
          </span>
          <p className="font-display text-[14px] font-normal leading-[22px] text-[#1e1e1e]/60">
            We have email to{" "}
            <span className="font-medium text-[#1e1e1e]/80">
              {email || "georgekyrian@gmail.com"}
            </span>{" "}
            to confirm the validity of your email address. After receiving the
            email follow the link provided to complete your change of mail
          </p>
        </div>

        {/* resend link */}
        <div className="mt-6 border-t border-[#1e1e1e]/10 pt-5 text-center">
          <button className="font-display text-[14px] font-normal text-[#1e1e1e]/60 hover:text-[#1e1e1e]/80">
            Did not receive any mail?{" "}
            <span className="font-medium text-[#e9ad01]">Resend Email</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function EmailSettingsPage() {
  useSetPageHeader({ title: "Email", subtitle: "" });

  const [phase, setPhase] = useState<Phase>("view");
  const [newEmail, setNewEmail] = useState("");

  return (
    <>
      {/* underlying screen */}
      {(phase === "view" || phase === "password") && (
        <ViewScreen onChangeEmail={() => setPhase("password")} />
      )}
      {(phase === "newEmail" || phase === "confirmation") && (
        <NewEmailScreen
          email={newEmail}
          onEmailChange={setNewEmail}
          onUpdate={() => setPhase("confirmation")}
        />
      )}

      {/* modal overlays */}
      {phase === "password" && (
        <EnterPasswordModal
          onClose={() => setPhase("view")}
          onContinue={() => setPhase("newEmail")}
        />
      )}
      {phase === "confirmation" && (
        <EmailConfirmationModal
          email={newEmail}
          onClose={() => setPhase("view")}
        />
      )}
    </>
  );
}
