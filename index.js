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

//const port = process.env.APP_PORT || 3001;  
const port = process.env.APP_PORT || 3000;  
app.listen(port, () => {
    console.log(`Servidor rodando na porta`, port)
})