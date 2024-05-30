const express = require('express');
const router = express.Router();
const materiaController = require('../controllers/materiaController');

router.get('/:cursoId/materias', materiaController.obtenerMaterias);
router.post('/:cursoId/materias', materiaController.crearMateria);
router.get('/:id', materiaController.obtenerMateria);
router.put('/:id', materiaController.actualizarMateria);
router.delete('/:id', materiaController.eliminarMateria);
router.post('/:id/calificaciones', materiaController.agregarCalificacion);

module.exports = router;
