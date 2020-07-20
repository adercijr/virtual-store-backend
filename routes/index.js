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

    app.route('/navHeaderAside')
        .get(app.api.Layout.navHeaderSide.get)
        .post(app.api.Layout.navHeaderSide.save)

    app.route('/navHeaderAside/:id')
        .delete(app.api.Layout.navHeaderSide.remove)
        .put(app.api.Layout.navHeaderSide.save)

    app.route('/navHeaderSecondary')
        .get(app.api.Layout.navHeaderSecondary.get)
        .post(app.api.Layout.navHeaderSecondary.save)

    app.route('/navHeaderSecondary/:id')
        .delete(app.api.Layout.navHeaderSecondary.remove)
        .put(app.api.Layout.navHeaderSecondary.save)

   
}