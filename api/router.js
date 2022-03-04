const express = require('express')
const router = express.Router();
const helpers = require('./model')
const { restricted, checkUsernameUnique, checkUserPayload } = require('./middleware')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('./secrets')

router.get('/clients', (req, res, next) => {
    helpers.getClients()
    .then(clients => {
        res.status(200).json(clients);
    })
    .catch(next)
})

router.get('/instructors', (req, res, next) => {
    helpers.getInstructors()
    .then(instructors => {
        res.status(200).json(instructors);
    })
    .catch(next)
})

router.get('/classes', (req, res, next) => {
    helpers.getClasses()
    .then(classes => {
        res.status(200).json(classes);
    })
    .catch(next)
})

router.get('/class-info', (req, res, next) => {
    helpers.getClassInfo()
    .then(info => {
        res.status(200).json(info);
    })
    .catch(next)
})

router.post('/', checkUserPayload, checkUsernameUnique, async (req, res, next) => {
    try {
      const newClient = await helpers.add(req.body)
      res.status(201).json(newClient)
    } catch(err) {
      next(err)
    }
  })

const generateToken = client => {
	const payload = {
		client_id: client.client_id,
		username: client.username,
		password: client.password
	};

	return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
};

module.exports = router;