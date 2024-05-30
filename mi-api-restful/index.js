const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cursoRoutes = require('./routes/cursos');
const materiaRoutes = require('./routes/materias');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Trabajo práctico: Arquitectura Web - UP');
});

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://pablo:pablo@cluster0.vzeuaur.mongodb.net/?retryWrites=true&w=majority');
    console.log('Conectado a la base de datos');
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1);
  }
};

connectDB();

app.use('/api/cursos', cursoRoutes);
app.use('/api/materias', materiaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


