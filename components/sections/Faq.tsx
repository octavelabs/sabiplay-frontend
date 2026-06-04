"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "../icons";
import { faqs } from "../faqs";

function FaqItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 border-b border-black/15 pb-5">
      <button
        onClick={onToggle}
        className="flex items-start justify-between gap-[120px] text-left"
      >
        <div className="flex flex-col gap-1.5">
          <span className="font-display text-[26px] font-medium leading-[35px] text-black/75">
            {q}
          </span>
          {open && (
            <p className="font-display text-[20px] font-medium leading-[27px] text-ink/50">
              {a}
            </p>
          )}
        </div>
        <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center text-[#e9ad01]">
          {open ? (
            <MinusIcon className="h-[26px] w-[26px]" />
          ) : (
            <PlusIcon className="h-4 w-4" />
          )}
        </span>
      </button>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative mx-auto h-[1269px] w-[1440px] bg-white">
      <div className="absolute left-1/2 top-[110px] flex w-[866px] -translate-x-1/2 flex-col items-center gap-[100px]">
        {/* heading */}
        <div className="flex flex-col items-center gap-[39px]">
          <h2 className="text-gradient-dark text-center font-display text-[62px] font-semibold leading-[56px]">
            Frequently Asked Questions
          </h2>
          <p className="text-center font-display text-[24px] font-medium leading-[33px] text-ink/60">
            Find quick, straightforward explanations to the most common questions
            players ask.
          </p>
        </div>

        {/* accordion */}
        <div className="flex w-full flex-col gap-[30px]">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>

      <p className="absolute left-1/2 top-[1154px] -translate-x-1/2 font-display text-[20px] font-medium leading-[27px] text-ink/50">
        Still have questions?{" "}
        <a href="mailto:support@sabiplay.com" className="text-ink/70 underline-offset-2 hover:underline">
          support@sabiplay.com
        </a>
      </p>
    </section>
  );
}
