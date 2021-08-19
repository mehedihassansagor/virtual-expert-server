const router = require("express").Router();
const WhatWeDo = require("../models/WhatWeDo");

router.get("/", async (req, res) => {
  try {
    const whatWeDo = await WhatWeDo.find({});
    res.status(200).json(whatWeDo[0]);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const whatWeDo = new WhatWeDo(req.body);
    const data = await whatWeDo.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
