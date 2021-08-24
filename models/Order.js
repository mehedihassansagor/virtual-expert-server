const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    productLinkOrASIN: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    selectedServices: {
      type: Array,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model('order', OrderSchema);
