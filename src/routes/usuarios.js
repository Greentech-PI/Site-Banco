var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/buscarEstufas", function (req, res) {
    usuarioController.buscarEstufas(req, res);
});

router.post("/cadastrarEmpresa", function (req, res) {
    usuarioController.cadastrarEmpresa(req, res);
})

router.post("/cadastrarUsuario", function (req, res) {
    usuarioController.cadastrarUsuario(req, res);
})

router.post("/autenticarEmpresa", function (req, res) {
    usuarioController.entrarEmpresa(req, res);
});

router.post("/ultimoRegistroEstufa", function (req, res) {
    usuarioController.ultimoRegistroEstufa(req, res);
})

router.post("/autenticarUsuario", function (req, res) {
    usuarioController.entrarUsuario(req, res);
});

module.exports = router;