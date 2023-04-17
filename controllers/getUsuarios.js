const usuarios = require('../Models/UsuarioModel');

function getUsuarios(req, res) {
  res.send(usuarios);
}
module.exports = getUsuarios;