const express = require('express')
const events = require('./data/events')

const app = express()

app.get('/', (req, res) =>{
    res.send('API is running...')
})

app.get('/api/events/', (req, res) =>{
res.json(events)
})

app.get('/api/events/:id', (req, res) =>{
    const event = events.find((e) => e._id === req.params.id)
    res.json(event)
})

app.listen(5500, console.log('server is running on port 5500'))