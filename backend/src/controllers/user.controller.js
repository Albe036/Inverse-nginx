import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const USER_FOUND = 1;

export const user_register = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;
  try {
    const res_query = await User.find(
      { $or: [{ user_email: user_email }, { user_name: user_name }] },
      ["_id"]
    );
    if (!res_query.length) {
      const user_id = faker.string.uuid();
      const user_pass_cript = await bcrypt.hash(user_password, 10);
      const new_user = new User({
        user_id,
        user_name,
        user_email,
        user_password: user_pass_cript,
      });
      await new_user.save();
      res.send(JSON.stringify({ msg: "user created" }));
    } else {
      res.send(JSON.stringify({ msg: "user not created" }));
    }
  } catch (error) {
    res.send(JSON.stringify({ msg: "An error has occurred" }));
  }
};

export const user_login = async (req, res) => {
  const { user_or_email, user_password } = req.body;
  try {
    const res_query = await User.find({
      $or: [{ user_email: user_or_email }, { user_name: user_or_email }],
    });
    if (res_query.length === USER_FOUND) {
      const user = res_query[0];
      const res_pass = await bcrypt.compare(user_password, user.user_password);
      if (res_pass) {
        res.send(JSON.stringify({ msg: "user logged" }));
      }
    } else {
      res.send(JSON.stringify({ msg: "user not found" }));
    }
  } catch (error) {
    res.send(JSON.stringify({ msg: "An error has occurred" }));
  }
};

export const user_forgot_password = async (req, res) => {
  const { user_or_email } = req.body;
  try {
    const res_query = await User.find({
      $or: [{ user_email: user_or_email }, { user_name: user_or_email }],
    });
    if (res_query.length === USER_FOUND) {
      res.send(JSON.stringify({ msg: "user found" }));
    } else {
      res.send(JSON.stringify({ msg: "user not found" }));
    }
  } catch (error) {
    res.send(JSON.stringify({ msg: "An error has occurred" }));
  }
};

export const user_change_password = async (req, res) => {
  const { user_or_email, current_passoword, new_password } = req.body;
  try {
    const res_query = await User.find({
      $or: [{ user_email: user_or_email }, { user_name: user_or_email }],
    });
    if (res_query.length === USER_FOUND) {
      const res_pass = await bcrypt.compare(
        current_passoword,
        user.user_password
      );
      if (res_pass) {
        const user_new_pass_cript = await bcrypt.hash(new_password, 10);
        const user = res_query[0];
        user.user_password = user_new_pass_cript;
        await user.save();
        res.send(JSON.stringify({ msg: "user password changed" }));
      } else {
        res.send(
          JSON.stringify({
            msg: "password not changed:: error current password",
          })
        );
      }
    }
  } catch (error) {
    res.send(JSON.stringify({ msg: "An error has occurred" }));
  }
};

export const user_logout = (req, res) => {
  const { user_id } = req.body;
  res.send(JSON.stringify({ msg: "user logout" }));
}