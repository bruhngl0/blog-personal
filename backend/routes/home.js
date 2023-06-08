const express = require('express')
const router = express.Router()
const {add} = require('../controllers/homeController')


router.get('/', add)



module.exports = router