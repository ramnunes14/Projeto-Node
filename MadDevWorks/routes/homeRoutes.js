import express from "express";
import { getIndex } from "../controllers/homeController.js";

const router = express.Router();

router.get("/", getIndex);

export default router;
