const router = require('express').Router();
const MetaHome = require('../models/MetaHome');

router.get('/', async (req, res) => {
  try {
    const metaHome = await MetaHome.find({});
    res.status(200).json(metaHome);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/post', async (req, res) => {
  try {
    const metaHome = new MetaHome(req.body);
    const data = await metaHome.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/update', async (req, res) => {
  try {
    const id = req.body._id;
    await MetaHome.findByIdAndUpdate(
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
    res.status(200).json('updated');
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
