const mongoose = require('mongoose');

const AboutUniqueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);
module.exports = mongoose.model('AboutUnique', AboutUniqueSchema);
