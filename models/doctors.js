const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const doctors=sequelize.define('doctors',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

module.exports=doctors