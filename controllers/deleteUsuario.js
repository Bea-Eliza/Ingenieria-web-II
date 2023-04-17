const usuarios = require('../Models/UsuarioModel');

function deleteUsuario(req, res) {
  const id = parseInt(req.params.id);
  const usuarioIndex = usuarios.findIndex(p => p.id === id);
  if (usuarioIndex === -1) 
  {
    res.sendStatus(404);
  } else {
    usuarios.splice(usuarioIndex, 1);
    res.sendStatus(204);
    console.log("Usuario eliminado correctamente")
  }
}

module.exports = deleteUsuario;