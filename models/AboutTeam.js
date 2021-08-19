const mongoose = require('mongoose');

const AboutTeamSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);
module.exports = mongoose.model('aboutTeam', AboutTeamSchema);
