/**
 * The Joint — signature motif.
 * A single open dovetail corner drawn in gold, used to frame key images.
 * Renders four corners around its parent (parent must be `relative`).
 */
export function JoineryFrame({
  className = "",
  color = "var(--accent)",
}: {
  className?: string;
  color?: string;
}) {
  const corner = (rotate: number, position: string) => (
    <svg
      viewBox="0 0 40 40"
      className={`absolute w-8 h-8 md:w-10 md:h-10 ${position}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
    >
      <path
        d="M2 2V16M2 2H16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M2 20 L2 26 L8 26"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="square"
        opacity="0.55"
      />
    </svg>
  );

  return (
    <div className={`pointer-events-none absolute inset-0 z-20 ${className}`}>
      {corner(0, "top-0 left-0")}
      {corner(90, "top-0 right-0")}
      {corner(-90, "bottom-0 left-0")}
      {corner(180, "bottom-0 right-0")}
    </div>
  );
}
