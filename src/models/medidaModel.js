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

function buscarEstufaProblema(){
    var instrucaoSql = `
        select nomeEstufa from estufa INNER JOIN monitoramentosensor on estufa.idestufa = monitoramentosensor.fkestufa WHERE dht11_temperatura > maxTemp OR dht11_temperatura < minTemp OR dht11_umidade > maxUmidade OR dht11_umidade < minUmidade limit 1;
    `;
    console.log("Executando a instrução SQL: \n " + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarEstufaRecorrente(){
    var instrucaoSql = `
        select nomeEstufa, count(idMonitoramento) as 'qtdeRegistros' from monitoramentosensor inner join estufa on estufa.idEstufa = monitoramentosensor.fkestufa group by nomeEstufa;
    `;
    console.log("Executando a instrução SQL: \n " + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarEstufaProblema,
    buscarEstufaRecorrente
}