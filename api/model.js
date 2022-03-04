const db = require('./data/db-config')

function getClients() {
    return db('clients')
    .select('client_id', 'username');
}

function getBy(filter) {
	return db('clients').where(filter).first();
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

async function add(client) {
	const [newClient] = await db('clients').insert(client, ['client_id', 'username', 'password']);
	return newClient;
}

module.exports = {
    getClients,
    getBy,
    getInstructors,
    getClasses,
    getClassInfo,
    add
}