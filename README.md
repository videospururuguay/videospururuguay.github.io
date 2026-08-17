# VIDEOS PUR URUGUAY

![Logo](logo.png)

Plataforma educativa gratuita que organiza las cátedras de la Facultad de Medicina de Uruguay en playlists de YouTube para facilitar la preparación para la **Prueba Única de Residencia (PUR)** y el Ciclo Internado Rotatorio.

🔗 **Sitio oficial:** https://videospururuguay.github.io/

---

## ✨ Características

- 📚 **10 módulos organizados:** Medicina Interna, Familiar, Ginecología, Pediatría, Cirugía, Psiquiatría, Bioética, Encares CIR-PUR, RCP Adulto y Pediátrico
- 🎥 **500+ clases en video** curadas de las cátedras oficiales de Udelar
- 📱 **100% responsive:** funciona perfecto en celular y PC sin necesidad de "sitio para computadora"
- ⚡ **Anti Error 153:** filtra automáticamente videos con restricción de embed usando YouTube Data API v3
- 🔍 **Buscador integrado:** busca clases por título dentro de cada módulo
- 🎯 **Reproductor inteligente:** con fallback a YouTube si un video bloquea el embed
- 🌙 **Diseño moderno:** navy + teal, glassmorphism, tipografía Plus Jakarta Sans

## 📁 Estructura del proyecto

```
videospururuguay.github.io/
├── index.html              # Página principal (versión bonita final)
├── logo.png                # Logo transparente PUR
├── banner.webp             # Banner hero
├── favicon.ico             # Favicon multi-resolución
├── favicon-16x16.png       # Favicon 16px
├── favicon-32x32.png       # Favicon 32px
├── favicon-192x192.png     # Favicon 192px (PWA)
├── favicon-512x512.png     # Favicon 512px
├── titulo.png              # Imagen título legacy
├── styles.css              # CSS original (compatibilidad)
├── scripts.js              # JS original (compatibilidad)
├── README.md               # Este archivo
└── LICENSE                 # Licencia MIT
```

## 🚀 Instalación local

```bash
# Clonar el repo
git clone https://github.com/videospururuguay/videospururuguay.github.io.git
cd videospururuguay.github.io

# Servir localmente (cualquier servidor estático)
python -m http.server 8000
# o
npx serve .
```

Luego abrir http://localhost:8000

## 🔑 Configuración API de YouTube

El sitio usa YouTube Data API v3 para traer información real de las playlists.

1. Ir a [Google Cloud Console](https://console.cloud.google.com/)
2. Crear proyecto y habilitar **YouTube Data API v3**
3. Crear credencial tipo **API Key**
4. Restringir la key:
   - **Referentes HTTP:** `videospururuguay.github.io/*` y `localhost/*`
   - **APIs:** Solo YouTube Data API v3
5. Reemplazar en `index.html`:

```javascript
const API_KEY = 'TU_API_KEY_AQUI';
```

> La key actual en el código es `AIzaSyDlaWEBNRRG4d3sHU7H-JjedEvrwejv9vc` - restringila a tu dominio para evitar abuso.

## 🌐 Deploy en GitHub Pages

1. Subir todos los archivos a la rama `main` del repo `videospururuguay.github.io`
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

## 🤝 Contribuir

¿Encontraste un video desactualizado o querés agregar un módulo?

1. Hacé fork del repo
2. Creá una rama: `git checkout -b agregar-modulo-neurologia`
3. Commiteá: `git commit -m "Agrega Neurología"`
4. Push y abrí PR

O simplemente escribí a: **videospururuguay@gmail.com**

## 📄 Licencia

Este proyecto está bajo licencia MIT - ver [LICENSE](LICENSE) para detalles.

El contenido de los videos pertenece a sus respectivas cátedras de Facultad de Medicina - Udelar. Esta plataforma solo organiza y facilita el acceso.

## 🙏 Agradecimientos

- A todas las cátedras de Facultad de Medicina Udelar por compartir sus clases
- A los estudiantes que mantienen actualizadas las playlists
- A la comunidad de medicina de Uruguay

---

**Hecho con ❤️ para estudiantes de medicina de Uruguay**

© 2026 VIDEOS PUR URUGUAY
