
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('description', 1000).notNull()
      table.string('imageUrl')
      table.binary('content').notNull()
      table.float('price').notNull()
      table.integer('userId').references('id').inTable('users').notNull().unsigned()
      table.integer('categoryId').references('id').inTable('categories').notNull().unsigned()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
