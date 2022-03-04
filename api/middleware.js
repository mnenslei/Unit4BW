const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./secrets');
const helpers = require('./model')
const db = require('./data/db-config')

// Middleware

const checkUserPayload = (req, res, next) => {
    const {username, password} = req.body
    if (!username || !password) {
        res.status(400).json({ message: "username and password are required!" })
    } else if (username.trim().length < 3) {
        res.status(400).json({ message: "username must be longer than 3 characters!" })
    } else {
        req.username = username.trim()
        next()
    }
}

const checkUsernameUnique = async (req, res, next) => {
    try {
      const existing = await db('clients').where('username', req.body.username.trim()).first()
  
      if(existing) {
        res.status(400).json({ message: 'that name is taken' })
      } else {
        next()
      }
    } catch (err) {
      next(err)
    }
  }

const restricted = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, JWT_SECRET, (err) => {
			if (err) {
				next({ status: 401, message: 'Invalid token.' });
			} else {
				next();
			}
		})
	} else {
		next({ status: 401, message: 'Token required.' });
	}
};

// Exports
module.exports = {
    checkUserPayload,
    checkUsernameUnique,
	restricted
}