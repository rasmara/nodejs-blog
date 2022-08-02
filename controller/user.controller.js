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
};

exports.getUser = (req, res) => {
    User.findOne({ username: req.body.name }, function (err, userdat) {
        if (err) return next(err);
        res.send(userdat);
    })
}