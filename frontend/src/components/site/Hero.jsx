import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Leaf, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/site/Placeholder";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const chips = [
  { icon: Zap, label: "Ahorro hasta 95%" },
  { icon: ShieldCheck, label: "Instalación profesional" },
  { icon: Leaf, label: "Energía limpia" },
];

export const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#0B0D0F] pt-14 sm:pt-20">
      {/* decorative gold glow (small, <20% viewport) */}
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(247,201,72,0.16), transparent 60%)" }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-[var(--container-px)] py-[var(--section-py)] lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
          >
            <Sun className="h-3.5 w-3.5 text-[#F7C948]" />
            Energía solar premium en Ensenada, BC
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
          >
            Toma el control de{" "}
            <span className="text-[#F7C948]">tu recibo de luz.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Soluciones solares premium y sistemas aislados en Ensenada. Ahorra al máximo
            con la mejor tecnología.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.19, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              onClick={() => scrollToId("cotizador")}
              data-testid="global-cta-quote-button"
              size="lg"
              className="group h-12 bg-[#F7C948] px-6 text-base font-semibold text-[#1A1406] shadow-[0_10px_30px_rgba(247,201,72,0.18)] transition-transform hover:-translate-y-0.5 hover:bg-[#FFD86B] hover:shadow-[0_18px_60px_rgba(247,201,72,0.28)] active:scale-95"
            >
              Cotizar mi sistema
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollToId("paquetes")}
              data-testid="hero-secondary-cta-view-packages"
              size="lg"
              variant="outline"
              className="h-12 border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white"
            >
              Ver paquetes
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {chips.map((c) => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
              >
                <c.icon className="h-3.5 w-3.5 text-[#F7C948]" />
                {c.label}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.04] p-3 shadow-[var(--shadow)] backdrop-blur-xl">
            <Placeholder
              label="Render 3D de paneles solares"
              aspect="aspect-[4/3]"
              testid="placeholder-hero-panels"
            />
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[
                { k: "kWp", v: "Escalable" },
                { k: "Garantía", v: "Equipo pro" },
                { k: "Baterias", v: "Litio / AGM" },
              ].map((s) => (
                <div key={s.k} className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-white/50">{s.k}</p>
                  <p className="font-display text-sm font-semibold text-white">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
