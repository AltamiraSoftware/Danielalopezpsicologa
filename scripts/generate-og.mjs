import sharp from 'sharp'
import { readFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const publicDir = path.join(root, 'public')
const width = 1200
const height = 630

// El logotipo vectorial principal mantiene la definición en las previsualizaciones.
const logo = await sharp(await readFile(path.join(publicDir, 'logo-daniela-horizontal.svg')))
  .resize({ width: 1050, fit: 'inside' })
  .png()
  .toBuffer()

const background = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="1200" height="630" fill="#FFFEFA" />
  <path d="M0,0 H420 C310,110 205,110 0,215 Z" fill="#E6D8F0" />
  <path d="M1200,410 C1060,420 1020,480 900,510 C820,533 775,536 665,550 H1200 Z" fill="#F1EAF6" />
  <g fill="#56337C" font-family="DejaVu Sans, Arial, Helvetica, sans-serif">
    <text x="94" y="404" font-size="31" font-weight="500">Terapia presencial en Chamartín y online</text>
    <text x="94" y="452" font-size="31" font-weight="700">Adultos · Parejas · Infanto-juvenil</text>
    <text x="94" y="513" font-size="34" font-weight="700">+34 614 412 183</text>
  </g>
  <path d="M94,366 H612" fill="none" stroke="#8263A7" stroke-width="3" />
  <path d="M0 548 H1200 V630 H0 Z" fill="#69458F" />
  <g fill="#FFFEFA" font-family="DejaVu Sans, Arial, Helvetica, sans-serif" font-size="23" font-weight="600">
    <text x="94" y="599">Colegiada M-41829</text>
    <text x="610" y="599">www.danielalopezpsicologa.es</text>
  </g>
  <path d="M540 571 V608" fill="none" stroke="#D7BCEB" stroke-width="2" />
</svg>
`

await mkdir(publicDir, { recursive: true })
const output = path.join(publicDir, 'opengraph-image.png')
await sharp(Buffer.from(background))
  .composite([{ input: logo, left: 63, top: 44 }])
  .png({ compressionLevel: 9, palette: true, effort: 8 })
  .toFile(output)

console.log(`Open Graph estático generado: ${output} (${width}x${height})`)
