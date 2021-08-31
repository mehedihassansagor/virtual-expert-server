const router = require('express').Router()
const MetaService = require('../models/MetaService')

router.get('/', async (req, res) => {
  try {
    const metaService = await MetaService.find({})
    res.status(200).json(metaService)
  } catch (err) {
    res.status(404).json(err)
  }
})

router.post('/post', async (req, res) => {
  try {
    const metaService = new MetaService(req.body)
    const data = await metaService.save()
    res.status(200).json(data)
  } catch (err) {
    res.status(404).json(err)
  }
})

router.put('/update', async (req, res) => {
  try {
    const id = req.body._id
    await MetaService.findByIdAndUpdate(
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
