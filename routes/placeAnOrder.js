const router = require('express').Router();
const PlaceAnOrder = require('../models/PlaceAnOrder');

router.get('/', async (req, res) => {
  try {
    const placeAnOrder = await PlaceAnOrder.find({});
    res.status(200).json(placeAnOrder);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/post', async (req, res) => {
  try {
    const placeAnOrder = new PlaceAnOrder(req.body);
    const data = await placeAnOrder.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/update', async (req, res) => {
  try {
    const id = req.body._id;
    await PlaceAnOrder.findByIdAndUpdate(
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
