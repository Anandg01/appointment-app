const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctors');

exports.authorization = async (req, res, next) => {
    try {
        const token = req.header('dAuth');
        console.log(token)
        const decodeToken = jwt.verify(token, 'jhj87hghkkjjhhf')

        const doctor = await Doctor.findByPk(decodeToken.userId)
        req.doctor = doctor;
        res.json(doctor)
        next()
    }
    catch (err) {
        console.log(err)
        return res.status(401).json({ success: false })
    }
}