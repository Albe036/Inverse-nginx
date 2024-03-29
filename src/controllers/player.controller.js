import { faker } from "@faker-js/faker";
import { player_creator } from "../base/structures.js";
import Player from "../models/player.model.js";

function check_existing_name(name = "") {
  const name_users = ["Melissa", "Albeiro", "Gabriella"];
  if (name_users.includes(name)) {
    return false;
  }
  return true;
}

export function generate_random_name(req, res) {
  const player = new player_creator(
    faker.string.uuid(),
    faker.internet.userName()
  );
  while (!check_existing_name(player.name)) {
    player.name = faker.internet.userName();
  }
  res.send(JSON.stringify(player));
}

export function generate_random_list_name(req, res) {
  const list = [];
  for (let i = 0; i < 20; i++) {
    const player = new player_creator(
      faker.string.uuid(),
      faker.internet.userName()
    );
    if (!check_existing_name(player.name)) {
      player.name = faker.internet.userName();
    }
    list.push(player);
  }
  res.send(JSON.stringify(list));
}

export async function created_player(req, res) {
  try {
    const { id, name } = req.body;
    const new_player = new Player({ id, name });
    await new_player.save();
    res.send(JSON.stringify(new_player));
  } catch (error) {
    console.log(error);
  }
}
