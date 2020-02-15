const express = require('express');
const userRoutes = require('./userRoutes')
const adminRoutes = require('./adminRoutes')
const swaggerRoute = require('./swaggerRoutes')
const router = express.Router({ mergeParams: true })

router.use(express.Router());

router.use('/user', userRoutes);
router.use('/admin', adminRoutes);
router.use('/docs', swaggerRoute);

module.exports = router