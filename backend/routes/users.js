var express = require('express');
var router = express.Router();
const service = require('../services/userService');

/* GET users listing. */
router.get('/', service.getAll);

module.exports = router;
