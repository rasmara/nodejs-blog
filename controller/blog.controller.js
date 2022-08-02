const Product = require('../models/blog.models');

exports.tester = function (req, res) {
    console.log("GET call")
    res.send("Greeting from Test controller@");
}