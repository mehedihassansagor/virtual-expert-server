const mongoose = require("mongoose");

const FooterSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    skype: {
      type: String,
      required: true,
    },
    whatsApp: {
      type: String,
      required: true,
    },
    copyRightText: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("footer", FooterSchema);
