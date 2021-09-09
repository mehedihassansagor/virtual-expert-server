const mongoose = require("mongoose");

const ServicesCardSchema = new mongoose.Schema(
  {
    img: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    regularReview: {
      type: String,
      default: "",
    },
    videoReview: {
      type: String,
      default: "",
    },
    top50Reviewers: {
      type: String,
      default: "",
    },
    delivery: {
      type: String,
      default: "",
    },
    warranty: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      default: "",
    },
    maintenance: {
      type: String,
      default: "",
    },
    imgTitle: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
    imgURL: {
      type: String,
      default: "",
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("servicesCard", ServicesCardSchema);
