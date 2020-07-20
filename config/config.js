const cors = require('cors')
const compression = require('compression')
const express = require('express')
const helmet = require('helmet')
const multer = require('multer')


module.exports = app => {
    app.use(helmet())
    app.use(cors())
    app.use(compression())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use('/public', express.static('public'));


    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/logo')
        },
        filename: function (req, file, cb) {
            cb(null, 'logo' + '.' + 'png')
        }
    })
    const storage2 = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/logo')
        },
        filename: function (req, file, cb) {
            cb(null, 'logo-mini' + '.' + 'png')
        }
    })
    const upload = multer({ storage: storage }).single('file')
    const upload2 = multer({ storage: storage2 }).single('file2')

    app.post('/upload', function (req, res) {

        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            return res.status(200).send(req.file)

        })
    })

    app.post('/upload2', function (req, res) {

        upload2(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
            console.log(storage.filename)
            return res.status(200).send(req.file)

        })
    })



}