import express from "express";
const router = express.Router();
import { test } from "../controllers/authControllers.js";



router.get("/", test);


export default router;