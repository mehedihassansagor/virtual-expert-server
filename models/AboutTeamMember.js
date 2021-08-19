const mongoose = require('mongoose');

const AboutTeamMemberSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: string,
      required: true,
    },
  },
  { timeStamps: true }
);
module.exports = mongoose.model('aboutTeam', AboutTeamMemberSchema);
