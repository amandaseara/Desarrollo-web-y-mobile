const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./middlewares/authMiddleware')

const jugadores = require('./routes/jugadores');
const jugadoresConvocados = require('./routes/jugadoresConvocados');

const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { user, password } = req.body;
    // Para pruebas
    if (user === 'Bielsa' && password === 'PW2023') {
      const token = jwt.sign({ user }, 'secret_key'); // Token con JWT
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

app.use(authMiddleware);

app.use('/players', jugadores);
app.use('/call', jugadoresConvocados);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
