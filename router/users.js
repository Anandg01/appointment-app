const express=require('express')
const usersControler=require('../controler/users')

const router=express.Router();

router.post('/createUser',usersControler.createUser)
router.post('/login',usersControler.login)
module.exports=router;