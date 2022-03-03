
exports.seed = function(knex) {
  return knex('class_info').insert([
    {info_id: 1, 
      start_time: '12:30 PM', 
      duration: '1 hour',
      intensity_level: 'Hard',
      location: 'Room 1',
      class_id: 1
    },

    {info_id: 2, 
      start_time: '8:00 AM', 
      duration: '1 hour',
      intensity_level: 'Medium',
      location: 'Room 2',
      class_id: 2},

    {info_id: 3, 
      start_time: '5:00 PM', 
      duration: '1 hour',
      intensity_level: 'Easy',
      location: 'Room 3',
      class_id: 3},

    {info_id: 4, 
      start_time: '8:30 PM', 
      duration: '1 hour',
      intensity_level: 'Hard',
      location: 'Room 2',
      class_id: 1
    }   
  ]);
};
