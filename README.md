# Mein SV Wissen — Mock (basado en captura)

Este proyecto imita la “hero” y la primera sección de la home, según la captura provista,
y añade un bloque para **probar un `<iframe>`**.

## Uso
```bash
npm i
npm run dev
```
Abre http://localhost:5173

### Configurar el iframe
- `.env.local` con:
```
VITE_IFRAME_SRC=https://example.com
```
- O bien, parámetro de URL:
```
http://localhost:5173/?src=https://example.com
```
