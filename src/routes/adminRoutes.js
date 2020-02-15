const express = require('express')
const adminController = require('../controller/adminController')
const authorization = require('../middleware/userAuthorization')
const router = express.Router({ mergeParams: true });


// Admin Post Routes
router.post('/signUp', adminController.signUp);
router.post('/', adminController.signIn);
router.post('/updateProduct', authorization, adminController.editProduct);
router.post('/addProduct', authorization, adminController.addProduct);

// Admin Get Routes
router.get('/listProduct', authorization, adminController.listProduct);
router.get('/listUsers', authorization, adminController.listUsers);
router.get('/deleteProduct/:productId', authorization, adminController.deleteProduct);
module.exports = router

