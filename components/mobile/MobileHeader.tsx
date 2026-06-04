"use client";

import { useState } from "react";
import { Logo } from "../Logo";
import { HamburgerIcon, CloseIcon } from "../icons";
import { Button } from "../Button";

const navItems = ["How it works", "Competitions", "Leaderboard", "Campus"];

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-30 flex items-center justify-between">
      <Logo className="[&_span]:text-[26px] [&_svg]:h-8 [&_svg]:w-8" />

      <button
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-[38px] w-[42px] items-center justify-center rounded-[10px] bg-gold text-ink"
      >
        {open ? (
          <CloseIcon className="h-6 w-6" />
        ) : (
          <HamburgerIcon className="h-6 w-6" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-[48px] z-40 flex w-[220px] flex-col gap-1 rounded-2xl border border-black/5 bg-white p-4 shadow-xl">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-lg px-3 py-2.5 font-display text-[16px] font-medium text-ink/70 hover:bg-sand"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="rounded-lg px-3 py-2.5 font-display text-[16px] font-semibold text-black/60 hover:bg-sand"
          >
            Login
          </a>
          <Button variant="dark" size="xs" className="mt-1 w-full">
            Start Competing
          </Button>
        </div>
      )}
    </div>
  );
}
