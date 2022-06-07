USE greentech;

INSERT INTO Empresa (nomeEmpresa, CNPJ, nomeRepresentante, senha)
	VALUES ('Tomates LTDA', '02730191000172', 'Carlos', '123');
    
INSERT INTO Usuario (nome, email, senha, telefone, fkEmpresa)
	VALUES ('Eduardo', 'eduardo@gmail.com', '123', '95412-3442', 500);
    
INSERT INTO Estufa (fkEmpresa, nomeEstufa, tamanho, minTemp, baixaTemp, altaTemp, maxTemp, tempNormal, umidNormal, minUmidade, baixaUmidade, altaUmidade, maxUmidade)
	VALUES (500, 'Estufa Red 01', '1 Hec', 15.00, 19.00, 25.00, 28.00, 22.00, 82.00, 75.00, 78.00, 85.00, 90.00),
			(500, 'Estufa Red 02', '2 Hec', 12.00, 15.00, 23.00, 25.00, 18.00, 87.00, 78.00, 83.00, 92.00, 98.00),
            (500, 'Estufa Red 03', '1 Hec', 18.00, 21.00, 25.00, 29.00, 23.00, 80.00, 72.00, 75.00, 83.00, 88.00),
            (500, 'Estufa Red 04', '4 Hec', 16.00, 20.00, 26.00, 29.00, 23.00, 83.00, 76.00, 79.00, 86.00, 91.00);
            
INSERT INTO MonitoramentoSensor (dht11_temperatura, dht11_umidade, luminosidade, lm35_temperatura, chave, momento, fkEstufa)
	VALUES (22.00, 75.00, 850.00, 26.00, 0, NOW(), 2),
			(23.50, 76.00, 855.00, 25.00, 0, NOW(), 2),
            (22.50, 74.00, 858.00, 25.00, 0, NOW(), 2),
            (23.00, 73.00, 860.00, 27.00, 0, NOW(), 2),
            (22.00, 74.00, 855.00, 27.00, 0, NOW(), 2);
            
INSERT INTO MonitoramentoSensor (dht11_temperatura, dht11_umidade, luminosidade, lm35_temperatura, chave, momento, fkEstufa)
	VALUES (27.00, 82.00, 850.00, 26.00, 0, NOW(), 3),
			(27.50, 81.00, 855.00, 25.00, 0, NOW(), 3),
            (26.00, 80.00, 858.00, 25.00, 0, NOW(), 3),
            (28.00, 81.00, 860.00, 27.00, 0, NOW(), 3),
            (27.50, 80.00, 855.00, 27.00, 0, NOW(), 3);
            
INSERT INTO MonitoramentoSensor (dht11_temperatura, dht11_umidade, luminosidade, lm35_temperatura, chave, momento, fkEstufa)
	VALUES (23.00, 82.00, 850.00, 26.00, 0, NOW(), 4),
			(23.50, 81.00, 855.00, 25.00, 0, NOW(), 4),
            (24.00, 80.00, 858.00, 25.00, 0, NOW(), 4),
            (24.00, 81.00, 860.00, 27.00, 0, NOW(), 4),
            (23.50, 80.00, 855.00, 27.00, 0, NOW(), 4);

/* Verificar Insert Alertas!!!!