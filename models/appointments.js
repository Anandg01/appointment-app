const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const appointments=sequelize.define('appointments',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    patientName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    age:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    date:{
        type:Sequelize.DATE,
        allowNull:false
    }
})

module.exports=appointments;