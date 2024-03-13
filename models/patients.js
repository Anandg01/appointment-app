const Sequelize=require('sequelize');
const sequelize=require('../util/database')

const patients=sequelize.define('patients',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
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
    }
})

module.exports=patients;