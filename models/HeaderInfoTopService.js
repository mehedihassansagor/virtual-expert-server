const mongoose = require("mongoose");

const HeaderInfoTopServicesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    }, 
  },
  { timeStamps: true }
);

module.exports = mongoose.model("headerInfoTopServices", HeaderInfoTopServicesSchema);
