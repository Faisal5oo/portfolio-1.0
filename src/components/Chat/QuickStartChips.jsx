"use client";

export default function QuickStartChips({
  suggestions,
  onPick,
  disabled = false,
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 px-2 pb-2">
      {suggestions.map((s) => (
        <button
          key={s}
          type="button"
          disabled={disabled}
          onClick={() => onPick(s)}
          className={[
            "rounded-full px-3 py-1.5 text-xs sm:text-[13px]",
            "bg-white/5 text-white/80 ring-1 ring-white/10 backdrop-blur-md",
            "transition hover:bg-white/10 hover:text-white",
            "disabled:cursor-not-allowed disabled:opacity-40",
          ].join(" ")}
        >
          {s}
        </button>
      ))}
    </div>
  );
}

