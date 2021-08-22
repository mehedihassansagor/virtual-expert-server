const router = require("express").Router();
const Team = require("../models/Team");

router.post("/post", async (req, res) => {
  try {
    const file = req.files.file;
    const newImg = file.data;
    const encImg = newImg.toString("base64");
    let coverImage = {
      contentType: file.mimetype,
      size: file.size,
      img: Buffer.from(encImg, "base64"),
    };
    req.body.img = coverImage;
    const newTeamMember = new Team(req.body);
    await newTeamMember.save();
    res.status(200).json("Team member added successful");
  } catch (err) {
    res.status(404).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const teams = await Team.find({});
    res.status(200).json(teams);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    const id = req.body._id;
    if (req.body.uploadImage === false) {
      await Team.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            img: req.body.img,
            name: req.body.name,
            jobTitle: req.body.jobTitle,
          },
        },
        {
          useFindAndModify: false,
        }
      );
      res.status(200).json("Updated Successful");
    } else {
      const file = req.files.file;
      const newImg = file.data;
      const encImg = newImg.toString("base64");
      let coverImage = {
        contentType: file.mimetype,
        size: file.size,
        img: Buffer.from(encImg, "base64"),
      };
      req.body.img = coverImage;
      await Team.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            img: req.body.img,
            name: req.body.name,
            jobTitle: req.body.jobTitle,
          },
        },
        {
          useFindAndModify: false,
        }
      );
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
