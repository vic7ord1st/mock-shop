const models = require('../database/models')
const { User, Cart, Product } = models;

class Users {
    static signUp(req, res) {
        console.log(req.body)
        const { firstName, lastName, email, password } = req.body
        const isAdmin = false;
        return User.create({ firstName, lastName, email, password, isAdmin })
            .then(async (userData) => {
                const auth = await userData.generateAuthToken(userData.email, userData.isAdmin)
                console.log(auth);
                res.status(201).send({
                    status: 'success',
                    message: 'User successfully created',
                    auth: auth,
                    data: userData
                })
            }).catch((err) => {
                return res.status(400).send({
                    status: 'error',
                    message: err.message
                })
            })
    }
    static signIn(req, res) {
        if (req.body) {
            const { username, password } = req.body;
            return User.findOne({ where: { email: username } }).then(async function (user) {
                console.log(user)
                if (!user) {
                    res.status(400).send({
                        status: 'error',
                        message: 'cant find user'
                    })
                } else if (!await user.validPassword(password, user.password)) {
                    res.status(400).send({
                        status: 'error',
                        message: 'Password doesnt match'
                    })
                } else {
                    const auth = await user.generateAuthToken(user.email, user.isAdmin)
                    console.log(auth);
                    res.status(200).send({
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
        res.status(400).send({
            status: 'error',
            message: 'enter a valid email or password'
        })
    }
    static addToCart(req, res) {
        const { userId, productId } = req.params
        return Cart.create({ userId, productId })
            .then((cartData) => {
                res.status(200).send({
                    status: 'success',
                    cartData
                })
            }).catch((err) => {
                res.status(400).send(
                    {
                        status: 'error',
                        message: err.message
                    }
                )
            })
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

    static listCart(req, res) {
        return Cart.findAll({
            where: {
                userId: req.params.userId
            }
        }).then((cartItems) => {
            res.status(200).send({
                status: 'success',
                data: cartItems
            })
        }).catch((err) => {
            res.status(400).send({
                status: 'error',
                message: err.message
            })
        })
    }

    static deleteFromCart(req, res) {
        const { userId, productId } = req.params;
        return Cart.findOne({
            where: {
                userId: userId
            }
        }).then((cartItem) => {
            cartItem.destroy({
                where: {
                    productId: productId
                }
            })
        }).then(() => {
            return res.status(204).send({
                status: 'success',
                message: 'Product removed'
            })
        }).catch((err) => {
            return res.send({
                status: 'error',
                message: err.message
            })
        })
    }
}
module.exports = Users



