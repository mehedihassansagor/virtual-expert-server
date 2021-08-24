const router = require("express").Router();
const Testimonial = require("../models/Testimonial");

router.post("/post", async (req, res) => {
  try {
    const file = req.files.file;
    const newImg = file.data;
    const encImg = newImg.toString("base64");
    let coverImage = {
      contentType: file.mimetype,
      size: file.size,
      img: Buffer.from(encImg, "base64"),
    };
    req.body.img = coverImage;
    const newTestimonial = new Testimonial(req.body);
    await newTestimonial.save();
    res.status(200).json("Testimonial added successful");
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find({});
    res.status(200).json(testimonials);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    const id = req.body._id;
    if (req.body.uploadImage === false) {
      await Testimonial.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            img: req.body.img,
            name: req.body.name,
            jobTitle: req.body.jobTitle,
            review: req.body.review,
          },
        },
        {
          useFindAndModify: false,
        }
      );
      res.status(200).json("Updated Successful");
    } else {
      const file = req.files.file;
      const newImg = file.data;
      const encImg = newImg.toString("base64");
      let coverImage = {
        contentType: file.mimetype,
        size: file.size,
        img: Buffer.from(encImg, "base64"),
      };
      req.body.img = coverImage;
      await Testimonial.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            img: req.body.img,
            name: req.body.name,
            jobTitle: req.body.jobTitle,
            review: req.body.review,
          },
        },
        {
          useFindAndModify: false,
        }
      );
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
