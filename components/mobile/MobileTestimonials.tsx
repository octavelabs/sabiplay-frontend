import { PersonIcon, StarHalfIcon, ArrowUpIcon } from "../icons";
import { testimonials, type Testimonial } from "../testimonials";

function Card({ t }: { t: Testimonial }) {
  return (
    <div className="flex w-[336px] shrink-0 flex-col gap-2 rounded-[13px] bg-white px-[21px] py-[30px]">
      <div className="flex flex-col gap-[17px]">
        <div className="flex flex-col gap-[18px]">
          <p className="font-display text-[14px] font-normal leading-6 text-black/70">
            {t.quote}
          </p>
          <div className="border-t border-black/10" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-sand">
              <PersonIcon className="h-7 w-7 text-stone" />
            </span>
            <div className="flex flex-col gap-1.5">
              <span className="font-display text-[14px] font-semibold leading-[13px] text-black">
                {t.name}
              </span>
              <span className="font-display text-[12px] font-normal leading-[11px] text-black/50">
                {t.location}
              </span>
            </div>
          </div>
          <span
            className={`shrink-0 rounded-pill border-[0.6px] px-2 py-1.5 font-display text-[14px] font-medium leading-4 ${t.badgeClass}`}
          >
            {t.badge}
          </span>
        </div>
      </div>
    </div>
  );
}

export function MobileTestimonials() {
  return (
    <section className="bg-sand">
      <div className="mx-auto flex w-full max-w-[440px] flex-col gap-[38px] px-5 py-12">
        <div className="flex flex-col items-center gap-[19px]">
          <h2 className="text-gradient-dark text-center font-display text-[36px] font-semibold leading-[32px]">
            What Players Are Saying
          </h2>
          <p className="text-center font-display text-[18px] font-medium leading-6 text-ink/60">
            From quick matches to instant payouts, hear the stories of those who&rsquo;ve
            experienced the thrill firsthand.
          </p>
        </div>
      </div>

      {/* horizontal scroll cards */}
      <div className="flex gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t) => (
          <Card key={t.name} t={t} />
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-[440px] flex-col items-center gap-6 px-5 py-8">
        {/* arrows */}
        <div className="flex items-center gap-2">
          <button className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gold/[0.06]">
            <ArrowUpIcon className="h-5 w-5 -rotate-90 text-[#89664c]/40" />
          </button>
          <button className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gold">
            <ArrowUpIcon className="h-5 w-5 rotate-90 text-ink" />
          </button>
        </div>
        {/* rating */}
        <div className="flex items-center gap-1.5">
          <StarHalfIcon className="h-[29px] w-[29px] text-[#f8ab04]" />
          <span className="font-display text-[16px] font-normal leading-[14px] text-black/80">
            4.9 Average rating from 2,000+ players
          </span>
        </div>
      </div>
    </section>
  );
}
