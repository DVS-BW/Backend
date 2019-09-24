
exports.seed = function(knex) {
      return knex('categories').insert([
        {category_name: 'food'},
        {category_name: 'security'},
        {category_name: 'debt'},
        {category_name: 'health'},
        {category_name: 'transportation'}
      ]);
};
