const mongoose = require("mongoose");

const FooterSchema = new mongoose.Schema(
  {
    facebook: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    instagram: {
      type: String,
      required: true,
    },
    telegram: {
      type: String,
      required: true,
    },
    youTube: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("footerLink", FooterSchema);
