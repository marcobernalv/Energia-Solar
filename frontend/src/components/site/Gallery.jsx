import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { openWhatsApp } from "@/components/site/data";

const PROJECTS = [
  { src: "/images/panel-1.jpg", label: "Instalación en azotea", tag: "Paneles" },
  { src: "/images/rolando-inversor.jpg", label: "Inversor Must instalado", tag: "Equipo" },
  { src: "/images/panel-3.jpg", label: "Paneles en techo inclinado", tag: "Paneles" },
  { src: "/images/inversor-1.jpg", label: "Inversor onda pura 2000W", tag: "Inversores" },
  { src: "/images/rolando-2.jpg", label: "Instalación profesional", tag: "Rolando" },
  { src: "/images/inversor-2.jpg", label: "Inversor Must + baterías", tag: "Inversores" },
  { src: "/images/panel-2.jpg", label: "Sistema en vivienda", tag: "Paneles" },
  { src: "/images/rolando-1.jpg", label: "Rolando en obra", tag: "Rolando" },
];

export const Gallery = () => {
  return (
    <section id="proyectos" className="relative bg-[#0F1216] py-[var(--section-py)]">
      <div className="mx-auto max-w-6xl px-[var(--container-px)]">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F7C948]">
            Proyectos reales
          </p>
          <h2 className="font-display mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
            Instalaciones y equipos que ya trabajan con el sol
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/65">
            Paneles, inversores y sistemas instalados por nuestro equipo en Ensenada y la región.
          </p>
        </Reveal>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {PROJECTS.map((p, i) => (
            <GalleryItem key={p.src} project={p} index={i} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <Button
            onClick={() =>
              openWhatsApp("Hola, vi sus proyectos y me gustaría una cotización para mi caso.")
            }
            data-testid="gallery-whatsapp-cta"
            className="bg-[#F7C948] font-semibold text-[#1A1406] hover:bg-[#FFD86B]"
          >
            <MessageCircle className="mr-2 h-4 w-4" /> Quiero un sistema como estos
          </Button>
        </Reveal>
      </div>
    </section>
  );
};

const GalleryItem = ({ project, index }) => {
  return (
    <Reveal delay={(index % 3) * 0.06} className="break-inside-avoid">
      <figure
        data-testid={`gallery-item-${index}`}
        className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/5"
      >
        <img
          src={project.src}
          alt={project.label}
          loading="lazy"
          className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4">
          <span className="inline-flex items-center rounded-full border border-[#F7C948]/30 bg-[#F7C948]/15 px-2.5 py-0.5 text-[11px] font-medium text-[#F7C948]">
            {project.tag}
          </span>
          <p className="mt-1.5 text-sm font-medium text-white">{project.label}</p>
        </div>
      </figure>
    </Reveal>
  );
};
