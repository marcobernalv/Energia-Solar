import * as Icons from "lucide-react";
import { ADVANTAGES } from "@/components/site/data";
import { Reveal } from "@/components/site/Reveal";

export const Advantages = () => {
  return (
    <section id="ventajas" className="relative bg-[#0B0D0F] py-[var(--section-py)]">
      <div className="mx-auto max-w-6xl px-[var(--container-px)]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F7C948]">
            Ventajas
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Por qué la energía solar es la mejor inversión para tu hogar
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {ADVANTAGES.map((a, i) => {
            const Icon = Icons[a.icon] || Icons.Sparkles;
            return (
              <Reveal key={a.id} delay={i * 0.07} className={a.span}>
                <div
                  data-testid={`advantages-card-${a.id}`}
                  className="group h-full rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#F7C948]/25"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#F7C948]/20 bg-[#F7C948]/10 text-[#F7C948]">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display mt-5 text-lg font-semibold text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
