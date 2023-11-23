const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')

let jugadores = [];

router.get('/', authMiddleware, (req, res) => {
    const { position } = req.query;

    if (position) {
        const jugadoresPosition = jugadores.filter(jugador => jugador.position === position);
        if (jugadoresPosition.length > 0) {
            res.json(jugadoresPosition);
        } else {
            res.status(404).json({ message: `Jugador con posición ${position} no encontrado` });
        }
    } else {
        res.json(jugadores);
    }
});

router.get('/:id', authMiddleware, (req, res) => {
    const { id } = req.params;
    const jugador = jugadores.find(jugador => jugador.id === parseInt(id));

    if (jugador) {
        res.json(jugador);
    } else {
        res.status(404).json({ message: `Jugador con ID ${id} no encontrado` });
    }
});

router.post('/', authMiddleware, (req, res) => {
    const nuevoJugador = req.body;
    const posicionesValidas = ['GK', 'DF', 'MD', 'FW'];

    if (!nuevoJugador.name ||
        !nuevoJugador.position ||
        typeof nuevoJugador.suspended !== 'boolean' ||
        typeof nuevoJugador.inyured !== 'boolean') {
        return res.status(400).json({ message: 'Formato de jugador inválido' });
    }

    if (!posicionesValidas.includes(nuevoJugador.position)) {
        return res.status(400).json({ message: 'Posición no válida para el jugador' });
    }

    jugadores.push(nuevoJugador);
    res.json({ message: 'Jugador agregado exitosamente' });
});

router.delete('/:id', authMiddleware, (req, res) => {
    const { id } = req.params;

    const jugadoresFiltrados = jugadores.filter(jugador => jugador.id !== parseInt(id));

    if (jugadores.length !== jugadoresFiltrados.length) {
        jugadores = jugadoresFiltrados;
        res.json({ message: `Jugador con ID ${id} eliminado exitosamente` });
    } else {
        res.status(404).json({ message: `Jugador con ID ${id} no encontrado` });
    }
});

router.put('/:id', authMiddleware, (req, res) => {
    const { id } = req.params;
    const { position, suspended, inyured } = req.body;

    const jugadorIndex = jugadores.findIndex(jugador => jugador.id === parseInt(id));

    if (jugadorIndex === -1) {
        return res.status(404).json({ message: `Jugador con ID ${id} no encontrado` });
    }

    if (position !== undefined) {
        jugadores[jugadorIndex].position = position;
    }

    if (suspended !== undefined) {
        jugadores[jugadorIndex].suspended = suspended;
    }

    if (inyured !== undefined) {
        jugadores[jugadorIndex].inyured = inyured;
    }

    res.json({ message: `Jugador con ID ${id} modificado exitosamente` });
});


module.exports = router;
