const mongoose = require("mongoose");

const TopServicesSchema = new mongoose.Schema(
  {
    img: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("topServices", TopServicesSchema);
