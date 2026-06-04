import Image from "next/image";
import { Button } from "../Button";

export function Cta() {
  return (
    <section className="relative mx-auto h-[952px] w-[1440px] overflow-hidden bg-ink-900">
      <div className="absolute left-1/2 top-[49px] flex w-[621px] -translate-x-1/2 flex-col items-center gap-[67px]">
        <Image
          src="/images/cta-character.png"
          alt="SabiPlay champion"
          width={423}
          height={400}
          className="h-[400px] w-[423px] object-contain"
        />
        <div className="flex flex-col items-center gap-9">
          <div className="flex flex-col items-center gap-[39px]">
            <h2 className="text-center font-display text-[62px] font-semibold leading-[56px] text-white">
              Ready to Prove You&apos;re the Smartest?
            </h2>
            <p className="max-w-[621px] text-center font-display text-[24px] font-medium leading-[33px] text-stone">
              Join thousands of Nigerians competing daily for real rewards. Your knowledge
              is worth more than you think.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[21px]">
            <div className="flex items-center gap-6">
              <Button variant="gold">Create Your Account</Button>
              <Button variant="white">Log In</Button>
            </div>
            <span className="font-display text-[18px] font-medium leading-6 text-stone">
              Free to join · No credit card required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
