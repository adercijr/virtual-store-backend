require('dotenv').config()
const express = require('express')
const consign = require('consign')
const db = require('./database/index')

const app = express()
app.db = db

consign()
    .then('./config')
    .then('./api')
    .then('./routes')
    .into(app)

    
app.listen(process.env.APP_PORT || 3000, () => {
    console.log('Servidor rodando...')
})