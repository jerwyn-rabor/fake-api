const express = require('express')
const app = express()

const fakes = require('./fake')

app.get('/', (req, res) => {
    res.send('App is Running')
})

app.get('/fakes', (req, res) => {
    res.json(fakes)
})

const port = 3000;

app.listen(port, () => console.log('Server is running'))