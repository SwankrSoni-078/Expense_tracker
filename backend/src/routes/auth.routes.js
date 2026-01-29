const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/auth.controller');

router.post('/user/register',authcontroller.register);
router.post('/user/login',authcontroller.login);
router.post('/user/logout',authcontroller.logout);



module.exports = router;