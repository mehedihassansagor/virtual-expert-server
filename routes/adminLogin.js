const router = require("express").Router();
const AdminLogin = require("../models/AdminLogin");

router.get("/", async (req, res) => {
  try {
    const adminLogin = await AdminLogin.find({});
    res.status(200).json(adminLogin);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const adminLogin = await AdminLogin.find({
      email: email,
    });
    if (adminLogin.length > 0) {
      if (adminLogin[0].password === password) {
        res.status(200).json(adminLogin[0]);
      } else {
        res.status(200).json("Authentication ERROR");
      }
    } else {
      res.status(200).json("Authentication ERROR");
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/post", async (req, res) => {
  try {
    const adminLogin = new AdminLogin(req.body);
    const data = await adminLogin.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update", async (req, res) => {
  try {
    const id = req.body._id;
    await About.findByIdAndUpdate(
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
    res.status(200).json("updated");
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
