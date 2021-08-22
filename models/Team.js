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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", TeamSchema);
