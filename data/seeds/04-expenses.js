
exports.seed = function(knex) {
      return knex('expenses').insert([
        {}
      ]);
};
