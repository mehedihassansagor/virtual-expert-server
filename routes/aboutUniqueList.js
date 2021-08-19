const router = require('express').Router();
const AboutUniqueList = require('../models/AboutUniqueList');

router.get('/', async (req, res) => {
  try {
    const aboutUniqueList = await AboutUniqueList.find({});
    res.status(200).json(aboutUniqueList);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/post', async (req, res) => {
  try {
    const aboutUniqueList = new AboutUniqueList(req.body);
    const data = await aboutUniqueList.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/update', async (req, res) => {
  try {
    const id = req.body._id;
    await AboutUniqueList.findByIdAndUpdate(
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
    res.status(200).json('updated list');
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
