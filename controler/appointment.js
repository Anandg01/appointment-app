const appointments = require('../models/appointments');
const Appointments = require('../models/appointments');

exports.postAppointment = async (req, res) => {
    const { patientName, age, email, date, doctorId } = req.body;
    try {
        await Appointments.create({ patientName, age, email, date, doctorId })
        res.status(201).json({ "message": "appointment Created" })
    }
    catch (err) {
        res.json({ message: 'erro', err })
    }
}

exports.getAppointmentByDate = async (req, res) => {
    const doctorId = req.doctor.id;
    const  date  = req.params;

    try {
        const appointments = await Appointments.findAll({
            where: {
                date: date,
                doctorId: doctorId
            }
        })
    }

    catch (err) {
        res.status(401).json({ message: "something went wrong" })
    }
}


//delete appointment by id

exports.deleteAppointmentById = async (req, res) => {
    const appintmentId = req.params.id;
    try {
        const deletedAppintment = await Appointments.destroy({
            where: {
                id: appintmentId
            }
        });
        if (deletedAppintment === 1) {
            res.status(202).json({ message: `appointment with ID ${appintmentId} has been deleted successfully.` })
        }
        else {
            res.status(401).json({ message: `not appointment found with ID ${appintmentId} .` })
        }
    }
    catch (err) {
        res.status(401).json({ message: 'Error deleting Speciality' })
    }
}