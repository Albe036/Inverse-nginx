import mongoose from "mongoose";

const player_schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  datein: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Player", player_schema);
