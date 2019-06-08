const router = require('express').Router()

router.post('/verify-email', require('./verify-email'))

module.exports = router