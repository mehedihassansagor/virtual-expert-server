const router = require("express").Router();
const Order = require("../models/Order");

router.post("/", getPaginatedResults(Order), async (req, res) => {
  res.status(200).json(res.paginatedResults);
});

router.post("/post", async (req, res) => {
  try {
    const order = new Order(req.body);
    const data = await order.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
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
    res.status(200).json("updated");
  } catch (err) {
    res.status(404).json(err);
  }
});

// pagination
function getPaginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.body.page);
    const limit = 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
      const total = await model.find({});
      results.totalData = total.length;
      results.result = await model
        .find({})
        .sort({ orderDate: -1 })
        .limit(limit)
        .skip(startIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (err) {
      res.status(500).json(err);
    }
  };
}

router.delete("/delete", async (req, res) => {
  try {
    await Order.findByIdAndDelete({
      _id: req.body._id,
    });
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
