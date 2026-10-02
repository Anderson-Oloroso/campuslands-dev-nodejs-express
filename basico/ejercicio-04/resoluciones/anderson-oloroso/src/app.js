// Básico - Ejercicio 04
import { mapName, zoneRadius, colapseZone } from "./service/map.service.js";

function main(){
    const args = process.argv.slice(2);
    const newZone = args[0] ? Number(args[0]) : zoneRadius;

    try{
        const zoneInfo = colapseZone(newZone);
        console.log(`========== Map ${mapName} is Colapsing ... ==========`)
        console.table(zoneInfo);
    }
    catch(err){
        console.log('[ERROR]: ', err.message);
        process.exitCode = 1;
    }
}

main();