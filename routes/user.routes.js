const express = require('express')

const router = express.Router()

const user_controller = require('../controller/user.controller')

router.get('/checkUser', user_controller.userCheck);
router.post('/createUser', user_controller.createUser);
router.post('/getUser', user_controller.getUser);




module.exports = router;