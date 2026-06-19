import { PersonIcon, StarHalfIcon, ArrowUpIcon } from "../icons";
import { testimonials, type Testimonial } from "../testimonials";

function TestimonialCard({ t, className = "" }: { t: Testimonial; className?: string }) {
  return (
    <div className={`flex w-[427px] flex-col rounded-2xl bg-white px-[27px] py-[38px] ${className}`}>
      <p className="font-display text-[16px] font-normal leading-[27px] text-black/70">
        {t.quote}
      </p>
      <div className="my-[23px] border-t border-black/10" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-sand">
            <PersonIcon className="h-9 w-9 text-stone" />
          </span>
          <div className="flex flex-col gap-1.5">
            <span className="font-display text-[20px] font-semibold leading-[18px] text-black">
              {t.name}
            </span>
            <span className="font-display text-[14px] font-normal leading-[13px] text-black/50">
              {t.location}
            </span>
          </div>
        </div>
        <span
          className={`rounded-pill border-[0.6px] px-2.5 py-1.5 font-display text-[14px] font-medium leading-4 ${t.badgeClass}`}
        >
          {t.badge}
        </span>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative mx-auto h-[880px] max-w-[1740px] bg-sand">
      {/* heading */}
      <div className="absolute left-1/2 top-[119px] flex w-[794px] -translate-x-1/2 flex-col items-center gap-[39px]">
        <h2 className="text-gradient-dark text-center font-display text-[62px] font-semibold leading-[56px]">
          What Players Are Saying
        </h2>
        <p className="text-center font-display text-[24px] font-medium leading-[33px] text-ink/60">
          From quick matches to instant payouts, hear the stories of those who&rsquo;ve
          experienced the thrill firsthand.
        </p>
      </div>

      {/* cards */}
      <TestimonialCard t={testimonials[0]} className="absolute left-[56px] top-[447px]" />
      <TestimonialCard t={testimonials[1]} className="absolute left-[503px] top-[447px]" />
      <TestimonialCard t={testimonials[2]} className="absolute left-[950px] top-[447px]" />

      {/* nav arrows */}
      <div className="absolute left-[648px] top-[341px] flex items-center gap-2.5">
        <button className="flex h-[67px] w-[67px] items-center justify-center rounded-full border-[1.5px] border-transparent bg-gold/[0.06]">
          <ArrowUpIcon className="h-6 w-6 -rotate-90 text-[#89664c]/40" />
        </button>
        <button className="flex h-[67px] w-[67px] items-center justify-center rounded-full border-[1.5px] border-ink/25 bg-gold">
          <ArrowUpIcon className="h-6 w-6 rotate-90 text-ink" />
        </button>
      </div>

      {/* rating */}
      <div className="absolute left-[546px] top-[799px] flex items-center gap-1.5">
        <StarHalfIcon className="h-[29px] w-[29px] text-[#f8ab04]" />
        <span className="font-display text-[17px] font-normal leading-4 text-black/80">
          4.9 average rating from 2,000+ players
        </span>
      </div>
    </section>
  );
}
