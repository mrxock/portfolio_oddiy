const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController.js')

router
    .get('/', mainController.GET)
    .post('/', mainController.POST)
    .get('/messages', mainController.GET_MESSAGES)

module.exports = router