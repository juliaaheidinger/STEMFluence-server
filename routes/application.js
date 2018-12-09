var express = require('express')
var router = express.Router()
var Application = require('../models/Application')

router.get('/', (req, res) => {
  Application.find({})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  Application.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Application.findByIdAndDelete(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.patch('/:id', (req, res) => {
  Application.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// router.patch('/toggle/:id', (req, res) => {
//   Application.findById(req.params.id)
//     .then(todo => {
//       todo.done = !todo.done
//       return todo.save()
//     })
//     .then(result => res.json(result._id))
//     .catch(err => res.json(err))
// })

// router.get('/clear', (req, res) => {
//   Todo.deleteMany()
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

module.exports = router
