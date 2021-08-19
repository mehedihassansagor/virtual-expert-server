const mongoose = require('mongoose');

const AboutUniqueListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);
module.exports = mongoose.model('AboutUniqueList', AboutUniqueListSchema);
