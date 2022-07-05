const express = require('express')
const fakes = require('./fake')
const PORT = process.env.PORT || 3000;
const app = express()

app.get('/', (req, res) => {
    res.send('App is Running')
})

app.get('/fakes', (req, res) => {
    res.json(fakes)
})

app.get('/jerwyn', (req, res) => {
    res.send(PORT)
})

app.listen(PORT, () => console.log(`Server is running: ${PORT}`))