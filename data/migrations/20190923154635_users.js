exports.up = function(knex) {
  return knex.schema
    .createTable("users", users => {
      users.increments().primary();
      users
        .string("username", 255)
        .notNullable()
        .unique();
      users.string("password", 255).notNullable();
      users.boolean("admin").defaultTo(false);
    })
    .createTable("calc", tbl => {
      tbl.increments().primary();
      tbl.string("calc")
      tbl
        .integer("user_id")
        .unique()
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("calc").dropTableIfExists("users");
};
