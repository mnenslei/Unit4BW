const express = require('express')
const router = express.Router();
const helpers = require('./model')

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

module.exports = router;