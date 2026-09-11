import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";

const LINKS = [
  { id: "inicio", label: "Inicio" },
  { id: "ventajas", label: "Ventajas" },
  { id: "cotizador", label: "Cotizador" },
  { id: "paquetes", label: "Paquetes" },
  { id: "baterias", label: "Baterías" },
  { id: "testimonios", label: "Testimonios" },
  { id: "faq", label: "FAQ" },
  { id: "contacto", label: "Contacto" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-[#0B0D0F]/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-[var(--container-px)] py-3">
        <button onClick={() => go("inicio")} className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C948]/50" data-testid="nav-logo">
          <Logo />
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className="rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C948]/50"
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => go("cotizador")}
            data-testid="nav-cta-quote"
            className="hidden bg-[#F7C948] font-semibold text-[#1A1406] shadow-[0_10px_30px_rgba(247,201,72,0.18)] transition-transform hover:bg-[#FFD86B] hover:-translate-y-0.5 active:scale-95 sm:inline-flex"
          >
            <MessageCircle className="mr-2 h-4 w-4" /> Cotizar mi sistema
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="nav-mobile-toggle"
            aria-label="Menú"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0B0D0F]/95 px-[var(--container-px)] py-3 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                data-testid={`nav-mobile-link-${l.id}`}
                className="rounded-lg px-3 py-3 text-left text-sm text-white/75 hover:bg-white/5"
              >
                {l.label}
              </button>
            ))}
            <Button
              onClick={() => go("cotizador")}
              className="mt-2 bg-[#F7C948] font-semibold text-[#1A1406] hover:bg-[#FFD86B]"
            >
              Cotizar mi sistema
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
