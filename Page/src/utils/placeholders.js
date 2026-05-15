export function placeholderDataUrl(label, accent) {
  const safe = String(label || 'Noticia').slice(0, 26);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${accent}" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#012a4a" stop-opacity="0.92"/>
    </linearGradient>
    <radialGradient id="r" cx="0.2" cy="0.1" r="0.9">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1280" height="720" fill="url(#g)"/>
  <rect width="1280" height="720" fill="url(#r)"/>
  <circle cx="1040" cy="-40" r="220" fill="#0077b6" fill-opacity="0.22"/>
  <circle cx="150" cy="680" r="260" fill="#ffffff" fill-opacity="0.12"/>
  <text x="64" y="610" font-family="Barlow, Segoe UI, sans-serif" font-size="56" font-weight="700" fill="#ffffff" opacity="0.95">${safe}</text>
  <text x="64" y="660" font-family="Barlow, Segoe UI, sans-serif" font-size="22" fill="#ffffff" opacity="0.8">Imagen placeholder</text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
