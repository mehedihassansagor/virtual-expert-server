const router = require("express").Router();
const HeaderInfoVirtualExports = require("../models/HeaderInfoVirtualExports");

router.get("/", async (req, res) => {
  try {
    const headerInfoVirtualExports = await HeaderInfoVirtualExports.find({});
    res.status(200).json(headerInfoVirtualExports);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const headerInfoVirtualExports = new HeaderInfoVirtualExports(req.body);
    const data = await headerInfoVirtualExports.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    const id = req.body._id;
    await HeaderInfoVirtualExports.findByIdAndUpdate(
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
