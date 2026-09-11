import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Send,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/site/Logo";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT, openWhatsApp } from "@/components/site/data";

// TikTok inline icon (not in lucide set)
const TikTok = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.6c-1.2.1-2.4-.2-3.5-.8v5.9c0 3-2.2 5.4-5.2 5.4S6 20.6 6 17.7c0-2.7 2-4.9 4.7-5.1v2.7c-1.1.2-2 .9-2 2.2 0 1.2 1 2.2 2.2 2.2 1.3 0 2.3-1 2.3-2.5V3h3.3z" />
  </svg>
);

export const ContactFooter = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Por favor ingresa tu nombre y teléfono.");
      return;
    }
    const msg = `Hola, soy ${form.name}.\nTeléfono: ${form.phone}\n${
      form.message ? `Mensaje: ${form.message}` : "Me gustaría más información."
    }`;
    openWhatsApp(msg);
    toast.success("Abriendo WhatsApp con tu mensaje…");
  };

  const socials = [
    { icon: Instagram, ...CONTACT.social.instagram, testid: "social-instagram" },
    { icon: Facebook, ...CONTACT.social.facebook, testid: "social-facebook" },
    { icon: TikTok, ...CONTACT.social.tiktok, testid: "social-tiktok" },
  ];

  return (
    <footer id="contacto" className="relative border-t border-white/10 bg-[#0B0D0F] py-[var(--section-py)]">
      <div className="mx-auto max-w-6xl px-[var(--container-px)]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Info */}
          <Reveal>
            <Logo />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
              Soluciones solares premium e iluminación en Ensenada, BC. Sistemas de
              interconexión CFE y sistemas aislados a la medida de tu consumo.
            </p>

            <div className="mt-7 space-y-4">
              <InfoRow icon={MapPin} label={CONTACT.address} />
              <a href={CONTACT.phoneHref} data-testid="footer-phone" className="block">
                <InfoRow icon={Phone} label={`${CONTACT.phone} (Tel / WhatsApp)`} hover />
              </a>
              <a href={`mailto:${CONTACT.email}`} data-testid="footer-email" className="block">
                <InfoRow icon={Mail} label={CONTACT.email} hover />
              </a>
              <InfoRow icon={Clock} label={`Horario de atención: ${CONTACT.hours}`} />
            </div>

            <div className="mt-7 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.testid}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={s.testid}
                  aria-label={s.label}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 transition-colors hover:border-[#F7C948]/30 hover:text-white"
                >
                  <s.icon className="h-4 w-4 text-[#F7C948]" />
                  <span className="hidden sm:inline">{s.label}</span>
                </a>
              ))}
            </div>

            <Button
              onClick={() => openWhatsApp("Hola, me gustaría más información sobre sus sistemas solares.")}
              data-testid="footer-whatsapp-cta"
              className="mt-7 bg-[#F7C948] font-semibold text-[#1A1406] hover:bg-[#FFD86B]"
            >
              <MessageCircle className="mr-2 h-4 w-4" /> Escríbenos por WhatsApp
            </Button>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[var(--shadow-soft)] sm:p-8"
            >
              <h3 className="font-display text-lg font-semibold text-white">Contacto rápido</h3>
              <p className="mt-1 text-sm text-white/60">
                Déjanos tus datos y te contactamos por WhatsApp.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="cf-name" className="text-white/75">Nombre</Label>
                  <Input
                    id="cf-name"
                    data-testid="contact-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="mt-1.5 border-white/10 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-[#F7C948]/50"
                  />
                </div>
                <div>
                  <Label htmlFor="cf-phone" className="text-white/75">Teléfono</Label>
                  <Input
                    id="cf-phone"
                    data-testid="contact-phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="646-000-00-00"
                    className="mt-1.5 border-white/10 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-[#F7C948]/50"
                  />
                </div>
                <div>
                  <Label htmlFor="cf-message" className="text-white/75">Mensaje</Label>
                  <Textarea
                    id="cf-message"
                    data-testid="contact-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Cuéntanos qué necesitas…"
                    rows={4}
                    className="mt-1.5 border-white/10 bg-white/5 text-white placeholder:text-white/35 focus-visible:ring-[#F7C948]/50"
                  />
                </div>
              </div>

              <Button
                type="submit"
                data-testid="contact-submit"
                className="mt-6 w-full bg-[#F7C948] font-semibold text-[#1A1406] hover:bg-[#FFD86B]"
              >
                <Send className="mr-2 h-4 w-4" /> Enviar por WhatsApp
              </Button>
            </form>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Energía Solar e iluminación. Ensenada, BC.</p>
          <p>Hecho con energía del sol ☀️</p>
        </div>
      </div>
    </footer>
  );
};

const InfoRow = ({ icon: Icon, label, hover }) => (
  <div className={`flex items-start gap-3 ${hover ? "transition-colors hover:text-white" : ""}`}>
    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#F7C948]">
      <Icon className="h-4 w-4" />
    </span>
    <span className="text-sm text-white/70">{label}</span>
  </div>
);
