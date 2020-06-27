/** @param { import('express').Express} app */

module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Você chamou a rota raiz!')
    })
}