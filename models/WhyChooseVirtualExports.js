const mongoose = require("mongoose");

const VirtualServiceSchema = new mongoose.Schema(
  {
    img: {
      type: String,
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
   
  },
  { timeStamps: true }
);

module.exports = mongoose.model("VirtualService", VirtualServiceSchema);
