# Sistema de diseño — Daniela López, Psicóloga

Instrucciones para agentes de programación. Lee este archivo entero antes de escribir código. Si una decisión no está aquí, consulta `BRAND.md`; si tampoco está, elige la opción más sobria y déjalo anotado.

## Mapa de archivos

| Archivo | Qué contiene | Cuándo leerlo |
| --- | --- | --- |
| `README.md` | Reglas duras, flujo de trabajo, checklist | Siempre, primero |
| `BRAND.md` | Posicionamiento, servicios, tono de voz, copy aprobado, legal | Antes de escribir cualquier texto |
| `tokens/tokens.css` | Variables CSS (color, tipo, espacio, radios, sombras, motion) | Importar en todo proyecto |
| `tokens/tokens.json` | Mismos tokens en JSON (Tailwind, Style Dictionary, apps) | Si el stack no es CSS plano |
| `css/base.css` | Reset, tipografía, layout y componentes base | Importar después de tokens |
| `components/COMPONENTS.md` | HTML de referencia de cada componente | Al maquetar |
| `motion/MOTION.md` | Sistema de animación: principios, recetas, rendimiento | Antes de animar nada |
| `motion/motion.css` + `motion/motion.js` | Implementación lista para usar | Importar si hay animación |
| `assets/` | Icono, logo, foto recortada | Copiar al proyecto |
| `examples/index.html` | Hero + secciones montadas con todo lo anterior | Referencia visual, abrir en navegador |

## Orden de carga

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@300..600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..600;1,8..60,300..600&family=Figtree:wght@400..700&display=swap">
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="motion/motion.css">
<script src="motion/motion.js" defer></script>
```

En producción, **autoalojar las fuentes** (p. ej. `@fontsource-variable/jost`, `@fontsource-variable/source-serif-4`, `@fontsource-variable/figtree`). Cargar Google Fonts desde sus servidores transmite la IP del visitante a terceros, lo que en la UE tiene implicaciones RGPD. Precargar solo los dos archivos del primer pantallazo (Source Serif 4 roman y Figtree).

## Reglas duras (no negociables)

1. **Nunca usar colores fuera de `tokens.css`.** Si hace falta un tono intermedio, usar `color-mix()` sobre tokens existentes.
2. **Coral (`--color-coral`) solo para: CTA principal, el punto del logo y antetítulos.** Nunca como fondo de sección completa ni para texto de párrafo.
3. **Tres fuentes, tres papeles.** Jost = identidad (logo, antetítulo, botón, navegación). Source Serif 4 = voz (H1–H3, citas, frase de marca). Figtree = lectura (párrafos, formularios, precios). Jost nunca en párrafos de más de una línea.
4. **El logo es texto en Jost, en minúsculas**: `daniela lópez` · punto coral · `psicóloga` (Jost 300). Ver componente `.logo`. No cambiar a mayúsculas, no reemplazar por el icono en la cabecera de escritorio.
5. **Contraste AA mínimo** (4,5:1 texto, 3:1 titulares ≥ 24 px). Combinaciones aprobadas en `tokens.css`.
6. **Nunca imágenes de menores reales**, ni stock de personas llorando, ni iconografía cliché (cerebros, puzles, lotos, mariposas, Ψ, corazones en manos).
7. **Aviso de crisis obligatorio** en pie de web, página de crisis y formulario de contacto (componente `.crisis-note`).
8. **Pie legal obligatorio** en todas las páginas: nombre legal, nº colegiada, nº de registro sanitario (pendiente: dejar `<!-- TODO: nº registro sanitario -->`).
9. **Copy**: no inventar textos de marketing. Usar `BRAND.md › Biblioteca de copy`. Si falta un texto, escribirlo siguiendo las reglas de tono y marcarlo `<!-- COPY PROVISIONAL -->`.
10. **Animación**: solo `transform` y `opacity` (y `clip-path` en reveals). Respetar `prefers-reduced-motion`. Ver `motion/MOTION.md`.

## Layout

- Contenedor: `max-width: var(--container)` (1120 px), padding lateral `var(--gutter)`.
- Ancho de lectura: `max-width: var(--measure)` (68ch).
- Secciones: padding vertical `var(--space-section)` (fluido 64→120 px).
- Patrón de sección del manual: columna de etiqueta (240 px) + contenido. En móvil se apila.
- Mobile first. Breakpoints: 640 / 960 / 1200 px.
- Botones y enlaces táctiles: mínimo 44 × 44 px.

## Checklist antes de entregar

- [ ] Lighthouse accesibilidad ≥ 95, rendimiento ≥ 90 en móvil
- [ ] LCP < 2,5 s (la foto del hero lleva `fetchpriority="high"`, `width`/`height` y formato AVIF/WebP)
- [ ] CLS < 0,05 (reservar espacio de imágenes y fuentes con `size-adjust` si hace falta)
- [ ] Navegable solo con teclado, `:focus-visible` visible
- [ ] Con `prefers-reduced-motion: reduce` no hay desplazamientos
- [ ] Aviso de crisis y pie legal presentes
- [ ] Ningún texto de anuncio insinúa que el lector tiene un problema de salud mental
- [ ] WhatsApp enlaza a `https://wa.me/34XXXXXXXXX` con mensaje prerellenado
