exports.up = function(knex) {
  return knex.schema
  .createTable("users", users => {
    users.increments();
    users
      .string("username", 255)
      .notNullable()
      .unique();
    users.string("password", 255).notNullable();
    users.boolean("admin").defaultTo(false);
  })
  .createTable("categories", tbl => {
    tbl.increments();
    tbl
      .string("category_name", 255)
      .notNullable()
      .unique();
  })
  .createTable("inputs", tbl => {
    tbl.increments();
    tbl
      .integer("category_id")
      .unsigned()
      .notNullable()
      .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl
      .string("input_name")
      .unsigned()
      .notNullable()
  })
  .createTable("expenses", tbl => {
    tbl.increments();
    tbl
      .integer("input_id")
      .unsigned()
      .notNullable()
      .references('id')
        .inTable('inputs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    tbl
      .numeric("expense")
      .unsigned()
      .notNullable()
    tbl.primary(['input_id', 'user_id'])
  }),

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists("expenses")
  .dropTableIfExists("categories")
  .dropTableIfExists("users");
};
