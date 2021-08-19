const mongoose = require('mongoose');

const FooterSchema = new mongoose.Schema(
  {
    facebook: {
      type: String,
      required: true,
    },
    twiter: {
      type: String,
      required: true,
    },
    instgram: {
      type: String,
      required: true,
    },
    skype: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model('footerLink', FooterSchema);
