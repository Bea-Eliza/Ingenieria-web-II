const usuarios = require('../Models/UsuarioModel');

function updateUsuario(req, res) {
  const id = parseInt(req.params.id);
  const usuarioIndex = usuarios.findIndex(p => p.id === id);
  if (usuarioIndex === -1) {
    res.sendStatus(404);
  } else 
  {
    const { name, telefono } = req.body;
    const updatedUsuario = {
      id,
      name,
      telefono
    };
    usuarios[usuarioIndex] = updatedUsuario;
    res.send(updatedUsuario);
  }
}

module.exports = updateUsuario;