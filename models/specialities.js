const Sequelize =require('sequelize');
const sequelize=require('../util/database');

const specialities=sequelize.define('specialities',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    speciality:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=specialities;