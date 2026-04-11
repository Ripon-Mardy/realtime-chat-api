import { Router } from "express";
import { getAllUsers, getsingleUser } from "../controllers/user.controller";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getsingleUser);

export default router;
