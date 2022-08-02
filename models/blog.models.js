const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let BlogSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    description: { type: String, required: true, max: 400 }

})

module.exports = mongoose.model('Blog', BlogSchema);

