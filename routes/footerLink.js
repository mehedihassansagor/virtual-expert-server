const router = require("express").Router();
const FooterLink = require("../models/FooterLink");

router.get("/", async (req, res) => {
  try {
    const footerLink = await FooterLink.find({});
    res.status(200).json(footerLink);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const footerLink = new FooterLink(req.body);
    const data = await footerLink.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    const id = req.body._id;
    await FooterLink.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          facebook: req.body.facebook,
          twitter: req.body.twitter,
          instagram: req.body.instagram,
          skype: req.body.skype,
          telegram: req.body.telegram,
          youTube: req.body.youTube,
        },
      },
      {
        useFindAndModify: false,
      }
    );
    res.status(200).json("updated");
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
