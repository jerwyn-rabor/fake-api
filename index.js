const express = require('express')
const app = express()

const fakes = require('./fake')

app.get('/', (req, res) => {
    res.send('App is Running')
})

app.get('/fakes', (req, res) => {
    res.json(fakes)
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running'))