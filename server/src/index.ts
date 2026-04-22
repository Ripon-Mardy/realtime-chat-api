import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import app from "./app";
import { initSocket } from "./sockets/socket";
import { connectDB } from "./config/db";
import cors from "cors";

dotenv.config();

const server = createServer(app);

connectDB();

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", credentials: true },
});

app.set("io", io);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
initSocket(io);
