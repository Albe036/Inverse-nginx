import { Router } from "express";
import {
  generate_random_name,
  generate_random_list_name,
  created_player,
} from "../controllers/player.controller.js";

const router = Router();

router.get("/player-name", generate_random_name);

router.get("/list-player-name", generate_random_list_name);

router.post("/create-player", created_player);

router.put("/update-player", (req, res) => {
  const result = req.body;
  res.send(JSON.stringify(result));
});

export default router;
