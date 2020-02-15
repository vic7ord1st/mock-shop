const express = require('express')
const userController = require('../controller/userController')
const authorization = require('../middleware/userAuthorization')
const userAuthentication = require('../middleware/userAuthentication')
const router = express.Router({ mergeParams: true });


/** USER POST ROUTES */
router.post('/', userController.signIn);
router.post('/signUp', userController.signUp)

/** USER GET ROUTES */
router.get('/addToCart/:userId/:productId', authorization, userAuthentication, userController.addToCart);
router.get('/listCart/:userId', authorization, userAuthentication, userController.listCart);
router.get('/listProduct', authorization, userAuthentication, userController.listProduct);
router.get('/delete/:userId/:productId', authorization, userAuthentication, userController.deleteFromCart);
module.exports = router
