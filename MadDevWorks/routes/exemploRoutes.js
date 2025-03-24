import express from "express";
import { getExemplos } from "../controllers/exemplosController.js";

const router = express.Router();

router.get("/", getExemplos);

export default router;
