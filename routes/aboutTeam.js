const router = require('express').Router();
const AboutTeam = require('../models/AboutTeam');

router.get('/', async (req, res) => {
  try {
    const aboutTeam = await AboutTeam.find({});
    res.status(200).json(aboutTeam);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/post', async (req, res) => {
  try {
    const aboutTeam = new AboutTeam(req.body);
    const data = await aboutTeam.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/update', async (req, res) => {
  try {
    const id = req.body._id;
    await AboutTeam.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: req.body.title,
          discription: req.body.discription,
        },
      },
      {
        useFindAndModify: false,
      }
    );
    res.status(200).json('updated');
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
