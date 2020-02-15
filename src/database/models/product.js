'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name:{
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'product name cannot be empty'
      }
    },
    description: DataTypes.STRING,
    category: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Product has to belong to a category'
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: {
        args: false,
        msg: 'please enter a price'
      }
    },
    imageUrl: DataTypes.STRING,
    inStock: {
      type: DataTypes.BOOLEAN,
      allowNull: {
        args: false,
        msg: 'set stock parameters'
      }
    },
    productId: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {

    // associations can be defined here
  };
  return Product;
};
/**
 * @swagger
 *  components:
 *    schemas:
 *      Product:
 *        type: object
 *        required:
 *          - name
 *          - categoroy
 *          - price
 *          - imageUrl
 *          - inStock
 *        properties:
 *          id:
 *            type: integer
 *          name:
 *            type: string
 *          description:
 *            type: string
 *            description: product description.
 *          category:
 *            type: string
 *            description: product category
 *          price: 
 *             type: number
 *             format: double
 *             description: product price
 *          imageUrl: 
 *             type: string,
 *             description: product image url
 *          createdAt:
 *              type: string
 *              format: date-time
 *              description: account creation date
 *          updatedAt: 
 *               type: string
 *               format: date-time
 *               description: last account updated date
 */