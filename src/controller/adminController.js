const models = require('../database/models');
const { Product } = models;
const { User } = models;

class Admin {
     static signUp (req, res){
        console.log(req.body)
            const { firstName, lastName, email, password } = req.body
            const isAdmin = true;
            return User.create({ firstName, lastName, email, password , isAdmin})
            .then((userData) => {
                res.status(201).send({
                status: 'success',
                data: userData
            })}).catch((err)=>{
                return res.status(400).send({
                    status: 'error',
                    message: err.message
                })
            })
        }
    static signIn (req, res){
        const {username, password} = req.body;
        User.findOne({ where: {email: username} }).then(async function (user) {
            console.log(user)
            if (!user) {
                res.status(400).send({
                    status: 'error',
                    message: 'cant find user'
                })
            }
            else if (!user.isAdmin){
                res.status(400).send({
                    status: 'error',
                    message: 'cant find user'
                })
            }
            else if (!await user.validPassword(password, user.password)) {
                res.status(400).send({
                    status: 'error',
                    message: 'Password doesnt match'
                })
            } else {
                const auth = await user.generateAuthToken(user.email)
                console.log(auth);
                res.status(201).send({
                    status: 'success',
                    auth: auth,
                    data: user
                })
            }
        }).catch((err) => {
            res.status(400).send({
                status: 'error',
                message: err.message
            })
        });
    }

    static listUsers(req, res) {
        User.findAll().then((userData) => {
            res.status('200').send({
                status: 'success',
                data: userData
            })
        })
    }
    static addProduct(req, res) {
        if (req.method === 'POST') {
            const { name, description, category, price, imageUrl, inStock } = req.body
            Product.create({ name, description, category, price, imageUrl, inStock }).then((productData) => {
                res.status(201).send({
                    status: 'success',
                    data: productData
                })
            }).catch((err) => {
                res.status(400).send({
                    status: 'error',
                    message: err.message
                })
            })
        }
        else {
            res.status(400).send({
                status: 'error',
                message: 'No product details found',
            })
        }
    }

    static listProduct(req, res) {
        Product.findAll().then((productData) => {
            res.status('200').send({
                status: 'success',
                data: productData
            })
        }).catch((err) => {
            res.status(400).send({
                status: 'error',
                message: err.message
            })
        })
    }

    static deleteProduct(req, res) {
        if (req.params.productId) {
            Product.findOne({ where: { id: req.params.productId } })
                .then((product) => {
                    if (product) {
                        return product.destroy().then(() => {
                            res.status(200).send({
                                status: 'success',
                                message: 'Product deleted'
                            })
                        })
                    }
                    else{
                        res.status(400).send({
                            status: 'error',
                            message: 'No product with that id'
                        })
                    }
                }).catch((err => {
                    return res.status(400).send({
                        status: 'error',
                        message: err.message
                    })
                }))
        }
        else {
            res.status(400).send({
                status: 'error',
                message: 'No product details found'
            })
        }
    }

    static editProduct(req, res) {
        if (req.method === 'POST') {
            const { id, name, description, category, price, imageUrl, inStock } = req.body
            return Product.findOne({where: {id: id}})
                .then((product) => {
                    if (!product) {
                        return res.send({
                            status: 'error',
                            message: 'No product details found'
                        })
                    }
                    else{
                        
                    }

                    product.update({
                        name: name || product.name,
                        description: description || product.description,
                        category: category || product.category,
                        price: price || product.price,
                        imageUrl: imageUrl || product.imageUrl,
                        inStock: inStock || product.inStock
                    }).then((updatedProduct) => {
                        return res.status(200).send({
                            status: 'success',
                            data: updatedProduct
                        })})
                }).catch((err) => {
                    return res.status(400).send({
                        status: 'error',
                        message: err.message
                    })
                })
            }
    }
}
module.exports = Admin