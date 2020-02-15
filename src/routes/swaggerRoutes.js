const express = require('express')
const router = express.Router({ mergeParams: true });
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

// Swagger set up
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Documentation for the Mock-Shop",
            version: "1.0.0",
            description:
                "A demo ecommerce store",
            license: {
                name: "MIT",
                url: "https://choosealicense.com/licenses/mit/"
            },
            contact: {
                name: "Swagger",
                url: "https://swagger.io",
                email: "okoroafor.victor@gmail.com"
            }
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }],
        servers: [
            {
                url: "https://git.heroku.com/obscure-inlet-03292.git/api/v1"
            }
        ]
    },
    apis: [
        path.join(__dirname, "../database/models/user.js"),
        path.join(__dirname, "../database/models/product.js"),
        path.join(__dirname, "../database/models/cart.js"),
        path.join(__dirname, "adminDoc.js"),
        path.join(__dirname, "customerDoc.js")
    ]
};
const specs = swaggerJsdoc(options);
router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(specs, {
    explorer: true
})
);

module.exports = router