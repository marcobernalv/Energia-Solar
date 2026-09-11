# plan.md — Energía Solar e Iluminación (SPA ultra-premium, frontend-only)

## 1) Objectives
- Entregar una SPA landing ultra-premium (React + Tailwind + shadcn/ui + framer-motion) en español, estilo boutique ($30k).
- Implementar el **core**: cotizador interactivo (ramificado) que genera **mensaje prellenado** y abre WhatsApp: https://wa.me/526461231945.
- Mantener build **frontend-only**: sin BD, sin backend; el formulario y el cotizador solo abren WhatsApp.
- Incluir secciones requeridas en orden, con placeholders elegantes (sin fotos de personas/clientes).

## 2) Implementation Steps

### Phase 1 — Core POC (Aislamiento): WhatsApp funnel + lógica del cotizador
> Core = si el flujo y el mensaje a WhatsApp fallan, la landing pierde su objetivo.

**User stories (Phase 1)**
1. Como usuario, quiero elegir entre “Interconexión CFE” o “Sistema Aislado” para recibir una cotización relevante.
2. Como usuario, quiero seleccionar aparatos en un panel visual para describir mi consumo sin escribir.
3. Como usuario, si elijo “Refrigerador”, quiero indicar si es moderno o antiguo para afinar la recomendación.
4. Como usuario, quiero que mi selección se convierta en un mensaje claro y profesional listo para WhatsApp.
5. Como usuario, quiero reiniciar el flujo para corregir mi selección sin recargar la página.

**Steps**
- Websearch rápido: mejores prácticas para enlaces wa.me, encoding de texto, límites y UX de “prefilled message”.
- Implementar componente aislado `QuoteFlowPOC`:
  - Estado del wizard (step1/step2/step3), rama interconexión vs aislado.
  - Selector de aparatos (multi-select) + sub-step del refrigerador (moderno/antiguo).
  - Generador de texto (en español) + `encodeURIComponent`.
  - Botón “Enviar por WhatsApp” que abre `https://wa.me/526461231945?text=...` en nueva pestaña.
  - Nota legal + acordeón de baterías.
- Validación POC (manual):
  - Mensaje correcto para cada ruta (interconexión / aislado).
  - Refrigerador muestra submenú y se refleja en el mensaje.
  - Manejo de estados vacíos (sin selección) con feedback UI.
- “Fix until works”: no avanzar a V1 hasta que el funnel sea impecable.

### Phase 2 — V1 App Development (SPA completa)

**User stories (Phase 2)**
1. Como visitante, quiero ver un hero impactante con CTA que me lleve directo al cotizador.
2. Como visitante, quiero entender beneficios en tarjetas modernas con iconos claros.
3. Como prospecto, quiero explorar paquetes en tabs (Económica/Premium) con precios y etiquetas de promo.
4. Como usuario, quiero leer testimonios en carrusel automático para aumentar confianza.
5. Como usuario, quiero contactar rápido desde el footer con un formulario que envíe mi mensaje por WhatsApp.

**Build steps**
- Setup proyecto:
  - React (Vite), Tailwind, shadcn/ui (Button, Card, Tabs, Accordion, Carousel), framer-motion.
- Design system:
  - Paleta: fondo carbón/negro mate + acento amarillo eléctrico/dorado.
  - Glassmorphism oscuro (tarjetas), bordes sutilmente redondeados, sombras suaves, gradientes mínimos.
  - Tipografía (variables) y escalas; componentes consistentes.
- Layout SPA (una sola ruta) con navegación por anclas/scroll:
  1. **Hero** (headline requerido + subtítulo + CTA scroll al cotizador + placeholder visual grande).
  2. **Ventajas** (grid asimétrico, iconografía minimal amarilla).
  3. **Cotizador** (integrar QuoteFlow ya probado; animaciones de paso y scroll reveal).
  4. **Catálogo Paquetes** (Tabs Económica/Premium, pricing cards, badges de promo, “Cotizar por WhatsApp” por tarjeta).
  5. **Testimonios** (3 cards, estrellas doradas, carrusel autoplay).
  6. **Footer/Contacto** (datos, redes, formulario dark → WhatsApp).
