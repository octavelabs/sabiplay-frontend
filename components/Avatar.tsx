/**
 * The Figma avatar asset is a 3×2 sprite sheet of 6 emoji-style faces.
 * Each usage in the design crops a single cell, so we select one via
 * background-position (3 columns → 0/50/100%, 2 rows → 0/100%).
 */
const cellPos: Record<number, string> = {
  0: "0% 0%",
  1: "50% 0%",
  2: "100% 0%",
  3: "0% 100%",
  4: "50% 100%",
  5: "100% 100%",
};

export function Avatar({
  cell = 0,
  className = "",
  rounded = "rounded-md",
  style,
}: {
  cell?: number;
  className?: string;
  rounded?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`block bg-cover ${rounded} ${className}`}
      style={{
        backgroundImage: "url(/images/avatar.png)",
        backgroundSize: "300% 200%",
        backgroundPosition: cellPos[cell] ?? "0% 0%",
        ...style,
      }}
      aria-hidden
    />
  );
}
