const db = require('../dbConfig.js')

module.exports = {

getDishes: res => {
    return db('dishes')
    .then((dishes) => {
        res.status(200).json(dishes)
    })
    .catch((err) => res.status(500).json({message:`Error: ${err}`}))
},
addDish: (dish, res) => {
    return db('dishes')
    .insert(dish)
    .then(ids => ({id: ids[0]}))
    .then(id => {
        res.status(200).json({message: `You added a new dish with the id of ${id.id}`})
    })
    .catch(err => {
        res.status(500).json({message: `error: ${err}`})
    })
},
getDish: (id, res) => {
    return db('dishes')
    .where('dishes.id', id)
    .then(dish => {
        res.status(200).json(dish)
    })
    .catch(err => {
        res.status(500).json({message: `error: ${err}`})
    })
},
getRecipes: res => {
    return db('recipes')
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch((err) => res.status(500).json({message:`Error: ${err}`}))
},
addRecipe: (recipe, res) => {
    return db('recipes')
    .insert(recipe)
    .then(ids => ({id: ids[0]}))
    .then(id => {
        res.status(200).json({message: `Success! You added a new recipe with the id of ${id.id}`})
    })
    .catch(err => {
        res.status(500).json({message: `error: ${err}`})
    })
}
}