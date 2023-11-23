const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')

let jugadoresConvocados = [];

router.post('/', authMiddleware, (req, res) => {
    const calledPlayersId = req.body.calledPlayersId;

    if (calledPlayersId.length !== 22) {
        return res.status(400).json({ message: 'Debes proporcionar 22 jugadores para convocar' });
    }

    const invalidPlayers = calledPlayersId.filter(id => {
        const jugador = jugadores.find(jugador => jugador.id === parseInt(id));
        return !jugador || jugador.suspended || jugador.inyured;
    });

    if (invalidPlayers.length > 0) {
        return res.status(400).json({ message: 'No podes convocar estos jugadores' });
    }

    jugadoresConvocados = calledPlayersId.map(id => jugadores.find(jugador => jugador.id === parseInt(id)));
    res.json({ message: 'Convocatoria exitosa', convocados });
});

module.exports = router;
