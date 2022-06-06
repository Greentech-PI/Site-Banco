use Greentech;

SHOW TABLES;

DESC estufa;

desc MonitoramentoSensor;

SELECT * FROM Estufa;

SELECT * FROM MonitoramentoSensor;

SELECT * FROM Empresa;


-- Insert de Temperaturas altas !! Bolinha vermelha

INSERT INTO MonitoramentoSensor VALUES (null, 31.21, 56.43, null, 31.23, 0, now(), 500, 1);



-- Insert das temperaturas ok 
INSERT INTO MonitoramentoSensor VALUES (null, 24.21, 83.43, null, 24.23, 0, now(), 500, 2);

-- Insert da sem nada
INSERT INTO MonitoramentoSensor VALUES (null, 18.00, 72.00, null, 18.00, 0, now(), 500, 4);
