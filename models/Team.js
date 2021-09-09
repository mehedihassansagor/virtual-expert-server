const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
  {
    img: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    jobTitle: {
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
  { timestamps: true }
);

module.exports = mongoose.model("Team", TeamSchema);
