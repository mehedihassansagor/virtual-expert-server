const router = require('express').Router();
const About = require('../models/About');

router.get('/', async (req, res) => {
  try {
    const about = await About.find({});
    res.status(200).json(about);
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post('/post', async (req, res) => {
  try {
    const about = new About(req.body);
    const data = await about.save();
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
