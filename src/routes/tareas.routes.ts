import { Router } from "express";
import { obtenerTareas } from "../controllers/tareas.controller";

const router = Router();
router.get("/tareas", obtenerTareas);

export default router;
