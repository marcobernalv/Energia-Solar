{
  "brand": {
    "name": "Energía Solar e iluminación",
    "tone_attributes": [
      "ultra-premium boutique",
      "moderno y tecnológico",
      "confiable (instalación seria)",
      "sostenible sin clichés verdes",
      "claro para público no técnico"
    ],
    "language": "es-MX",
    "currency": "MXN",
    "cta_primary_label": "Cotizar mi sistema",
    "whatsapp": {
      "phone_e164": "526461231945",
      "wa_me": "https://wa.me/526461231945"
    }
  },

  "visual_personality": {
    "style_fusion": [
      "Swiss/Editorial hierarchy (tipografía y grid)",
      "Glassmorphism oscuro (tarjetas premium)",
      "Cinematic lighting (brillos controlados en amarillo/dorado)",
      "Bento grid (ventajas + catálogo)",
      "HUD-lite (resultados del cotizador con números y separadores finos)"
    ],
    "do_not": [
      "No plantillas genéricas centradas",
      "No fotos de personas/clientes (solo placeholders elegantes)",
      "No gradientes saturados prohibidos (morado/rosa/azul intenso)",
      "No gradients en áreas de lectura",
      "No usar transition: all"
    ]
  },

  "design_tokens": {
    "css_custom_properties": {
      "notes": "Definir en /app/frontend/src/index.css dentro de :root y .dark. La app debe correr en modo dark por defecto (html/body con className='dark').",
      "colors": {
        "--bg": "#0B0D0F",
        "--bg-2": "#0F1216",
        "--surface": "rgba(255,255,255,0.06)",
        "--surface-2": "rgba(255,255,255,0.09)",
        "--stroke": "rgba(255,255,255,0.10)",
        "--stroke-2": "rgba(255,255,255,0.16)",
        "--text": "#F5F7FA",
        "--text-muted": "rgba(245,247,250,0.72)",
        "--text-subtle": "rgba(245,247,250,0.56)",

        "--gold": "#F7C948",
        "--gold-2": "#FFD86B",
        "--gold-deep": "#D9A441",
        "--gold-ink": "#1A1406",

        "--blue-logo": "#3B82F6",

        "--success": "#2EE59D",
        "--danger": "#FF5A6A",
        "--warning": "#F7C948",

        "--focus": "rgba(247,201,72,0.55)",
        "--shadow": "0 18px 60px rgba(0,0,0,0.55)",
        "--shadow-soft": "0 10px 30px rgba(0,0,0,0.35)",
        "--glow-gold": "0 0 0 1px rgba(247,201,72,0.35), 0 0 28px rgba(247,201,72,0.18)"
      },
      "radius": {
        "--radius-sm": "10px",
        "--radius-md": "14px",
        "--radius-lg": "18px",
        "--radius-xl": "22px"
      },
      "spacing": {
        "--container-px": "clamp(16px, 3vw, 40px)",
        "--section-py": "clamp(56px, 7vw, 104px)",
        "--card-p": "clamp(16px, 2.2vw, 24px)"
      },
      "typography": {
        "--font-display": "\"Space Grotesk\", ui-sans-serif, system-ui",
        "--font-body": "\"Figtree\", ui-sans-serif, system-ui",
        "--tracking-tight": "-0.02em",
        "--tracking-display": "-0.03em"
      }
    },

    "tailwind_usage": {
      "background": "bg-[#0B0D0F] text-[#F5F7FA]",
      "muted_text": "text-white/70",
      "subtle_text": "text-white/55",
      "gold_text": "text-[#F7C948]",
      "gold_border": "border-[#F7C948]/25",
      "glass_card": "rounded-[var(--radius-lg)] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[var(--shadow-soft)]",
      "glass_card_hover": "hover:border-[#F7C948]/25 hover:shadow-[var(--shadow)]",
      "focus_ring": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7C948]/50 focus-visible:ring-offset-0"
    }
  },

  "typography": {
    "google_fonts": {
      "display": {
        "name": "Space Grotesk",
        "weights": ["500", "600", "700"]
      },
      "body": {
        "name": "Figtree",
        "weights": ["400", "500", "600"]
      }
    },
    "scale": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em]",
      "h2": "text-base md:text-lg font-medium text-white/70",
      "section_title": "text-2xl sm:text-3xl font-semibold tracking-[-0.02em]",
      "body": "text-sm sm:text-base text-white/70 leading-relaxed",
      "small": "text-xs text-white/55"
    },
    "copy_rules": [
      "Titulares cortos, verbos de acción ("Toma el control", "Ahorra", "Respalda").",
      "Evitar párrafos largos: máximo 2–3 líneas por bloque en desktop.",
      "Números y precios en estilo HUD: tabular-nums + tracking-tight."
    ]
  },

  "layout": {
    "grid": {
      "container": "max-w-6xl mx-auto px-[var(--container-px)]",
      "desktop_columns": "12",
      "gaps": "gap-6 md:gap-8",
      "section_spacing": "py-[var(--section-py)]"
    },
    "page_structure": [
      "Hero (ancla #inicio)",
      "Ventajas (ancla #ventajas)",
      "Cotizador Wizard (ancla #cotizador)",
      "Catálogo Tabs (ancla #paquetes)",
      "Testimonios (ancla #testimonios)",
      "Footer + Contacto (ancla #contacto)"
    ],
    "nav": {
      "style": "barra superior sticky con blur, borde inferior sutil, CTA dorado a la derecha",
      "classes": "sticky top-0 z-50 border-b border-white/10 bg-[#0B0D0F]/70 backdrop-blur-xl"
    }
  },

  "components": {
    "component_path": {
      "button": "/app/frontend/src/components/ui/button.jsx",
      "card": "/app/frontend/src/components/ui/card.jsx",
      "badge": "/app/frontend/src/components/ui/badge.jsx",
      "tabs": "/app/frontend/src/components/ui/tabs.jsx",
      "accordion": "/app/frontend/src/components/ui/accordion.jsx",
      "carousel": "/app/frontend/src/components/ui/carousel.jsx",
      "input": "/app/frontend/src/components/ui/input.jsx",
      "textarea": "/app/frontend/src/components/ui/textarea.jsx",
      "label": "/app/frontend/src/components/ui/label.jsx",
      "radio_group": "/app/frontend/src/components/ui/radio-group.jsx",
      "checkbox": "/app/frontend/src/components/ui/checkbox.jsx",
      "progress": "/app/frontend/src/components/ui/progress.jsx",
      "separator": "/app/frontend/src/components/ui/separator.jsx",
      "tooltip": "/app/frontend/src/components/ui/tooltip.jsx",
      "sonner": "/app/frontend/src/components/ui/sonner.jsx"
    },

    "hero": {
      "layout": "Split editorial: izquierda copy + CTAs; derecha 'device frame' con placeholder de imagen (paneles) y mini-métricas.",
      "background": {
        "rule": "Gradiente permitido SOLO como overlay decorativo <20% viewport.",
        "implementation": "Usar un pseudo-elemento absoluto con radial-gradient suave dorado (muy tenue) en esquina superior derecha.",
        "example_classes": "relative overflow-hidden bg-[#0B0D0F]"
      },
      "primary_cta": {
        "component": "Button",
        "variant": "default (custom class)",
        "classes": "bg-[#F7C948] text-[#1A1406] hover:bg-[#FFD86B] shadow-[0_10px_30px_rgba(247,201,72,0.18)] hover:shadow-[0_18px_60px_rgba(247,201,72,0.22)]",
        "microinteraction": "hover: translateY(-1px) + glow; active: scale-95",
        "data_testid": "global-cta-quote-button"
      },
      "secondary_cta": {
        "component": "Button",
        "variant": "outline",
        "classes": "border-white/15 bg-white/5 text-white hover:bg-white/8",
        "data_testid": "hero-secondary-cta-view-packages"
      },
      "logo_placeholder": {
        "spec": "Círculo 44–52px con borde blanco/10, fondo blanco/5, icono panel+sol (lucide: Sun + Grid2X2) y texto azul.",
        "classes": "flex items-center gap-3",
        "data_testid": "brand-logo-placeholder"
      }
    },

    "advantages": {
      "layout": "Bento grid 2x3 (mobile 1 col). Cada card con icono lineal (lucide) + título + 2 bullets.",
      "card_style": "glass_card + borde dorado al hover",
      "data_testid_prefix": "advantages-card"
    },

    "quote_wizard": {
      "overall": {
        "pattern": "Stepper wizard (3 pasos) con panel lateral de resumen en desktop (sticky).",
        "motion": "Framer Motion: AnimatePresence para transiciones entre pasos (slide-up + fade).",
        "data_testid": "quote-wizard"
      },
      "stepper": {
        "visual": "Barra superior con 3 nodos numerados (círculos) + línea fina. Nodo activo en dorado, completado en blanco/70 con check.",
        "components": ["Progress", "Button", "Separator"],
        "classes": "rounded-[var(--radius-lg)] border border-white/10 bg-white/5 backdrop-blur-xl",
        "data_testid": "quote-stepper"
      },
      "step_1": {
        "title": "Tipo de sistema",
        "choices": ["Interconexión CFE", "Sistema Aislado"],
        "ui": "Radio cards grandes (Card clickable) con icono + descripción.",
        "components": ["RadioGroup", "Card"],
        "data_testid": "quote-step-1"
      },
      "step_2": {
        "title": "Selecciona tus aparatos",
        "ui": "Grid de Toggle/Checkbox cards con iconos. Multi-select. Cada card muestra consumo estimado (placeholder) y contador +/-.",
        "special_logic": {
          "refrigerator": "Al seleccionar 'Refrigerador' abrir submenú (Collapsible/Popover) con 2 opciones: Moderno (inverter) vs Antiguo. Cambia el cálculo y etiqueta en el resumen.",
          "components": ["Collapsible", "Popover", "RadioGroup"]
        },
        "components": ["Checkbox", "Card", "Tooltip"],
        "data_testid": "quote-step-2"
      },
      "step_3": {
        "title": "Resultado",
        "ui": "Panel premium con número grande (kWh/día estimado, tamaño recomendado, rango de precio). Botón WhatsApp destacado.",
        "legal_note": "Nota legal en texto xs blanco/55 con borde superior sutil.",
        "battery_accordion": {
          "component": "Accordion",
          "items": ["¿Cuándo conviene batería?", "Tipos de batería", "Mantenimiento y vida útil"],
          "data_testid": "battery-accordion"
        },
        "whatsapp_button": {
          "classes": "bg-[#F7C948] text-[#1A1406] hover:bg-[#FFD86B]",
          "data_testid": "quote-result-whatsapp-button"
        },
        "data_testid": "quote-step-3"
      }
    },

    "packages_catalog": {
      "tabs": {
        "labels": ["Línea Económica", "Línea Premium"],
        "component": "Tabs",
        "style": "Tabs tipo pill sobre glass surface; tab activo con fondo dorado suave (no gradiente).",
        "data_testid": "packages-tabs"
      },
      "pricing_cards": {
        "style": "Tarjetas oscuras glass con borde fino; plan recomendado con ring dorado + glow controlado.",
        "badges": {
          "promo": "Badge dorado (texto oscuro) para 'Promo' / 'Más vendido'",
          "premium": "Badge outline dorado para 'Premium'"
        },
        "price_typography": "text-3xl font-semibold tabular-nums",
        "cta": {
          "label": "Elegir este paquete",
          "data_testid_prefix": "package-select"
        }
      }
    },

    "testimonials": {
      "carousel": {
        "component": "Carousel",
        "behavior": "Autoplay suave (pausa on hover/focus).",
        "card": "glass_card con estrellas doradas (lucide Star fill).",
        "data_testid": "testimonials-carousel"
      }
    },

    "contact_footer": {
      "layout": "Split: izquierda datos + redes; derecha formulario en card glass.",
      "form": {
        "components": ["Input", "Textarea", "Label", "Button"],
        "button": "CTA dorado",
        "data_testid": "contact-form"
      },
      "footer_note": "Texto xs blanco/55 + separador."
    },

    "placeholders": {
      "rule": "No fotos reales por defecto. Usar placeholders elegantes con icono de imagen (lucide Image) y caption.",
      "styles": {
        "frame": "rounded-[var(--radius-xl)] border border-white/10 bg-gradient-to-b from-white/6 to-white/3 (muy sutil) backdrop-blur-xl",
        "inner": "aspect-[16/10] grid place-items-center text-white/45",
        "caption": "text-xs text-white/55 mt-3"
      },
      "categories": [
        {
          "name": "Paneles solares",
          "data_testid": "placeholder-panels"
        },
        {
          "name": "Inversores",
          "data_testid": "placeholder-inverters"
        },
        {
          "name": "Rolando trabajando",
          "data_testid": "placeholder-rolando"
        }
      ]
    }
  },

  "motion": {
    "library": "framer-motion",
    "principles": [
      "Entrada al hacer scroll: fade-in + slide-up 12–18px",
      "Duración 0.45–0.65s, ease [0.22, 1, 0.36, 1]",
      "Stagger en grids (0.06–0.1s)",
      "Respetar prefers-reduced-motion (desactivar parallax y reducir durations)"
    ],
    "js_scaffold": {
      "scroll_reveal": "Crear un componente <Reveal> en JS que use useInView + motion.div. Props: delay, y, once.",
      "button_interaction": "hover: y:-1; tap: scale:0.97 (solo en CTA primario)"
    }
  },

  "micro_interactions": {
    "buttons": {
      "primary": "Glow dorado controlado en hover + leve lift. Focus ring dorado visible.",
      "secondary": "Hover: subir opacidad del fondo (white/5 -> white/8).",
      "disabled": "opacity-50 cursor-not-allowed"
    },
    "cards": {
      "hover": "border dorado sutil + sombra más profunda; NO usar transform en todas las cards (solo en cards clave como pricing).",
      "pricing_recommended": "ring-1 ring-[#F7C948]/35 + shadow glow"
    },
    "tabs": {
      "active": "pill con fondo dorado suave; transición solo de background-color y color"
    }
  },

  "accessibility": {
    "contrast": [
      "Texto principal #F5F7FA sobre #0B0D0F OK.",
      "Dorado #F7C948 usar para acentos y botones con texto oscuro #1A1406.",
      "Evitar texto dorado pequeño (<14px) sobre fondo oscuro; usar blanco/70 para body."
    ],
    "focus": "Todos los elementos interactivos deben tener focus-visible ring dorado.",
    "reduced_motion": "Implementar prefers-reduced-motion: reduce para desactivar parallax/autoplay agresivo y reducir animaciones.",
    "hit_targets": "Botones y cards clicables mínimo 44px alto en mobile."
  },

  "images": {
    "image_urls": [
      {
        "category": "hero_optional_background",
        "description": "Imagen opcional (si se decide usar foto real) de paneles al atardecer; aplicar overlay oscuro fuerte para mantener look premium.",
        "url": "https://images.unsplash.com/photo-1634105584054-2b4fec0ac56a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z0b3AlMjBhdCUyMGR1c2t8ZW58MHx8fGJsYWNrfDE3ODkwOTQwMjd8MA&ixlib=rb-4.1.0&q=85"
      },
      {
        "category": "section_optional_background",
        "description": "Imagen abstracta/arquitectónica oscura (sirve como textura sutil detrás de una sección, con blur y opacity baja).",
        "url": "https://images.unsplash.com/photo-1623245625202-ad5dc2eb7eb1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwzfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z0b3AlMjBhdCUyMGR1c2t8ZW58MHx8fGJsYWNrfDE3ODkwOTQwMjd8MA&ixlib=rb-4.1.0&q=85"
      }
    ],
    "placeholders_only_default": true
  },

  "libraries": {
    "required": [
      {
        "name": "framer-motion",
        "install": "npm i framer-motion",
        "usage": "Animaciones de entrada y transiciones del wizard + hover microinteractions."
      },
      {
        "name": "lucide-react",
        "install": "npm i lucide-react",
        "usage": "Iconografía lineal premium (Sun, Zap, Shield, Image, Star, Battery, PlugZap, Home, Factory, Refrigerator, etc.)."
      }
    ],
    "optional": [
      {
        "name": "embla-carousel-autoplay",
        "install": "npm i embla-carousel-autoplay",
        "usage": "Autoplay del carrusel de testimonios con pausa en hover/focus."
      }
    ]
  },

  "instructions_to_main_agent": [
    "Forzar modo oscuro: agregar class 'dark' en <html> o en el root wrapper. Ajustar tokens de shadcn en index.css para que background sea carbón y primary sea dorado.",
    "Eliminar estilos default de CRA en App.css (App-header centrado). No centrar el contenedor global.",
    "Implementar secciones como SPA con anclas y navegación sticky.",
    "Todos los CTAs deben construir mensaje y abrir WhatsApp (wa.me/526461231945).",
    "Cotizador: wizard 3 pasos con stepper visual + resumen sticky en desktop. Paso 2 incluye lógica especial de refrigerador moderno/antiguo.",
    "Usar placeholders elegantes por defecto (sin fotos).",
    "Agregar data-testid a: nav links, botones CTA, cards seleccionables, inputs del formulario, tabs triggers, items del acordeón, controles del carrusel.",
    "Animaciones: usar Reveal on-scroll con prefers-reduced-motion. Evitar jank (no animar box-shadow en scroll; solo opacity/transform).",
    "Gradientes: solo overlays decorativos pequeños (<20% viewport), nunca en áreas de lectura ni en elementos pequeños."
  ]
}

