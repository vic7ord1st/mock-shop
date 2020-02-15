const express = require('express')
const adminController = require('../controller/adminController')
const authorization = require('../middleware/userAuthorization')
const adminAuthentication = require('../middleware/adminAuthentication')
const router = express.Router({ mergeParams: true });


// Admin Post Routes
router.post('/signUp', adminController.signUp);
router.post('/', adminController.signIn);
router.post('/updateProduct', authorization, adminAuthentication, adminController.editProduct);
router.post('/addProduct', authorization, adminAuthentication, adminController.addProduct);

// Admin Get Routes
router.get('/listProduct', authorization, adminAuthentication, adminController.listProduct);
router.get('/listUsers', authorization, adminAuthentication, adminController.listUsers);
router.get('/deleteProduct/:productId', authorization, adminAuthentication, adminController.deleteProduct);
module.exports = router

