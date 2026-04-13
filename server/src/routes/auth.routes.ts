import { Router } from "express";
import { login, logOut, register } from "../controllers/auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logOut);

export default router;
