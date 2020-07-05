module.exports = app => {

    const { existsOrError, notExistsOrError } = app.config.validation    

    const save = async (req,res) => {
        const navs = {...req.body}
        if(req.params.id) navs.id = req.params.id
        
        try {
            existsOrError(navs.name, 'Navegação não informada')

        } catch(msg){
            return res.status(400).send(msg)
        }   

        if(navs.id){            
            app.db('navHeaderAside')
                .update(navs)
                .where({ id: navs.id })
                .then(_ => res.status(204).send())
                .catch(err => res.send(500).send(err))
        } else {
            app.db('navHeaderAside')
                .insert(navs)
                .then(_ => res.status(204).send())
                .catch(err => res.send(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('navHeaderAside')
            .then(navs => res.json(navs))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Código da Navegação não informado.')        

            const rowsDeleted = await app.db('navHeaderAside')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Categoria não foi encontrada.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, remove }

}