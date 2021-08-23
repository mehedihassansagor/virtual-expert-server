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

module.exports = router;
