const  Sequelize  = require("sequelize");

const sequelize = new Sequelize("docDb","root","pk123",{
    dialect:'mysql',
    host:"localhost"
})

module.exports=sequelize;