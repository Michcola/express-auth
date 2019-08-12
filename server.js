const { User } = require('./models')
const express = require('express')

const app = express()
app.use(express.json())

app.get('/api/users', async(req, res) => {
    const users = await User.find()
    res.send(users)
})

app.post('/api/register', async(req, res) => {
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    })
    res.send(user)
})

app.listen(3001 , () => {
    console.log('http://localhost:3001')
})