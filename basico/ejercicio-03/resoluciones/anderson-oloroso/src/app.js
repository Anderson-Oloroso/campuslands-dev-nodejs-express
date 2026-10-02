// Básico - Ejercicio 03
const { getChampion } = require('./service/app.service.js');

function main(){
    console.log('========== MOBA ESPORTS DRAFT (CommonJs) ==========');

    const args = process.argv.slice(2);
    const teamName = args[0] || 'T1 Sports';

    try{
        const draftResult = getChampion(teamName);
        console.log(`Selección completada para el equipo: [${draftResult.equipo.toUpperCase()}]`);
        console.table([draftResult]);
    }
    catch(err){
        console.log('[ERROR]:', err.message);
    }
}

if( require.main === module){
    main();
}