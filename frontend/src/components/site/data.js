// Central data + helpers for the Energía Solar e iluminación landing

export const WHATSAPP_PHONE = "526461231945";

export const CONTACT = {
  address: "Manuel M. Ponce s/n, Col. Maestros, Ensenada BC.",
  phone: "646-123-19-45",
  phoneHref: "tel:+526461231945",
  email: "rolaens333@hotmail.com",
  hours: "9am – 5pm",
  social: {
    instagram: { label: "@rolaens333", url: "https://instagram.com/rolaens333" },
    facebook: { label: "Rolando Flores", url: "https://facebook.com/" },
    tiktok: { label: "rolaens333028", url: "https://tiktok.com/@rolaens333028" },
  },
};

export function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export const ADVANTAGES = [
  {
    id: "ahorro",
    icon: "PiggyBank",
    title: "Ahorro inmediato",
    desc: "Reduce tu recibo de luz desde el primer mes y recupera tu inversión.",
    span: "lg:col-span-3",
  },
  {
    id: "independencia",
    icon: "PlugZap",
    title: "Independencia energética",
    desc: "Genera tu propia energía y despreocúpate de los aumentos de tarifas.",
    span: "lg:col-span-3",
  },
  {
    id: "plusvalia",
    icon: "Home",
    title: "Plusvalía para tu hogar",
    desc: "Una propiedad con sistema solar vale más y se vende más rápido.",
    span: "lg:col-span-2",
  },
  {
    id: "limpia",
    icon: "Leaf",
    title: "Energía 100% limpia",
    desc: "Aprovecha el sol de Ensenada con tecnología sostenible y silenciosa.",
    span: "lg:col-span-4",
  },
];

// Appliances for the isolated-system quote flow
// wattsDay = estimated Wh/day per unit (used for a friendly estimate only)
export const APPLIANCES = [
  { id: "tv", label: "TV", icon: "Tv", whDay: 500 },
  { id: "focos", label: "Focos", icon: "Lightbulb", whDay: 300 },
  { id: "abanico", label: "Abanico", icon: "Fan", whDay: 480 },
  { id: "bomba", label: "Bomba de agua", icon: "Droplets", whDay: 1500 },
  { id: "aire", label: "Aire acondicionado", icon: "AirVent", whDay: 7200 },
  { id: "refri", label: "Refrigerador", icon: "Refrigerator", whDay: 1000 },
];

export const FRIDGE_ANTIGUO_MULTIPLIER = 7;

export const ECON_PACKAGES = [
  {
    id: "eco-21",
    price: 21000,
    panels: "1 Panel",
    inverter: "Inversor Runstar 1000w",
    battery: "1 Batería Northstar 180Ah",
    badge: null,
  },
  {
    id: "eco-395",
    price: 39500,
    oldPrice: 50000,
    panels: "2 Paneles (510w)",
    inverter: "Inversor PowMr 3000w",
    battery: "2 Baterías litio fosfato 2.5kw",
    badge: "PROMO",
    highlight: true,
  },
  {
    id: "eco-45",
    price: 45000,
    panels: "2 Paneles",
    inverter: "Inversor PowMr 3000w",
    battery: "2 Baterías litio fosfato 2.5kw",
    badge: null,
  },
  {
    id: "eco-55",
    price: 55000,
    panels: "4 Paneles",
    inverter: "Inversor PowMr 3000w",
    battery: "2 Baterías (litio o Northstar)",
    badge: null,
  },
  {
    id: "eco-74",
    price: 74000,
    panels: "4 Paneles",
    inverter: "Inversor PowMr 3000w",
    battery: "4 Baterías Northstar 180Ah",
    badge: null,
  },
  {
    id: "eco-93",
    price: 93000,
    panels: "4 Paneles",
    inverter: "Inversor PowMr 3000w",
    battery: "6 Baterías Northstar 180Ah",
    badge: null,
  },
  {
    id: "eco-145",
    price: 145000,
    panels: "9 Paneles",
    inverter: "Inversor PowMr 3000w",
    battery: "8 Baterías litio fosfato 2.5kw",
    badge: null,
  },
];

export const PREMIUM_PACKAGES = [
  {
    id: "pre-90",
    price: 90000,
    panels: "6 Paneles (565w)",
    inverter: "Inversor Growatt 3000w",
    battery: "4 Baterías litio fosfato 2.5kw",
    badge: "GRAN PROMO",
    note: "Hasta agotar existencias",
    highlight: true,
  },
  {
    id: "pre-109",
    price: 109000,
    panels: "4 Paneles (565w)",
    inverter: "Inversor Growatt 3000w",
    battery: "2 Baterías Hope 5kw",
    badge: null,
  },
  {
    id: "pre-115",
    price: 115000,
    panels: "8 Paneles (565w)",
    inverter: "Inversor Must 6000w",
    battery: "2 Baterías Hope 5kw",
    badge: null,
  },
  {
    id: "pre-149",
    price: 149000,
    panels: "6 Paneles (565w)",
    inverter: "Inversor Growatt 3000w",
    battery: "3 Baterías Hope 5kw",
    badge: null,
  },
  {
    id: "pre-198",
    price: 198000,
    panels: "8 Paneles (565w)",
    inverter: "Inversor Growatt 3000w",
    battery: "4 Baterías Hope 5kw",
    badge: null,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "El ahorro fue inmediato y la instalación súper limpia. Totalmente recomendados.",
    name: "Carlos M.",
    role: "Interconexión CFE",
  },
  {
    id: 2,
    quote:
      "Me instalaron un sistema aislado en mi rancho y por fin tengo luz sin problemas. Excelente equipo.",
    name: "Ana R.",
    role: "Sistema Aislado",
  },
  {
    id: 3,
    quote:
      "La mejor inversión para mi casa. Muy profesionales desde la cotización hasta el final.",
    name: "Roberto G.",
    role: "Interconexión CFE",
  },
];

export function formatMXN(n) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
}
