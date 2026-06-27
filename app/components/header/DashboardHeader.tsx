"use client";

import { useUser } from "../../context/UserContext";
import { usePageHeader } from "../../context/PageHeaderContext";

/** Renders the dashboard header using the title/subtitle/node the active page set. */
export function DashboardHeaderSlot() {
  const { header } = usePageHeader();
  if (header.hidden) return null;
  return (
    <DashboardHeader
      title={header.title}
      subtitle={header.subtitle}
      node={header.node}
      button={header.button}
      onButtonClick={header.onButtonClick}
    />
  );
}

interface DashboardHeaderProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Fully custom left-side header content (replaces logo + title block). */
  node?: React.ReactNode;
  button?: React.ReactNode;
  onButtonClick?: () => void;
}

export default function DashboardHeader({
  title,
  subtitle,
  node,
  button,
  onButtonClick,
}: DashboardHeaderProps) {
  const { user } = useUser();
  const firstName = user?.user.username ?? "";

  return (
    <header className="flex items-center justify-between px-4 pt-6 lg:px-[40px] lg:pt-[40px]">
      {node ?? (
        <>
          {/* mobile logo */}
          {/* <span
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
          /> */}

          <div className="flex-col gap-3.5 lg:flex">
            <h1 className="font-display text-[22px] lg:text-[40px] font-semibold leading-[43px] text-[#1E1E1E] xl:text-[48px]">
              {title ?? <>Hey, {firstName} 👋</>}
            </h1>
            {subtitle !== "" && (
              <p className="font-display text-[14px] lg:text-[18px] font-medium leading-6 text-[#1E1E1E99]">
                {subtitle ?? "Ready to compete? Your next match is waiting"}
              </p>
            )}
          </div>
        </>
      )}

      {button && (
        <button
          onClick={onButtonClick}
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gold/[0.07]"
        >
          {button}
        </button>
      )}
    </header>
  );
}
