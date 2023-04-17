const express = require('express');
const router = express.Router();

const getUsuarios = require('../controllers/getUsuarios');
const createUsuario = require('../controllers/createUsuarios');
const updateUsuario = require('../controllers/updateUsuario');
const deleteUsuario = require('../controllers/deleteUsuario');

router.get('/usuarios', getUsuarios);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

module.exports = router;