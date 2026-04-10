import { Response, Request } from "express";
import Message from "../models/message.model";

// send message
export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { sender, receiver, text } = req.body;

    if (!sender || !receiver || !text) {
      return res.status(400).json({ message: "All filed required" });
    }

    const message = await Message.create({
      sender,
      receiver,
      text,
    });

    req.app.get("io").to(receiver).emit("receive_message", message);

    res.status(201).json({
      message: "Message sent successfully",
      data: message,
    });
  } catch (error) {
    res.status(500).json({ message: "Send Message Error" });
  }
};

// get message
export const getMessages = async (req: Request, res: Response) => {
  try {
    const { senderId, receiverId } = req.params;
    console.log("senderId", senderId, "receiverId", receiverId);

    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
    }).sort({ createdAt: 1 });

    res.status(201).json({
      success: true,
      message: "Message received",
      data: messages,
    });
  } catch (error) {
    res.status(500).json({ message: "Get Messages Error" });
  }
};
