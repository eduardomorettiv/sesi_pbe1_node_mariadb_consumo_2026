import db from '../config/db.js';

// GET /api/consumo - Listar todos
export const getAll = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM consumo');
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/consumo/:id - Buscar por ID
export const getById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM consumo WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: 'Registro não encontrado' });
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// POST /api/consumo - Criar registro
export const create = async (req, res) => {
  try {
    const { usuarioId, local, equipamento, consumoKwh, mesReferencia, status } = req.body;
    const [result] = await db.query(
      'INSERT INTO consumo (usuarioId, local, equipamento, consumoKwh, mesReferencia, status) VALUES (?, ?, ?, ?, ?, ?)',
      [usuarioId, local, equipamento, consumoKwh, mesReferencia, status]
    );
    res.status(201).json({ success: true, id: result.insertId, message: 'Registro criado com sucesso' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// PUT /api/consumo/:id - Atualizar registro
export const update = async (req, res) => {
  try {
    const { usuarioId, local, equipamento, consumoKwh, mesReferencia, status } = req.body;
    const [result] = await db.query(
      'UPDATE consumo SET usuarioId = ?, local = ?, equipamento = ?, consumoKwh = ?, mesReferencia = ?, status = ? WHERE id = ?',
      [usuarioId, local, equipamento, consumoKwh, mesReferencia, status, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: 'Registro não encontrado' });
    res.json({ success: true, message: 'Registro atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE /api/consumo/:id - Deletar registro
export const remove = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM consumo WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: 'Registro não encontrado' });
    res.json({ success: true, message: 'Registro deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
