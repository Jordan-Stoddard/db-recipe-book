
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, description: 'lorem ipsum'},
        {recipe_id: 1, step_number: 2, description: 'lorem ipsum'},
        {recipe_id: 1, step_number: 3, description: 'lorem ipsum'},
        {recipe_id: 2, step_number: 1, description: 'lorem ipsum'},
        {recipe_id: 2, step_number: 2, description: 'lorem ipsum'},
        {recipe_id: 2, step_number: 3, description: 'lorem ipsum'},
        {recipe_id: 3, step_number: 1, description: 'lorem ipsum'},
        {recipe_id: 3, step_number: 2, description: 'lorem ipsum'},
        {recipe_id: 3, step_number: 3, description: 'lorem ipsum'},
        {recipe_id: 4, step_number: 1, description: 'lorem ipsum'},
        {recipe_id: 4, step_number: 2, description: 'lorem ipsum'},
        {recipe_id: 4, step_number: 3, description: 'lorem ipsum'},
        {recipe_id: 5, step_number: 1, description: 'lorem ipsum'},
        {recipe_id: 5, step_number: 2, description: 'lorem ipsum'},
        {recipe_id: 5, step_number: 3, description: 'lorem ipsum'},
        {recipe_id: 6, step_number: 1, description: 'lorem ipsum'},
        {recipe_id: 6, step_number: 2, description: 'lorem ipsum'},
        {recipe_id: 6, step_number: 3, description: 'lorem ipsum'},
        {recipe_id: 7, step_number: 1, description: 'lorem ipsum'},
        {recipe_id: 7, step_number: 2, description: 'lorem ipsum'},
        {recipe_id: 7, step_number: 3, description: 'lorem ipsum'},
        {recipe_id: 8, step_number: 1, description: 'lorem ipsum'},
        {recipe_id: 8, step_number: 2, description: 'lorem ipsum'},
        {recipe_id: 8, step_number: 3, description: 'lorem ipsum'},
      ]);
    });
};
