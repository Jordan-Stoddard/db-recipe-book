const express = require('express')
const route = express.Router()
const recipeDb = require('../data/helpers/helpers.js')

route.get('/', (req, res) => {
    
    recipeDb.getRecipes(res)
})

route.post('/', (req, res) => {
    const {name, dish_id} = req.body
    recipeDb.addRecipe({name, dish_id}, res)
})

module.exports = route;