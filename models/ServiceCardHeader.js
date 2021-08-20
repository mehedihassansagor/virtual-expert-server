const mongoose = require("mongoose");

const ServiceCardHeaderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },  
  },
  { timeStamps: true }
);

module.exports = mongoose.model("ServiceCardHeader", ServiceCardHeaderSchema);
