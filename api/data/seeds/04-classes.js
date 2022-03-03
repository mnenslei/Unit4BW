
exports.seed = function(knex) {
  return knex('classes').insert([
    {class_id: 1, type: 'Pilates'},
    {class_id: 2, type: 'Yoga'},
    {class_id: 3, type: 'Cardio'}
  ])
};
