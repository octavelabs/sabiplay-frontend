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

export function MobileFooter() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Image
        src="/images/bg-texture.png"
        alt=""
        width={453}
        height={548}
        className="pointer-events-none absolute bottom-0 left-1/2 h-auto w-[453px] max-w-none -translate-x-1/2 object-cover opacity-80"
      />

      <div className="relative mx-auto flex w-full max-w-[440px] flex-col gap-8 px-5 py-12">
        <Logo className="[&_span]:text-[26px] [&_svg]:h-8 [&_svg]:w-8" />

        <nav className="flex flex-col gap-2.5">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="font-display text-[16px] font-medium leading-[22px] text-ink/70 hover:text-ink"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5 text-ink/70">
          <a href="#" aria-label="X"><XSocialIcon className="h-6 w-6" /></a>
          <a href="#" aria-label="Instagram"><InstagramIcon className="h-6 w-6" /></a>
          <a href="#" aria-label="TikTok"><TiktokIcon className="h-6 w-6" /></a>
        </div>

        <div className="mt-2 border-t border-black/10 pt-5">
          <p className="font-display text-[14px] font-normal leading-[19px] text-stone">
            © 2025 SabiPlay. All rights reserved.&nbsp;&nbsp;&nbsp;Made in Nigeria 🇳🇬
          </p>
        </div>
      </div>
    </section>
  );
}
