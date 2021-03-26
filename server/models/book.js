const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    name : String,
    genre : String,
    authorid : String
})

module.exports = new mongoose.model('Book',bookSchema);