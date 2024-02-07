const mongoose = require('mongoose')

const dbUri = 'mongodb://localhost:27017/employees'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUri,
        { useNewUrlParser: true, useUnifiedTopology: true })
}