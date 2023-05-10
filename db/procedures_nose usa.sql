USE iacccarreras;

DELIMITER $$
USE `iacccarreras`$$

CREATE PROCEDURE `estudianteAddOrEdit` (
  IN _id INT,
  IN _name VARCHAR(45),
  IN _carrera INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO estudiante (name, carrera)
    VALUES (_name, _carrera);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE estudiante
    SET
    name = _name,
    carrera = _carrera
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
