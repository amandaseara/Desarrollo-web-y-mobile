const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado: token no proporcionado' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
}

module.exports = authMiddleware;
