export function Seal({ size = 64, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`seal shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <span
        className="font-display font-bold text-navy-900"
        style={{ fontSize: size * 0.34, letterSpacing: "-0.02em" }}
      >
        MW
      </span>
    </div>
  );
}
