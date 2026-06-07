import { StepBadge } from "@/components/auth/StepBadge";

export function SignupHeader({ step }: { step: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-display text-[18px] font-medium leading-6 text-ink/60">
          Get started with SabiPlay
        </span>
        <StepBadge step={step} />
      </div>
      <h1 className="font-display text-[48px] font-semibold leading-[43px] text-ink">
        Create account
      </h1>
    </div>
  );
}
