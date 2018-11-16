exports.up = function(knex, Promise) {
    //Creates table named dishes
  return knex.schema.createTable('dishes', tbl => {

    tbl.increments() //id field, AI, PK
    tbl.string('name', 255).notNullable().unique() //name field, string, max255chars
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes') // Removes table if exists on migrate:rollback
};
