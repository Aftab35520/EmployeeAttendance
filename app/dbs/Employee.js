const mongoose=require('mongoose')

const EmployeeSchema=new mongoose.Schema({
    FullName:String,
    FatherName:String,
    Address:String,
    MobileNo:Number,
    Email:String,
    Attandance:Array
})

const EmployeeModel= mongoose.models.Employees || mongoose.model("Employees",EmployeeSchema)

module.exports=EmployeeModel