import { Sun, Grid2x2 } from "lucide-react";

export const Logo = ({ compact = false }) => {
  return (
    <div className="flex items-center gap-3" data-testid="brand-logo-placeholder">
      <div className="relative grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 shadow-[var(--shadow-soft)]">
        <Grid2x2 className="absolute h-5 w-5 text-[#3B82F6]/70" strokeWidth={1.6} />
        <Sun className="absolute -right-0.5 -top-0.5 h-4 w-4 text-[#F7C948]" strokeWidth={2} />
      </div>
      {!compact && (
        <div className="leading-tight">
          <p className="font-display text-sm font-semibold tracking-tight text-[#3B82F6]">
            Energía Solar
          </p>
          <p className="text-[11px] text-white/55">e iluminación</p>
        </div>
      )}
    </div>
  );
};
