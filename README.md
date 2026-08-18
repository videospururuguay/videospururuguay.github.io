# Videos PUR Uruguay

Plataforma educativa gratuita que organiza las cátedras de la Facultad de Medicina de Uruguay en playlists de YouTube para facilitar la preparación para la **Prueba Única de Residencia (PUR)** y el Ciclo Internado Rotatorio.

🔗 **Sitio oficial:** https://videospururuguay.github.io/

---

## ✨ Características

- 📚 **10 módulos organizados:** Medicina Interna, Familiar, Ginecología, Pediatría, Cirugía, Psiquiatría, Bioética, Encares CIR-PUR, RCP Adulto y Pediátrico
- 🎥 **500+ clases en video** curadas de las cátedras oficiales de Udelar
- 📱 **100% responsive:** funciona perfecto en celular y PC
- ⚡ **Anti Error 153:** filtra automáticamente videos con restricción de embed usando YouTube Data API v3 con rotación de keys
- 🔍 **Buscador integrado:** busca clases por título dentro de cada módulo
- 🎯 **Reproductor inteligente:** con fallback a YouTube si un video bloquea el embed
- 🌙 **Diseño moderno:** navy + teal, glassmorphism, tipografía Plus Jakarta Sans
- 🚀 **SEO completo:** sitemap, robots, Open Graph, SearchAction

## 📁 Estructura del proyecto

```
videospururuguay.github.io/
├── index.html              # Página principal
├── logo.png                # Logo transparente PUR
├── banner.webp             # Banner hero
├── favicon.ico             # Favicon multi-resolución
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-192x192.png
├── favicon-512x512.png
├── ads.txt                 # Google AdSense
├── robots.txt              # SEO - Robots
├── sitemap.xml             # SEO - Sitemap
├── styles.css              # CSS legacy
├── scripts.js              # JS legacy
├── README.md               # Este archivo
├── LICENSE                 # Licencia MIT
└── .gitignore              # Protección de keys
```

## 🚀 Instalación local

```bash
git clone https://github.com/videospururuguay/videospururuguay.github.io.git
cd videospururuguay.github.io
python -m http.server 8000
# abrir http://localhost:8000
```

## 🔑 Configuración API de YouTube

El sitio usa YouTube Data API v3 con sistema de rotación y cache en localStorage para evitar quemar cuota.

1. Ir a Google Cloud Console
2. Crear proyecto y habilitar YouTube Data API v3
3. Crear credencial tipo API Key
4. Restringir la key OBLIGATORIO:
   - Referentes HTTP: `videospururuguay.github.io/*` y `localhost/*`
   - APIs: Solo YouTube Data API v3

> ⚠️ Nunca subas tu API key real a GitHub público sin restricción. Te pueden generar cargos.

## 🌐 Deploy en GitHub Pages

1. Subir todos los archivos a la rama `main`
2. En Settings > Pages, activar GitHub Pages desde `main / root`
3. Esperar 1-2 minutos

El sitio ya incluye:
- Google AdSense (`ca-pub-6775600074630483`)
- Google Analytics 4 (`G-3LX0DX40X8`)
- Open Graph tags para redes sociales

## 🛠️ Tecnologías

- **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript
- **APIs:** YouTube Data API v3, YouTube IFrame Player API
- **Player:** youtube-nocookie.com para privacidad y evitar Error 153
- **Fuentes:** Inter + Plus Jakarta Sans
- **Hosting:** GitHub Pages

## 📄 Licencia

Este proyecto está bajo licencia MIT. El contenido de los videos pertenece a sus respectivas cátedras de Facultad de Medicina - Udelar. Esta plataforma solo organiza y facilita el acceso.

## 🙏 Agradecimientos

- A todas las cátedras de Facultad de Medicina Udelar
- A los estudiantes que mantienen actualizadas las playlists
- A la comunidad de medicina de Uruguay

---
**Hecho con ❤️ para estudiantes de medicina de Uruguay**
© 2026 VIDEOS PUR URUGUAY
