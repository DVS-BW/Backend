const db = require("../data/dbConfig.js");

module.exports = {
  get,
  find,
  initialize,
  update
}

function get() {
  return db('calc')
}

function find(user_id) {
  return db('calc')
  .where({ user_id })
  .first()
}

function initialize(user_id) {
  const initialUserState = { "user_id": user_id }
  return db('calc')
  .insert(initialUserState)
}

function update(user_id, update) {
  return db('calc')
  .where({ user_id })
  .update({ "calc": update })
}

 /*  
          o l d   m o d e l
==================================================================================================

module.exports = {
  findByUid,
  initialize,
  updateExpense
};


 
 function findByUid(uid) {
    return db('expenses')
        .where({ user_id: uid })
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

function initialize(uid) {
  const inputCount = 15;
  const set = [];
  for (i = 1; i <= inputCount; i++) {
    set.push({  
        "user_id" : uid, 
        "input_id": i, 
        "expense": 0 })
      }

  return db('expenses')  
    .insert(set)
    .then(res => findByUid(uid))
  } */