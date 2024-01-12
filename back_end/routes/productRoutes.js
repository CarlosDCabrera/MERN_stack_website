const express = require('express')
const { routes, get } = require('./apiRoutes')
const router = express.Router()
const getProducts = require('../controllers/productController')

router.get('/', getProducts)

module.exports = router