# Componentes

HTML de referencia. Clases definidas en `css/base.css`; atributos `data-reveal*` en `motion/`.

## Logo

```html
<a class="logo" href="/" aria-label="Daniela López, psicóloga — inicio">
  <span class="logo__name">daniela lópez</span>
  <span class="logo__dot" aria-hidden="true"></span>
  <span class="logo__desc">psicóloga</span>
</a>
```
- Tamaño por `font-size` del `.logo` (cabecera 24 px, portada 64 px). Mínimo 120 px de ancho.
- Variante con especialidad (web, anuncios, material de derivación):
```html
<div class="logo" style="flex-direction:column;align-items:flex-start;gap:.25em">
  <span class="logo__name">daniela lópez</span>
  <span class="cluster" style="--cluster-gap:.5em;font-size:.45em">
    <span style="font-weight:300">psicóloga</span><span class="logo__dot" style="margin:0"></span><span style="font-weight:500">niños, adolescentes y familias</span>
  </span>
</div>
```
- Sobre marino: añadir `.logo--inverse` (o estar dentro de `.section--inverse`).

## Icono

```html
<span class="brand-icon" style="--size:48px" aria-hidden="true">dl</span>
<span class="brand-icon brand-icon--round" style="--size:56px">dl</span>
```
Para favicon y redes usar los archivos de `assets/` (ver `assets/README.md`).

## Botones

```html
<a class="btn btn--primary" href="#cita">Pedir primera sesión · 40 €</a>
<a class="btn btn--secondary" href="https://wa.me/34XXXXXXXXX?text=Hola%20Daniela%2C%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20la%20primera%20sesi%C3%B3n.">WhatsApp</a>
<a class="btn btn--link" href="/primera-sesion">Cómo es la primera sesión <span class="arrow" aria-hidden="true">→</span></a>
```
Un solo `.btn--primary` por pantalla visible.

## Cabecera

```html
<header class="site-header" data-header>
  <div class="container site-header__inner">
    <a class="logo" href="/">…</a>
    <nav class="nav" aria-label="Principal">
      <a href="/infantojuvenil">Niños y adolescentes</a>
      <a href="/ansiedad">Ansiedad</a>
      <a href="/crisis">Crisis</a>
      <a href="/precios">Precios</a>
    </nav>
    <a class="btn btn--primary" href="#cita">Pedir cita</a>
  </div>
</header>
```

## Hero

```html
<section class="container hero">
  <div class="hero__copy">
    <span class="eyebrow" data-reveal>Chamartín · online</span>
    <h1 data-reveal="lines">Psicóloga de niños, adolescentes <em>y familias.</em></h1>
    <p class="lead" data-reveal>Trabajo con tu hijo y te oriento a ti en el mismo proceso, con reglas claras sobre qué se comparte. También atiendo ansiedad y momentos de crisis.</p>
    <div class="cluster" data-reveal>
      <a class="btn btn--primary" href="#cita">Pedir primera sesión · 40 €</a>
      <a class="btn btn--secondary" href="https://wa.me/34XXXXXXXXX">WhatsApp</a>
    </div>
  </div>
  <div class="hero__media" data-reveal="mask">
    <img src="/assets/daniela-recorte.webp" alt="Daniela López, psicóloga" width="1066" height="1600" fetchpriority="high">
  </div>
</section>
```

## Servicios

```html
<div class="grid-auto" data-reveal-group>
  <a class="card card--inverse" href="/infantojuvenil" data-reveal>
    <span class="card__kicker">Principal</span>
    <span class="card__title">Terapia infantojuvenil</span>
    <span class="card__body">Niños, adolescentes y orientación a padres dentro del mismo proceso.</span>
  </a>
  <a class="card card--muted" href="/ansiedad" data-reveal>…Ansiedad…</a>
  <a class="card card--muted" href="/crisis" data-reveal>…Momentos de crisis…</a>
</div>
```
La tarjeta principal siempre en `card--inverse` y primera.

## Precios

```html
<ul class="price-list">
  <li><span>Primera sesión</span><strong>40 €</strong></li>
  <li><span>Online</span><strong>55 €</strong></li>
  <li><span>Presencial</span><strong>60 €</strong></li>
  <li><span>Pareja / familia</span><strong>75 €</strong></li>
</ul>
```

## Aviso de crisis (obligatorio)

```html
<aside class="crisis-note" role="note">
  Esta consulta no es un servicio de urgencias. Si hay riesgo inmediato, llama al <a href="tel:112">112</a>.
  Línea de atención a la conducta suicida: <a href="tel:024">024</a>.
</aside>
```
No animar este componente. Siempre visible sin interacción.

## Pie legal (obligatorio)

```html
<footer class="site-footer">
  <div class="container stack" style="--stack-gap:8px">
    <strong>Daniela López Meléndez</strong>
    <span>Psicóloga General Sanitaria · Col. M-41829 · <!-- TODO: nº registro sanitario --></span>
    <span>C. de Marcenado 14, despacho 2 · Chamartín, Madrid</span>
  </div>
</footer>
```
