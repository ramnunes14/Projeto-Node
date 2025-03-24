import express from "express";
import { getPortfolio } from "../controllers/portfolioController.js";

const router = express.Router();

// Usa o controlador corretamente
router.get("/", getPortfolio);

export default router;
