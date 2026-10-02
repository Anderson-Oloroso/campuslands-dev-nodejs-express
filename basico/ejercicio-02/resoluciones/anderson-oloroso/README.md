# Básico - Ejercicio 02
Creador: Anderson Oloroso

## Descripción

Solución para el ejercicio de **npm scripts y package.json** con temática de shooters competitivos implementado con **ECMAScript Modules (ESM)**. 

Demuestra:
- Configuración de scripts útiles en `package.json`.
- Uso del estándar nativo ESM con `"type": "module"`.
- Importaciones nativas con el prefijo `node:` (`node:fs`, `node:path`, `node:url`).
- Lectura y parsing de metadatos de configuración.
- Simulación de partida competitiva con validación de datos de entrada y manejo de errores.

---

## Cómo ejecutar

1. **Instalar dependencias:**
   *(Este ejercicio utiliza módulos internos de Node.js, no requiere librerías externas).*
   ```bash
   npm install
   ```

2. **Ejecutar el script principal:**
   ```bash
   npm start
   ```

3. **Ejecutar en modo observador (watch/dev nativo con Node.js):**
   ```bash
   npm run dev
   ```

4. **Ver información y scripts del package.json:**
   ```bash
   npm run info
   ```

5. **Ejecutar pasando un nombre de jugador personalizado:**
   ```bash
   node src/app.js "Viper"
   ```

---

## Cómo probar el caso de error (Validación)

Para probar que la validación responde correctamente lanzando un error cuando el nombre del jugador no es válido:

```bash
node -e "import('./src/app.js').then(m => m.simulateMatch(''))"
```

**Salida esperada:**
```text
Error: El nombre del jugador es obligatorio para iniciar una partida.
```

---

## Estructura de la entrega

```text
basico/ejercicio-02/resoluciones/anderson-oloroso/
├── package.json
├── README.md
└── src/
    └── app.js
```
