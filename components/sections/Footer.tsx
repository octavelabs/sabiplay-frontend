import Image from "next/image";
import { Logo } from "../Logo";
import { XSocialIcon, InstagramIcon, TiktokIcon } from "../icons";

const links = [
  "How it Works",
  "Competitions",
  "Leaderboard",
  "Campus",
  "Privacy Policy",
  "Terms of Service",
];

export function Footer() {
  return (
    <section className="relative mx-auto h-[593px] w-[1440px] overflow-hidden bg-white">
      {/* background texture */}
      <Image
        src="/images/bg-texture.png"
        alt=""
        width={1475}
        height={1290}
        className="pointer-events-none absolute left-1/2 top-0 h-full w-[1475px] max-w-none -translate-x-1/2 object-cover opacity-80"
      />

      {/* top row: logo + nav */}
      <div className="absolute left-[56px] top-[56px] flex w-[1321px] items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="font-display text-[20px] font-medium leading-[27px] text-ink/70 transition-colors hover:text-ink"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>

      {/* divider */}
      <div className="absolute left-[85px] top-[157px] h-px w-[1269px] bg-black/10" />

      {/* bottom row: copyright + socials */}
      <p className="absolute left-[58px] top-[195px] font-display text-[18px] font-medium leading-6 text-stone">
        © 2025 SabiPlay. All rights reserved.&nbsp;&nbsp;&nbsp;&nbsp;Made in Nigeria 🇳🇬
      </p>
      <div className="absolute left-[1243px] top-[191px] flex items-center gap-[18px] text-ink">
        <a href="#" aria-label="X"><XSocialIcon className="h-8 w-8" /></a>
        <a href="#" aria-label="Instagram"><InstagramIcon className="h-8 w-8" /></a>
        <a href="#" aria-label="TikTok"><TiktokIcon className="h-8 w-8" /></a>
      </div>
    </section>
  );
}
