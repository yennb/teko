var express = require('express');
var router = express.Router();
const service = require('../services/userService');

router.post('/api/login-google', service.create);

module.exports = router;
