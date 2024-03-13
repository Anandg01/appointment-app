const doctors = require('../models/doctors');
const Doctors=require('../models/doctors');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


exports.getDoctorsBySpecialtyId=async (req, res)=>{
   specialityId=req.params.id;
   try{
    const doctorBySp=await doctors.findAll({where:{
        specialityId:specialityId
    }})
    res.status(201).json(doctorBySp)
   }
   catch(err){
res.status(401).json({message:"something went wrong"})
   }
}

exports.postDoctor = async (req, res) => {
    const { name,email,password,specialityId } = req.body;
    const userId = req.user.id;

    const hash = await bcrypt.hash(password, 10)

    try {

        await Doctors.create({ name, email,password:hash,userId,specialityId })
        res.status(201).json({ 'message': "add doctor " })
    }
    catch (err) {
        res.status(301).json({ 'message': "something went wrong", err })
    }
}

// delet speciality by id;

exports.deletedDoctorById = async (req, res) => {
    const doctorId = req.params.id;
    try {
        const deletedDoctor = await Doctors.destroy({
            where: {
                id: doctorId
            }
        });
        if (deletedDoctor === 1) {
            res.status(202).json({ message: `Doctor with ID ${doctorId} has been deleted successfully.` })
        }
        else {
            res.status(401).json({ message: `not Doctor found with ID ${doctorId} .` })
        }
    }
    catch (err) {
        res.status(401).json({ message: 'Error deleting Doctor' })
    }
}


function generateToken(id){
    return jwt.sign({userId:id},"jhj87hghkkjjhhf")
}

exports.doctorLogin=async (req, res)=>{
    const {email, password}=req.body;
    try{
        const doctor=await Doctors.findAll({where:{email}});
        const hash=doctor[0].password;
        if(!doctor){
            return res.status(301).json({ message: 'Doctor not found' });
        }
        const isMatch=await bcrypt.compare(password,hash)
        const token=generateToken(doctor[0].id)
     if(!isMatch){
        return res.status(401).json({ message: 'Invalid password' });
     }
     res.status(200).json({ message: 'Login successful', token });
    
    }
    catch(err){
        res.status(404).json({ message: 'An error occurred while logging in' });
    }
    }