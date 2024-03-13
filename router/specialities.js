const express=require('express')
const specialitiesController=require('../controler/specialties');
const userAuth=require('../midelware/authorization')

const router=express.Router();

router.post('/addSpecialty',userAuth.authenticate,specialitiesController.addSpecialty)
router.delete('/specialty/:id',userAuth.authenticate,specialitiesController.deleteSpecilityById)
router.get('/specialties',userAuth.authenticate,specialitiesController.getSpecialty)

module.exports=router;