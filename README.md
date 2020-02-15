# Backend Developer Application Challenge

**Mock Shop** is a simple shopping server. You are required to develop the backend API. 
You can fork this git repository and get to work!


**Live Url**  https://obscure-inlet-03292.herokuapp.com

**Swagger Documentation URL** https://obscure-inlet-03292.herokuapp.com/api/v1/docs/

**NOTE** The APIs are best consumed with postman. A detailed representation schema, requests and responses for the APIs can be seen in the swagger documentation

**Login Credentials**

Admin: 
  username: okoroafor.v@example.com password: admin1234

User:
  username: Adesanya@example.com password: adesanya
## API Features

**User can Sign Up** 
  Users can sign up using the `/user/signUp` endpoint which takes the following parameters (check out the swagger documentation for response examples)

  ```javascript
{
  "firstName": STRING,
  "lastName": STRING,
  "email": STRING,
  "password": STRING,
}
```
 **User can Sign in.**
 Users can signin using the the default user route `/`. it takes the following parameters.

 ```javascript
 {
  "username": STRING, 
  "password": STRING,
}
```

 **Admin can add a Product**
Admins can add products using the `/admin/addProduct` route which takes product data according to the product schema

 **Admin can delete a Product**
 Admins can delete products using the `/admin/delete/:{productId}` route.

 **Admin can edit a Product**
  Admins can edit any part of an existing products using a post request to the `/admin/updateProduct` endpoint. the request body will contain data in the following format.
   ```javascript
{
  "id": INTEGER,
  "name": STRING,
  "description": STRING,
  "category": STRING,
  "price": DOUBLE,
  "imageUrl": STRING,
  "inStock": BOOLEAN
}
```

 **Users/Admin can see all products**
 users and admins can view product lists using the following endpoints `/admin/listProduct` for admin and `/user/listProduct` for users

 **Users can add product to a Cart**
users can product to cart using the endpoint `/user/addToCart/:{userId}/:{productId}` where `userId` is the Id unique to the user and `productId` is the id unique to that product. A user can add a product multiple times to their cart.

 **A user can see product in his/her cart**
 users can see the products in their cart using the endpoint `/user/listCart/:{userId}` which lists all the products in the users cart using the cart schema.

 **User can delete a product from his/her cart**
 users can delete any product from their cart using the endpoint `/users/delete/:{userId}/:{productId}`. 

## Tools
- Server side Framework: ***Nodejs/Express*** 
- Linting: ***ESLint***
- Style Guide: ***Airbnb***
- Testing: ***Mocha Chai***
- DB: ***Postgres***
- Documentation: ***Swagger***
- Hosting: ***Heroku***


- Endpoints are well documented with Swagger https://obscure-inlet-03292.herokuapp.com/api/v1/docs/ 
- The database contains sample products, users and carts. 
- Authentication is done using `Bearer Token` and `JWT`.
- The live server url is https://obscure-inlet-03292.herokuapp.com. 
-  API versioning was used. https://obscure-inlet-03292.herokuapp.com/api/v1/user
- Appropriate HTTP status codes were used. ✔
- Swagger Documentation. 
- implemented `Sequelize` ORM for postgres. 
