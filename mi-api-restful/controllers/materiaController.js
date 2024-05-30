const Materia = require('../models/materia');

exports.obtenerMaterias = async (req, res) => {
  try {
    const materias = await Materia.find({ curso: req.params.cursoId });
    res.json(materias);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.crearMateria = async (req, res) => {
  try {
    const nuevaMateria = new Materia({ ...req.body, curso: req.params.cursoId });
    await nuevaMateria.save();
    res.status(201).json(nuevaMateria);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.obtenerMateria = async (req, res) => {
  try {
    const materia = await Materia.findById(req.params.id);
    if (!materia) 
        return res.status(404).send('No se encontró la materia');
    res.json(materia);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.actualizarMateria = async (req, res) => {
  try {
    const materia = await Materia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!materia) 
        return res.status(404).send('No se encontró la materia');
    res.json(materia);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.eliminarMateria = async (req, res) => {
  try {
    const materia = await Materia.findByIdAndDelete(req.params.id);
    if (!materia) 
        return res.status(404).send('No se encontró la materia');
    res.json({ message: 'Se eliminó la materia' });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.agregarCalificacion = async (req, res) => {
  try {
    const materia = await Materia.findById(req.params.id);
    if (!materia) 
        return res.status(404).send('No se encontró la materia');

    materia.calificaciones.push(req.body);
    await materia.save();
    res.status(201).json(materia);
  } catch (error) {
    res.status(400).send(error);
  }
};