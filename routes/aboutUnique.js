const router = require('express').Router();
const AboutUnique = require('../models/AboutUnique');

router.get('/', async (req, res) => {
  try {
    const aboutUnique = await AboutUnique.find({});
    res.status(200).json(aboutUnique);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/post', async (req, res) => {
  try {
    const aboutUnique = new AboutUnique(req.body);
    const data = await aboutUnique.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/update', async (req, res) => {
  try {
    const id = req.body._id;
    await AboutUnique.findByIdAndUpdate(
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
    res.status(200).json('update');
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
