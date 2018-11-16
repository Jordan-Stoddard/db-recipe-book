const express = require('express')
const route = express.Router()
const dishDb = require('../data/helpers/helpers.js')

route.get('/', (req, res) => {
    dishDb.getDishes(res)
})

route.post('/', (req, res) => {
   const {name} = req.body
    dishDb.addDish({name}, res)
})

route.get('/:id', (req, res) => {
    const {id} = req.params
    dishDb.getDish(id, res)
})


module.exports = route;