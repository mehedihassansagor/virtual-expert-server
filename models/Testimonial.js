const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema(
  {
    img: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Testimonial", TestimonialSchema);
