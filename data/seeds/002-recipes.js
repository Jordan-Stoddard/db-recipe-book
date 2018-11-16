
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id: 1, name: 'Pepperoni'},
        {dish_id: 1, name: 'Hawaiian'},
        {dish_id: 2, name: 'Crunchy'},
        {dish_id: 2, name: `Soft`},
        {dish_id: 2, name: 'Supreme'},
        {dish_id: 3, name: 'Lasagna'},
        {dish_id: 3, name: 'Spaghetti'},
        {dish_id: 3, name: 'Fettuchini'},
      ]);
    });
};