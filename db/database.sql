-- CREATE DATABASE IF NOT EXISTS iacccarreras;

-- USE iacccarreras;

CREATE TABLE estudiante (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  carrera VARCHAR(45)  DEFAULT NULL, 
  PRIMARY KEY(id)
);

DESCRIBE estudiante;

INSERT INTO estudiante values 
  (1, 'angelo romero', "ingenieria en construccion"),
  (2, 'pablo silva', "ingenieria en  electronica"),
  (3, 'karen valdes', "ingenieria en informatica"),
 

SELECT * FROM estudiante;
