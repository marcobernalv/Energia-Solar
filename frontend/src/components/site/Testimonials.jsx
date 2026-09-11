import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { TESTIMONIALS } from "@/components/site/data";

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [emblaApi, paused]);

  return (
    <section id="testimonios" className="relative bg-[#0F1216] py-[var(--section-py)]">
      <div className="mx-auto max-w-4xl px-[var(--container-px)]">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F7C948]">
            Testimonios
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Clientes que ya tomaron el control de su energía
          </h2>
        </Reveal>

        <div
          className="relative mt-10"
          data-testid="testimonials-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="min-w-0 flex-[0_0_100%] px-2">
                  <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl shadow-[var(--shadow-soft)]">
                    <Quote className="mx-auto h-8 w-8 text-[#F7C948]/40" />
                    <div className="mt-4 flex justify-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#F7C948] text-[#F7C948]" />
                      ))}
                    </div>
                    <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
                      “{t.quote}”
                    </p>
                    <p className="font-display mt-5 text-base font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/50">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            data-testid="testimonial-prev"
            aria-label="Anterior"
            className="absolute -left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#0B0D0F]/80 text-white/80 backdrop-blur hover:text-white sm:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => emblaApi && emblaApi.scrollNext()}
            data-testid="testimonial-next"
            aria-label="Siguiente"
            className="absolute -right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#0B0D0F]/80 text-white/80 backdrop-blur hover:text-white sm:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  selected === i ? "w-6 bg-[#F7C948]" : "w-2 bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
