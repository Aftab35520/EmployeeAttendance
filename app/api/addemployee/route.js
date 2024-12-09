import EmployeeModel from "@/app/dbs/Employee";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(req,res) {
    try{
    await mongoose.connect("mongodb+srv://aftab:aftab35520@cluster0.zja2qb6.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    let body=await req.json()
    const Empolyee=new EmployeeModel
    Empolyee.FullName=body.FullName
    Empolyee.FatherName=body.FatherName
    Empolyee.Address=body.Address
    Empolyee.MobileNo=body.MobileNo
    Empolyee.Email=body.Email
    Empolyee.Attandance=[]
    await Empolyee.save()
    return NextResponse.json(Empolyee)
    }
    catch(err){
        return NextResponse.json([])
    }
}

export async function GET(req,res) {
    try{
        await mongoose.connect("mongodb+srv://aftab:aftab35520@cluster0.zja2qb6.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0")
        const Employees=await EmployeeModel.find({})
        return NextResponse.json(Employees)
    }
    catch(err){
        return NextResponse.json([]) 
    }

}