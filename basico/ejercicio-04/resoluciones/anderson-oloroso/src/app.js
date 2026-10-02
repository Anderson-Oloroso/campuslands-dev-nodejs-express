// Básico - Ejercicio 04
import { mapName, zoneRadius, colapseZone } from "./service/map.service.js";

function main(){
    console.log(' ========== BATTLE ROYALE - ZONA ==========');

    const args = process.argv.slice(2);
    const newZone = args[0] ? Number(args[0]) : zoneRadius;

    try{
        const zoneInfo = colapseZone(newZone);
        console.table(zoneInfo);
    }
    catch(err){
        console.log('[ERROR]: ', err.message);
        process.extitCode = 1;
    }
}

main();