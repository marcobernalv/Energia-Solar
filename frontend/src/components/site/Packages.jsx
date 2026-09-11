import { Cpu, BatteryFull, MessageCircle, Sun, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import {
  ECON_PACKAGES,
  PREMIUM_PACKAGES,
  formatMXN,
  openWhatsApp,
} from "@/components/site/data";

const PackageCard = ({ pkg, index }) => {
  const highlight = pkg.highlight;
  const send = () =>
    openWhatsApp(
      `Hola, me interesa el paquete de ${formatMXN(pkg.price)}:\n• ${pkg.panels}\n• ${pkg.inverter}\n• ${pkg.battery}\n\n¿Me pueden dar más información?`
    );

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <div
        data-testid={`package-card-${pkg.id}`}
        className={`relative flex h-full flex-col rounded-[var(--radius-lg)] border p-6 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 ${
          highlight
            ? "border-[#F7C948]/40 bg-[#F7C948]/[0.06] ring-1 ring-[#F7C948]/35 shadow-[var(--glow-gold)]"
            : "border-white/10 bg-white/5 hover:border-[#F7C948]/25"
        }`}
      >
        {pkg.badge && (
          <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-[#F7C948] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#1A1406]">
            <Zap className="h-3 w-3" /> {pkg.badge}
          </span>
        )}

        <div className="flex items-baseline gap-2">
          <p className="font-display text-3xl font-semibold tabular-nums text-white">
            {formatMXN(pkg.price)}
          </p>
        </div>
        {pkg.oldPrice && (
          <p className="mt-1 text-sm text-white/45">
            antes <span className="line-through">{formatMXN(pkg.oldPrice)}</span>
          </p>
        )}
        {pkg.note && <p className="mt-1 text-xs font-medium text-[#FFD86B]">{pkg.note}</p>}

        <div className="mt-5 flex-1 space-y-3">
          <Spec icon={Sun} text={pkg.panels} />
          <Spec icon={Cpu} text={pkg.inverter} />
          <Spec icon={BatteryFull} text={pkg.battery} />
        </div>

        <Button
          onClick={send}
          data-testid={`package-select-${pkg.id}`}
          className={`mt-6 w-full font-semibold ${
            highlight
              ? "bg-[#F7C948] text-[#1A1406] hover:bg-[#FFD86B]"
              : "border border-[#F7C948]/40 bg-transparent text-[#F7C948] hover:bg-[#F7C948]/10"
          }`}
        >
          <MessageCircle className="mr-2 h-4 w-4" /> Cotizar por WhatsApp
        </Button>
      </div>
    </Reveal>
  );
};

const Spec = ({ icon: Icon, text }) => (
  <div className="flex items-start gap-3">
    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#F7C948]" strokeWidth={1.8} />
    <span className="text-sm text-white/75">{text}</span>
  </div>
);

export const Packages = () => {
  return (
    <section id="paquetes" className="relative bg-[#0B0D0F] py-[var(--section-py)]">
      <div className="mx-auto max-w-6xl px-[var(--container-px)]">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F7C948]">
            Nuestros sistemas
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Paquetes con precios reales, listos para instalar
          </h2>
        </Reveal>

        <Tabs defaultValue="economica" className="mt-10">
          <div className="flex justify-center">
            <TabsList
              data-testid="packages-tabs"
              className="h-auto rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
            >
              <TabsTrigger
                value="economica"
                data-testid="tab-economica"
                className="rounded-full px-5 py-2 text-sm data-[state=active]:bg-[#F7C948] data-[state=active]:text-[#1A1406] data-[state=active]:shadow-none text-white/70"
              >
                Línea Económica
              </TabsTrigger>
              <TabsTrigger
                value="premium"
                data-testid="tab-premium"
                className="rounded-full px-5 py-2 text-sm data-[state=active]:bg-[#F7C948] data-[state=active]:text-[#1A1406] data-[state=active]:shadow-none text-white/70"
              >
                Línea Premium
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="economica" className="mt-8">
            <p className="mb-6 text-center text-sm text-white/55">
              Paneles 510–525w · Inversores PowMr / Runstar
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ECON_PACKAGES.map((p, i) => (
                <PackageCard key={p.id} pkg={p} index={i} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="premium" className="mt-8">
            <p className="mb-6 text-center text-sm text-white/55">
              Paneles 565w · Inversores Growatt / Must · Baterías Hope 5kw
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PREMIUM_PACKAGES.map((p, i) => (
                <PackageCard key={p.id} pkg={p} index={i} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
