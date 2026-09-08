# Básico - Ejercicio 01
> Creador: Anderson Oloroso

## Descripción
API REST con Express que expone información del runtime y gestiona personajes bajo la temática RPG.

## Requisitos técnicos mínimos
- Node.js 20 o superior recomendado.
- Express cuando el ejercicio requiera servidor HTTP.

## Instalación
1. Ve a la carpeta del ejercicio:
```bash
    cd basico/ejercicio-01/resoluciones/anderson-oloroso
```
2. Instala las dependencias:
```bash
    npm install
```
3. Inicia el servidor:
```bash
    npm run dev
```

## Endpoints
1. Get `http://localhost:3000/api/rpg/`
    - Respuesta:
```json
{
  "ok": true,
  "message": "Ejercicio ejecutado correctamente",
  "topic": "Node runtime y consola"
}
```

2. Post `http://localhost:3000/api/rpg/`
    - Body:
```json
{
  "nombre": "Aragorn",
  "rol": "Guerrero",
  "hp": 5
}
```
   - Respuesta:
```json
{
	"ok": true,
	"data": {
		"nombre": "Aragorn",
		"rol": "Guerrero",
		"hp": 5,
		"estado": "Estado crítico"
	}
}
```

## Árbol de directorios
```text
basico/ejercicio-01/resoluciones/anderson-oloroso/
├── README.md
├── package.json
└── src/
    ├── app.js
    ├── controllers/ heroController.js
    ├── routes/ heroRoute.js
    └── services/ heroService.js
```