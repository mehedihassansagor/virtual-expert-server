const router = require("express").Router();
const TopServices = require("../models/TopServices");

router.get("/", async (req, res) => {
  try {
    const topServices = await TopServices.find({});
    res.status(200).json(topServices);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const topServices = new TopServices(req.body);
    const data = await topServices.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    const id = req.body._id;
    await TopServices.findByIdAndUpdate({_id:id}, {
      $set: {
       img:req.body.img,
       title:req.body.title,
       description:req.body.description, 
      },
    },{
      useFindAndModify: false,
    },)
    res.status(200).json("mawmaw")
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
