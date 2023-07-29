import mongoose from "mongoose";

const schema = {
  axie_id: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  stage: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  current_price: {
    type: Number,
    required: true,
  },
};

const BeastClassAxieSchema = new mongoose.Schema(schema);

export default mongoose.models.BeastClassAxieSchema ||
  mongoose.model("Beast", BeastClassAxieSchema);
