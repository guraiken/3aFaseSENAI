export const getAllUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    validateAnimal(req.body);

    const { email, name, password } = req.body;

    // BUG 5: Vulnerável a injeção de SQL (interpolação direta)
    // Dica: Use marcadores de posição (?) FEITO
    const query = 'INSERT INTO users (email, name, password) VALUES (?, ?, ?)';

    const [result] = await pool.query(query, [email, name, password]);
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);

    // BUG 6: Retorna 200 OK mesmo se o ID não existir (affectedRows === 0) FEITO
    if(result.affectedRows === 0){
      return
    }
    res.json({ message: "Animal deleted successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


