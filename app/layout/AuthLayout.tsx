import Image from "next/image";
import type { ReactNode } from "react";

const badges = ["⚡ Live 1v1 Battles", "🏆 Real Cash Prizes", "📚 50,000+ Questions"];

/**
 * Shared auth shell: a flex container with the brand image panel on the left
 * and the active auth form (login / signup / forgot-password) rendered on the
 * right. The image panel is hidden on small screens so the form takes over.
 */
export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen w-full bg-[#fffdf7] bg-[url('/images/section-bg.png')] bg-cover bg-center">
      {/* soften the texture so the form panel reads pale like the design */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fffefb] via-[#fffefb]/80 to-[#fffefb]/30" />
      <div className="relative mx-auto flex h-screen max-w-[1440px] items-stretch gap-0 p-5">
        {/* left brand panel */}
        <aside className="relative hidden w-[679px] shrink-0 overflow-hidden rounded-xl bg-ink-900 lg:block">
          <Image
            src="/images/auth-people.png"
            alt="SabiPlay players"
            fill
            priority
            sizes="679px"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-b from-transparent to-ink-900" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-[26px] p-[58px]">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-[58px] font-bold leading-[52px] text-gold">
                Knowledge Pays.
              </h2>
              <p className="max-w-[321px] font-display text-[18px] font-medium leading-6 text-white/60">
                Nigeria&apos;s competitive quiz platform. Compete in live battles, win
                real cash, and rise through the ranks.
              </p>
            </div>
            <div className="flex flex-wrap gap-[15px]">
              {badges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border-[0.7px] border-gold/40 bg-gold/[0.12] px-3.5 py-[7px] font-display text-[16px] font-semibold leading-5 text-white"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </aside>

        {/* right form column */}
        <div className="flex min-w-0 flex-1 flex-col overflow-auto">
          <main className="flex flex-1 items-center justify-center px-5 py-10 ">
            <div className="w-full max-w-[403px]">{children}</div>
          </main>
          <footer className="pb-2 pt-4 text-center font-display text-[16px] font-medium leading-6 text-ink/50">
            © 2025 SabiPlay · Made in Nigeria 🇳🇬
          </footer>
        </div>
      </div>
    </div>
  );
}
