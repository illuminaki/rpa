# demo-playwright — Bot RPA real con Playwright

Un script Node.js que abre un **browser real (Chromium)**, navega al formulario
de `demo-visual` y lo llena automáticamente.

**Esta es la versión real** — lo que hacen herramientas como UiPath o n8n
bajo el capó cuando automatizan una web.

## Requisitos

- Node.js >= 18
- Tener `demo-visual` corriendo en `http://localhost:8080`

## Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Instalar el browser (solo la primera vez)
npx playwright install chromium

# 3. Correr el bot
node bot.js
```

## ¿Qué hace el bot?

1. Abre Chromium en pantalla (`headless: false` para que lo veas)
2. Navega a `http://localhost:8080`
3. Llena cada campo del formulario (`fill`, `selectOption`)
4. Hace clic en "Enviar registro" (`click`)
5. Verifica que el formulario se envió correctamente
6. Toma un **screenshot** como evidencia → `evidencia.png`

## APIs clave de Playwright usadas

| Método                        | ¿Qué hace?                         |
|-------------------------------|------------------------------------|
| `chromium.launch()`           | Abre el browser                    |
| `browser.newPage()`           | Crea una pestaña                   |
| `page.goto(url)`              | Navega a una URL                   |
| `page.fill(selector, texto)`  | Escribe en un input                |
| `page.selectOption(sel, val)` | Elige una opción en un `<select>`  |
| `page.click(selector)`        | Hace clic en un elemento           |
| `page.screenshot()`           | Toma captura de pantalla           |
| `page.locator().isVisible()`  | Verifica si un elemento es visible |

## Conexión con el mundo real

En proyectos reales, `datosRegistro` en `bot.js` no viene escrito a mano —
viene de una fuente externa:

```js
// Desde un CSV
const datos = require('fs').readFileSync('datos.csv').toString();

// Desde una API
const datos = await fetch('https://mi-api.com/registros').then(r => r.json());

// Desde una base de datos
const datos = await db.query('SELECT * FROM pendientes');
```

Eso es exactamente lo que hace un proceso RPA en producción.

---

**Parte del proyecto RPA para Devs**: https://github.com/illuminaki/rpa
