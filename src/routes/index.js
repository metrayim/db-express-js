var express = require('express');
var router = express.Router();
const controller=require('../controller/controller')

/* GET home page. */
router.get('/', controller.renderHomePage);

module.exports = router;
