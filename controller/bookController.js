const { users } = require("../database/connection")

exports.addUser = async (req,res)=>{
    const datas = await users.create()
    res.json{
        msg : "User added successfully",
    }
}