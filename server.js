
const express = require('express');
const sequelize = require('./data_base/db');
const userRoutes = require('./routes/userRoutes');

//Importar o modulo Swagger
const setupSwagger = require('./swagger');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', userRoutes);


// Configurar Swagger
setupSwagger(app);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});