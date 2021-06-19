/**
 * 
 * Defining all routes for the app
 */

//Dependencies
const express = require('express')
const routes = express.Router()

const controllers = require('../controllers/controllers')

// greeting message
routes.get('/', controllers.greeting)

// forecast service
routes.get('/forecast', controllers.getForecast)

// export the routes
module.exports = routes