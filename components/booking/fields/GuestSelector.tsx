type GuestSelectorProps = {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

export default function GuestSelector({
  label,
  value,
  min = 0,
  max = 20,
  onChange,
}: GuestSelectorProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-charcoal/10 py-3 last:border-0">
      <span className="text-sm text-charcoal">{label}</span>

      <div className="flex items-center gap-4">
        <button
          type="button"
          disabled={value <= min}
          onClick={() => onChange(Math.max(min, value - 1))}
          aria-label={`Decrease ${label.toLowerCase()}`}
          className="flex h-8 w-8 items-center justify-center border border-charcoal/20 text-lg text-ocean transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-30"
        >
          −
        </button>

        <span className="w-5 text-center text-sm tabular-nums">{value}</span>

        <button
          type="button"
          disabled={value >= max}
          onClick={() => onChange(Math.min(max, value + 1))}
          aria-label={`Increase ${label.toLowerCase()}`}
          className="flex h-8 w-8 items-center justify-center border border-charcoal/20 text-lg text-ocean transition-colors hover:border-gold disabled:cursor-not-allowed disabled:opacity-30"
        >
          +
        </button>
      </div>
    </div>
  );
}
