const express = require('express')
const userController = require('../controller/userController')
const authorization = require('../middleware/userAuthorization')
const router = express.Router({ mergeParams: true });


/** USER POST ROUTES */
router.post('/', userController.signIn);
router.post('/signUp', userController.signUp)

/** USER GET ROUTES */
router.get('/addToCart/:userId/:productId', authorization, userController.addToCart);
router.get('/listCart/:userId', authorization, userController.listCart);
router.get('/listProduct', authorization, userController.listProduct);
router.get('/delete/:userId/:productId', authorization, userController.deleteFromCart);
module.exports = router
