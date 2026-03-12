# demo-visual — Simulación de RPA en el Browser

Formulario web + bot simulado en JavaScript puro.
**No requiere Node.js ni instalación.**

## ¿Para qué sirve?

Explica visualmente **qué hace un bot RPA**: llena campos, selecciona opciones,
hace clic — todo paso a paso con un log en pantalla.

## Cómo correrlo

```bash
# Cualquier servidor estático funciona
python3 -m http.server 8080
# Abrir http://localhost:8080
```

## Estructura

| Archivo      | Rol                                                    |
|--------------|--------------------------------------------------------|
| `index.html` | El formulario (la "app" que el bot automatiza)         |
| `style.css`  | Estilos                                                |
| `rpa-bot.js` | Mini-engine RPA: `type()`, `select()`, `click()`, etc. |
| `main.js`    | Las instrucciones del bot (los pasos a ejecutar)       |

## Concepto clave

```
main.js  →  define los PASOS
rpa-bot.js  →  ejecuta las ACCIONES (como Playwright, pero en el browser)
index.html  →  la APP que se automatiza
```

---

**Parte del proyecto RPA para Devs**: https://github.com/illuminaki/rpa
