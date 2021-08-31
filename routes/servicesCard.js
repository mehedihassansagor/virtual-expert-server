const router = require("express").Router();
const ServicesCard = require("../models/ServicesCard");

// all data get from service card collection
router.get("/", async (req, res) => {
  try {
    const servicesCard = await ServicesCard.find({});
    res.status(200).json(servicesCard);
  } catch (err) {
    res.status(404).json(err);
  }
});

// add data in service card collection
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
    const servicesCard = new ServicesCard(req.body);
    const data = await servicesCard.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

// delete data from service card collection
router.delete("/delete/:id", async (req, res) => {
  try {
    const servicesCard = await ServicesCard.findByIdAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(servicesCard);
  } catch (err) {
    res.status(404).json(err);
  }
});

// update data from service card collection
router.put("/update", async (req, res) => {
  try {
    if (req.body.uploadImage === false) {
      const servicesCard = await ServicesCard.findByIdAndUpdate(
        { _id: req.body._id },
        {
          $set: {
            title: req.body.title,
            subTitle: req.body.subTitle,
            regularReview: req.body.regularReview,
            videoReview: req.body.videoReview,
            top50Reviewers: req.body.top50Reviewers,
            delivery: req.body.delivery,
            warranty: req.body.warranty,
            price: req.body.price,
            maintenance: req.body.maintenance,
            imgTitle: req.body.imgTitle,
            imgAlt: req.body.imgAlt,
            img: req.body.img,
          },
        },
        {
          useFindAndModify: false,
        }
      );
      res.status(200).json("Update Successfully Done");
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
      const servicesCard = await ServicesCard.findByIdAndUpdate(
        { _id: req.body._id },
        {
          $set: {
            title: req.body.title,
            subTitle: req.body.subTitle,
            regularReview: req.body.regularReview,
            videoReview: req.body.videoReview,
            top50Reviewers: req.body.top50Reviewers,
            delivery: req.body.delivery,
            warranty: req.body.warranty,
            price: req.body.price,
            maintenance: req.body.maintenance,
            imgTitle: req.body.imgTitle,
            imgAlt: req.body.imgAlt,
            img: req.body.img,
          },
        },
        {
          useFindAndModify: false,
        }
      );
      res.status(200).json("Update Successfully Done");
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
