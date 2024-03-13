const users = require('../models/users');
const bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
exports.getUsers = (req, res) => {
    users.findAll()
        .then(data => {
            res.json(data)
        })

}

exports.createUser = async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body;
    try {
        const hash = await bcrypt.hash(password, 10)
        await users.create({ name, email, password: hash })
        res.status(201).json({ message: 'Successfully created new user' });

    }
    catch (err) {
        res.status(403).json({ message: 'An error occurred while creating the user' });
    }
}

//generate token

function generateToken(id){
    return jwt.sign({userId:id},"jhj87hghkkjjhhf")
}

exports.login=async (req, res)=>{
const {email, password}=req.body;
try{
    const user=await users.findAll({where:{email}});
    const hash=user[0].password;
    if(!user){
        return res.status(301).json({ message: 'User not found' });
    }
    const isMatch=await bcrypt.compare(password,hash)
    const token=generateToken(user[0].id)
 if(!isMatch){
    return res.status(401).json({ message: 'Invalid password' });
 }
 res.status(200).json({ message: 'Login successful', token });

}
catch(err){
    res.status(404).json({ message: 'An error occurred while logging in' });
}
}