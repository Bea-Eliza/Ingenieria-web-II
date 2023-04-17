const usuarios = require('../Models/UsuarioModel');

function createUsuario(req, res) {
  const { name, telefono } = req.body;
  const id = usuarios.length + 1;
  const newUsuario = {
    id,
    name,
    telefono
  };
  usuarios.push(newUsuario);
  res.status(201).send(newUsuario);
}

module.exports = createUsuario;