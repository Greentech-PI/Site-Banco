const res = require("express/lib/response");
var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function buscarEstufas(req, res){
    var fkEmpresa = req.body.fkEmpresa;

    usuarioModel.buscarEstufas(fkEmpresa)
        .then(function (resultado) {
            if(resultado.length > 0){
                res.status(200).json(resultado);
            }else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro){
                console.log(erro);
                console.log("Houve um erro ao buscar as estufas! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function ultimoRegistroEstufa(req, res){
    var fkEmpresa = req.body.fkEmpresa;

    usuarioModel.ultimoRegistroEstufa(fkEmpresa)
        .then(function (resultado) {
            if(resultado.length > 0){
                res.status(200).json(resultado);
            }else{
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro){
                console.log(erro);
                console.log("Houve um erro ao buscar as estufas! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        )
}


function entrarUsuario(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha est?? indefinida!");
    } else {
        
        usuarioModel.entrarUsuario(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inv??lido(s)");
                    } else {
                        res.status(403).send("Mais de um usu??rio com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function entrarEmpresa(req, res) {
    var CNPJ = req.body.CNPJServer;
    var senha = req.body.senhaServer;

    if (CNPJ == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha est?? indefinida!");
    } else {
        
        usuarioModel.entrarEmpresa(CNPJ, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("CNPJ e/ou senha inv??lido(s)");
                    } else {
                        res.status(403).send("Mais de uma empresa com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrarEmpresa(req, res) {
    // Crie uma vari??vel que v?? recuperar os valores do arquivo cadastro.html
    var nomeEmpresa = req.body.nomeEmpresaServer;
    var CNPJEmpresa = req.body.CNPJServer;
    var nomeRepresentante = req.body.nomeRepresentanteServer;
    var senha = req.body.senhaServer;
    

    // Fa??a as valida????es dos valores
    if (nomeEmpresa == undefined) {
        res.status(400).send("Seu nome est?? undefined!");
    } else if (CNPJEmpresa == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if(nomeRepresentante == undefined){
        res.status(400).send("Seu representante est?? undefined!");
    } else if(senha == undefined){
        res.status(400).send("Sua senha est?? undefined!");
    } else {
        
        // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js

        usuarioModel.cadastrarEmpresa(nomeEmpresa, CNPJEmpresa, nomeRepresentante, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarUsuario(req, res){
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    // Fa??a as valida????es dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome est?? undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha est?? undefined!");
    } else if(telefone == undefined){
        res.status(400).send("Seu telefone est?? undefined!");
    } else if(fkEmpresa == undefined){
        res.status(400).send("Sua empresa est?? undefined!");
    }else {
        
        // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js

        usuarioModel.cadastrarUsuario(nome, email, senha, telefone, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarEstufa(req, res){
    var nome = req.body.nomeServer;
    var tamanho = req.body.tamanhoServer;
    var tempMin = req.body.tempMinimaServer;
    var tempBaixa = req.body.tempBaixaServer;
    var tempNormal = req.body.tempNormalServer;
    var tempAlta = req.body.tempAltaServer;
    var tempMaxima = req.body.tempMaximaServer;
    var umidMin = req.body.umidMinimaServer;
    var umidBaixa = req.body.umidBaixaServer;
    var umidNormal = req.body.umidNormalServer;
    var umidAlta = req.body.umidAltaServer;
    var umidMaxima = req.body.umidMaximaServer;
    var fkEmpresa = req.body.fkEmpresaServer;



    // Fa??a as valida????es dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome est?? undefined!");
    } else if (tamanho == undefined) {
        res.status(400).send("Seu tamanho est?? undefined!");
    } else if (tempMin == undefined) {
        res.status(400).send("Sua temperatura minima est?? undefined!");
    } else if(tempBaixa == undefined){
        res.status(400).send("Sua temperatura baixa est?? undefined!");
    } else if(tempNormal == undefined){
        res.status(400).send("Sua temperatura normal est?? undefined!");
    } else if(tempAlta == undefined){
        res.status(400).send("Sua temperatura alta est?? undefined!");
    } else if(tempMaxima == undefined){
        res.status(400).send("Sua temperatura maxima est?? undefined!");
    } else if(umidMin == undefined){
        res.status(400).send("Sua umidade minima est?? undefined!");
    } else if(umidBaixa == undefined){
        res.status(400).send("Sua umidade baixa est?? undefined!");
    } else if(umidNormal == undefined){
        res.status(400).send("Sua umidade normal est?? undefined!");
    } else if(umidAlta == undefined){
        res.status(400).send("Sua umidade alta est?? undefined!");
    } else if(umidMaxima == undefined){
        res.status(400).send("Sua umidade maxima est?? undefined!");
    } else if(fkEmpresa == undefined){
        res.status(400).send("Sua empresa est?? undefined!");
    }else {
        
        // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js

        usuarioModel.cadastrarEstufa(nome, tamanho, tempMin, tempBaixa, tempNormal, tempAlta, tempMaxima, umidMin, umidBaixa, umidNormal, umidAlta, umidMaxima, fkEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    entrarEmpresa,
    entrarUsuario,
    cadastrarEmpresa,
    cadastrarUsuario,
    listar,
    buscarEstufas,
    ultimoRegistroEstufa,
    testar,
    cadastrarEstufa
}