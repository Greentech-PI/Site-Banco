var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/buscarEstufaProblema", function (req, res) {
    medidaController.buscarEstufaProblema(req, res);
});

router.get("/buscarEstufaRecorrente", function (req, res){
    medidaController.buscarEstufaRecorrente(req, res);
});

module.exports = router;