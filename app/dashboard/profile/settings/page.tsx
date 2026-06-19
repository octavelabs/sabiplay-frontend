"use client";

import { useState } from "react";
import { useSetPageHeader } from "../../../context/PageHeaderContext";
import { Modal } from "../../../components/Modal";

/* ------------------------------------------------------------------ */
/*  Icons                                                             */
/* ------------------------------------------------------------------ */
type SVGProps = React.SVGProps<SVGSVGElement>;

const UserIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const MailIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

const LockIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const BellIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a7 7 0 0 0-7 7v4l-1.7 2.6A1 1 0 0 0 4 17h16a1 1 0 0 0 .7-1.7L19 13V9a7 7 0 0 0-7-7Zm0 20a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Z" />
  </svg>
);

const PowerIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}>
    <path d="M12 2v6M4.93 4.93A10 10 0 1 0 19.07 4.93" />
  </svg>
);

const TrashIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
  </svg>
);

const ChevronRight = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const SearchIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const XIcon = (p: SVGProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Logout modal                                                       */
/* ------------------------------------------------------------------ */
function LogoutModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose} className="max-w-[453px]">
      <div className="px-[46px] py-8">
        {/* close */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={onClose}
            className="flex h-[26px] w-[26px] items-center justify-center hover:opacity-70"
          >
            <XIcon className="h-[17px] w-[17px] text-black" />
          </button>
        </div>

        {/* icon + text */}
        <div className="flex flex-col items-center gap-8 text-center">
          {/* power icon circle */}
          <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#f45c2e]">
            <PowerIcon className="h-[57px] w-[57px] text-white" />
          </div>

          {/* title + subtitle */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-[28px] font-semibold leading-[33.6px] text-[#1e1e1e]">
              Are you sure you want to log out?
            </span>
            <p className="font-display text-[16px] font-normal leading-[26.7px] text-[#1e1e1e]/60">
              You are about to sign out of your sabiPlay acoount. You can Log in at anytime.
            </p>
          </div>
        </div>

        {/* buttons */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <button className="w-full rounded-full border border-[#791407] bg-[#f45c2e] py-[18px] font-display text-[22px] font-semibold text-white hover:opacity-90">
            Log out
          </button>
          <button
            onClick={onClose}
            className="font-display text-[18px] font-semibold text-[#1e1e1e]/70 hover:opacity-70"
          >
            Go back
          </button>
        </div>
      </div>
    </Modal>
  );
}

/* ------------------------------------------------------------------ */
/*  Delete account modal                                               */
/* ------------------------------------------------------------------ */
function DeleteModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose} className="max-w-[521px]">
      <div className="px-10 py-8">
        {/* close */}
        <div className="mb-6 flex justify-end">
          <button
            onClick={onClose}
            className="flex h-[26px] w-[26px] items-center justify-center hover:opacity-70"
          >
            <XIcon className="h-[17px] w-[17px] text-black" />
          </button>
        </div>

        {/* icon + text */}
        <div className="flex flex-col items-center gap-8 text-center">
          {/* trash icon circle */}
          <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#f45c2e]">
            <TrashIcon className="h-[57px] w-[57px] text-white" />
          </div>

          {/* title + subtitle */}
          <div className="flex flex-col gap-3">
            <span className="font-display text-[28px] font-semibold leading-[33.6px] text-[#1e1e1e]">
              Are you sure you want to delete your account?
            </span>
            <p className="font-display text-[16px] font-normal leading-[26.7px] text-[#1e1e1e]/60">
              This action is permanent. All your data, progress, and wallet balance will be lost. You cannot recover your account once deleted.
            </p>
          </div>
        </div>

        {/* buttons */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <button className="w-full rounded-full border border-[#791407] bg-[#f45c2e] py-[18px] font-display text-[22px] font-semibold text-white hover:opacity-90">
            Delete account
          </button>
          <button
            onClick={onClose}
            className="font-display text-[18px] font-semibold text-[#1e1e1e]/70 hover:opacity-70"
          >
            Go back
          </button>
        </div>
      </div>
    </Modal>
  );
}

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
/*  Toggle switch                                                      */
/* ------------------------------------------------------------------ */
function Toggle({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className={`relative h-[26px] w-[46px] shrink-0 rounded-full transition-colors ${
        on ? "bg-win" : "bg-black/20"
      }`}
    >
      <span
        className={`absolute top-[3px] h-5 w-5 rounded-full bg-white shadow transition-transform ${
          on ? "translate-x-[22px]" : "translate-x-[3px]"
        }`}
      />
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Setting row                                                        */
/* ------------------------------------------------------------------ */
type SettingItem = {
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  sublabel?: string;
  onClick?: () => void;
  toggle?: boolean;
  route?: string
};

function SettingRow({ item, notificationsOn, onToggle }: {
  item: SettingItem;
  notificationsOn?: boolean;
  onToggle?: (v: boolean) => void;
}) {
  const isToggle = item.toggle;
  return (
    <button
      onClick={isToggle ? undefined : item.onClick}
      className={`flex w-full items-center gap-3 py-0 ${
        isToggle ? "cursor-default" : "hover:opacity-80"
      }`}
    >
      {/* icon */}
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
      >
        {item.icon}
      </span>

      {/* text */}
      <div className="flex flex-1 flex-col items-start gap-0.5 text-left">
        <span className="font-display text-[18px] font-semibold leading-[22px] text-black">
          {item.label}
        </span>
        {item.sublabel && (
          <span className="font-display text-[14px] font-normal text-black/60">
            {item.sublabel}
          </span>
        )}
      </div>

      {/* right action */}
      {isToggle && onToggle ? (
        <Toggle on={notificationsOn ?? true} onChange={onToggle} />
      ) : (
        <ChevronRight className="h-5 w-5 shrink-0 text-black/30" />
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function SettingsPage() {
  useSetPageHeader({ title: "Settings", subtitle: "" });
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [showLogout, setShowLogout] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const mainSettings: SettingItem[] = [
    {
      label: "Profile",
      sublabel: "@emgee · George Omoh",
      iconBg: "bg-[#fd9933]",
      icon: <UserIcon className="h-5 w-5 text-white" />,
      route: '/profile/settings/profile'
    },
    {
      label: "Email",
      sublabel: "georgekyrian@gmail.com",
      iconBg: "bg-[#9557fe]",
      icon: <MailIcon className="h-5 w-5 text-white" />,
      route: '/profile/settings/email'
    },
    {
      label: "Password",
      sublabel: "Change Password",
      iconBg: "bg-[#fac843]",
      icon: <LockIcon className="h-5 w-5 text-white" />,
      route: '/profile/settings/password'
    },
    {
      label: "Notifications",
      iconBg: "bg-[#19ce91]",
      icon: <BellIcon className="h-5 w-5 text-white" />,
      toggle: true,
    
    },
  ];

  const dangerSettings: SettingItem[] = [
    {
      label: "Log Out",
      iconBg: "bg-[#f45c2e]",
      icon: <PowerIcon className="h-5 w-5 text-white" />,
      onClick: () => setShowLogout(true),
    },
    {
      label: "Delete my account",
      iconBg: "bg-[#f45c2e]",
      icon: <TrashIcon className="h-5 w-5 text-white" />,
      onClick: () => setShowDelete(true),
    },
  ];

  return (
    <>
    <div className="mx-auto flex w-full max-w-[984px] flex-col gap-4 pb-10">
      {/* search bar */}
      <div className="flex items-center gap-3 rounded-[14px] bg-[#f5f4f1] px-4 py-3">
        <SearchIcon className="h-5 w-5 shrink-0 text-black/40" />
        <span className="font-display text-[16px] font-normal text-black/40">
          Search Settings...
        </span>
      </div>

      {/* main card */}
      <div className="flex flex-col rounded-[20px] bg-white px-8 py-7">
        {/* profile display header */}
        <div className="flex items-center gap-4 pb-7">
          <Avatar cell={10} className="h-[66px] w-[66px]" />
          <div className="flex flex-col gap-0.5">
            <span className="font-display text-[18px] font-semibold text-black">
              Profile
            </span>
            <span className="font-display text-[16px] font-normal text-black/60">
              @emgee · George Omoh
            </span>
          </div>
        </div>

        {/* divider */}
        <div className="h-px w-full bg-black/[0.07]" />

        {/* main settings */}
        <div className="flex flex-col divide-y divide-black/[0.06] py-4">
          {mainSettings.map((item) => (
            <div key={item.label} className="py-[19px] first:pt-2 last:pb-2">
              <SettingRow
                item={item}
                notificationsOn={notificationsOn}
                onToggle={item.toggle ? setNotificationsOn : undefined}
              />
            </div>
          ))}
        </div>

        {/* divider */}
        <div className="h-px w-full bg-black/[0.07]" />

        {/* danger section */}
        <div className="flex flex-col divide-y divide-black/[0.06] py-4">
          {dangerSettings.map((item) => (
            <div key={item.label} className="py-[19px] first:pt-2 last:pb-2">
              <SettingRow item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>

    {showLogout && <LogoutModal onClose={() => setShowLogout(false)} />}
    {showDelete && <DeleteModal onClose={() => setShowDelete(false)} />}
    </>
  );
}
