import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes";
import messageRoutes from "./routes/message.route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is running... 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

export default app;
