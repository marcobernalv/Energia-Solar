import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as Icons from "lucide-react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Minus,
  Plus,
  Building2,
  MountainSnow,
  MessageCircle,
  Info,
  BatteryCharging,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import {
  APPLIANCES,
  FRIDGE_ANTIGUO_MULTIPLIER,
  openWhatsApp,
} from "@/components/site/data";

const STEP_LABELS = ["Tipo de sistema", "Tus aparatos", "Resultado"];

export const QuoteWizard = () => {
  const [step, setStep] = useState(1);
  const [systemType, setSystemType] = useState(null); // 'cfe' | 'aislado'
  const [selected, setSelected] = useState({}); // { [id]: qty }
  const [fridgeType, setFridgeType] = useState(null); // 'moderno' | 'antiguo'

  const fridgeSelected = Boolean(selected["refri"]);

  const toggleAppliance = (id) => {
    setSelected((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
        if (id === "refri") setFridgeType(null);
      } else {
        next[id] = 1;
        if (id === "refri") setFridgeType("moderno");
      }
      return next;
    });
  };

  const setQty = (id, delta) => {
    setSelected((prev) => {
      if (!prev[id]) return prev;
      const qty = Math.max(1, Math.min(20, prev[id] + delta));
      return { ...prev, [id]: qty };
    });
  };

  const estimate = useMemo(() => {
    let wh = 0;
    Object.entries(selected).forEach(([id, qty]) => {
      const a = APPLIANCES.find((x) => x.id === id);
      if (!a) return;
      let unit = a.whDay;
      if (id === "refri" && fridgeType === "antiguo") unit *= FRIDGE_ANTIGUO_MULTIPLIER;
      wh += unit * qty;
    });
    const kwh = wh / 1000;
    const panels = Math.max(1, Math.ceil(kwh / 2.2));
    return { kwh, panels };
  }, [selected, fridgeType]);

  const selectedCount = Object.keys(selected).length;

  const goNext = () => {
    if (step === 1) setStep(systemType === "cfe" ? 3 : 2);
    else if (step === 2) setStep(3);
  };
  const goBack = () => {
    if (step === 3) setStep(systemType === "cfe" ? 1 : 2);
    else if (step === 2) setStep(1);
  };
  const reset = () => {
    setStep(1);
    setSystemType(null);
    setSelected({});
    setFridgeType(null);
  };

  const canContinue =
    step === 1 ? Boolean(systemType) : step === 2 ? selectedCount > 0 : true;

  const buildMessage = () => {
    const lines = ["Hola, quiero cotizar un sistema solar.", ""];
    if (systemType === "cfe") {
      lines.push("Tipo: Interconexión CFE (ya tengo luz y quiero ahorrar).");
    } else {
      lines.push("Tipo: Sistema Aislado (sin luz de CFE en el lugar).");
      lines.push("");
      lines.push("Aparatos que quiero alimentar:");
      Object.entries(selected).forEach(([id, qty]) => {
        const a = APPLIANCES.find((x) => x.id === id);
        if (!a) return;
        let label = `• ${a.label} x${qty}`;
        if (id === "refri")
          label += ` (${fridgeType === "antiguo" ? "antiguo" : "moderno"})`;
        lines.push(label);
      });
      lines.push("");
      lines.push(`Consumo estimado: ~${estimate.kwh.toFixed(1)} kWh/día`);
      lines.push(`Sugerencia inicial: ~${estimate.panels} panel(es)`);
    }
    lines.push("");
    lines.push("¿Me pueden ayudar con una cotización a medida?");
    return lines.join("\n");
  };

  const sendWhatsApp = () => openWhatsApp(buildMessage());

  return (
    <section id="cotizador" className="relative bg-[#0F1216] py-[var(--section-py)]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(247,201,72,0.10), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-[var(--container-px)]">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F7C948]">
            Cotizador interactivo
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Arma tu sistema en menos de un minuto
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/65">
            Responde un par de preguntas y te preparamos un mensaje listo para enviar por WhatsApp.
          </p>
        </Reveal>

        <div
          data-testid="quote-wizard"
          className="mt-10 rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[var(--shadow)] sm:p-7"
        >
          {/* Stepper */}
          <div data-testid="quote-stepper" className="mb-8 flex items-center justify-between gap-2">
            {STEP_LABELS.map((label, i) => {
              const n = i + 1;
              const active = step === n;
              const done = step > n;
              const skipped = systemType === "cfe" && n === 2;
              return (
                <div key={label} className="flex flex-1 items-center gap-2">
                  <div
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-sm font-semibold transition-colors ${
                      active
                        ? "border-[#F7C948] bg-[#F7C948] text-[#1A1406]"
                        : done
                        ? "border-white/25 bg-white/10 text-white/80"
                        : "border-white/15 bg-transparent text-white/45"
                    } ${skipped ? "opacity-40" : ""}`}
                  >
                    {done ? <Check className="h-4 w-4" /> : n}
                  </div>
                  <span
                    className={`hidden text-xs sm:block ${active ? "text-white" : "text-white/50"} ${
                      skipped ? "opacity-40 line-through" : ""
                    }`}
                  >
                    {label}
                  </span>
                  {i < STEP_LABELS.length - 1 && (
                    <div className="mx-1 hidden h-px flex-1 bg-white/10 sm:block" />
                  )}
                </div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                data-testid="quote-step-1"
              >
                <h3 className="font-display text-center text-lg font-semibold text-white">
                  ¿Qué necesitas?
                </h3>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <ChoiceCard
                    testid="quote-choice-cfe"
                    active={systemType === "cfe"}
                    onClick={() => setSystemType("cfe")}
                    icon={Building2}
                    title="Interconexión CFE"
                    desc="Ya tienes luz y quieres ahorrar en tu recibo con paneles conectados a CFE."
                  />
                  <ChoiceCard
                    testid="quote-choice-aislado"
                    active={systemType === "aislado"}
                    onClick={() => setSystemType("aislado")}
                    icon={MountainSnow}
                    title="Sistema Aislado"
                    desc="No hay luz en tu terreno o rancho. Genera y almacena tu propia energía."
                  />
                </div>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                data-testid="quote-step-2"
              >
                <h3 className="font-display text-center text-lg font-semibold text-white">
                  Selecciona tus aparatos
                </h3>
                <p className="mt-1 text-center text-xs text-white/55">
                  Marca lo que quieres alimentar y ajusta la cantidad.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {APPLIANCES.map((a) => {
                    const Icon = Icons[a.icon] || Sparkles;
                    const on = Boolean(selected[a.id]);
                    return (
                      <div key={a.id}>
                        <button
                          type="button"
                          data-testid={`appliance-${a.id}`}
                          onClick={() => toggleAppliance(a.id)}
                          className={`relative flex w-full flex-col items-center gap-2 rounded-[var(--radius-md)] border p-4 text-center transition-colors ${
                            on
                              ? "border-[#F7C948]/60 bg-[#F7C948]/10"
                              : "border-white/10 bg-white/[0.03] hover:border-white/20"
                          }`}
                        >
                          {on && (
                            <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-[#F7C948] text-[#1A1406]">
                              <Check className="h-3 w-3" />
                            </span>
                          )}
                          <Icon
                            className={`h-7 w-7 ${on ? "text-[#F7C948]" : "text-white/70"}`}
                            strokeWidth={1.5}
                          />
                          <span className={`text-xs font-medium ${on ? "text-white" : "text-white/70"}`}>
                            {a.label}
                          </span>
                        </button>
                        {on && (
                          <div className="mt-2 flex items-center justify-center gap-3">
                            <button
                              type="button"
                              data-testid={`appliance-${a.id}-minus`}
                              onClick={() => setQty(a.id, -1)}
                              className="grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="min-w-6 text-center text-sm font-semibold tabular-nums text-white">
                              {selected[a.id]}
                            </span>
                            <button
                              type="button"
                              data-testid={`appliance-${a.id}-plus`}
                              onClick={() => setQty(a.id, 1)}
                              className="grid h-7 w-7 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Refrigerator submenu */}
                <AnimatePresence>
                  {fridgeSelected && (
                    <motion.div
                      key="fridge"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        data-testid="fridge-submenu"
                        className="mt-5 rounded-[var(--radius-md)] border border-[#F7C948]/25 bg-[#F7C948]/[0.06] p-4"
                      >
                        <p className="text-sm font-medium text-white">
                          Tu refrigerador, ¿es moderno o antiguo?
                        </p>
                        <div className="mt-3 grid grid-cols-2 gap-3">
                          {[
                            { id: "moderno", label: "Moderno" },
                            { id: "antiguo", label: "Antiguo" },
                          ].map((o) => (
                            <button
                              key={o.id}
                              type="button"
                              data-testid={`fridge-${o.id}`}
                              onClick={() => setFridgeType(o.id)}
                              className={`rounded-[var(--radius-sm)] border px-4 py-2.5 text-sm font-medium transition-colors ${
                                fridgeType === o.id
                                  ? "border-[#F7C948] bg-[#F7C948] text-[#1A1406]"
                                  : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                              }`}
                            >
                              {o.label}
                            </button>
                          ))}
                        </div>
                        <p className="mt-3 flex items-center gap-2 text-xs text-[#FFD86B]">
                          <Info className="h-3.5 w-3.5" /> Los antiguos consumen hasta 7x más.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                data-testid="quote-step-3"
              >
                <div className="text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#F7C948]/30 bg-[#F7C948]/10 text-[#F7C948]">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="font-display mt-4 text-xl font-semibold text-white">
                    ¡Hemos registrado tu selección!
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm text-white/65">
                    Envíanos esta información por WhatsApp para cotizar tu sistema a medida.
                  </p>
                </div>

                {systemType === "aislado" && (
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-[11px] uppercase tracking-wide text-white/50">Consumo estimado</p>
                      <p className="font-display mt-1 text-2xl font-semibold tabular-nums text-[#F7C948]">
                        ~{estimate.kwh.toFixed(1)}
                        <span className="ml-1 text-sm text-white/60">kWh/día</span>
                      </p>
                    </div>
                    <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/5 p-4 text-center">
                      <p className="text-[11px] uppercase tracking-wide text-white/50">Sugerencia inicial</p>
                      <p className="font-display mt-1 text-2xl font-semibold tabular-nums text-white">
                        ~{estimate.panels}
                        <span className="ml-1 text-sm text-white/60">panel(es)</span>
                      </p>
                    </div>
                  </div>
                )}

                <Button
                  onClick={sendWhatsApp}
                  data-testid="quote-result-whatsapp-button"
                  size="lg"
                  className="mt-6 w-full bg-[#F7C948] text-base font-semibold text-[#1A1406] shadow-[0_10px_30px_rgba(247,201,72,0.2)] transition-transform hover:-translate-y-0.5 hover:bg-[#FFD86B] active:scale-95"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> Enviar por WhatsApp
                </Button>

                {/* Legal note */}
                <p
                  data-testid="quote-legal-note"
                  className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/55"
                >
                  <strong className="text-white/70">Aviso importante:</strong> Ningún kit es
                  “ilimitado”. Si el consumo de tus aparatos supera la capacidad, el sistema se
                  puede escalar agregando más paneles o baterías.
                </p>

                {/* Battery accordion */}
                <div className="mt-4">
                  <Accordion type="single" collapsible data-testid="battery-accordion">
                    <AccordionItem value="baterias" className="border-white/10">
                      <AccordionTrigger className="text-sm text-white hover:no-underline">
                        <span className="flex items-center gap-2">
                          <BatteryCharging className="h-4 w-4 text-[#F7C948]" />
                          Diferencia en baterías (importante)
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-white/65">
                        Las normales (AGM / Fosfato) duran de 5 a 7 años. Las de Litio duran hasta
                        15 años y una sola equivale a 3 o 4 normales.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between gap-3">
            {step > 1 ? (
              <Button
                variant="outline"
                onClick={goBack}
                data-testid="quote-back-button"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Atrás
              </Button>
            ) : (
              <span />
            )}

            {step < 3 ? (
              <Button
                onClick={goNext}
                disabled={!canContinue}
                data-testid="quote-next-button"
                className="bg-[#F7C948] font-semibold text-[#1A1406] hover:bg-[#FFD86B] disabled:opacity-40"
              >
                Siguiente <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={reset}
                data-testid="quote-reset-button"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                Empezar de nuevo
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ChoiceCard = ({ testid, active, onClick, icon: Icon, title, desc }) => (
  <button
    type="button"
    data-testid={testid}
    onClick={onClick}
    className={`group relative flex flex-col items-start gap-3 rounded-[var(--radius-lg)] border p-6 text-left transition-colors ${
      active
        ? "border-[#F7C948]/60 bg-[#F7C948]/10 shadow-[var(--glow-gold)]"
        : "border-white/10 bg-white/[0.03] hover:border-white/20"
    }`}
  >
    {active && (
      <span className="absolute right-4 top-4 grid h-6 w-6 place-items-center rounded-full bg-[#F7C948] text-[#1A1406]">
        <Check className="h-4 w-4" />
      </span>
    )}
    <div
      className={`grid h-12 w-12 place-items-center rounded-2xl border ${
        active
          ? "border-[#F7C948]/40 bg-[#F7C948]/15 text-[#F7C948]"
          : "border-white/10 bg-white/5 text-white/70"
      }`}
    >
      <Icon className="h-6 w-6" strokeWidth={1.6} />
    </div>
    <h4 className="font-display text-base font-semibold text-white">{title}</h4>
    <p className="text-sm leading-relaxed text-white/60">{desc}</p>
  </button>
);
