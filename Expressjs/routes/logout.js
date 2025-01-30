const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logoutController')


router.get('/',logoutController.handleLoginOut)

module.exports = router