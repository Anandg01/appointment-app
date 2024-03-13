const express=require('express');
const doctorControler=require('../controler/doctors')
const userAuth=require('../midelware/authorization')
const docterAuth=require('../midelware/doctorAuth')
const router=express.Router();

// user can add and delete to doctor

router.post('/doctor',userAuth.authenticate,doctorControler.postDoctor);
router.delete('/doctor/:id',userAuth.authenticate,doctorControler.deletedDoctorById);
router.get('/doctorsBySpecialityId/:id',doctorControler.getDoctorsBySpecialtyId)
router.post('/doctorLogin',doctorControler.doctorLogin)
router.get('/docAuth',docterAuth.authorization)
module.exports=router;

