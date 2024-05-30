const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController');

router.get('/:cursoId/materias', materiaController.obtenerMaterias);
router.post('/:cursoId/materias', materiaController.crearMateria);
router.get('/materias/:id', materiaController.obtenerMateria);
router.put('/materias/:id', materiaController.actualizarMateria);
router.delete('/materias/:id', materiaController.eliminarMateria);
router.post('/materias/:id/calificaciones', materiaController.agregarCalificacion);

module.exports = router;
