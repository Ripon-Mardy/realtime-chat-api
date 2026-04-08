import { Server } from "socket.io";

let onlineUsers = new Map<string, string>();

export const initSocket = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("socket is connect");

    // user id
    socket.on("join", (userId: string) => {
      onlineUsers.set(userId, socket.id);
    });

    // send message
    socket.on("send_message", ({ senderId, receiverId, text }) => {
      const receiverSocket = onlineUsers.get(receiverId);

      if (receiverSocket) {
        io.in(receiverSocket).emit("receive_message", {
          senderId,
          text,
        });
      } // end if
    }); // end socket

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  }); // end io.on
};
