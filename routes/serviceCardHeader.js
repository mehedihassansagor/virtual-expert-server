const router = require("express").Router();
const ServiceCardHeader = require("../models/ServiceCardHeader");

router.get("/", async (req, res) => {
  try {
    const serviceCardHeader = await ServiceCardHeader.find({});
    res.status(200).json(serviceCardHeader[0]);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const serviceCardHeader = new ServiceCardHeader(req.body);
    const data = await serviceCardHeader.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    const id = req.body._id;
    await ServiceCardHeader.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: req.body.title,
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
