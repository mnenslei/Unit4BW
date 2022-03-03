exports.up = async (knex) => {
  await knex.schema
    .createTable('clients', tbl => {
      tbl.increments('client_id')
      tbl.string('username', 128).notNullable()
      tbl.string('password', 128).notNullable()
      tbl.timestamps(false, true)
    })
    .createTable('instructors', tbl => {
      tbl.increments('instructor_id')
      tbl.string('username', 128).notNullable()
      tbl.string('password', 128).notNullable()
      tbl.timestamps(false, true)
    })
    .createTable('classes', tbl => {
      tbl.increments('class_id')
      tbl.string('type', 128).notNullable()
    })
    .createTable('class_info', tbl => {
      tbl.increments('info_id')
      tbl.string('start_time', 128)
      tbl.string('duration')
      tbl.string('intensity_level', 128)
      tbl.string('location', 128)
      tbl.integer('number_of_registered_attendees', 128)
      tbl.integer('max class size', 30)
      tbl.integer('class_id').unsigned().notNullable().references('class_id').inTable('classes')
    })
}

exports.down = async (knex) => {
  await knex.schema
  .dropTableIfExists('class_info')
  .dropTableIfExists('classes')
  .dropTableIfExists('instructors')
  .dropTableIfExists('clients')
}
