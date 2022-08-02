const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = new Schema({
    username: { type: String, required: true, max: 10 },
    email: { type: String, required: true, max: 10 }

})

module.exports = mongoose.model('userData', UserSchema);