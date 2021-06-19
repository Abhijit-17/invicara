/***
 * 
 * Starting file, the application
 * app/server will be created here
 */

// Dependencies
const express = require('express')
const path = require('path')
const routes = require(path.resolve(__dirname, './routes/routes'))

// Create the app
const app = express()

// Start listening or start the server
app.listen(5000, ()=>{
    console.log('App listening on port 5000')
})

// adding express routes to the app
app.use('/', routes)

//middleware to handle the errors if any
app.use((err, req, res, next) => {
    res.status(422).send({'Error': err.message})
})

//export the app for testing later
module.exports = app 