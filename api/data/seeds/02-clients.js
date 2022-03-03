exports.seed = function(knex) {
  return knex('clients').insert([
    {client_id: 1, username: 'Coco', password: '1234'},
    {client_id: 2, username: 'Jack', password: '1234'},
    {client_id: 3, username: 'Jona', password: '1234'}
  ]);
};
