import express from "express";
import { getPrec } from "../controllers/preçárioController.js";

const router = express.Router();

router.get("/", getPrec);

export default router;