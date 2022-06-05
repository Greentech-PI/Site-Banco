var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idEstufa = req.params.idEstufa;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idEstufa, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idEstufa = req.params.idEstufa;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idEstufa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarEstufaProblema(req, res){
    console.log(`Recuperando medidas em tempo real`);

    var fkEmpresa = req.params.fkEmpresa;

    medidaModel.buscarEstufaProblema(fkEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });   
}

function buscarEstufaRecorrente(req, res){
    console.log(`Recuperando estufas com problemas recorrentes`);

    var fkEmpresa = req.params.fkEmpresa;

    medidaModel.buscarEstufaRecorrente(fkEmpresa).then(function (resultado) {
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMetricasEstufa(req, res){
    var idEstufa = req.params.idEstufa;
    console.log(`CHEGOU  O ID: ${idEstufa}`);

    console.log(`Recuperando as métricas da estufa`);

    medidaModel.buscarMetricasEstufa(idEstufa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as métricas da estufa", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function novoAlerta(req, res){
    var fkMonitoramento = req.body.fkMonitoramento;
    var tipoAlerta = req.body.tipoAlerta;

    console.log(`Chegou o monitoramento de id ${fkMonitoramento} e alerta de tipo ${tipoAlerta}`);

    medidaModel.novoAlerta(tipoAlerta, fkMonitoramento).then(function (resultado) {
        res.json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as métricas da estufa", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function selecionarAlertas(req, res){
    var fkEmpresa = req.params.fkEmpresa;
    console.log(`Chegou o ID: ${fkEmpresa}`);
    medidaModel.selecionarAlertas(fkEmpresa).then(function (resultado) {
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao listas os alertas ", sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarEstufaProblema,
    buscarEstufaRecorrente,
    buscarMetricasEstufa,
    selecionarAlertas,
    novoAlerta
}