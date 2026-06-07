import { Logo } from "../Logo";
import { Button } from "../Button";

const navItems = ["How it works", "Competitions", "Leaderboard", "Campus"];

export function Header() {
  return (
    <header className="absolute left-1/2 top-[29px] z-30 flex w-[1319px] -translate-x-1/2 items-center justify-between">
      <img
          src="/images/sabiplayLogo.png"
          alt="SabiPlay"
          className="h-[43px] w-[169px]"
        />

      <nav className="flex items-center gap-[18px]">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="font-display text-[18px] font-medium leading-[22px] text-ink/70 transition-colors hover:text-ink"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-[41px]">
        <a
          href="#"
          className="font-display text-[18px] font-semibold leading-[22px] text-black/60 transition-colors hover:text-black"
        >
          Login
        </a>
        <Button variant="dark" size="sm">
          Start Competing
        </Button>
      </div>
    </header>
  );
}
