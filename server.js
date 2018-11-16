const express = require('express')
const dishRoutes = require('./routes/dishRoutes')
const recipeRoutes = require('./routes/recipeRoutes')

// Initialize server
const server = express()
//Middleware
server.use(express.json())

// End Routes
server.use('/api/dishes', dishRoutes)
server.use('/api/recipes', recipeRoutes)

module.exports = server;