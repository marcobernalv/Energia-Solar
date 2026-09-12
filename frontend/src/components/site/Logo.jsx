export const Logo = ({ className = "h-11", withText = false }) => {
  return (
    <div className="flex items-center gap-3" data-testid="brand-logo">
      <img
        src="/images/logo.png"
        alt="Energía Solar e iluminación"
        className={`${className} w-auto object-contain`}
        loading="eager"
      />
      {withText && (
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
