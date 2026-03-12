# RPA para Devs — Workshop 2026

Material educativo para enseñar **Robotic Process Automation (RPA)** a nivel de código.

Dos enfoques complementarios: una demo visual para entender el concepto, y un bot real con Playwright para ver cómo funciona en la práctica.

## Estructura del repo

```
rpa/
├── demo-visual/          ← Explicación visual (sin dependencias)
│   ├── index.html        → Formulario web
│   ├── style.css         → Estilos
│   ├── rpa-bot.js        → Mini-engine RPA simulado
│   ├── main.js           → Script que define los pasos del bot
│   └── README.md         → Instrucciones
│
└── demo-playwright/      ← Bot real con Playwright + Node.js
    ├── bot.js            → Script RPA real que automatiza el formulario
    ├── package.json      → Dependencias (Playwright)
    ├── evidencia.png     → Screenshot tomado por el bot
    └── README.md         → Instrucciones
```

## ¿Qué es RPA?

**RPA = Robotic Process Automation**

Un bot de software que imita lo que haría un humano frente a una computadora:
- Hacer clic en botones
- Llenar formularios
- Extraer datos
- Copiar información entre sistemas
- Ejecutar procesos — **sin intervención humana**

## Cómo usar este repo

### Opción 1: Demo Visual (sin instalación)

```bash
cd demo-visual
python3 -m http.server 8080
# Abre http://localhost:8080
# Presiona "Iniciar Bot RPA" para ver el bot en acción
```

**Ideal para:** Explicar el concepto a nivel general, ver visualmente qué hace un bot.

### Opción 2: Bot Real con Playwright (recomendado para devs)

```bash
cd demo-playwright
npm install
npx playwright install chromium
node bot.js
```

**Ideal para:** Mostrar cómo funciona una herramienta RPA real, ver Chromium abrirse y automatizar el formulario.

## Conceptos clave

| Concepto | Explicación |
|----------|-------------|
| **Bot RPA** | Script que automatiza tareas repetitivas en la UI |
| **Playwright** | Librería Node.js para automatizar browsers (Chromium, Firefox, Safari) |
| **Headless** | Ejecutar el browser sin interfaz gráfica (más rápido) |
| **Selector** | Forma de identificar elementos HTML (`#id`, `.class`, `[attr]`) |
| **Fill** | Escribir texto en un input |
| **SelectOption** | Elegir una opción en un `<select>` |
| **Click** | Hacer clic en un elemento |
| **Screenshot** | Tomar captura de pantalla (evidencia) |

## Herramientas RPA reales (2026)

| Herramienta | Tipo | Ideal para |
|-------------|------|-----------|
| **Playwright** | Open Source + Node.js | Devs que quieren código real |
| **Puppeteer** | Open Source + Node.js | Web scraping y RPA web |
| **Selenium** | Open Source + Python/Java | Automatización cross-browser |
| **n8n** | Open Source + Cloud | Automatización visual + código |
| **UiPath** | Enterprise | RPA corporativo (SAP, legacy apps) |
| **Make** | Cloud (freemium) | Flujos visuales sin código |

## Cuándo usar RPA

**Usa RPA cuando:**
- No hay API disponible
- El proceso es repetitivo y bien definido
- Necesitas automatizar una interfaz visual (web o desktop)

**NO uses RPA cuando:**
- Existe una API disponible (úsala en su lugar)
- El proceso cambia constantemente
- Tienes acceso directo a la base de datos

## Próximos pasos para los estudiantes

- Crear un bot que automatice un sitio real (ej: scraping de precios)
- Leer datos desde un CSV y rellenar múltiples formularios
- Integrar con una API para procesar resultados
- Usar Playwright en modo headless para ejecutar en servidor

## Enlaces útiles

- [Documentación Playwright](https://playwright.dev)
- [Guía de selectores CSS](https://developer.mozilla.org/es/docs/Web/CSS/Selectors)
- [n8n (RPA visual)](https://n8n.io)
- [Repo GitHub](https://github.com/illuminaki/rpa)

---

**Creado para el Workshop RPA 2026** | Sin experiencia previa requerida
