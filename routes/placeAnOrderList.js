const router = require('express').Router();
const PlaceAnOrderList = require('../models/PlaceAnOrderList');

router.get('/', async (req, res) => {
  try {
    const placeAnOrderList = await PlaceAnOrderList.find({});
    res.status(200).json(placeAnOrderList);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/post', async (req, res) => {
  try {
    const placeAnOrderList = new PlaceAnOrderList(req.body);
    const data = await placeAnOrderList.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/update', async (req, res) => {
  try {
    const id = req.body._id;
    await PlaceAnOrderList.findByIdAndUpdate(
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
