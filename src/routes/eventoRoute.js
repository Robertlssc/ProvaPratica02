import { Router } from "express";

import { postRegistrar, getAgenda } from "../controllers/eventoController.js";

const router = Router();
//Rotas
router.post("/criar", postRegistrar);

router.get("/agenda", getAgenda);

export default router;
