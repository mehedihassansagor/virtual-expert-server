const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
   
  },
  { timeStamps: true }
);

module.exports = mongoose.model("banner", BannerSchema);
