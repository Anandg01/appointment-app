const jwt = require('jsonwebtoken');
const Users = require('../models/users');

exports.authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorizan');
        const decodeToken = jwt.verify(token, 'jhj87hghkkjjhhf')

        const user = await Users.findByPk(decodeToken.userId)
        req.user = user;
        next()
    }
    catch (err) {
        console.log(err)
        return res.status(401).json({ success: false })
    }
}