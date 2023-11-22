const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/authMiddleware');
const personasRoutes = require('./routes/personas');
const empresasRoutes = require('./routes/empresas');
const jwt = require('jsonwebtoken');

const app = express();

app.use(bodyParser.json());


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Para pruebas
  if (username === 'usuario_prueba' && password === 'contraseña_prueba') {
    const token = jwt.sign({ username }, 'secret_key'); // Token con JWT
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});

// Middleware de autenticación
app.use(authMiddleware);

app.use('/personas', personasRoutes);
app.use('/empresas', empresasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
