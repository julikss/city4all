import { UserModel } from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll(); 
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
