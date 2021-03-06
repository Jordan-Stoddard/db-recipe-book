
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 2, ingredient_id: 2, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 3, ingredient_id: 3, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 1, ingredient_id: 1, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 2, ingredient_id: 2, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 3, ingredient_id: 3, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 1, ingredient_id: 1, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 2, ingredient_id: 2, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 3, ingredient_id: 3, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 1, ingredient_id: 1, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 2, ingredient_id: 2, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 3, ingredient_id: 3, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 1, ingredient_id: 1, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 2, ingredient_id: 2, quantity: 10.5, unit: 'lbs'},
        {recipe_id: 3, ingredient_id: 3, quantity: 10.5, unit: 'lbs'},
      ]);
    });
};
