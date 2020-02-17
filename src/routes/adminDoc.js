/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: User and product management
 */

/** POST ROUTES */
/**
 * @swagger
 * path:
 *  /admin/:
 *    post:
 *      summary: Sign in as Admin
 *      tags: [Admin]
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
 *                  description: Admin password,
 *                  type: string
 *               }
 *              }
 *             }
 *      responses:
 *        "200":
 *          description: Admin details
 *          content:
 *            application/json:
 *              schema: {
 *               type: object,
 *                properties: {
 *                 status: {
 *                  description: response status can be success or error,
 *                  type: string
 *                },
 *                 auth: {
 *                  description: Bearer Authentication code,
 *                  type: string
 *                },
 *                  data: {
 *                   description: data returns data according to the users schema,
 *                   type: object,
 *                   $ref: '#/components/schemas/User',
 *                  }
 *                 }
 *              }
 */

/**
* @swagger
* path:
*  /admin/updateProduct:
*    post:
*      summary: update product information
*      tags: [Admin]
*      requestBody:
*        required: true
*        content:
*          application/json:
*            schema: {
*              type: object,
*               properties: {
*                id: {
*                 description: unique product ID,
*                 type: integer
*               },
*                 name: {
*                  description: new name of product,
*                  type: string
*               },
*                 description: {
*                  description: new product description,
*                  type: string
*               },
*                 category: {
*                  description: new product category,
*                  type: string
*               },
*                 price: {
*                  description: new product price,
*                  type: number,
*                  format: double
*               },
*                 imageUrl: {
*                  description: new product image url,
*                  type: string
*               },
*                 inStock: {
*                  description: new product stock status,
*                  type: boolean
*               }
*              }
*             }
*      responses:
*        "200":
*          description: Updated product details
*          content:
*            application/json:
*              schema: {
*               type: object,
*                properties: {
*                 status: {
*                  description: response status can be success or error,
*                  type: string
*                },
*                  data: {
*                   description: data returns data according to the product schema,
*                   type: object,
*                   $ref: '#/components/schemas/Product',
*                  }
*                 }
*              }
*/

/**
* @swagger
* path:
*  /admin/addProduct:
*    post:
*      summary: add new product
*      tags: [Admin]
*      requestBody:
*        required: true
*        content:
*          application/json:
*            schema: {
*              type: object,
*               properties: {
*                 name: {
*                  description: product name,
*                  type: string
*               },
*                 description: {
*                  description: product description,
*                  type: string
*               },
*                 category: {
*                  description: product category,
*                  type: string
*               },
*                 price: {
*                  description: product price,
*                  type: number,
*                  format: double
*               },
*                 imageUrl: {
*                  description: product image url,
*                  type: string
*               },
*                 inStock: {
*                  description: product stock status,
*                  type: boolean
*               }
*              }
*             }
*      responses:
*        "201":
*          description: adding new product
*          content:
*            application/json:
*              schema: {
*               type: object,
*                properties: {
*                 status: {
*                  description: response status can be success or error,
*                  type: string
*                },
*                  data: {
*                   description: data returns data according to the product schema,
*                   type: object,
*                   $ref: '#/components/schemas/Product',
*                  }
*                 }
*              }
*/

/** GET ROUTES */

/**
* @swagger
* path:
*  /admin/listProduct:
*    get:
*      summary: List all product
*      tags: [Admin]
*      responses:
*        "200":
*          description:  listing of all products
*          content:
*            application/json:
*              schema: {
*               type: object,
*                properties: {
*                 status: {
*                  description: response status can be success or error,
*                  type: string
*                },
*                  data: {
*                   description: data returns data according to the product schema,
*                   type: array,
*                   items: {
*                    type: objecct,
*                    $ref: '#/components/schemas/Product'
*                   }
*                  }
*                 }
*                }
*              
*/

/**
* @swagger
* path:
*  /admin/listUsers:
*    get:
*      summary: List all users
*      tags: [Admin]
*      responses:
*        "200":
*          description:  listing of all users
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
*                    type: objecct,
*                    $ref: '#/components/schemas/User'
*                   }
*                  }
*                 }
*                }
*              
*/

/**
* @swagger
* path:
*  /admin/deleteProduct/{productId}:
*    get:
*      summary: Delete product with Id
*      tags: [Admin]
*      parameters: [{
*        name: productId,
*        in: path,
*        description: unique product id,
*        required: true,
*        schema: {
*         type: string
*        }
*        }]
*      responses:
*        "200":
*          description: product deleted
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
*                   description: successful deletion message,
*                   type: string
*                  }
*                 }
*                }
*              
*/

