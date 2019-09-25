
exports.seed = function(knex) {
      return knex('expenses').insert([
        {input_id: 1, user_id: 1, expense: 60},
        {input_id: 2, user_id: 1, expense: 50},
        {input_id: 3, user_id: 1, expense: 40}
      ]);
};
