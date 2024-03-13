const Specialities = require('../models/specialities');
const redisClient = require('../util/redisClient')


exports.getSpecialty = async (req, res) => {
    const userId = req.user.id;
    try {
       await redisClient.get('specialties', (error, specialties) => {
            if (error) throw new Error(error);
            if (specialties != null) {
                return res.status(201).json(JSON.parse(specialties))
            }
        })
        const data = await Specialities.findAll({
            where: {
                userId: userId
            }
        })
        redisClient.setEx('specialties', 3600, JSON.stringify({ data }))
        res.json(data)
    }
    catch (err) {
        console.log(err)
    }
}

exports.addSpecialty = async (req, res) => {
    const { speciality } = req.body;
    const userId = req.user.id;
    try {
        await Specialities.create({ speciality, userId })
        res.status(201).json({ 'message': "add Speciality of doctor" })
    }
    catch (err) {
        res.status(301).json({ 'message': "something went wrong", err })
    }
}

// delet speciality by id;

exports.deleteSpecilityById = async (req, res) => {
    const specialityId = req.params.id;
    try {
        const deletedSpecility = await Specialities.destroy({
            where: {
                id: specialityId
            }
        });
        if (deletedSpecility === 1) {
            res.status(202).json({ message: `Speciality with ID ${specialityId} has been deleted successfully.` })
        }
        else {
            res.status(401).json({ message: `not Speciality found with ID ${specialityId} .` })
        }
    }
    catch (err) {
        res.status(401).json({ message: 'Error deleting Speciality' })
    }
}
