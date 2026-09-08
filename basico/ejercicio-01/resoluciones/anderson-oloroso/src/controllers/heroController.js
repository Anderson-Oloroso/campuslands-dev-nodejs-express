const heroService = require('../services/heroService');

const obtenerEstado = (req, res) => {
    return res.status(200).json({
        ok: true,
        message: 'Servidor Jugadores RPG operando correctamente',
        topic: 'Node runtime y consola'
    });
};

const checkHero = (req, res) => {
    const {nombre, rol, hp} = req.body;
    if (!nombre || !rol || hp === undefined) {
        return res.status(400).json({
            ok: false,
            message: 'Faltan datos del héroe. Se requiere nombre, rol y puntos de vida (hp).'
        });
    }

    if (typeof hp !== 'number'){
        return res.status(400).json({
            ok: false,
            message: 'Los puntos de vida (hp) deben ser un número.'
        });
    }

    const data = heroService.checkHero(nombre, rol, hp);
    
    return res.status(200).json({ ok: true, data });

};

module.exports = {
    obtenerEstado,
    checkHero
};