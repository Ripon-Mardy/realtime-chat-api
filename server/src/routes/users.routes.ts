import { Router } from "express";
import { getAllUsers, getsingleUser } from "../controllers/user.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.get("/", protect, getAllUsers);
router.get("/:id", getsingleUser);

export default router;
