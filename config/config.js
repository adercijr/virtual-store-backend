const cors = require('cors')
const compression = require('compression')
const express = require('express')
const helmet = require('helmet')


module.exports = app => {
    app.use(helmet())
    app.use(cors())
    app.use(compression())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
}