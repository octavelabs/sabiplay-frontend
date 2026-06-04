import Image from "next/image";
import { Button } from "../Button";

export function MobileCta() {
  return (
    <section className="overflow-hidden bg-ink-900">
      <div className="mx-auto flex w-full max-w-[440px] flex-col items-center gap-5 px-5 py-14">
        <Image
          src="/images/cta-character.png"
          alt="SabiPlay champion"
          width={303}
          height={286}
          className="h-[286px] w-[303px] object-contain"
        />
        <div className="flex flex-col items-center gap-9">
          <div className="flex flex-col items-center gap-[39px]">
            <h2 className="text-center font-display text-[32px] font-semibold leading-[29px] text-white">
              Ready to Prove You&apos;re the Smartest?
            </h2>
            <p className="text-center font-display text-[18px] font-medium leading-6 text-stone">
              Join thousands of Nigerians competing daily for real rewards. Your knowledge
              is worth more than you think.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[21px]">
            <div className="flex items-center gap-6">
              <Button variant="gold" size="xs">
                Create Your Account
              </Button>
              <Button variant="white" size="xs">
                Log In
              </Button>
            </div>
            <span className="font-display text-[14px] font-medium leading-[19px] text-stone">
              Free to join · No credit card required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
