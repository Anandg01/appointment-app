const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./util/database')

// model use

const Users = require('./models/users');
const Doctor = require('./models/doctors');
const Specialities = require('./models/specialities')
const Appointments = require('./models/appointments')


const usersRout = require('./router/users')
const specialitiesRout = require('./router/specialities')
const doctorRout = require('./router/doctor')
const appointmentRout=require('./router/appointment')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', usersRout)
app.use(specialitiesRout)
app.use(doctorRout)
app.use(appointmentRout)

app.use('/', (req, res) => {
    res.send('not found')
})
Users.hasMany(Specialities)
Specialities.belongsTo(Users)

Users.hasMany(Doctor)
Doctor.belongsTo(Users)

Specialities.hasMany(Doctor)
Doctor.belongsTo(Specialities)

Doctor.hasMany(Appointments)
Appointments.belongsTo(Doctor)

sequelize
    .sync()
    //.sync({force:true})
    .then((res) => {
        app.listen(2000, () => console.log("server running...."))
    })
    .catch(er => console.log("error in connect mysql", er))
