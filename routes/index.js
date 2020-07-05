module.exports = app => {

    app.route('/users')      
        .get(app.api.user.get)
        .post(app.api.user.save)   

    app.route('/categories')
        .get(app.api.category.get)
        .post(app.api.category.save)     

    app.route('/categories/tree')
        .get(app.api.category.getTree)       

    app.route('/categories/:id')
        .get(app.api.category.getById)
        .delete(app.api.category.remove)
        .put(app.api.category.save)

    app.route('/navHeaderPrincipal')
        .get(app.api.Layout.navHeaderPrincipal.get)
        .post(app.api.Layout.navHeaderPrincipal.save)

    app.route('/navHeaderPrincipal/:id')
        .delete(app.api.Layout.navHeaderPrincipal.remove)
        .put(app.api.Layout.navHeaderPrincipal.save)
}