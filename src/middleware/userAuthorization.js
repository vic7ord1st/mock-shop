const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()

module.exports = async (req, res, next) => {
console.log(req.headers)
  if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
        const token = await jwt.verify(req.headers.authorization.split(' ')[1], process.env.PRIVATE_KEY)
        console.log(token)
        if(token){
            res.locals.isAdmin = token.isAdmin
         next();
        }
        else{
            res.status(401).send({
                status: 'error',
                message: 'invalid token'
            })
        }
  }
  else{
      res.status(403).send({
          status: 'error',
          message: 'Access denied'
      })
  }
}