const express = require('express');
const router = express.Router();

// Ejemplo de ruta GET
router.get('/api/resource', (req, res) => {
  res.json({ message: 'Recurso obtenido' });
});

module.exports = router;
