/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer Endpoint
 */
/** USER POST ROUTES */

/**
 * @swagger
 * path:
 *  /user/:
 *    post:
 *      summary: sign in as user
 *      tags: [Customer]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema: {
 *              type: object,
 *               properties: {
 *                username: {
 *                 description: email address,
 *                 type: string
 *               },
 *                 password: {
 *                  description: password,
 *                  type: string
 *               }
 *              }
 *             }
 *      responses:
*        "200":
*          description:  Sign in Successful
*          content:
*            application/json:
*              schema: {
*               type: object,
*                properties: {
*                 status: {
*                  description: response status,
*                  type: string
*                },
*                  data: {
*                   description: data returns data according to the user schema,
*                   type: array,
*                   items: {
*                    type: object,
*                    $ref: '#/components/schemas/User'
*                   }
*                  }
*                 }
*                }
*/

/**
* @swagger
* path:
*  /user/signUp:
*    post:
*      summary: customer sign up
*      tags: [Customer]
*      requestBody:
*        required: true
*        content:
*          application/json:
*            schema: {
*              type: object,
*               properties: {
*                firstName: {
*                 description: customer first name,
*                 type: string
*               },
*                lastName: {
*                 description: customer last name,
*                 type: string
*               },
*                email: {
*                 description: customer first name,
*                 type: string
*               },
*                password: {
*                 description: password,
*                 type: string
*               }
*              }
*             }
*      responses:
*        "200":
*          description:  Successful sign up
*          content:
*            application/json:
*              schema: {
*               type: object,
*                properties: {
*                 status: {
*                  description: response status,
*                  type: string
*                },
*                  data: {
*                   description: data returns data according to the user schema,
*                   type: object,
*                   $ref: '#/components/schemas/User'
*                  }
*                 }
*                }
*/

/** USER GET ROUTES */

/**
* @swagger
* path:
*  /user/addToCart/{userId}/{productId}:
*    get:
*      summary: add product to cart
*      tags: [Customer]
*      parameters: [{
*        name: userId,
*        in: path,
*        description: unique user id,
*        required: true,
*        schema: {
*         type: integer
*         }
*        },
*        {
*        name: productId,
*        in: path,
*        description: unique product id,
*        required: true,
*        schema: {
*         type: integer
*         }
*        }
*       ]
*      responses:
*        "200":
*          description:  Product added to cart successfully
*          content:
*            application/json:
*              schema: {
*               type: object,
*                properties: {
*                 status: {
*                  description: response status,
*                  type: string
*                },
*                  data: {
*                   description: data returns data according to the Cart schema,
*                   type: object,
*                   $ref: '#/components/schemas/Cart'
*                  }
*                 }
*                }
*/

/**
* @swagger
* path:
*  /user/listCart/{productId}:
*    get:
*      summary: List product in customers cart
*      tags: [Customer]
*      parameters: [{
*        name: productId,
*        in: path,
*        description: unique product id,
*        required: true,
*        schema: {
*         type: integer
*        }
*        }]
*      responses:
*        "200":
*          description:  list of items in cart
*          content:
*            application/json:
*              schema: {
*               type: object,
*                properties: {
*                 status: {
*                  description: response status,
*                  type: string
*                },
*                  data: {
*                   description: data returns data according to the Cart schema,
*                   type: array,
*                   items: {
*                    type: object,
*                    $ref: '#/components/schemas/Cart'
*                   }
*                  }
*                 }
*                }
*/

/**
* @swagger
* path:
*  /user/listProduct:
*    get:
*      summary: List products in the store
*      tags: [Customer]
*      responses:
*        "200":
*          description: List of products
*          content:
*            application/json:
*              schema: {
*               type: object,
*                properties: {
*                 status: {
*                  description: response status,
*                  type: string
*                },
*                  data: {
*                   description: data returns data according to the Product schema,
*                   type: array,
*                   items: {
*                    type: object,
*                    $ref: '#/components/schemas/Product'
*                   }
*                  }
*                 }
*                }
*/

/**
* @swagger
* path:
*  /user/delete/{userId}/{productId}:
*    get:
*      summary: delete product from cart
*      tags: [Customer]
*      parameters: [{
*        name: userId,
*        in: path,
*        description: unique user id,
*        required: true,
*        schema: {
*         type: integer
*         }
*        },
*        {
*        name: productId,
*        in: path,
*        description: unique product id,
*        required: true,
*        schema: {
*         type: integer
*         }
*        }
*       ]
*      responses:
*        "200":
*          description: product deleted successfully
*          content:
*            application/json:
*              schema: {
*               type: object,
*                properties: {
*                 status: {
*                  description: response status,
*                  type: string
*                },
*                  message: {
*                   description: product removal message,
*                   type: string
*                  }
*                 }
*                }
*/
