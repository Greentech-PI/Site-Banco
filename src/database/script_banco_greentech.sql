create database Greentech;
use Greentech;


-- CRIANDO TABELA 1 EMPRESA --
  create table Empresa
	(
    idEmpresa int primary key auto_increment,
    nomeEmpresa varchar (100),
    CNPJ char (14),
    nomeRepresentante varchar (75),
    senha varchar (45)
	)auto_increment=500;
    
-- CRIANDO TABELA 2 USUARIO --
create table Usuario 
	(
	idUsuario int primary key auto_increment,
    nome varchar (45),
	email varchar (45),
	senha varchar (45),
    telefone char (11),
    fkEmpresa int,
    foreign key (fkEmpresa)references Empresa(idEmpresa)
	);
        
-- CRIANDO TABELA 3 ESTUFA --
create table Estufa
	(
    fkEmpresa int,
	foreign key (fkEmpresa) references Empresa(idEmpresa),
	idEstufa int,
	primary key(fkEmpresa, idEstufa),
    nomeEstufa varchar (45),
    tamanho varchar (45),
	tipo varchar (45),
	minTemp decimal (5,2),
    maxTemp decimal (5,2),
	minUmidade decimal (5,2),
    maxUmidade decimal (5,2)
	);

-- CRIANDO TABELA 5 DE MONITORAMENTO DOS SENSORES --
create table MonitoramentoSensor 
	(
	idMonitoramento int primary key auto_increment,
	dht11_temperatura decimal (5,2),
	dht11_umidade decimal (5,2),
    luminosidade decimal(7,2),
    lm35_temperatura decimal (5,2),
    chave int,
	momento datetime,
    fkEmpresa int,
    fkEstufa int,
    foreign key (fkEmpresa, fkEstufa) references Estufa (fkEmpresa, idEstufa)
	);
    
-- CRIANDO TABELA DE ALERTAS QUE SERÃO MOSTRADOS NA DASHBOARD --
create table Alerta (
	idAlerta int,
	fkMonitoramento int,
    tipoAlerta varchar (45),
	foreign key (fkMonitoramento) references MonitoramentoSensor (idMonitoramento),
    primary key (idAlerta, fkMonitoramento)
);


select * from empresa;
select * from estufa;
select * from monitoramentosensor;
select * from sensor;

insert into empresa (nomeEmpresa, CNPJ, nomeRepresentante, senha)
	values ('New Tomato', '38958816000103', 'Carlos', '123');

insert into Estufa (fkEmpresa, idEstufa, nomeEstufa, tamanho, tipo, minTemp, maxTemp, minUmidade, maxUmidade)
	VALUES (500, 1, 'Estufa Red 01', '2 Hec', 'Tomate-Cereja', 14.00, 25.00, 65.00, 95.00);
    
/*
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, dht11_temperatura, dht11_umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 1, 23.00, 82.00, now(), 500, 1);

insert into MonitoramentoSensor(fkSensor, idMonitoramento, dht11_temperatura, dht11_umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 2, 23.00, 81.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 3, 22.00, 82.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 4, 21.00, 84.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 5, 22.00, 81.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 6, 25.00, 79.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 7, 27.00, 74.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 8, 30.00, 64.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 9, 27.00, 65.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 10, 25.00, 68.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 11, 29.00, 61.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 12, 24.00, 68.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 13, 21.00, 74.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 14, 23.00, 76.00, now(), 500, 1);
    
insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 15, 29.00, 78.00, now(), 500, 1);
    
    insert into MonitoramentoSensor(fkSensor, idMonitoramento, temperatura, umidade, momento, fkEmpresa, fkEstufa)
	VALUES (1, 16, 22.00, 90.00, now(), 500, 1);
    
*/