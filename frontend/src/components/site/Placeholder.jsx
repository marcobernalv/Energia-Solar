import { Image as ImageIcon } from "lucide-react";

export const Placeholder = ({
  label = "Imagen",
  caption,
  aspect = "aspect-[16/10]",
  testid,
  className = "",
  icon: Icon = ImageIcon,
}) => {
  return (
    <figure className={className}>
      <div
        data-testid={testid}
        className={`relative overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.04] backdrop-blur-xl ${aspect} grid place-items-center`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(120% 80% at 100% 0%, rgba(247,201,72,0.10), transparent 55%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-3 text-white/45">
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5">
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <span className="text-xs font-medium tracking-wide text-white/50">{label}</span>
        </div>
      </div>
      {caption && <figcaption className="mt-3 text-xs text-white/55">{caption}</figcaption>}
    </figure>
  );
};
