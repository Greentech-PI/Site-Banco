var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/buscarMetricasEstufa/:idEstufa", function (req, res) {
    medidaController.buscarMetricasEstufa(req, res);
});

router.get("/selecionarAlertas/:fkEmpresa", function (req, res){
    medidaController.selecionarAlertas(req, res);
});

router.get("/buscarEstufaProblema/:fkEmpresa", function (req, res) {
    medidaController.buscarEstufaProblema(req, res);
});

router.get("/buscarEstufaRecorrente/:fkEmpresa", function (req, res){
    medidaController.buscarEstufaRecorrente(req, res);
});

router.post("/novoAlerta", function (req, res) {
    medidaController.novoAlerta(req, res);
});

module.exports = router;