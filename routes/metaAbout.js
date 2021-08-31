const router = require('express').Router()
const MetaAbout = require('../models/MetaAbout')

router.get('/', async (req, res) => {
  try {
    const metaAbout = await MetaAbout.find({})
    res.status(200).json(metaAbout)
  } catch (err) {
    res.status(404).json(err)
  }
})

router.post('/post', async (req, res) => {
  try {
    const metaAbout = new MetaAbout(req.body)
    const data = await metaAbout.save()
    res.status(200).json(data)
  } catch (err) {
    res.status(404).json(err)
  }
})

router.put('/update', async (req, res) => {
  try {
    const id = req.body._id
    await MetaAbout.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          title: req.body.title,
          description: req.body.description
        }
      },
      {
        useFindAndModify: false
      }
    )
    res.status(200).json('updated')
  } catch (err) {
    res.status(404).json(err)
  }
})

module.exports = router
