const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()

module.exports = async (req, res, next) => {
    console.log(res.locals.isAdmin)
    if (res.locals.isAdmin === false || res.locals.isAdmin === true) {
        next();
    }
    else {
        res.status(401).send({
            status: 'error',
            message: 'You are not authorized'
        })
    }
}