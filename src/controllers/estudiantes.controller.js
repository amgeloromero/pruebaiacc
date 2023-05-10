import { pool } from "../db.js";

export const getEstudiantes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM estudiante");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message:"Hubo un Error"});
  }
};

export const getEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM estudiante WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "estudiante no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Hubo un Error" });
  }
};

export const deleteEstudiante = async (req, res) => {
  try {
    const { id } = req.params;  
    const [rows] = await pool.query("DELETE FROM estudiante WHERE id = ?", [id]);
    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "estudiante no encontrado" });
    }
    res.sendStatus(204);


  } catch (error) {
    return res.status(500).json({ message: "Hubo un Error"});
  }
};

export const createEstudiante = async (req, res) => {
  try {
    const { name, carrera } = req.body;


    const [rows] = await pool.query(
      "INSERT INTO estudiante (name, carrera) VALUES (?, ?)",
      [name, carrera]
    );
    res.status(201).json({ id: rows.insertId, name, carrera });

    //res.status(201).json(req.body);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const updateEstudiante = async (req, res) => {
  try {
    const { id } = req.params;
  
    const { name, carrera } = req.body;
    const [result] = await pool.query(
      "UPDATE estudiante SET name = IFNULL(?, name), carrera = IFNULL(?, carrera) WHERE id = ?",
      [name, carrera, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "estudiante not found" });

    const [rows] = await pool.query("SELECT * FROM estudiante WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    //console.log("🚀 ~ file: estudiantes.controller.js:85 ~ updateEstudiante ~ error:", err.stack);
    return res.status(500).json({ message: "Hubo un Error"});
  }
};
