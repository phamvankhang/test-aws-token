const express = require('express')
const app = express()
const bodyParser  = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    // var bodyString = JSON.stringify(req.body)
    console.log(req.body)
    res.send('hello')
})
app.post('/', function (req, res) {
    // var bodyString = JSON.stringify(req.body)
    console.log('------------ DU LIEU GUI LEN ------------')
    console.log(req.body)
    res.send('hello')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})