- WhatsApp CTAs:
  - Unificar helper `openWhatsApp(message)` para: CTA global, resultados del cotizador, cards de paquetes, formulario.
- Animaciones:
  - Framer-motion: fade/slide on scroll, hover glow en CTAs amarillos, transiciones fluidas entre steps.
- Accesibilidad y rendimiento:
  - Contraste (amarillo sobre carbón), focus states, reduced motion.
  - Lazy/placeholder visuals (no imágenes reales).

**V1 testing (1 ronda E2E)**
- Recorrido completo: Hero CTA → Cotizador → WhatsApp.
- Tabs de paquetes y CTA por paquete.
- Carrusel testimonios.
- Formulario footer → WhatsApp con texto prellenado.
- Verificación responsive (mobile-first + desktop ultra-wide).

### Phase 3 — Hardening + polish (producción)

**User stories (Phase 3)**
1. Como usuario móvil, quiero que el cotizador sea fácil de usar con botones grandes y sin scrolls raros.
2. Como usuario, quiero que el sitio se sienta “premium” con microinteracciones consistentes.
3. Como negocio, quiero que los mensajes de WhatsApp sean uniformes y fáciles de leer.
4. Como usuario, quiero que el sitio cargue rápido sin saltos visuales (CLS bajo).
5. Como visitante, quiero ver estados de error claros si falta información antes de enviar a WhatsApp.

**Steps**
- Refinar copy y consistencia (títulos, labels, legal note, baterías).
- Normalizar formato de mensajes WhatsApp (plantilla):
  - Tipo de sistema, aparatos, refrigerador (si aplica), ubicación (si el usuario la escribe opcional), contacto.
- QA visual: spacing, alineaciones, hover/focus, glass effects.
- Mejoras UX: botón “Volver” por step, “Reset”, validaciones suaves.
- Testing E2E (2ª ronda): regresión completa + distintos tamaños de pantalla.

### Phase 4 — Opcionales (solo si lo pides)

**User stories (Phase 4)**
1. Como visitante, quiero alternar modo “más simple” vs “más detallado” en el cotizador.
2. Como usuario, quiero ver FAQ adicional (interconexión vs aislado) para decidir mejor.
3. Como negocio, quiero medir clicks a WhatsApp (analytics) sin comprometer privacidad.
4. Como visitante, quiero ver una sección de “Proceso de instalación” con timeline.
5. Como usuario, quiero que el sitio sea bilingüe si lo activan en el futuro.

## STATUS UPDATE
- Phase 1 (design guidelines) DONE. Core = WhatsApp funnel + cotizador logic; no isolated POC needed (pure frontend, wa.me deep link).
- Phase 2 (full SPA) DONE and shipped: Hero, Ventajas, Cotizador (3 steps + fridge submenu + legal note + battery accordion), Paquetes (Tabs Económica/Premium con precios/promos exactos), Testimonios (carrusel autoplay), Footer+Contacto (formulario -> WhatsApp).
- E2E testing via testing_agent_v3: 100% pass, 0 bugs (iteration_1.json). Desktop + mobile verified, no horizontal overflow.

## 3) Next Actions
- Confirmar si el cotizador debe incluir campo opcional de: colonia/ubicación y/o rango de presupuesto (para enriquecer el mensaje WhatsApp).
- Ejecutar Phase 1 POC del cotizador + WhatsApp message builder.
- Una vez validado, construir la SPA completa (Phase 2) e iniciar ronda E2E.

## 4) Success Criteria
- 100% de CTAs abren WhatsApp con mensaje prellenado correcto (wa.me/526461231945).
- Cotizador funciona sin bugs: ramas, multi-select, submenú refrigerador, reset, validaciones.
- Secciones en orden exacto, diseño oscuro premium con acentos dorados/amarillos, sin fotos reales.
- Responsive sólido (mobile/desktop), animaciones suaves sin afectar performance.
- Contenido en español, copy consistente y profesional; precios y promos exactos.
