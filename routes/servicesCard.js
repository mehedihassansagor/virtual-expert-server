const router = require("express").Router();
const ServicesCard = require("../models/ServicesCard");

router.get("/", async (req, res) => {
  try {
    const servicesCard = await ServicesCard.find({});
    res.status(200).json(servicesCard);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const servicesCard = new ServicesCard(req.body);
    const data = await servicesCard.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
