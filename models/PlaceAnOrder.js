const mongoose = require('mongoose');

const PlaceAnOrderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);
module.exports = mongoose.model('PlaceAnOrder', PlaceAnOrderSchema);
