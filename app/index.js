require('dotenv').config()
const express = require('express')
const consign = require('consign')
const db = require('../database/index')

const app = express()
app.db = db

consign({
    cwd: 'app',
    verbose: process.env.APP_DEBUG === 'true' || false,
    locale: 'pt-br'
}).include('./middlewares/globals').then('../routes').into(app)


app.listen(process.env.APP_PORT , () => {
    console.log('Servidor rodando...')
})