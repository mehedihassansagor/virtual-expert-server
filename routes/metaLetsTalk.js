const router = require('express').Router()
const MetaLetsTalk = require('../models/MetaLetsTalk')

router.get('/', async (req, res) => {
  try {
    const metaLetsTalk = await MetaLetsTalk.find({})
    res.status(200).json(metaLetsTalk)
  } catch (err) {
    res.status(404).json(err)
  }
})

router.post('/post', async (req, res) => {
  try {
    const metaLetsTalk = new MetaLetsTalk(req.body)
    const data = await metaLetsTalk.save()
    res.status(200).json(data)
  } catch (err) {
    res.status(404).json(err)
  }
})

router.put('/update', async (req, res) => {
  try {
    const id = req.body._id
    await MetaLetsTalk.findByIdAndUpdate(
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
