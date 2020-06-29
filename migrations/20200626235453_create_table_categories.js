exports.up = async function(knex) {
  return knex.schema.createTable('categories', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.integer('parentId').references('id').inTable('categories').unsigned()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('categories')
};
