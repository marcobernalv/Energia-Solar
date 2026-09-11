import { useMemo, useState } from "react";
import {
  Battery,
  BatteryCharging,
  Minus,
  Plus,
  Repeat,
  Clock,
  Layers,
  Sparkles,
  MessageCircle,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { formatMXN, openWhatsApp } from "@/components/site/data";

const NORMAL_LIFE = 6; // años promedio (5-7)
const LITIO_LIFE = 15; // años
const LITIO_EQUIV = 3.5; // 1 litio ≈ 3-4 normales

export const BatteryComparator = () => {
  const [baseNormales, setBaseNormales] = useState(4);
  const [horizon, setHorizon] = useState(15);
  const [priceNormal, setPriceNormal] = useState("");
  const [priceLitio, setPriceLitio] = useState("");

  const calc = useMemo(() => {
    const replacementSets = Math.ceil(horizon / NORMAL_LIFE); // veces que recompras el banco normal
    const totalNormal = baseNormales * replacementSets;
    const litioNeeded = Math.max(1, Math.ceil(baseNormales / LITIO_EQUIV));

    const pN = parseFloat(priceNormal);
    const pL = parseFloat(priceLitio);
    const hasPrices = !isNaN(pN) && pN > 0 && !isNaN(pL) && pL > 0;

    const costNormal = hasPrices ? totalNormal * pN : null;
    const costLitio = hasPrices ? litioNeeded * pL : null;
    const savings = hasPrices ? costNormal - costLitio : null;

    return {
      replacementSets,
      totalNormal,
      litioNeeded,
      hasPrices,
      costNormal,
      costLitio,
      savings,
    };
  }, [baseNormales, horizon, priceNormal, priceLitio]);

  const stepBase = (d) => setBaseNormales((v) => Math.max(1, Math.min(20, v + d)));

  const askAdvice = () =>
    openWhatsApp(
      `Hola, quiero asesoría sobre baterías.\n\nEn un horizonte de ${horizon} años y un banco base de ${baseNormales} batería(s) normales:\n• Con baterías normales compraría ~${calc.totalNormal} en total (reemplazos cada ${NORMAL_LIFE} años).\n• Con litio necesitaría ~${calc.litioNeeded}, una sola vez.\n\n¿Qué me conviene más?`
    );

  return (
    <section id="baterias" className="relative bg-[#0B0D0F] py-[var(--section-py)]">
      <div
        className="pointer-events-none absolute right-1/4 top-10 h-56 w-56 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(247,201,72,0.10), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-[var(--container-px)]">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F7C948]">
            Comparador de baterías
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Litio vs. normales: cuánto ahorras a largo plazo
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/65">
            Las baterías de litio duran hasta 15 años y una sola equivale a 3 o 4 normales.
            Ajusta los valores y compáralo tú mismo.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* Controls */}
          <Reveal className="lg:col-span-2">
            <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[var(--shadow-soft)]">
              <h3 className="font-display text-lg font-semibold text-white">Tus datos</h3>

              <div className="mt-6">
                <Label className="text-white/75">Baterías normales que necesita tu sistema</Label>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    type="button"
                    data-testid="battery-base-minus"
                    onClick={() => stepBase(-1)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span
                    data-testid="battery-base-count"
                    className="font-display min-w-12 text-center text-2xl font-semibold tabular-nums text-white"
                  >
                    {baseNormales}
                  </span>
                  <button
                    type="button"
                    data-testid="battery-base-plus"
                    onClick={() => stepBase(1)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <Label className="text-white/75">Horizonte de comparación</Label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {[10, 12, 15].map((y) => (
                    <button
                      key={y}
                      type="button"
                      data-testid={`battery-horizon-${y}`}
                      onClick={() => setHorizon(y)}
                      className={`rounded-[var(--radius-sm)] border px-3 py-2 text-sm font-medium transition-colors ${
                        horizon === y
                          ? "border-[#F7C948] bg-[#F7C948] text-[#1A1406]"
                          : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                      }`}
                    >
                      {y} años
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="pn" className="text-white/75">Precio batería normal</Label>
                  <Input
                    id="pn"
                    data-testid="battery-price-normal"
                    inputMode="numeric"
                    value={priceNormal}
                    onChange={(e) => setPriceNormal(e.target.value.replace(/[^0-9.]/g, ""))}
                    placeholder="Opcional"
                    className="mt-1.5 border-white/10 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-[#F7C948]/50"
                  />
                </div>
                <div>
                  <Label htmlFor="pl" className="text-white/75">Precio batería litio</Label>
                  <Input
                    id="pl"
                    data-testid="battery-price-litio"
                    inputMode="numeric"
                    value={priceLitio}
                    onChange={(e) => setPriceLitio(e.target.value.replace(/[^0-9.]/g, ""))}
                    placeholder="Opcional"
                    className="mt-1.5 border-white/10 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-[#F7C948]/50"
                  />
                </div>
              </div>
              <p className="mt-3 text-xs text-white/45">
                Ingresa precios aproximados (opcional) para estimar el ahorro en pesos. Es solo una
                referencia; contáctanos para precios reales.
              </p>
            </div>
          </Reveal>

          {/* Results */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="grid h-full grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Normales */}
              <div
                data-testid="battery-result-normal"
                className="flex flex-col rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70">
                    <Battery className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-white">Normales</p>
                    <p className="text-xs text-white/50">AGM / Fosfato</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  <Metric icon={Clock} label="Vida útil" value={`5 – 7 años`} />
                  <Metric icon={Repeat} label={`Reemplazos en ${horizon} años`} value={`${calc.replacementSets} veces`} />
                  <Metric icon={Layers} label="Total de baterías compradas" value={`${calc.totalNormal}`} highlight />
                  {calc.hasPrices && (
                    <Metric icon={Sparkles} label="Costo estimado" value={formatMXN(calc.costNormal)} />
                  )}
                </div>
              </div>

              {/* Litio */}
              <div
                data-testid="battery-result-litio"
                className="relative flex flex-col rounded-[var(--radius-xl)] border border-[#F7C948]/40 bg-[#F7C948]/[0.06] p-6 backdrop-blur-xl ring-1 ring-[#F7C948]/30 shadow-[var(--glow-gold)]"
              >
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-[#F7C948] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#1A1406]">
                  <Check className="h-3 w-3" /> Recomendado
                </span>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#F7C948]/30 bg-[#F7C948]/15 text-[#F7C948]">
                    <BatteryCharging className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-white">Litio</p>
                    <p className="text-xs text-white/50">Litio fosfato</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  <Metric icon={Clock} label="Vida útil" value={`Hasta 15 años`} />
                  <Metric icon={Repeat} label={`Reemplazos en ${horizon} años`} value={`0 veces`} />
                  <Metric icon={Layers} label="Total de baterías compradas" value={`${calc.litioNeeded}`} highlight />
                  {calc.hasPrices && (
                    <Metric icon={Sparkles} label="Costo estimado" value={formatMXN(calc.costLitio)} />
                  )}
                </div>
              </div>

              {/* Savings banner */}
              <div className="sm:col-span-2">
                {calc.hasPrices ? (
                  <div
                    data-testid="battery-savings"
                    className="flex flex-col items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl sm:flex-row sm:text-left"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/50">
                        Ahorro estimado con litio en {horizon} años
                      </p>
                      <p
                        className={`font-display mt-1 text-3xl font-semibold tabular-nums ${
                          calc.savings >= 0 ? "text-[#F7C948]" : "text-white"
                        }`}
                      >
                        {calc.savings >= 0 ? formatMXN(calc.savings) : `-${formatMXN(Math.abs(calc.savings))}`}
                      </p>
                    </div>
                    <Button
                      onClick={askAdvice}
                      data-testid="battery-whatsapp-cta"
                      className="bg-[#F7C948] font-semibold text-[#1A1406] hover:bg-[#FFD86B]"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" /> Quiero asesoría de baterías
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl sm:flex-row sm:text-left">
                    <p className="text-sm text-white/65">
                      Con litio compras{" "}
                      <span className="font-semibold text-white">{calc.litioNeeded}</span> batería(s)
                      una sola vez, en lugar de{" "}
                      <span className="font-semibold text-white">{calc.totalNormal}</span> baterías
                      normales a lo largo de {horizon} años.
                    </p>
                    <Button
                      onClick={askAdvice}
                      data-testid="battery-whatsapp-cta"
                      className="shrink-0 bg-[#F7C948] font-semibold text-[#1A1406] hover:bg-[#FFD86B]"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" /> Asesoría de baterías
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Metric = ({ icon: Icon, label, value, highlight }) => (
  <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0">
    <span className="flex items-center gap-2 text-sm text-white/60">
      <Icon className="h-4 w-4 text-[#F7C948]" strokeWidth={1.8} />
      {label}
    </span>
    <span className={`text-sm font-semibold tabular-nums ${highlight ? "text-[#F7C948]" : "text-white"}`}>
      {value}
    </span>
  </div>
);
