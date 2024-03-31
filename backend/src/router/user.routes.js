import { Router } from "express";
import {
  user_register,
  user_login,
  user_forgot_password,
  user_change_password,
  user_logout
} from "../controllers/user.controller.js";

const router = Router();

router.post("/login", user_login);

router.post("/register", user_register);

router.post("/forgot-password", user_forgot_password);

/* router.post('/reset-password', (req, res) => {
    const result = req.body;
    res.send(JSON.stringify(result));
}); */

router.post("/change-password", user_change_password);

router.post("/logout", user_logout);

export default router;
