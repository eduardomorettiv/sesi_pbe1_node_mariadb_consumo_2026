import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuarioRoutes.js';
import consumoRoutes from './routes/consumoRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota de teste / Healthcheck
app.get('/health', (req, res) => {
  res.json({ status: 'ok', project: 'Registro de consumo de energia', timestamp: new Date() });
});

// Rotas da API geradas a partir do SQL
app.use('/usuario', usuarioRoutes);
app.use('/consumo', consumoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor Backend rodando em http://localhost:${PORT}`);
});
