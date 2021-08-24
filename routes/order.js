const router = require('express').Router();
const Order = require('../models/Order');

router.get('/', async (req, res) => {
  try {
    const order = await Order.find({});
    res.status(200).json(order);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/post', async (req, res) => {
  try {
    const order = new Order(req.body);
    const data = await order.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put('/update', async (req, res) => {
  try {
    const id = req.body._id;
    await Order.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name: req.body.title,
          email: req.body.email,
          productLinkOrASIN: req.body.productLinkOrASIN,
          description: req.body.description,
          selectedServices: req.body.selectedServices,
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
