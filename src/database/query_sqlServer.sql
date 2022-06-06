-- CRIANDO TABELA 1 EMPRESA --
  create table Empresa
	(
    idEmpresa int primary key identity (500, 1),
    nomeEmpresa varchar (100),
    CNPJ char (14),
    nomeRepresentante varchar (75),
    senha varchar (45)
	);
    
-- CRIANDO TABELA 2 USUARIO --
create table Usuario 
	(
	idUsuario int primary key identity (1,1),
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
	idEstufa int primary key identity (1,1),
    nomeEstufa varchar (45),
    tamanho varchar (45),
	minTemp decimal (5,2),
    baixaTemp decimal(5,2),
    altaTemp decimal(5,2),
    maxTemp decimal (5,2),
    tempNormal decimal (5,2),
    umidNormal decimal (5,2),
	minUmidade decimal (5,2),
    baixaUmidade decimal (5,2),
    altaUmidade decimal (5,2),
    maxUmidade decimal (5,2)
	);

-- CRIANDO TABELA 5 DE MONITORAMENTO DOS SENSORES --
create table MonitoramentoSensor 
	(
	idMonitoramento int primary key identity (1,1),
	dht11_temperatura decimal (5,2),
	dht11_umidade decimal (5,2),
    luminosidade decimal(7,2),
    lm35_temperatura decimal (5,2),
    chave int,
	momento datetime,
    fkEmpresa int,
    fkEstufa int,
    foreign key (fkEstufa) references Estufa (idEstufa)
	);
    
-- CRIANDO TABELA DE ALERTAS QUE SERÃO MOSTRADOS NA DASHBOARD --
create table Alerta (
	idAlerta int primary key identity (1,1),
	fkMonitoramento int,
    tipoAlerta varchar (45),
	foreign key (fkMonitoramento) references MonitoramentoSensor (idMonitoramento)
);