'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
        onDelete: 'CASCADE'
      }
    }
  }, {});
  Cart.associate = function(models) {
    Cart.hasMany(models.Product, {
      foreignKey: 'productId',
      as: 'products',
      onDelete: 'CASCADE'
    });
    Cart.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    })
  };
  return Cart;
};
/**
 * @swagger
 *  components:
 *    schemas:
 *      Cart:
 *        type: object
 *        required:
 *          - userId
 *          - productId
 *        properties:
 *          id:
 *            type: integer
 *          userId:
 *            type: integer
 *            description: Id unique to a particular user matching the user Id in the user table.
 *          productId:
 *            type: integer
 *            description: Id unique to a particular product.
 *          createdAt:
 *              type: string
 *              format: date-time
 *              description: account creation date
 *          updatedAt: 
 *               type: string
 *               format: date-time
 *               description: last account updated date
 */