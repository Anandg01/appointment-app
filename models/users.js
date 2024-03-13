const Sequelize =require('sequelize');
const sequelize=require('../util/database')

const user=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        alowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        alowNull:false
    },
    password:{
       type:Sequelize.STRING,
       alowNull:false 
    }
})


module.exports=user;