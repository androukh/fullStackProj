const express = require('express')
const app = express()
const port = 3000
app.get('/', function (request, response) {
    console.log("Someone is coming!")
})
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
