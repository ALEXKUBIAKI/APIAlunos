
const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/students', studentRoutes);
app.use(errorHandler); // Middleware de tratamento de erros

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
