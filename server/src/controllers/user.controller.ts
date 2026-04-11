import { Request, Response } from "express";
import userModel from "../models/user.model";

// get all users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userModel.find();
    if (!users) {
      res.status(201).json({ message: "no users availabe" });
    }
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

// get single user
export const getsingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch single user" });
  }
};
