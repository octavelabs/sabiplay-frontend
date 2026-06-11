"use client";

import { useUser } from "../../context/UserContext";
import { usePageHeader } from "../../context/PageHeaderContext";
import { BellIcon } from "../sidebar/icons";

/** Renders the dashboard header using the title/subtitle/node the active page set. */
export function DashboardHeaderSlot() {
  const { header } = usePageHeader();
  return (
    <DashboardHeader title={header.title} subtitle={header.subtitle} node={header.node} />
  );
}

interface DashboardHeaderProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Fully custom left-side header content (replaces logo + title block). */
  node?: React.ReactNode;
}

export default function DashboardHeader({
  title,
  subtitle,
  node,
}: DashboardHeaderProps) {
  const user = useUser();
  const firstName = user.name.split(" ")[0];

  return (
    <header className="flex items-center justify-between px-4 pt-6 lg:px-[35px] lg:pt-[40px] xl:px-[70px]">
      {node ?? (
        <>
          {/* mobile logo */}
          <span
            aria-label="SabiPlay"
            className="block h-8 w-[150px] shrink-0 bg-ink lg:hidden"
            style={{
              WebkitMaskImage: "url(/images/sabiplayLogo.png)",
              maskImage: "url(/images/sabiplayLogo.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }}
          />

          <div className="hidden flex-col gap-3.5 lg:flex">
            <h1 className="font-display text-[40px] font-semibold leading-[43px] text-ink xl:text-[48px]">
              {title ?? <>Hey, {firstName} 👋</>}
            </h1>
            <p className="font-display text-[18px] font-medium leading-6 text-ink/60">
              {subtitle ?? "Ready to compete? Your next match is waiting"}
            </p>
          </div>
        </>
      )}

      <button
        aria-label="Notifications"
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gold/[0.07]"
      >
        <BellIcon className="h-[26px] w-[26px] text-ink-900" />
        <span className="absolute right-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-[#fffaeb] bg-[#f44336]" />
      </button>
    </header>
  );
}
