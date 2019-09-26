
exports.seed = function(knex) {
      return knex('calc').insert([
        {user_id: 1, calc: 'calcValue'}
      ]);
};
