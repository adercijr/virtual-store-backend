module.exports = app => {

    const { existsOrError, notExistsOrError } = app.config.validation    

    const save = async (req, res) => {
        const categ = {...req.body}
        if(req.params.id) categ.id = req.params.id

        try {
            existsOrError(categ.name, 'Categoria não informada')

        } catch(msg){
            return res.status(400).send(msg)
        }

        if(categ.id){            
            app.db('categories')
                .update(categ)
                .where({ id: categ.id })
                .then(_ => res.status(204).send())
                .catch(err => res.send(500).send(err))
        } else {
            app.db('categories')
                .insert(categ)
                .then(_ => res.status(204).send())
                .catch(err => res.send(500).send(err))
        }

    }

    const withPath = categories => {

        const getParent = (categories, parentId) => {
            const parent = categories.filter(parent => parent.id === parentId)
            return parent.length ? parent[0] : null
        }

        const categoriesWithPath = categories.map(category => {
            let path = category.name
            let parent = getParent(categories, category.parentId)

            while(parent){
                path = `${parent.name} > ${path}`
                parent = getParent(categories, parent.parentId)
            }
            return {...category, path}
        })

        categoriesWithPath.sort((a, b) => {
            if(a.path < b.path) return -1
            if(a.path > b.path) return 1
            return 0
        })
        return categoriesWithPath
    }

    const get = (req, res) => {
        app.db('categories')
            .select('name')
            .then(cat => res.json(cat))
            .catch(err => res.status(500).send(err))
    }
    const getWithPath = (req, res) => {
        app.db('categories')
            .select('name')
            .then(cat => res.json(withPath(cat)))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('categories')
            .where({ id: req.params.id })
            .first()
            .then(category => res.json(category))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Código da Categoria não informado.')

            const subcategory = await app.db('categories')
                .where({ parentId: req.params.id })
            notExistsOrError(subcategory, 'Categoria possui subcategorias.')

            const articles = await app.db('products')
                .where({ categoryId: req.params.id })
            notExistsOrError(articles, 'Categoria possui artigos.')

            const rowsDeleted = await app.db('categories')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Categoria não foi encontrada.')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    

    return { get, getById, save, remove, getWithPath }
}