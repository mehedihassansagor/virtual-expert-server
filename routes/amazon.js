const router = require("express").Router();
const Amazon = require("../models/Amazon");

router.get("/", async (req, res) => {
  try {
    const amazon = await Amazon.find({});
    res.status(200).json(amazon[0]);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const amazon = new Amazon(req.body);
    const data = await amazon.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    const id = req.body._id;
    await Amazon.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: req.body.title,
          description_part_1: req.body.description_part_1,
          description_part_2: req.body.description_part_2,
          description_part_3: req.body.description_part_3,
        },
      },
      {
        useFindAndModify: false,
      }
    );
    res.status(200).json("Updated Successfully");
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
