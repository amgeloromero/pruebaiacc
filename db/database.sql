-- CREATE DATABASE IF NOT EXISTS iacccarreras;

-- USE iacccarreras;

CREATE TABLE estudiante (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  carrera VARCHAR(45)  DEFAULT NULL, 
  PRIMARY KEY(id)
);

DESCRIBE estudiante;

INSERT INTO estudiante(name,carrera) values 
  ('angelo romero', "ingenieria en construccion"),
  ('pablo silva', "ingenieria en  electronica"),
  ('karen valdes', "ingenieria en informatica"),
 

SELECT * FROM estudiante;
