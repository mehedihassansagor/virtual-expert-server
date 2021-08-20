const router = require("express").Router();
const WhatWeDo = require("../models/WhatWeDo");

// all data get from what we do collection
router.get("/", async (req, res) => {
  try {
    const whatWeDo = await WhatWeDo.find({});
    res.status(200).json(whatWeDo[0]);
  } catch (err) {
    res.status(404).json(err);
  }
});

// add data in what we do collection
router.post("/post", async (req, res) => {
  try {
    const whatWeDo = new WhatWeDo(req.body);
    const data = await whatWeDo.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

// edit data in what we do collection
router.put("/update", async (req, res) => {
  try {
    const whatWeDo = await WhatWeDo.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          subDescription: req.body.subDescription,
        }
      },
      {
        useFindAndModify: false,
      }
    )
    res.status(200).json("Update Successfully Done");
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
