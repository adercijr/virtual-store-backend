module.exports = app => {

    const multer = require('multer')

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



    const CarouselImg1 = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/carousel')
        },
        filename: function (req, file, cb) {
            cb(null, 'carousel1' + '.' + 'jpg')
        }
    })
    const CarouselImg2 = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/carousel')
        },
        filename: function (req, file, cb) {
            cb(null, 'carousel2' + '.' + 'jpg')
        }
    })
    const CarouselImg3 = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/carousel')
        },
        filename: function (req, file, cb) {
            cb(null, 'carousel3' + '.' + 'jpg')
        }
    })
    const CarouselImg4 = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/carousel')
        },
        filename: function (req, file, cb) {
            cb(null, 'carousel4' + '.' + 'jpg')
        }
    })
    const CarouselImg5 = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/carousel')
        },
        filename: function (req, file, cb) {
            cb(null, 'carousel5' + '.' + 'jpg')
        }
    })
    const CarouselImg6 = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/carousel')
        },
        filename: function (req, file, cb) {
            cb(null, 'carousel6' + '.' + 'jpg')
        }
    })

    // const carousel1 = multer({ storage: CarouselImg1 }).single('file1')
    // const carousel2 = multer({ storage: CarouselImg2 }).single('file2')
    // const carousel3 = multer({ storage: CarouselImg3 }).single('file3')
    // const carousel4 = multer({ storage: CarouselImg4 }).single('file4')
    // const carousel5 = multer({ storage: CarouselImg5 }).single('file5')
    // const carousel6 = multer({ storage: CarouselImg6 }).single('file6')

    const carousel = [
        {id: '1', 
        file: multer({ storage: CarouselImg1 }).single('file1')
         },
        {id: '2', 
        file: multer({ storage: CarouselImg2 }).single('file2')
         },
        {id: '3', 
        file: multer({ storage: CarouselImg3 }).single('file3')
         },
        {id: '4', 
        file: multer({ storage: CarouselImg4 }).single('file4')
         },
        {id: '5', 
        file: multer({ storage: CarouselImg5 }).single('file5')
         },
        {id: '6', 
        file: multer({ storage: CarouselImg6 }).single('file6')
         },
    ]


    carousel.map(item => {     
        return (
            app.post('/uploadCarousel'+item.id, function (req, res) {

                item.file(req, res, function (err) {
                    if (err instanceof multer.MulterError) {
                        return res.status(500).json(err)
                    } else if (err) {
                        return res.status(500).json(err)
                    }
                    return res.status(200).send(req.file)

                })
            })
        )
    })


    // app.post('/uploadCarousel', function (req, res) {

    //     carousel1(req, res, function (err) {
    //         if (err instanceof multer.MulterError) {
    //             return res.status(500).json(err)
    //         } else if (err) {
    //             return res.status(500).json(err)
    //         }
    //         return res.status(200).send(req.file)

    //     })
    // })
    // app.post('/uploadCarousel', function (req, res) {

    //     carousel2(req, res, function (err) {
    //         if (err instanceof multer.MulterError) {
    //             return res.status(500).json(err)
    //         } else if (err) {
    //             return res.status(500).json(err)
    //         }
    //         return res.status(200).send(req.file)

    //     })
    // })
    // app.post('/uploadCarousel', function (req, res) {

    //     carousel3(req, res, function (err) {
    //         if (err instanceof multer.MulterError) {
    //             return res.status(500).json(err)
    //         } else if (err) {
    //             return res.status(500).json(err)
    //         }
    //         return res.status(200).send(req.file)

    //     })
    // })
    // app.post('/uploadCarousel', function (req, res) {

    //     carousel4(req, res, function (err) {
    //         if (err instanceof multer.MulterError) {
    //             return res.status(500).json(err)
    //         } else if (err) {
    //             return res.status(500).json(err)
    //         }
    //         return res.status(200).send(req.file)

    //     })
    // })
    // app.post('/uploadCarousel', function (req, res) {

    //     carousel5(req, res, function (err) {
    //         if (err instanceof multer.MulterError) {
    //             return res.status(500).json(err)
    //         } else if (err) {
    //             return res.status(500).json(err)
    //         }
    //         return res.status(200).send(req.file)

    //     })
    // })
    // app.post('/uploadCarousel', function (req, res) {

    //     carousel6(req, res, function (err) {
    //         if (err instanceof multer.MulterError) {
    //             return res.status(500).json(err)
    //         } else if (err) {
    //             return res.status(500).json(err)
    //         }
    //         return res.status(200).send(req.file)

    //     })
    // })
}