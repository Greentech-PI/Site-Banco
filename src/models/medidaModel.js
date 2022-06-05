var database = require("../database/config");

function buscarUltimasMedidas(idEstufa, limite_linhas) {
    instrucaoSql = `select 
                        dht11_temperatura, 
                        dht11_umidade, 
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from MonitoramentoSensor
                    where fkEstufa = 1
                    order by idmonitoramento desc limit ${limite_linhas}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idEstufa) {
    instrucaoSql = `select 
                        dht11_temperatura, 
                        dht11_umidade, DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fkEstufa 
                        from MonitoramentoSensor where fkEstufa = 1 
                    order by idMonitoramento desc limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEstufaProblema(fkEmpresa){
    var instrucaoSql = `
        select nomeEstufa from estufa INNER JOIN monitoramentosensor on estufa.idestufa = monitoramentosensor.fkestufa WHERE Estufa.fkEmpresa = ${fkEmpresa} AND dht11_temperatura > maxTemp OR dht11_temperatura < minTemp OR dht11_umidade > maxUmidade OR dht11_umidade < minUmidade limit 1;
    `;
    console.log("Executando a instrução SQL: \n " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEstufaRecorrente(fkEmpresa){
    var instrucaoSql = `
        select nomeEstufa, count(idMonitoramento) as 'qtdeRegistros' from monitoramentosensor inner join estufa on estufa.idEstufa = monitoramentosensor.fkestufa WHERE Estufa.fkEmpresa = ${fkEmpresa} AND dht11_temperatura > maxTemp OR dht11_temperatura < minTemp OR dht11_umidade > maxUmidade OR dht11_umidade < minUmidade group by nomeEstufa;
    `;
    console.log("Executando a instrução SQL: \n " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMetricasEstufa(idEstufa){
    var instrucaoSql = `
        SELECT nomeEstufa, minTemp, baixaTemp, tempNormal, altaTemp, maxTemp, minUmidade, baixaUmidade, umidNormal, altaUmidade, maxUmidade FROM Estufa WHERE idEstufa = ${idEstufa};
    `;
    console.log("Executando a instrução SQL \n " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function novoAlerta(tipoAlerta, fkMonitoramento) {
    var instrucaoSql = `
        INSERT INTO Alerta (tipoAlerta, fkMonitoramento)
	        VALUES ('${tipoAlerta}', ${fkMonitoramento});
    `;
    console.log("Executando a instrução SQL \n " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function selecionarAlertas(fkEmpresa){
    var instrucaoSql = `
        SELECT * FROM Alerta INNER JOIN MonitoramentoSensor ON MonitoramentoSensor.idMonitoramento = Alerta.fkMonitoramento INNER JOIN Estufa ON MonitoramentoSensor.fkEstufa = Estufa.idEstufa WHERE Estufa.fkEmpresa = ${fkEmpresa};
    `;
    console.log("Executando a instrução SQL \n " + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarEstufaProblema,
    buscarEstufaRecorrente,
    buscarMetricasEstufa,
    novoAlerta,
    selecionarAlertas
}