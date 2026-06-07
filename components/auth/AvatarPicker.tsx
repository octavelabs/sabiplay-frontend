/**
 * Avatar chooser for signup step 4. The asset is a 3×4 grid of 12 characters;
 * each option selects a single cell via background-position.
 */
const COLS = 3;
const ROWS = 4;
const COUNT = COLS * ROWS;

function cellStyle(i: number): React.CSSProperties {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  return {
    backgroundImage: "url(/images/auth-avatars.png)",
    backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
    backgroundPosition: `${(col / (COLS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`,
  };
}

export function AvatarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <span className="font-display text-[16px] font-medium leading-[22px] text-black">
        Choose your avatar
      </span>
      <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {Array.from({ length: COUNT }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onChange(i)}
            aria-label={`Avatar ${i + 1}`}
            className={`h-[72px] w-[72px] shrink-0 rounded-full bg-cover bg-center transition ${
              value === i
                ? "ring-[3px] ring-gold ring-offset-2 ring-offset-[#f6f2e7]"
                : "opacity-80 hover:opacity-100"
            }`}
            style={cellStyle(i)}
          />
        ))}
      </div>
    </div>
  );
}
