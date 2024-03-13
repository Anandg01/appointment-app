const appointmentControler=require("../controler/appointment")
const doctorAuth=require('../midelware/doctorAuth')
const express=require('express');


const router=express.Router();

router.post('/appointment',appointmentControler.postAppointment)
router.get('/appointment/:date',doctorAuth.authorization,appointmentControler.getAppointmentByDate)
router.delete('/appointment/:id',appointmentControler.deleteAppointmentById)

module.exports=router