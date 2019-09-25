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
      tbl
        .integer("user_id")
        .unique()
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.integer("monthly_health_expenses").defaultTo(0);
      tbl.integer("medication_costs").defaultTo(0);
      tbl.integer("health_insurance_costs").defaultTo(0);
      tbl.integer("monthly_costs").defaultTo(0);
      tbl.integer("stock_up").defaultTo(0);
      tbl.integer("dineout").defaultTo(0);
      tbl.integer("monthly_security").defaultTo(0);
      tbl.integer("phone_change").defaultTo(0);
      tbl.integer("extra_security").defaultTo(0);
      tbl.integer("locks_change").defaultTo(0);
      tbl.integer("monthly_trans").defaultTo(0);
      tbl.integer("rent").defaultTo(0);
      tbl.integer("utilities").defaultTo(0);
      tbl.integer("moving").defaultTo(0);
    })
  .createTable("categories", tbl => {
      tbl.increments()
      tbl.string("input_name")
      tbl.string("category_name")
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("categories").dropTableIfExists("calc").dropTableIfExists("users");
};
