/**
 * main.js — Script de automatización.
 *
 * Aquí defines los PASOS que el bot debe ejecutar,
 * igual que lo harías en Playwright, UiPath.
 */

const bot = new RPABot('bot-log');

// Datos que el bot va a ingresar (podrían venir de un CSV, API, BD, etc.)
const datosRegistro = {
  nombre:   'sebas García López',
  email:    'ana.garcia@empresa.com',
  telefono: '300 123 4567',
  ciudad:   'medellin',
  mensaje:  'Hola, quiero inscribirme al curso de RPA 2026.',
};

// --- Secuencia de automatización ---
async function ejecutarBot() {
  bot.clearLog();
  bot.log('INICIO', '', 'Bot RPA iniciado');
  await bot.wait(600);

  // Paso 1: Llenar nombre
  await bot.type('#nombre', datosRegistro.nombre);
  await bot.wait(300);

  // Paso 2: Llenar email
  await bot.type('#email', datosRegistro.email);
  await bot.wait(300);

  // Paso 3: Llenar teléfono
  await bot.type('#telefono', datosRegistro.telefono);
  await bot.wait(300);

  // Paso 4: Seleccionar ciudad
  await bot.select('#ciudad', datosRegistro.ciudad);
  await bot.wait(300);

  // Paso 5: Escribir mensaje
  await bot.type('#mensaje', datosRegistro.mensaje);
  await bot.wait(500);

  // Paso 6: Enviar formulario
  await bot.click('#btn-enviar');
  await bot.wait(300);

  bot.logSuccess('Formulario completado y enviado por el bot.');
}

// --- Event Listeners ---

document.getElementById('btn-iniciar-bot').addEventListener('click', async function () {
  this.disabled = true;
  document.getElementById('form-resultado').classList.add('hidden');
  await ejecutarBot();
  this.disabled = false;
});

document.getElementById('btn-reset').addEventListener('click', function () {
  document.getElementById('registro-form').reset();
  document.getElementById('form-resultado').classList.add('hidden');
  bot.clearLog();
  const hint = document.createElement('p');
  hint.className = 'log-hint';
  hint.textContent = 'Presiona el botón para iniciar el bot...';
  document.getElementById('bot-log').appendChild(hint);
});

// Prevenir el submit real del form y mostrar el mensaje de éxito
document.getElementById('registro-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-resultado').classList.remove('hidden');
});
