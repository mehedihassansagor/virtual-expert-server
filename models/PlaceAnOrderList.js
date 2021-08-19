const mongoose = require('mongoose');

const PlaceAnOrderListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);
module.exports = mongoose.model('PlaceAnOrderList', PlaceAnOrderListSchema);
