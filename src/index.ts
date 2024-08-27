import express from 'express';
import dotenv from 'dotenv';
import uploadRoute from './routes/upload';
import confirmRoute from './routes/confirm';
import listRoute from './routes/list';

dotenv.config();

const app = express();

app.use(express.json());

// Rota para upload
app.use('/api', uploadRoute);
app.use('/api', confirmRoute);
app.use('/api', listRoute);

app.get('/', (req, res) => {
  res.send('API de Leitura de Consumo');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});
