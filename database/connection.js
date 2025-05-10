const{Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize("process.env.CS")

sequelize.authenticate()
.then()=>{
    console.log("Connected to database")
}
.catch(err)=>{
    console.log("Error vayo"+ err)
}

db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.users = require("./models/user.models")(sequelize,DataTypes)

sequelize.sync({alter: true}).then()=>{
    console.log("Migrate vayo ....")
}
module.exports = db