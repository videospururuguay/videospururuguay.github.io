# Videos PUR Uruguay 🇺🇾

> Clases gratuitas en video para preparar la **Prueba Única de Residencia (PUR)** en Uruguay. Medicina Interna, Familiar, Ginecología, Pediatría, Cirugía, Psiquiatría, Bioética y más.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=for-the-badge)](https://videospururuguay.github.io/)
[![PUR Uruguay](https://img.shields.io/badge/PUR-Uruguay%202026-0a1931?style=for-the-badge)](https://videospururuguay.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

**Sitio oficial:** https://videospururuguay.github.io/  
**Banco de Preguntas:** https://videospururuguay.github.io/Banco-d
De-Preguntas.html  
**Temario PUR:** https://temariopur.github.io/

---

### ✨ Qué es esto

Proyecto open-source y sin fines de lucro que centraliza todas las clases necesarias para la PUR Uruguay. Nació para que no tengas que buscar playlist por playlist.

Incluye:
- **Reproductor integrado**
- **10 módulos** organizados (Encares CIR-PUR 2026-2027, 2025-2026, Interna, Familiar, Gineco, Pedia, Cirugía, Psiquiatría, Bioética, ECG)
- **Banco de Preguntas interactivo** con corrección instantánea
- **Modo Simulacro** con timer, navegación por grilla y revisión detallada
- **Búsqueda inteligente** por tema (ej: "Apendicitis" encuentra el video aunque el título original sea otro)

### 🚀 Features

- [x] Dark Mode persistente (localStorage)
- [x] PWA - instalable como app con `manifest.json` + `service-worker.js`
- [x] Cache inteligente: 12hs para módulos normales, 6hs para Encares 2026-2027
- [x] Diseño 100% responsive (mobile-first, Tailwind CSS)
- [x] SEO optimizado: JSON-LD, OpenGraph, Twitter Cards, canonical
- [x] Monetización ética: AdSense + cafecito voluntario MercadoPago
- [x] Banners a proyectos hermanos (Temario PUR, Resúmenes Drive, @ENCARESCIRPUR)

### 🛠️ Stack

- **Frontend:** HTML5, Vanilla JavaScript, Tailwind CSS
- **Hosting:** GitHub Pages
- **Analytics:** Google Analytics 4 + AdSense
- **Fuentes:** Inter + Plus Jakarta Sans

### 📁 Estructura del proyecto

```
videospururuguay.github.io/
├── index.html                  # Home - reproductor de videos
├── banco-de-preguntas.html     # Banco interactivo + simulacro
├── manifest.json               # PWA config
├── service-worker.js           # Offline cache
├── favicon.ico / favicon-*.png
├── whatsapp-videos-pur-uruguay.png # OG image
├── logo.png
├── og-image.jpg                # Banner Temario
└── thumbs/                     # Thumbnails de módulos
    ├── medicina-interna.webp
    ├── ginecologia.webp
    ├── pediatria.png
    ├── encares-cir-pur-2026-2027.webp
    ├── drive-resumenes.webp
    └── cafecito-profesional.webp
```

### 💻 Desarrollo local

No necesitas build step. Es estático puro.

```bash
# Clonar
git clone https://github.com/videospururuguay/videospururuguay.github.io.git
cd videospururuguay.github.io

# Servir local (cualquiera de estas)
python -m http.server 8000
# o
npx serve .
```

Abrí http://localhost:8000

### 📚 Banco de Preguntas

El archivo `banco-de-preguntas.html` es standalone:
- Renderiza preguntas desde un JSON interno
- Lógica de corrección: `selected-correct`, `selected-wrong`, `show-correct`
- Simulacro: guarda en `window._lastSimResult` para revisión
- Próximas mejoras: persistencia de progreso, estadísticas por materia

### 🗺️ Roadmap

- [ ] Guardar progreso del banco en localStorage + exportar PDF
- [ ] Agregar modo flashcards
- [ ] Sitemap.xml automático
- [ ] RSS para nuevas clases
- [ ] Mejoras de Lighthouse y accesibilidad

### 🤝 Cómo contribuir

¡Toda ayuda suma para los que preparan la PUR!

1. Fork el repo
2. Crea branch: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -m 'Agrega: ...'`
4. Push y abre PR

Ideas para contribuir:
- Corregir títulos en `MIS_NOTAS`
- Agregar preguntas al banco
- Mejorar accesibilidad / contraste
- Traducir / mejorar SEO

### ☕ Apoyar el proyecto

Si te sirvió para estudiar, podés invitar un cafecito:
**MercadoPago:** https://link.mercadopago.com.uy/miguesa

Todo lo recaudado se usa para hosting, dominio y tiempo de edición.

### 📄 Legal

- **Contenido:** Los videos pertenecen a sus respectivos docentes / canales (ej: @ENCARESCIRPUR). Este sitio solo los organiza.
- **Código:** MIT License - hacé lo que quieras, pero mantené los créditos.
- **Marca:** "PUR" y "Prueba Única de Residencia" son de Facultad de Medicina - UdelaR.

### 📬 Contacto

- **Sitio:** https://videospururuguay.github.io/
- **Contacto:** Ver página `contacto.html` en el sitio
- **YouTube asociado:** @ENCARESCIRPUR

---

© 2026 Videos PUR Uruguay · Educación médica gratuita · Hecho con ❤️ en Uruguay 🇺🇾

> Si estás preparando la PUR 2026, ¡mucha fuerza! Nos vemos del otro lado, como colegas.
