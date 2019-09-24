const db = require("../data/dbConfig.js");

module.exports = {
  findByUid
};

  function findByUid(id) {
    return db('expenses')
        .where({ user_id: id })
        .join('inputs', 'expenses.input_id', 'inputs.id')
        .join('categories', 'inputs.category_id', 'categories.id')
        .select('categories.category_name', 'inputs.input_name', 'expenses.expense')
        .then(res => {
            const formattedRes = {
                "debt": {},
                "health": {},
                "food": {},
                "security": {},
                "transportation": {}
            }
            res.forEach(obj => {
                formattedRes[obj.category_name][obj.input_name] = obj.expense;
            })
            return formattedRes 
        })
}