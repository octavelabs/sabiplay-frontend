import { LocationIcon, ChevronDownIcon } from "@/components/auth/icons";

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi",
  "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
  "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT Abuja",
];

export function StateSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="font-display text-[16px] font-medium leading-[22px] text-black">
        State of Origin
      </label>
      <div className="relative">
        <LocationIcon className="pointer-events-none absolute left-5 top-1/2 h-[26px] w-[26px] -translate-y-1/2 text-black/40" />
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-[63px] w-full appearance-none rounded-full border border-black/10 bg-[#f6f2e7]/[0.98] pl-[54px] pr-12 font-display text-[18px] leading-6 outline-none ${
            value ? "text-ink" : "text-ink/60"
          }`}
        >
          <option value="">Select your state</option>
          {NIGERIAN_STATES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/70" />
      </div>
    </div>
  );
}
