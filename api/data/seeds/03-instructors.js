
exports.seed = function(knex) {
  return knex('instructors').insert([
    {instructor_id: 1, username: 'Jason', password: '1234'},
    {instructor_id: 2, username: 'Jamie', password: '1234'},
    {instructor_id: 3, username: 'Licha', password: '1234'}
  ])
};
