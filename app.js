const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth_routes'))
app.use('/api/link', require('./routes/link_routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (error) {
        console.log('Server Error: ', error.message)
        process.exit(1)
    }
}

start()

app.listen(PORT, () => console.log(`App started at port ${PORT}`))