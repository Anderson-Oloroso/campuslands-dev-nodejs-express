const checkHero = (nombre, rol, hp) => {
    let estado = `Listo para la batalla`;
    if(hp <= 0){
        estado = `Caído en combate`;
    }else if(hp <= 30){
        estado = `Estado crítico`;
    }

    console.log(`[INSPECCION]\nNombre: ${nombre}\nClase: ${rol}\nHP: ${hp}\nEstado: ${estado}`);

    return {
        nombre,
        rol,
        hp,
        estado
    };
};

module.exports = {
    checkHero
};

