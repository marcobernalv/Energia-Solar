import { HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { openWhatsApp } from "@/components/site/data";

const FAQS = [
  {
    q: "¿Cuál es la diferencia entre Interconexión CFE y Sistema Aislado?",
    a: "En Interconexión CFE ya cuentas con el servicio de la CFE y los paneles reducen tu recibo de luz; muchas veces no necesitas baterías. En un Sistema Aislado no hay red de CFE en el lugar (terrenos, ranchos o casas alejadas), por lo que generas tu propia energía y la almacenas en baterías para usarla de día y de noche.",
  },
  {
    q: "¿Necesito baterías si tengo Interconexión CFE?",
    a: "Normalmente no. En una interconexión los paneles inyectan energía y tu consumo se compensa con la CFE. Solo agregamos baterías si además quieres respaldo ante apagones. En un sistema aislado las baterías sí son indispensables.",
  },
  {
    q: "¿Cuánto puedo ahorrar en mi recibo de luz?",
    a: "Depende de tu consumo y del tamaño del sistema. El objetivo es dimensionar tu equipo para reducir al máximo posible tu recibo. Con una cotización a medida te decimos el ahorro estimado para tu caso.",
  },
  {
    q: "¿Es cierto que ningún kit es \u2018ilimitado\u2019?",
    a: "Así es. Cada sistema se dimensiona según los aparatos que quieres alimentar. Si tu consumo supera la capacidad, el sistema se puede escalar agregando más paneles o más baterías. Por eso el cotizador te ayuda a estimar tu consumo real.",
  },
  {
    q: "¿Cuánto dura una batería y qué tipo me conviene?",
    a: "Las baterías normales (AGM / Fosfato) duran de 5 a 7 años. Las de litio duran hasta 15 años y una sola equivale a 3 o 4 normales, por lo que a largo plazo suelen ser más rentables. Usa el comparador de baterías para verlo con tus números.",
  },
  {
    q: "¿La instalación y el equipo son profesionales?",
    a: "Sí. Trabajamos con marcas reconocidas (paneles de 510 a 565w, inversores PowMr, Runstar, Growatt y Must) e instalación profesional y limpia, desde la cotización hasta la puesta en marcha.",
  },
  {
    q: "¿Qué mantenimiento requiere un sistema solar?",
    a: "Muy poco. Los paneles solo necesitan limpieza ocasional para quitar polvo y mantener su rendimiento. El resto del equipo está diseñado para operar por años con mínima intervención.",
  },
];

export const Faq = () => {
  return (
    <section id="faq" className="relative bg-[#0F1216] py-[var(--section-py)]">
      <div className="mx-auto max-w-3xl px-[var(--container-px)]">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F7C948]">
            Preguntas frecuentes
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Resolvemos tus dudas antes de cotizar
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-[var(--shadow-soft)] sm:p-4">
            <Accordion type="single" collapsible data-testid="faq-accordion" className="w-full">
              {FAQS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  data-testid={`faq-item-${i}`}
                  className="border-white/10 px-3"
                >
                  <AccordionTrigger className="text-left text-sm font-medium text-white hover:no-underline sm:text-base">
                    <span className="flex items-start gap-3">
                      <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#F7C948]" />
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7 text-sm leading-relaxed text-white/65">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-8 text-center">
          <p className="text-sm text-white/60">¿Tienes otra pregunta?</p>
          <Button
            onClick={() => openWhatsApp("Hola, tengo una pregunta sobre sus sistemas solares:")}
            data-testid="faq-whatsapp-cta"
            className="mt-3 bg-[#F7C948] font-semibold text-[#1A1406] hover:bg-[#FFD86B]"
          >
            <MessageCircle className="mr-2 h-4 w-4" /> Pregúntanos por WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  );
};
