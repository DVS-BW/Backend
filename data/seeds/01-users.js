
exports.seed = function(knex) {
      return knex('users').insert([
        {username: 'lambda', password: '$2a$08$f/rXYdEXSCHlQri3KIiOXufdLUbOv/CLpJKgFuBdipjaPyS01V5Jy'}
      ]);
};
