"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "../icons";
import { faqs } from "../faqs";

export function MobileFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white">
      <div className="mx-auto flex w-full max-w-[440px] flex-col gap-[38px] px-5 py-12">
        {/* heading */}
        <div className="flex flex-col items-center gap-[19px]">
          <h2 className="text-gradient-dark text-center font-display text-[36px] font-semibold leading-[32px]">
            Frequently Asked Questions
          </h2>
          <p className="text-center font-display text-[18px] font-medium leading-6 text-ink/60">
            Find quick, straightforward explanations to the most common questions players
            ask.
          </p>
        </div>

        {/* accordion */}
        <div className="flex flex-col gap-[13px]">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q} className="flex flex-col gap-[25px] pb-3">
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex items-start justify-between gap-4 text-left"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-[18px] font-medium leading-6 text-black/75">
                      {f.q}
                    </span>
                    {open && (
                      <p className="font-display text-[16px] font-medium leading-[22px] text-ink/50">
                        {f.a}
                      </p>
                    )}
                  </div>
                  <span className="mt-0.5 flex h-[30px] w-[30px] shrink-0 items-center justify-center text-[#e9ad01]">
                    {open ? (
                      <MinusIcon className="h-[18px] w-[18px]" />
                    ) : (
                      <PlusIcon className="h-[18px] w-[18px]" />
                    )}
                  </span>
                </button>
                <div className="border-b border-black/15" />
              </div>
            );
          })}
        </div>

        <p className="font-display text-[16px] font-medium leading-[22px] text-ink/50">
          Still have questions?{" "}
          <a href="mailto:support@sabiplay.com" className="text-ink/70 hover:underline">
            support@sabiplay.com
          </a>
        </p>
      </div>
    </section>
  );
}
