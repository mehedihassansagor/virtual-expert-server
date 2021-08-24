const mongoose = require("mongoose");

const AmazonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description_part_1: {
      type: String,
      required: true,
    },
    description_part_2: {
      type: String,
      required: true,
    },
    description_part_3: {
      type: String,
      default: "",
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Amazon", AmazonSchema);
