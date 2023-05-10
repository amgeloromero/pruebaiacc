import { Router } from "express";
import {
  createEstudiante,
  deleteEstudiante,
  getEstudiante,
  getEstudiantes,
  updateEstudiante,
} from "../controllers/estudiantes.controller.js";

const router = Router();

// GET all estudiantes
router.get("/estudiantes", getEstudiantes);

// GET An estudiantes
router.get("/estudiantes/:id", getEstudiante);

// DELETE An estudiantes
router.delete("/estudiantes/:id", deleteEstudiante);

// INSERT An estudiantes
router.post("/estudiantes", createEstudiante);

router.patch("/estudiantes/:id", updateEstudiante);

export default router;
