import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/message.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.post("/", protect, sendMessage);
router.get("/:senderId/:receiverId", protect, getMessages);

export default router;
