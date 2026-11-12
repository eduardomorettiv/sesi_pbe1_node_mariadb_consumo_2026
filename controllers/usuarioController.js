import db from '../config/db.js';

// GET /api/usuario - Listar todos
export const getAll = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuario');
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/usuario/:id - Buscar por ID
export const getById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM usuario WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: 'Registro não encontrado' });
    res.json({ success: true, data: rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// POST /api/usuario - Criar registro
export const create = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const [result] = await db.query(
      'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)',
      [nome, email, senha]
    );
    res.status(201).json({ success: true, id: result.insertId, message: 'Registro criado com sucesso' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// PUT /api/usuario/:id - Atualizar registro
export const update = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const [result] = await db.query(
      'UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?',
      [nome, email, senha, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: 'Registro não encontrado' });
    res.json({ success: true, message: 'Registro atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE /api/usuario/:id - Deletar registro
export const remove = async (req, res) => {
  try {
    const [result] = await db.query('DELETE FROM usuario WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ success: false, message: 'Registro não encontrado' });
    res.json({ success: true, message: 'Registro deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
