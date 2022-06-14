const express = require('express')
const { hello } = require('../controllers/work')

const router = express.Router()

router.get('/', hello)

module.exports = router
