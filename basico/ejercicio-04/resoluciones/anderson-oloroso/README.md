# Básico - Ejercicio 04
Creador: Anderson Oloroso

## Descripción

Solución para el ejercicio de **módulos ES Modules (ESM)** con temática de **Battle Royale**.

Demuestra:
- Uso del estándar moderno de módulos en JavaScript con `import` y `export` con nombres (named exports).
- Separación de responsabilidades: constantes y lógica del cierre de zona en `src/service/map.service.js` y punto de entrada ejecutable en `src/app.js`.
- Configuración de `package.json` con `"type": "module"`.
- Procesamiento de argumentos por consola (`process.argv`) con conversión numérica y valor por defecto.
- Validación de datos (el radio debe ser mayor a 0) y manejo de errores con código de salida.

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

3. **Ejecutar en modo observador (watch con Node.js):**
   ```bash
   npm run dev
   ```

4. **Ejecutar pasando un radio de zona personalizado por consola:**
   ```bash
   node src/app.js 500
   ```

---

## Cómo probar el caso de error (Validación)

Para verificar que la validación responde correctamente cuando se envía un valor inválido (por ejemplo un radio menor o igual a 0):

```bash
node -e "import('./src/service/map.service.js').then(m => m.colapseZone(-10))"
```

**Salida esperada:**
```text
Error: El radio actual debe ser mayor a 0
```

---

## Estructura de la entrega

```text
basico/ejercicio-04/resoluciones/anderson-oloroso/
├── package.json
├── README.md
└── src/
    ├── app.js
    └── service/
        └── map.service.js
```
