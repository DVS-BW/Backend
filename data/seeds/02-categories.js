
exports.seed = function(knex) {
  return knex('categories').insert([

    {category_name: 'health', input_name: "monthly_health_expenses"},
    {category_name: 'health', input_name: "medication_costs"},
    {category_name: 'health', input_name: "health_insurance_costs"},
    

    {category_name: 'food', input_name: "monthly_costs"},
    {category_name: 'food', input_name: "stock_up"},
    {category_name: 'food',  input_name: "dineout"},

    {category_name: 'security', input_name: "monthly_security"},
    {category_name: 'security', input_name: "phone_change"},
    {category_name: 'security', input_name: "locks_change"},
    {category_name: 'security', input_name: "extra_security"},

    {category_name: 'transportation',  input_name: "monthly_trans"},
    {category_name: 'transportation',  input_name: "utilities"},
    {category_name: 'transportation',  input_name: "rent"},
    {category_name: 'transportation',  input_name: "moving"}
  ]);
};
