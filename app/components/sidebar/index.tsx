"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "../../context/UserContext";
import {
  HomeIcon,
  CompeteIcon,
  BattleIcon,
  LeaderboardIcon,
  WalletIcon,
  ProfileIcon,
  AchievementsIcon,
  PracticeIcon,
  CampusIcon,
  SignOutIcon,
} from "./icons";

const NAV = [
  { label: "Home", href: "/dashboard/home", Icon: HomeIcon },
  { label: "Compete", href: "/dashboard/compete", Icon: CompeteIcon },
  { label: "Battle", href: "/dashboard/battle", Icon: BattleIcon },
  { label: "Leaderboard", href: "/dashboard/leaderboard", Icon: LeaderboardIcon },
  { label: "Wallet", href: "/dashboard/wallet", Icon: WalletIcon },
  { label: "Profile", href: "/dashboard/profile", Icon: ProfileIcon },
  { label: "Achievements", href: "/dashboard/achievements", Icon: AchievementsIcon },
  { label: "Practice", href: "/dashboard/practice", Icon: PracticeIcon },
  { label: "Campus", href: "/dashboard/campus", Icon: CampusIcon },
];

/** Gold SabiPlay wordmark, recolored from the dark logo PNG via a CSS mask. */
function GoldLogo() {
  return (
    <span
      aria-label="SabiPlay"
      className="block h-[43px] w-[169px] bg-gold"
      style={{
        WebkitMaskImage: "url(/images/sabiplayLogo.png)",
        maskImage: "url(/images/sabiplayLogo.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
      }}
    />
  );
}

export default function SideBar() {
  const pathname = usePathname();
  const user = useUser();

  return (
    <aside className="hidden w-[372px] shrink-0 flex-col border-r border-gold bg-ink-900 px-[34px] pb-[34px] pt-[40px] lg:flex h-screen overflow-y-auto scrollbar-hide">
      <div className="px-2">
        <GoldLogo />
      </div>

      <nav className="mt-[46px] flex flex-col gap-[22px]">
        {NAV.map(({ label, href, Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`relative flex h-[45px] items-center gap-3 rounded-[9px] px-[18px] font-display text-[16px] font-semibold transition-colors ${
                active
                  ? "border border-white/[0.07] bg-white/[0.04] text-gold"
                  : "border border-transparent text-white/70 hover:text-white"
              }`}
            >
              <Icon className="h-[22px] w-[22px]" />
              <span>{label}</span>
              {active && (
                <span className="pointer-events-none absolute right-0 top-1/2 flex h-[42px] w-[40px] -translate-y-1/2 items-center justify-end overflow-hidden rounded-md bg-gradient-to-l from-gold/30 to-transparent">
                  <span className="h-[33px] w-[5px] rounded-l-[20px] bg-gold shadow-[0_0_20px_8px_rgba(252,193,26,0.65)]" />
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* footer */}
      <div className="mt-auto flex flex-col gap-5">
        <div className="h-px w-full bg-[#cac5c0]/[0.12]" />
        <div className="flex items-center gap-[7px]">
          <span
            aria-hidden
            className="h-[37px] w-[37px] shrink-0 rounded-full bg-cover"
            style={{
              backgroundImage: "url(/images/auth-avatars.png)",
              backgroundSize: "300% 400%",
              backgroundPosition: "50% 100%",
            }}
          />
          <div className="flex flex-col gap-[3px]">
            <span className="font-display text-[14px] font-semibold leading-[17px] text-white">
              emgee
            </span>
            <span className="font-display text-[10px] font-semibold leading-3 text-stone">
              {user.email}
            </span>
          </div>
        </div>
        <button className="flex items-center gap-1 self-start font-display text-[14px] font-medium leading-[17px] text-white">
          <SignOutIcon className="h-4 w-4 text-[#f44336]" />
          Sign out
        </button>
      </div>
    </aside>
  );
}

/** Bottom navigation for small screens (the desktop sidebar is hidden < lg). */
export function MobileNav() {
  const pathname = usePathname();
  const items = NAV.slice(0, 5);
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex h-[68px] items-center justify-around border-t border-gold/30 bg-ink-900 lg:hidden">
      {items.map(({ label, href, Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={label}
            href={href}
            className={`flex flex-col items-center gap-1 text-[11px] font-medium ${
              active ? "text-gold" : "text-white/70"
            }`}
          >
            <Icon className="h-[22px] w-[22px]" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
