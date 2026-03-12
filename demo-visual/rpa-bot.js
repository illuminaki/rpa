/**
 * RPABot — Mini-librería que simula un motor RPA en el navegador.
 *
 * Expone acciones básicas que cualquier herramienta RPA real tiene:
 *   - type()   → Escribir texto en un campo (carácter por carácter)
 *   - select() → Elegir una opción de un <select>
 *   - click()  → Hacer clic en un botón
 *   - wait()   → Pausar entre pasos
 *   - log()    → Registrar lo que hace el bot
 */
class RPABot {
  constructor(logContainerId) {
    this.logContainer = document.getElementById(logContainerId);
    this.stepNumber = 0;
  }

  // --- Utilidades internas ---

  _timestamp() {
    return new Date().toLocaleTimeString('es-CO', { hour12: false });
  }

  log(action, target, value) {
    this.stepNumber++;
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML =
      `<span class="time">[${this._timestamp()}]</span> ` +
      `<span class="action">${this.stepNumber}. ${action}</span> ` +
      (target ? `→ <span class="target">${target}</span> ` : '') +
      (value  ? `: <span class="value">"${value}"</span>` : '');
    this.logContainer.appendChild(entry);
    this.logContainer.scrollTop = this.logContainer.scrollHeight;
  }

  logSuccess(message) {
    const entry = document.createElement('div');
    entry.className = 'log-entry success';
    entry.textContent = `✅ ${message}`;
    this.logContainer.appendChild(entry);
    this.logContainer.scrollTop = this.logContainer.scrollHeight;
  }

  clearLog() {
    this.logContainer.innerHTML = '';
    this.stepNumber = 0;
  }

  // --- Acciones RPA ---

  /** Espera N milisegundos (simula delay entre acciones). */
  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /** Escribe texto carácter por carácter en un input/textarea. */
  async type(selector, text) {
    const el = document.querySelector(selector);
    if (!el) { this.log('ERROR', selector, 'Elemento no encontrado'); return; }

    this.log('type', selector, text);
    el.classList.add('bot-active');
    el.value = '';
    el.focus();

    for (const char of text) {
      el.value += char;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      await this.wait(45 + Math.random() * 35); // velocidad "humana"
    }

    await this.wait(200);
    el.classList.remove('bot-active');
  }

  /** Selecciona una opción en un <select>. */
  async select(selector, value) {
    const el = document.querySelector(selector);
    if (!el) { this.log('ERROR', selector, 'Elemento no encontrado'); return; }

    this.log('select', selector, value);
    el.classList.add('bot-active');
    el.focus();
    await this.wait(300);
    el.value = value;
    el.dispatchEvent(new Event('change', { bubbles: true }));
    await this.wait(200);
    el.classList.remove('bot-active');
  }

  /** Hace clic en un elemento. */
  async click(selector) {
    const el = document.querySelector(selector);
    if (!el) { this.log('ERROR', selector, 'Elemento no encontrado'); return; }

    this.log('click', selector);
    el.classList.add('bot-active');
    await this.wait(400);
    el.click();
    await this.wait(200);
    el.classList.remove('bot-active');
  }
}
