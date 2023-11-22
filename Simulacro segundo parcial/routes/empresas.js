const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

let empresas = [];

router.get('/', authMiddleware, (req, res) => {
    res.json(empresas);
});

router.post('/', authMiddleware, (req, res) => {
    const nuevaEmpresa = req.body;
    empresas.push(nuevaEmpresa);
    res.json({ message: 'Empresa agregada exitosamente' });
});

router.delete('/:nombre', authMiddleware, (req, res) => {
    const nombreEmpresa = req.params.nombre;
  
    const tienePersonasAsociadas = personas.some((persona) => persona.empresa === nombreEmpresa);
  
    if (tienePersonasAsociadas) {
      return res.status(403).json({ message: 'No se puede eliminar la empresa, tiene personas asociadas' });
    }
  
    empresas = empresas.filter((empresa) => empresa.nombre === nombreEmpresa);
    res.json({ message: 'Empresa eliminada exitosamente' });
});

router.post('/:nombreEmpresa/asociar-persona', authMiddleware, (req, res) => {
    const nombreEmpresa = req.params.nombreEmpresa;
    const { nombre, apellido } = req.body;
  
    const persona = personas.find((p) => p.nombre === nombre && p.apellido === apellido);
    if (!persona) {
      return res.status(404).json({ message: 'Persona no encontrada' });
    }
  
    const empresa = empresas.find((e) => e.nombre === nombreEmpresa);
    if (!empresa) {
      return res.status(404).json({ message: 'Empresa no encontrada' });
    }

    agregarPersona(persona);
    res.json({ message: 'Persona asociada a la empresa exitosamente' });
});

module.exports = router;
