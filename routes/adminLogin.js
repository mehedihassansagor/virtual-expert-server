const router = require("express").Router();
const AdminLogin = require("../models/AdminLogin");

router.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const adminLogin = await AdminLogin.find({
      username: username,
    });
    if (adminLogin.length > 0) {
      if (adminLogin[0].password === password) {
        res.status(200).send({ result: adminLogin[0].username });
      } else {
        res.status(200).send({
          error: "Authentication ERROR",
        });
      }
    } else {
      res.status(200).send({
        error: "Authentication ERROR",
      });
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

router.put("/update/verificationCode", async (req, res) => {
  try {
    const admin = await AdminLogin.find({});
    const adminId = admin[0]._id;

    await AdminLogin.findByIdAndUpdate(
      { _id: adminId },
      {
        $set: {
          verificationCode: req.body.verificationCode,
        },
      },
      { useFindAndModify: false }
    );

    res.status(200).json("Verification Code Added");
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/checkVerificationCode", async (req, res) => {
  const admin = await AdminLogin.find({});
  try {
    if (admin[0].verificationCode === req.body.verificationCode) {
      res.status(200).json("True");
    } else {
      res.json("Wrong Verification Code");
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

router.put("/update/password", async (req, res) => {
  const admin = await AdminLogin.find({});
  try {
    const _id = admin[0]._id;
    await AdminLogin.findByIdAndUpdate(
      { _id: _id },
      {
        $set: {
          password: req.body.password,
          verification: "",
        },
      },
      { useFindAndModify: false }
    );
    res.status(200).json("Password changed");
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
