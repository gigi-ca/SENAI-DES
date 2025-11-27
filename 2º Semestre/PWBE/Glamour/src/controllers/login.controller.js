const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    if (!email || !senha) {
      return res.status(400).json({ message: "Email e senha são obrigatórios!" });
    }

    const senhahash = crypto.createHash('md5').update(senha).digest('hex');

    const [profissional] = await db.query(
      "SELECT * FROM profissionais WHERE email = ? AND senha = ?",
      [email, senhahash]
    );

    if (profissional.length === 0) {
      return res.status(401).json({ message: "Email ou senha incorretos!" });
    }

    const token = jsonwebtoken.sign(
      {
        id: profissional[0].id,
        email: profissional[0].email
      },
      process.env.SECRET_JWT,
      { expiresIn: "60min" }
    );

    return res.status(200).json({ token });

  } catch (err) {
    return res.status(500).json({ message: "Erro no login", error: err.message });
  }
}

const cadastrarProfissional = async (req, res) => {
  const { nome, email, especialidade, telefone, senha, status, endereco } = req.body;

  try {
    if (!senha) {
      return res.status(400).json({ message: "A senha é obrigatória!" });
    }

    const senhahash = crypto.createHash('md5').update(senha).digest('hex');

    const query = `
      INSERT INTO profissionais
      VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const values = [
      nome,
      email,
      telefone,     
      endereco,
      especialidade,
      status,
      senhahash
    ];

    const resultado = await db.query(query, values);

    const novoUsuario = {
      id: resultado[0].insertId,
      nome: nome,
      email: email,
      telefone: telefone,
      endereco: endereco,
      especialidade: especialidade,
      status: status
    };

    return res.status(201).json(novoUsuario);

  } catch (error) {
    return res.status(500).json({ message: "Erro ao cadastrar profissional", error: error.message });
  }
};


module.exports = { login, cadastrarProfissional };