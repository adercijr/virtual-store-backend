
exports.up = function(knex) {
    return knex.schema.createTable('navHeaderAside', table => {
      table.increments('id').primary()
      table.string('span').notNull()
      table.string('link').notNull()
      table.string('icon')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('navHeaderAside')
  };
  