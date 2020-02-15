'use strict';
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'please enter your first name'
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'please enter your last name'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter a password'
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 4) {
            throw new Error('Password should be at least 4 characters');
          }
        },
      },
    },
    isAdmin: DataTypes.BOOLEAN
  }, {
    hooks: {
      beforeCreate: async (user) => {
        const salt = 10;
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  });

  User.prototype.validPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
  }

  User.prototype.generateAuthToken = async (email, isAdmin) => {
    const token = await jwt.sign({ id: email, isAdmin: isAdmin}, process.env.PRIVATE_KEY, {
      expiresIn: 86400
    });
    return token;
  }

  User.associate = function (models) {
    User.hasOne(models.Cart, {
      foreignKey: 'userId',
      as: 'cart',
      onDelete: 'CASCADE',
    });
  };
  return User;
};
/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - firstName
 *          - lastName
 *          - email
 *          - password
 *        properties:
 *          id:
 *            type: integer
 *          firstName:
 *            type: string
 *          lastName:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 *            format: password
 *            description: password with minimum length of 4
 *          isAdmin: 
 *             type: boolean
 *             description: Saves user status based on signup route
 *          createdAt:
 *              type: string
 *              format: date-time
 *              description: account creation date
 *          updatedAt: 
 *               type: string
 *               format: date-time
 *               description: last account updated date
 */