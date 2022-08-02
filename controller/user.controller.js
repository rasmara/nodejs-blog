const Product = require('../models/blog.models');
const User = require('../models/user.models');

exports.userCheck = (req, res) => {
    res.send("User identification started !!!");
}

exports.createUser = (req, res) => {
    let user = new User({
        username: req.body.name,
        email: req.body.email

    });

    user.save((err) => {
        if (err) {
            return next(err);
        }
        res.send("user created successfully")
    });
}