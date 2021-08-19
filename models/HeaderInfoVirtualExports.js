const mongoose = require("mongoose");

const HeaderInfoVirtualExportsSchema = new mongoose.Schema(
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

module.exports = mongoose.model("headerInfoVirtualExports", HeaderInfoVirtualExportsSchema);
