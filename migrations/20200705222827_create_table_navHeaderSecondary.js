
exports.up = function(knex) {
    return knex.schema.createTable('navHeaderSecondary', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('icon')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('navHeaderSecondary')
  };