
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Shredded Cheese'},
        {ingredient_name: 'Pepperoni'},
        {ingredient_name: 'Pre-Made Pizza Dough'},
        {ingredient_name: 'Pineapple'},
        {ingredient_name: 'Canadian Bacon'},
        {ingredient_name: 'Hard Shells'},
        {ingredient_name: 'Soft Shells'},
        {ingredient_name: 'Ground Beef'},
        {ingredient_name: 'Lettuce'},
        {ingredient_name: 'Tomatoes'},
        {ingredient_name: 'Sour Cream'},
        {ingredient_name: 'Lasagna Noodles'},
        {ingredient_name: 'Spaghetti Noodles'},
        {ingredient_name: 'Fettuchini Noodles'},
        {ingredient_name: 'Tomato Sauce'},
        {ingredient_name: 'Alfredo Sauce'},
      ]);
    });
};
