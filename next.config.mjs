/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.130', '100.119.126.66'],
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // URLs duplicadas o inexistentes que Google puede acabar rastreando.
      // Se resuelven con un salto permanente para no dejar cadenas ni 404.
      { source: '/index', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/tratamientos', destination: '/', permanent: true },
    ]
  },
}

export default nextConfig
