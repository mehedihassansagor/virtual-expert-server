const router = require("express").Router();
const VirtualService = require("../models/WhyChooseVirtualExports");

router.get("/", async (req, res) => {
  try {
    const virtualService = await VirtualService.find({});
    res.status(200).json(virtualService);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const virtualService = new VirtualService(req.body);
    const data = await virtualService.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    const id = req.body._id;
    await VirtualService.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      },
      {
        useFindAndModify: false,
      }
    );
    res.status(200).json("mawmaw");
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
