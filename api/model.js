const db = require('./data/db-config')

function getClients() {
    return db('clients')
    .select('client_id', 'username');
}

function getInstructors() {
    return db('instructors')
    .select('instructor_id', 'username');
}

function getClasses() {
    return db('classes')
}

function getClassInfo() {
    return db('class_info')
}

module.exports = {
    getClients,
    getInstructors,
    getClasses,
    getClassInfo
}