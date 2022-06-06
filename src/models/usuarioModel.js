var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarUsuario(email, senha) {
    console.log("ACESSEI O USUARIO MODnEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha);
    var instrucao = `
        SELECT * FROM Usuario INNER JOIN Empresa ON Empresa.idEmpresa = Usuario.fkEmpresa WHERE email = '${email}' AND Usuario.senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrarEmpresa(CNPJ, senha) {
    console.log("ACESSEI O USUARIO MODnEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", CNPJ, senha)
    var instrucao = `
        SELECT * FROM Empresa WHERE CNPJ = '${CNPJ}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarEmpresa(nomeEmpresa, CNPJEmpresa, nomeRepresentante, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nomeEmpresa, CNPJEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Empresa (nomeEmpresa, CNPJ, nomeRepresentante, senha) VALUES ('${nomeEmpresa}', '${CNPJEmpresa}', '${nomeRepresentante}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarUsuario(nome, email, senha, telefone, fkEmpresa){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, telefone, fkEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Usuario (nome, email, senha, telefone, fkEmpresa) VALUES ('${nome}', '${email}', '${senha}', '${telefone}', '${fkEmpresa}');   
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarEstufas(fkEmpresa){
    console.log("ACESSEI O USUARIO MODnEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarEstufas(): ", fkEmpresa);

    var instrucao = `
    select distinct nomeEstufa, idEstufa, minTemp, baixaTemp, tempNormal, altaTemp, maxTemp, minUmidade, baixaUmidade, umidNormal, altaUmidade, maxUmidade, fkEstufa, (select dht11_temperatura from MonitoramentoSensor where momento = (select max(momento) from MonitoramentoSensor where idEstufa = fkEstufa) and Estufa.idEstufa = MonitoramentoSensor.fkEstufa) as 'ultimaTemp', (select dht11_umidade from MonitoramentoSensor where momento = (select max(momento) from MonitoramentoSensor where idEstufa = fkEstufa) and Estufa.idEstufa = MonitoramentoSensor.fkEstufa) as 'ultimaUmidade' from MonitoramentoSensor right join Estufa ON MonitoramentoSensor.fkEstufa = Estufa.idEstufa WHERE Estufa.fkEmpresa = ${fkEmpresa};    `;
    console.log("Executando a instrução SQL: \n " + instrucao);
    return database.executar(instrucao);
}

function ultimoRegistroEstufa(fkEmpresa){
    console.log("ACESSEI O USUARIO MODnEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function ultimoRegistroEstufa(): ", fkEmpresa)

    var instrucao = `
    select distinct nomeEstufa, idEstufa, minTemp, baixaTemp, tempNormal, altaTemp, maxTemp, minUmidade, baixaUmidade, umidNormal, altaUmidade, maxUmidade, fkEstufa, idMonitoramento, dht11_temperatura, dht11_umidade from MonitoramentoSensor right join Estufa ON MonitoramentoSensor.fkEstufa = Estufa.idEstufa AND Estufa.fkEmpresa = ${fkEmpresa} where momento = (select max(momento) from MonitoramentoSensor);
    `;
    console.log("Executando a instrução SQL: \n " + instrucao);
    return database.executar(instrucao);
}

function cadastrarEstufa(nomeEstufa, tamanho, minTemp, baixaTemp, tempNormal, altaTemp, maxTemp, minUmidade, baixaUmidade, umidNormal, altaUmidade, maxUmidade, fkEmpresa){
    console.log("ACESSEIO O MODEL USUÁRIO PARA CADASTRAR UMA ESTUFA", nomeEstufa, tamanho, minTemp, baixaTemp, tempNormal, altaTemp, maxTemp, minUmidade, baixaUmidade, umidNormal, altaUmidade, maxUmidade, fkEmpresa);
    var instrucao = `
        INSERT INTO Estufa (nomeEstufa, tamanho, minTemp, baixaTemp, tempNormal, altaTemp, maxTemp, minUmidade, baixaUmidade, umidNormal, altaUmidade, maxUmidade, fkEmpresa) VALUES ('${nomeEstufa}', '${tamanho}', ${minTemp}, ${baixaTemp}, ${tempNormal}, ${altaTemp}, ${maxTemp}, ${minUmidade}, ${baixaUmidade}, ${umidNormal}, ${altaUmidade}, ${maxUmidade}, ${fkEmpresa});
    `;
    console.log("Executando a instrução SQL: \n " + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrarUsuario,
    entrarEmpresa,
    cadastrarEmpresa,
    cadastrarUsuario,
    buscarEstufas,
    ultimoRegistroEstufa,
    listar,
    cadastrarEstufa
};