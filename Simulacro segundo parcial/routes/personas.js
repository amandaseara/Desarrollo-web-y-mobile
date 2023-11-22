const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

//Todas las personas
let personas = [];

router.get('/', authMiddleware, (req, res) => {
    res.json(personas);
});

router.get('/buscarPersona', authMiddleware, (req, res) => {
    const { nombre, apellido } = req.query;

    const resultados = personas.filter(
      (persona) =>
        persona.nombre.toLowerCase() === nombre.toLowerCase() &&
        persona.apellido.toLowerCase() === apellido.toLowerCase()
    );
  
    res.json(resultados);
});

router.post('/', authMiddleware, (req, res) => {
  const nuevaPersona = req.body;
  personas.push(nuevaPersona);
  res.json({ message: 'Persona agregada exitosamente' });
});

router.delete('/eliminarPersona', authMiddleware, (req, res) => {
  const { nombre, apellido } = req.body;

  if (!nombre || !apellido) {
    return res.status(400).json({ error: 'Se requieren nombre y apellido para eliminar una persona.' });
  }

  const initialLength = personas.length;
  personas = personas.filter(person => {
    return (
      person.nombre.toLowerCase() !== nombre.toLowerCase() ||
      person.apellido.toLowerCase() !== apellido.toLowerCase()
    );
  });

  if (personas.length < initialLength) {
    return res.sendStatus(204); // Indica que se eliminó al menos una persona
  } else {
    return res.status(404).json({ error: 'No se encontró la persona para eliminar.'});
  }
});

module.exports = router;
