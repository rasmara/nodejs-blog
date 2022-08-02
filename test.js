const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const blog = require('./routes/blog.routes');
const user = require('./routes/user.routes');

let mongo_url = "mongodb://localhost:27017/nodecrud"
let database = 'nodecrud'

mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error!!!!'));
db.once('open', () => {
    console.log('MongoDB Client Connection success');
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/blog', blog)
app.use('/user', user)

let port = 8000;

app.listen(port, () => {
    console.log("Server up and running on http://localhost:" + port);
});