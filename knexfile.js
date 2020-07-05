const db = {
    host: 'mysql669.umbler.com',
    port: 41890,
    database: 'virtual-store',
    user: 'adercijr',
    password: 'olokovei12'
}

module.exports = {

    client: 'mysql',
    connection: db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
}
