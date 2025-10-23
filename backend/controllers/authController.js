import bcrypt from "bcrypt";
import { UserModel } from "../models/userModel.js";

export const register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole =
      role && ["user", "volunteer", "business_owner", "municipal_authority"].includes(role)
        ? role
        : "user";

    const newUser = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      role: userRole,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (e) {
    console.error("Registration error:", e);
    res.status(500).json({ error: "Server error" });
  }
};
