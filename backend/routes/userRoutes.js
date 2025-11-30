import express from "express";
import { getAllUsers } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Success", user: req.user });
});

export default router;
