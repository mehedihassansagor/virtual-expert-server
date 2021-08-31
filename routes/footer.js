const router = require("express").Router();
const Footer = require("../models/Footer");

router.get("/", async (req, res) => {
  try {
    const footer = await Footer.find({});
    res.status(200).json(footer);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const footer = new Footer(req.body);
    const data = await footer.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    const id = req.body._id;
    await Footer.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          description: req.body.description,
          email: req.body.email,
          skypeTitle: req.body.skypeTitle,
          skype: req.body.skype,
          whatsAppTitle: req.body.whatsAppTitle,
          whatsApp: req.body.whatsApp,
          copyRightText: req.body.copyRightText,
          address: req.body.address,
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
