const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {

        // Obtener header Authorization
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ mensaje: "Token no proporcionado" });
        }

        // Formato: Bearer TOKEN
        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ mensaje: "Token invalido" });
        }

        // Verificar token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Guardar usuario en request
        req.user = decoded;

        next();

    } catch (error) {
        res.status(401).json({ mensaje: "Token invalido o expirado" });
    }
};
