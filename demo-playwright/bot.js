/**
 * bot.js — Bot RPA real con Playwright
 *
 * Este script abre un browser real (Chromium), navega al formulario
 * de demo-visual y lo llena automáticamente, paso a paso.
 *
 * Ejecutar:
 *   npm install
 *   npx playwright install chromium
 *   node bot.js
 */

const { chromium } = require('playwright');

// Datos que el bot va a ingresar
// En un caso real podrían venir de un CSV, una API o una BD.
const datosRegistro = {
  nombre:   'Sebastian Augudelo',
  email:    'sebas.garcia@empresa.com',
  telefono: '300 123 4567',
  ciudad:   'medellin',
  mensaje:  'Hola, quiero inscribirme al curso de RPA 2026.',
};

async function ejecutarBot() {
  console.log('🤖 Iniciando bot RPA...\n');

  // 1. Abrir el browser (headless: false = lo puedes ver en pantalla)
  const browser = await chromium.launch({ headless: false, slowMo: 80 });
  const page    = await browser.newPage();

  // 2. Navegar al formulario
  // Ajusta el puerto si es distinto al que sirves demo-visual
  const url = 'http://localhost:8080';
  console.log(`▶ Navegando a ${url}`);
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // 3. Llenar campo: Nombre
  console.log(`✏️  Escribiendo nombre: "${datosRegistro.nombre}"`);
  await page.fill('#nombre', datosRegistro.nombre);
  await page.waitForTimeout(400);

  // 4. Llenar campo: Email
  console.log(`✏️  Escribiendo email: "${datosRegistro.email}"`);
  await page.fill('#email', datosRegistro.email);
  await page.waitForTimeout(400);

  // 5. Llenar campo: Teléfono
  console.log(`✏️  Escribiendo teléfono: "${datosRegistro.telefono}"`);
  await page.fill('#telefono', datosRegistro.telefono);
  await page.waitForTimeout(400);

  // 6. Seleccionar ciudad en el <select>
  console.log(`🔽  Seleccionando ciudad: "${datosRegistro.ciudad}"`);
  await page.selectOption('#ciudad', datosRegistro.ciudad);
  await page.waitForTimeout(400);

  // 7. Llenar textarea: Mensaje
  console.log(`✏️  Escribiendo mensaje...`);
  await page.fill('#mensaje', datosRegistro.mensaje);
  await page.waitForTimeout(600);

  // 8. Hacer clic en el botón de enviar
  console.log(`🖱️  Haciendo clic en "Enviar registro"...`);
  await page.click('#btn-enviar');
  await page.waitForTimeout(800);

  // 9. Verificar que el formulario se envió correctamente
  const resultado = await page.locator('#form-resultado').isVisible();
  if (resultado) {
    console.log('\n✅ ¡Formulario enviado exitosamente por el bot!');
  } else {
    console.log('\n⚠️  No se detectó confirmación de envío.');
  }

  // 10. Tomar screenshot como evidencia (práctica común en RPA real)
  await page.screenshot({ path: 'evidencia.png', fullPage: true });
  console.log('📸 Screenshot guardado en evidencia.png');

  await browser.close();
  console.log('\n🏁 Bot finalizado.');
}

ejecutarBot().catch(err => {
  console.error('❌ Error en el bot:', err.message);
  process.exit(1);
});
