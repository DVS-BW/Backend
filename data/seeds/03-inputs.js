
exports.seed = function(knex) {
      return knex('inputs').insert([
        {category_id: 1, input_name: "monthly_food"},
        {category_id: 1, input_name: "stock_up"},
        {category_id: 1, input_name: "dine_out"},
        {category_id: 2, input_name: "monthly_security"},
        {category_id: 2, input_name: "phone"},
        {category_id: 2, input_name: "change_locks"},
        {category_id: 2, input_name: "extra_security"}
      ]);
};