---

<General UI UX Design Guidelines>  
    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms
    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text
   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json

 **GRADIENT RESTRICTION RULE**
NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc
NEVER use dark gradients for logo, testimonial, footer etc
NEVER let gradients cover more than 20% of the viewport.
NEVER apply gradients to text-heavy content or reading areas.
NEVER use gradients on small UI elements (<100px width).
NEVER stack multiple gradient layers in the same viewport.

**ENFORCEMENT RULE:**
    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors

**How and where to use:**
   • Section backgrounds (not content backgrounds)
   • Hero section header content. Eg: dark to light to dark color
   • Decorative overlays and accent elements only
   • Hero section with 2-3 mild color
   • Gradients creation can be done for any angle say horizontal, vertical or diagonal

- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**

</Font Guidelines>

- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. 
   
- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.

- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.
   
- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly
    Eg: - if it implies playful/energetic, choose a colorful scheme
           - if it implies monochrome/minimal, choose a black–white/neutral scheme

**Component Reuse:**
	- Prioritize using pre-existing components from src/components/ui when applicable
	- Create new components that match the style and conventions of existing components when needed
	- Examine existing components to understand the project's component patterns before creating new ones

**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component

**Best Practices:**
	- Use Shadcn/UI as the primary component library for consistency and accessibility
	- Import path: ./components/[component-name]

**Export Conventions:**
	- Components MUST use named exports (export const ComponentName = ...)
	- Pages MUST use default exports (export default function PageName() {...})

**Toasts:**
  - Use `sonner` for toasts"
  - Sonner component are located in `/app/src/components/ui/sonner.tsx`

Use 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.
</General UI UX Design Guidelines>
